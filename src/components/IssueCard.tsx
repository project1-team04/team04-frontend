// props: 이슈 타이틀, 이슈 아이디, 담당자 명
const IssueCard = () => {
  return (
    <>
      <div className='h-[130px] w-full rounded-lg bg-bg p-7'>
        <span className='text-lg font-bold'>이슈 타이틀</span>
        <div className='flex justify-between mt-4 text-sm'>
          <span>이슈 아이디</span>
          <span>담당자 명</span>
        </div>
      </div>
    </>
  );
};

export default IssueCard;
