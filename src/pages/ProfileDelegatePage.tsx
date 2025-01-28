import Button from '@/components/Button';
import Header from '@/components/Header';
import DelegateCard from '@/components/DelegateCard';

// 목 데이터
const data = [
  { id: '1', title: 'Threadly', member: ['앵무새', '고양이', '강아지'] },
  { id: '2', title: 'Apple', member: ['권', '보', '령'] },
  { id: '3', title: 'Banana', member: ['ㅇ', 'ㄴ', 'ㅈ'] },
  // { id: '33', title: 'Banana', member: ['ㅇ', 'ㄴ', 'ㅈ'] },
  // { id: '31', title: 'Banana', member: ['ㅇ', 'ㄴ', 'ㅈ'] },
  // { id: '321', title: 'Banana', member: ['ㅇ', 'ㄴ', 'ㅈ'] },
];

const ProfileDelegatePage = () => {
  return (
    <div className='mx-auto flex w-1/2 flex-col'>
      <header className='my-9 flex items-center gap-5'>
        <Header children={'프로젝트 권한 위임'} />
      </header>

      <main className='mb-9 grow overflow-hidden'>
        <div className='flex h-full flex-col items-center rounded-2xl bg-bg-deep p-4'>
          {/* 스크롤 적용 영역 */}
          <div className='flex w-full flex-1 flex-col gap-4 overflow-y-auto'>
            {data.map((project) => (
              <DelegateCard
                key={project.id}
                title={project.title}
                member={project.member}
              />
            ))}
          </div>

          <div className='mt-4 flex w-2/3 gap-4'>
            <Button
              children={'취소'}
              variant='outline'
              className='border-default flex-1 border bg-bg'
            />
            <Button children={'위임 완료'} className='flex-1' />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileDelegatePage;
