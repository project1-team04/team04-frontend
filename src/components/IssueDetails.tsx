import { useState } from 'react';
import { IssueResponse } from '@/types/issueTypes';
import Button from './Button';
import EditIssueForm from './EditIssueForm';
import { RiEdit2Line } from 'react-icons/ri';

interface IssueDetailsProps {
  issueData: IssueResponse | null | undefined;
  isLoading: boolean;
  isError: boolean;
}

const IssueDetails = ({ issueData, isLoading, isError }: IssueDetailsProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  if (isLoading) {
    return <p>이슈 정보를 불러오는 중...</p>;
  }

  if (isError || !issueData) {
    return <p>이슈 정보를 불러올 수 없습니다.</p>;
  }

  if (isEditMode) {
    return (
      <EditIssueForm
        issueData={issueData}
        onClose={() => setIsEditMode(false)}
      />
    );
  }

  return (
    <div className='p-4'>
      <header className='flex flex-col gap-y-4 border-b border-divider-default'>
        <div className='flex items-center justify-between'>
          <p className='flex items-center gap-4'>
            <p className='text-3xl font-semibold'>{issueData.name}</p>
            <p className='font-medium text-text-sub'>#{issueData.issueKey}</p>
          </p>
          <Button
            children={
              <>
                <RiEdit2Line /> 편집
              </>
            }
            variant='secondary'
            className='w-fit'
            size='sm'
            onClick={() => setIsEditMode(true)}
          />
        </div>

        <div className='flex justify-between pb-4'>
          {/* 관련 정보 */}
          <div className='flex items-center gap-4'>
            <p>작성자: {issueData.reporterUserId}</p>
            <p>담당자: {issueData.assigneeUserId ?? ''}</p>
            <p>라벨 ID: {issueData.labelId}</p>
            <p>Stutus: {issueData.status}</p>
          </div>
        </div>
      </header>

      {/* 에디터 */}
      <div className='flex flex-col py-4'>
        <div className='flex flex-col gap-8'>
          {/* 설명 */}
          <div className='flex flex-col gap-4'>
            <p className='text-2xl font-semibold'>Description</p>
            <p className='text-text-sub'>
              {issueData.description || '내용이 없습니다.'}
            </p>
          </div>

          {/* 트러블슈팅 */}
          <div className='flex flex-col gap-4'>
            <p className='text-2xl font-semibold'>Trouble Shooting</p>
            <p className='text-text-sub'>
              {issueData.troubleShooting || '내용이 없습니다.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
