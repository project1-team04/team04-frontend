const Chat = () => {
  return (
    <div className='flex h-full w-full flex-col bg-gray-400'>
      <div className='flex h-[10%] items-center justify-between'>
        <p className='bg-red'>이슈명</p>
        <div className='bg-black'>프로필(멤버들)</div>
      </div>
      <div className='h-[77%] bg-orange'>채팅룸</div>
      <div className='h-[13%] bg-yellow-400'>채팅 입력칸</div>
    </div>
  );
};

export default Chat;
