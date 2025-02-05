import { useGetUser } from '@/hooks/useUser';
import ChatMessage from './ChatMessage';
import ChatMessageInput from './ChatMessageInput';
import ChatProfile from './ChatProfile';
import { useState, useRef, useEffect } from 'react';
import { getMember } from '@/apis/projectApi';

interface Chatting {
  id: number;
  nickname: string;
  chatting: string;
  time: string;
  isMe: boolean;
  isRead: boolean | '읽음';
}

interface ChatProps {
  projectId: number;
  issueDataName: string;
  issueDataId: number;
}

const Chat = ({ projectId, issueDataName, issueDataId }: ChatProps) => {
  const { data: user } = useGetUser();
  const [chattings, setChattings] = useState<Chatting[]>([]);
  const [hasReadMessages] = useState(false);

  // 유저 정보
  const [users, setUsers] = useState<
    { userId: number; userName: string; imgUrl: string | null }[]
  >([]);

  // 유저들 프로필 url 가져오기
  const fetchUsers = async (projectId: number) => {
    try {
      const res = await getMember(projectId);
      setUsers(
        res.map((user: any) => ({ userId: user.userId, imgUrl: user.imgUrl }))
      );

      console.log('채팅 - 모든 조회: ', res);
    } catch (error) {
      console.log('채팅 - 모든 조회 에러: ', error);
    }
  };

  // 채팅 자동 스크롤 다운
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    fetchUsers(projectId);
  }, [chattings]);

  // 웹소켓
  const socketRef = useRef<WebSocket | null>(null);

  // 이슈 ID
  const issueId = issueDataId;

  // 메시지 입력란 참조
  const messageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const socket = new WebSocket(`ws://34.22.102.28:8080/api/chat/${issueId}`);
    socketRef.current = socket;
    console.log(socket);

    socket.onopen = () => console.log('웹소켓 연결 성공');

    // 상대방으로부터 어떤 메시지가 왔는지 처리
    socket.onmessage = (e) => {
      const message = JSON.parse(e.data);

      setChattings((prev) => {
        // 기존 메시지에 동일한 ID의 메시지가 있으면 추가하지 않음 -> 자꾸 테스트 메시지가 추가되는 문제 때문에 추가
        if (prev.some((chat) => chat.id === message.id)) return prev;

        return [
          ...prev,
          {
            id: message.id,
            nickname: message.sender,
            chatting: message.content,
            time: new Date(message.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
            isMe: message.userId === user.userId,
            isRead: message.readBy && message.readBy.length > 0,
          },
        ];
      });
    };

    socket.onclose = (e) =>
      console.log(`웹소켓 연결 종료 (Code: ${e.code}, Reason: ${e.reason})`);

    socket.onerror = (error) => {
      console.error('웹소켓 오류:', error);

      if (error instanceof Event) {
        console.log("WebSocket 이벤트 발생(개발자 도구 '네트워크 → WS')");
      } else {
        console.log('오류 객체:', JSON.stringify(error, null, 2));
      }
    };

    return () => {
      socket.close();
    };
  }, [user.userId]);

  // 메시지 전송
  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // 웹소켓을 통해 서버로 메시지 전송
    if (socketRef.current) {
      socketRef.current.send(
        JSON.stringify({
          sender: user.username,
          content: message,
          issueId: issueId,
          userId: user.userId,
          readBy: [],
          readById: [],
        })
      );
    }
  };

  // 페이지 로드 시 메시지 불러오기(전체 메시지를 불러옴)
  useEffect(() => {
    fetch(`/api/messages/get/${issueId}`)
      .then((response) => response.json())
      .then((messages) => {
        setChattings((prev) => {
          const newMessages = messages.filter(
            (msg: any) => !prev.some((chat) => chat.id === msg.id)
          );

          return [
            ...prev,
            ...newMessages.map((message: any) => ({
              id: message.id,
              nickname: message.sender,
              chatting: message.content,
              time: new Date(message.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              }),
              isMe: message.userId === user.userId,
              isRead: message.readBy && message.readBy.length > 0,
            })),
          ];
        });
      })
      .catch((error) => console.error('메시지 불러오기 오류:', error));
  }, [issueId]);

  // 메시지 읽음 처리
  const markAsRead = async () => {
    // 토큰
    const token = localStorage.getItem('AccessToken');

    if (hasReadMessages) return; // 이미 읽음 처리된 메시지가 있으면 다시 처리하지 않음

    if (token) {
      // 1. 메시지에 대한 읽음 처리 먼저 진행
      await fetch(`/api/messages/read/${issueId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      // 2. 그 다음 읽음 메시지를 동기화
      await fetch(`/api/messages/get/${issueId}`)
        .then((response) => response.json())
        .then((messages) => {
          const userId = user.userId;
          const myChats = messages.filter(
            (message: any) => message.userId === userId
          );

          setChattings((prev) => {
            return prev.map((chat) => {
              const eachMyChat = myChats.find((msg: any) => msg.id === chat.id);

              if (eachMyChat && eachMyChat.readBy.length > 0) {
                return { ...chat, isRead: true };
              }

              return chat;
            });
          });
        })
        .catch((error) => console.error('메시지 불러오기 오류:', error));
    }
  };

  // input 포커스 이벤트 처리
  const handleFocus = () => {
    markAsRead();
  };

  return (
    <div className='flex h-full w-full flex-col bg-gray-50'>
      <div className='mx-5 flex h-[10%] items-center justify-between border-b-[0.5px] border-border-default'>
        <p className='font-semibold'>{issueDataName}</p>
        <div className='flex'>
          {users.map((user) => (
            <ChatProfile
              key={user.userId}
              userName={user.userName}
              imgUrl={user.imgUrl}
            />
          ))}
        </div>
      </div>
      <div
        className='mx-5 h-[80%] overflow-y-auto border-b-[0.5px] border-border-default'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {chattings.map(
          ({ id, nickname, chatting, time, isMe, isRead }, index) => (
            <ChatMessage
              key={`${id}-${time}-${index}`} //
              nickname={nickname}
              chatting={chatting}
              time={time}
              isMe={isMe}
              isRead={isRead ? '읽음' : ''}
            />
          )
        )}
        <div ref={chatEndRef}></div>
      </div>
      <div className='m-3 h-[10%]'>
        <ChatMessageInput
          onSendMessage={handleSendMessage}
          inputRef={messageInputRef}
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
};

export default Chat;
