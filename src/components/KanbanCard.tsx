import IssueCard from './IssueCard';

// props: status
const KanbanCard = () => {
  return (
    <>
      <div className='h-full w-[330px] rounded-t-2xl bg-bg-deep p-5'>
        {/* divide-y divide-gray-300 */}
        <div className='mb-3 flex h-[45px] gap-4 bg-orange'>
          <div>상태 원</div>
          <span>To do(status)</span>
          <span>이슈 개수(숫자)</span>
          {/* divider 역으로 border bottom? 넣기 */}
        </div>

        <section className='flex flex-col gap-5'>
          <IssueCard
            title={'Merge 이슈'}
            issueId={'12345'}
            manager={'권보령'}
          />
        </section>
      </div>
    </>
  );
};

export default KanbanCard;
