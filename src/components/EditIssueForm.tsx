import { IssueResponse } from '@/types/issueTypes';
import Button from './Button';
import { useForm } from 'react-hook-form';
import Input from './Input';
import { ErrorMessage } from '@hookform/error-message';

interface EditIssueFormProps {
  issueData: IssueResponse;
  onClose: () => void;
}

const EditIssueForm = ({ issueData, onClose }: EditIssueFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...issueData,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      className='flex flex-col gap-y-8 p-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Title */}
      <div>
        <div className='flex w-full flex-col gap-4'>
          <label htmlFor='issueName' className='text-xl font-semibold'>
            Title
          </label>
          <Input
            id='issueName'
            {...register('name', { required: '이슈 제목을 입력하세요.' })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name='name'
          render={({ message }) => (
            <small role='alert' className='text-text-error'>
              {message}
            </small>
          )}
        />
      </div>

      {/* Description editor */}
      <div className='flex flex-col gap-4'>
        <label htmlFor='description' className='text-xl font-semibold'>
          Description
        </label>
        {/* TODO) ReactQuill로 변경 */}
        <textarea
          id='description'
          {...register('description')}
          className='h-36 w-full resize-none border p-1'
        />
      </div>

      {/* Trouble Shooting editor */}
      <div className='flex flex-col gap-4'>
        <label htmlFor='troubleShooting' className='text-xl font-semibold'>
          Trouble Shooting
        </label>
        {/* TODO) ReactQuill로 변경 */}
        <textarea
          id='troubleShooting'
          {...register('troubleShooting')}
          className='h-36 w-full resize-none border p-1'
        />
      </div>

      {/* Buttons */}
      <div className='flex justify-end gap-2'>
        <Button
          children={'취소'}
          variant='outline'
          type='button'
          className='w-fit'
          onClick={onClose}
        />
        <Button children={'변경 내용 저장'} type='submit' className='w-fit' />
      </div>
    </form>
  );
};

export default EditIssueForm;
