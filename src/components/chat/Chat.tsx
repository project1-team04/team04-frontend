import ChatMessage from './ChatMessage';
import ChatMessageInput from './ChatMessageInput';
import ChatProfile from './ChatProfile';

const Chat = () => {
  return (
    <div className='flex h-full w-full flex-col bg-gray-50'>
      <div className='mx-5 flex h-[10%] items-center justify-between border-b-[0.5px] border-border-default'>
        <p className='font-semibold'>이슈명</p>
        <div className='flex'>
          <ChatProfile />
        </div>
      </div>
      <div className='mx-5 h-[80%] border-b-[0.5px] border-border-default p-5'>
        채팅룸
        <ChatMessage />
      </div>
      <div className='m-3 h-[10%]'>
        <ChatMessageInput />
      </div>
    </div>
  );
};

export default Chat;
