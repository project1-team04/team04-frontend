import ChatMessage from './ChatMessage';
import ChatMessageInput from './ChatMessageInput';
import ChatProfile from './ChatProfile';
import { useState, useRef, useEffect } from 'react';

interface Chatting {
  id: number;
  nickname: string;
  profile: string;
  chatting: string;
  time: string;
  isMe: boolean;
}

const Chat = () => {
  const [chattings, setChattings] = useState<Chatting[]>([
    {
      id: 1,
      nickname: '양준석(팀장)',
      profile: '/images/profile1.png',
      chatting: `안녕하세요 프론트엔드 팀원 여러분, 우리 프론트엔드 팀에서는 새로운 UI 개선 사항과 현재 진행 중인 프로젝트의 진척도를 공유할 예정입니다. 각 팀원은 본인의 작업 부분에 대해 간단한 업데이트를 준비해 주세요.`,
      time: '17:06',
      isMe: false,
    },
    {
      id: 2,
      nickname: '아무개',
      profile: '/images/my-profile.png',
      chatting: `신규 개인정보 수정 탭의 사이드 메뉴 UI를 맡고 있는데, 현재까지 기본적인 UI 마크업 작업을 마쳤습니다. 곧 기능 연동 후 공유드릴게요!`,
      time: '17:08',
      isMe: true,
    },
  ]);

  // 채팅 자동 스크롤 다운
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chattings]);

  // 메시지 전송
  const handleSendMessage = (message: string) => {
    if (!message.trim()) return; // 빈 메시지는 전송 X

    const newChat: Chatting = {
      id: chattings.length + 1,
      nickname: '아무개',
      profile: '/images/my-profile.png',
      chatting: message,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      isMe: true,
    };

    setChattings((prev) => [...prev, newChat]);
  };

  return (
    <div className='flex h-full w-full flex-col bg-gray-50'>
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
