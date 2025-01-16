import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ProfileProps {
  name: string;
  src?: string;
  alt: string;
}

const ProfileComponent = ({ name, src, alt }: ProfileProps) => {
  return (
    <>
      <div className='flex items-center justify-center w-48 h-24 gap-3'>
        <p className='inline-flex'>{name}</p>
        {src ? (
          <img src={src} alt={alt} className='rounded-lg h-9 w-9' />
        ) : (
          <div className='rounded-lg h-9 w-9 bg-gray'></div>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='ml-[-10px] w-4 border-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0'>
              <IoIosArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-10 text-center'>
            <DropdownMenuGroup>
              <DropdownMenuItem className='block m-1 cursor-pointer hover:bg-gray-hover'>
                프로필
              </DropdownMenuItem>
              <div className='h-[1px] w-[95%] bg-divider-default'></div>
              <DropdownMenuItem className='block m-1 cursor-pointer hover:bg-gray-hover'>
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ProfileComponent;
