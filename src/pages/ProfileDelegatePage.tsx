import Button from '@/components/Button';
import Header from '@/components/Header';
import ProjectDelegation from '@/components/ProjectDelegation';

// 목 데이터
const data = [
  { id: '1', title: 'Threadly', member: ['앵무새', '고양이', '강아지'] },
  { id: '2', title: 'Apple', member: ['권', '보', '령'] },
  { id: '3', title: 'Banana', member: ['ㅇ', 'ㄴ', 'ㅈ'] },
];

const ProfileDelegatePage = () => {
  return (
    <div className='m-auto w-[50%]'>
      <div className='flex flex-col'>
        <div className='flex h-28 items-center gap-5 px-20'>
          <Header children={'프로젝트 권한 위임'} />
        </div>

        <div className='m-auto flex h-[90%] w-[70%] flex-col items-center rounded-2xl bg-gray p-5'>
          <div className='flex h-[400px] w-[90%] flex-col overflow-auto'>
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
      </div>
    </div>
  );
};

export default ProfileDelegatePage;
