import Button from '@/components/Button';
import ProjectDelegation from '@/components/ProjectDelegation';

// 목 데이터터
const data = [
  { id: '1', title: 'Threadly', member: ['앵무새새', '고양이', '강아지'] },
  { id: '2', title: 'Apple', member: ['권', '보보', '령령'] },
  { id: '3', title: 'Banana', member: ['ㅇㅇ', 'ㄴㄴ', 'ㅈ'] },
];

const ProfileDelegatePage = () => {
  return (
    <>
      <div className='m-auto flex h-[90%] w-[75%] flex-col items-center rounded-2xl bg-gray p-8'>
        <div className='flex h-[400px] w-4/5 flex-col overflow-auto'>
          {data.map((project) => (
            <ProjectDelegation
              key={project.id}
              title={project.title}
              member={project.member}
            />
          ))}
        </div>

        <div className='mt-5 flex w-3/5 gap-5'>
          <Button
            children={'취소'}
            variant='secondary'
            className='border-default flex-1 border'
          />
          <Button children={'위임 완료'} className='flex-1' />
        </div>
      </div>
    </>
  );
};

export default ProfileDelegatePage;
