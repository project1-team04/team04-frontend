import ChatMessage from './ChatMessage';
import ChatMessageInput from './ChatMessageInput';
import ChatProfile from './ChatProfile';
import { useState, useRef, useEffect } from 'react';

interface Chatting {
  id: number;
  nickname: string;
  chatting: string;
  time: string;
  isMe: boolean;
}

const Chat: React.FC<{ userId: number; username: string }> = ({
  userId,
  username,
}) => {
  const [chattings, setChattings] = useState<Chatting[]>([]);

  // 채팅 자동 스크롤 다운
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chattings]);

  // 웹소켓
  const socketRef = useRef<WebSocket | null>(null);

  // 이슈 ID
  const issueId = 1;

  useEffect(() => {
    const socket = new WebSocket(`ws://34.22.102.28:8080/api/chat/${issueId}`);
    socketRef.current = socket;
    console.log(socket);

    socket.onopen = () => console.log('웹소켓 연결 성공');

    socket.onmessage = (e) => {
      const message = JSON.parse(e.data);
      console.log('서버에서 받은 메시지:', message);
      console.log('여기:', message.userId, message.id);
      console.log(
        '서버에서 받은 메시지의 아이디:',
        message.userId,
        '현재 유저 ID:',
        userId
      );

      // timestamp
      console.log('서버에서 받은 메시지의 시간:', message.timestamp);

      setChattings((prev) => [
        ...prev,
        {
          id: message.id,
          nickname: message.sender,
          chatting: message.content,
          time: new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          isMe: message.userId === userId,
        },
      ]);
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
  }, [userId]);

  // 메시지 전송
  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // 웹소켓을 통해 서버로 메시지 전송
    if (socketRef.current) {
      socketRef.current.send(
        JSON.stringify({
          sender: username,
          content: message,
          issueId: issueId,
          userId: userId,
          readBy: [],
          readById: [],
        })
      );
    }
  };

  // 페이지 로드 시 메시지 불러오기
  useEffect(() => {
    fetch(`/api/messages/get/${issueId}`)
      .then((response) => response.json())
      .then((messages) => {
        setChattings(
          messages.map((message: any) => ({
            id: message.id,
            nickname: message.sender,
            chatting: message.content,
            time: new Date(message.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
            isMe: message.userId === userId,
          }))
        );
      })
      .catch((error) => console.error('메시지 불러오기 오류:', error));
  }, [issueId]);

  return (
    <div className='flex flex-col w-full h-full bg-gray-50'>
      <div className='mx-5 flex h-[10%] items-center justify-between border-b-[0.5px] border-border-default'>
        <p className='font-semibold'>이슈명</p>
        <div className='flex'>
          <ChatProfile />
        </div>
      </div>
      <div
        className='mx-5 h-[80%] overflow-y-auto border-b-[0.5px] border-border-default'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {chattings.map(({ id, nickname, chatting, time, isMe }) => (
          <ChatMessage
            key={id}
            nickname={nickname}
            chatting={chatting}
            time={time}
            isMe={isMe}
          />
        ))}
        <div ref={chatEndRef}></div>
      </div>
      <div className='m-3 h-[10%]'>
        <ChatMessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
