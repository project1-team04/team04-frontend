const ChatProfile = ({
  userName,
  imgUrl,
}: {
  userName: string;
  imgUrl: string | null;
}) => {
  return (
    <div
      className={`h-8 w-8 rounded-full border-[1px] border-border-default ${
        imgUrl ? '' : 'bg-gray-400'
      } relative -ml-2`}
      title={userName}
    >
      {imgUrl && (
        <img
          src={imgUrl}
          alt={`${userName}의 프로필`}
          className='h-full w-full rounded-full object-cover'
        />
      )}
    </div>
  );
};

export default ChatProfile;
