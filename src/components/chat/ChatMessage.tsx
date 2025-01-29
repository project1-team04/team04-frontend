const ChatMessage = () => {
  return (
    <>
      <div id='me' className='my-5 flex justify-end'>
        <div id='time' className='mr-3 flex flex-col justify-end'>
          <p className='text-xs text-black'>time</p>
        </div>
        <div className='mr-3'>
          <div id='nickname' className='flex justify-end'>
            <p className='text-xs text-black'>chatNick</p>
          </div>
          <div id='chatting' className='mt-2 rounded-md bg-blue-500 p-3'>
            <span className='text-xs text-white'>chatting</span>
          </div>
        </div>
      </div>
      <div id='you' className='my-5 flex'>
        <div className='ml-3'>
          <p id='nickname' className='text-xs text-black'>
            chatNick
          </p>
          <div id='chatting' className='mt-2 rounded-md bg-gray-200 p-3'>
            <span className='text-xs text-black'>chatting</span>
          </div>
        </div>
        <div id='time' className='ml-3 flex flex-col justify-end'>
          <p className='text-xs text-black'>time</p>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
