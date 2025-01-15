import ProfileComponent from './Profile';

interface NavigationWithProfileProps {
  name: string;
  src: string;
  alt: string;
}

const NavigationWithProfile = ({
  name,
  src,
  alt,
}: NavigationWithProfileProps) => {
  return (
    <>
      <div className=''>
        <div>
          <nav className='flex items-center justify-between w-full h-24'>
            <p className='ml-[10%] text-2xl font-bold text-text'>Threadly</p>

            <div className='mr-[5%]'>
              <ProfileComponent name={name} src={src} alt={alt} />
            </div>
          </nav>
          <div className='flex items-center justify-center'>
            <div className='h-[1px] w-[95%] bg-divider-default'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationWithProfile;
