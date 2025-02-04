import AuthHeroIllu from '../assets/auth-hero-illustration.svg?react';
interface EmptyStateProps {
  message: string;
}

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 h-80 w-96'>
      <AuthHeroIllu className='h-60 w-60' />
      <div className='text-xl font-semibold'>{message}</div>
    </div>
  );
};

export default EmptyState;
