const ChatProfile = ({
  userName,
  imgUrl,
}: {
  userName: string;
  imgUrl: string | null;
}) => {
  return (
    <img
      src={
        imgUrl ||
        'https://www.zespri.com/content/dam/zespri/kr/kiwibrother/about_gold_figure.jpeg'
      }
      alt={`${userName}의 프로필`}
      title={userName}
      className='h-10 w-10 rounded-full border-[1px] border-border-default'
    />
  );
};

export default ChatProfile;
