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
      <div className='flex h-24 w-48 items-center justify-center gap-3'>
        <p className='inline-flex'>{name}</p>
        {src ? (
          <img src={src} alt={alt} className='h-9 w-9 rounded-lg' />
        ) : (
          <div className='h-9 w-9 rounded-lg bg-gray'></div>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='ml-[-10px] w-4 border-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0'>
              <IoIosArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-10 text-center'>
            <DropdownMenuGroup>
              <DropdownMenuItem className='m-1 block cursor-pointer hover:bg-gray-hover'>
                프로필
              </DropdownMenuItem>
              <div className='h-[1px] w-[95%] bg-divider-default'></div>
              <DropdownMenuItem className='m-1 block cursor-pointer hover:bg-gray-hover'>
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
