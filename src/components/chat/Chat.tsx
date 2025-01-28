import ChatMessageInput from './ChatMessageInput';

const Chat = () => {
  return (
    <div className='flex h-full w-full flex-col bg-gray-50'>
      <div className='mx-5 flex h-[10%] items-center justify-between border-b-[0.5px] border-border-default'>
        <p className='font-semibold'>이슈명</p>
        <div className='bg-black'>프로필(멤버들)</div>
      </div>
      <div className='mx-5 h-[80%] border-b-[0.5px] border-border-default p-5'>
        채팅룸
      </div>
      <div className='m-3 h-[10%]'>
        <ChatMessageInput />
      </div>
    </div>
  );
};

export default Chat;
