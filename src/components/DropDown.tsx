import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface DropDownProps {
  buttonText: React.ReactNode;
  items: string[];
  className?: string;
  // onItemClick?: (item: string) => void;
}

function DropDown({
  buttonText,
  items,
  className,
  // onItemClick,
}: DropDownProps) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={className}
            size='sm'
            variant='outline'
            children={buttonText}
          ></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-10 text-center'>
          <DropdownMenuGroup className='divide-y divide-divider-default'>
            {items.map((item) => (
              <DropdownMenuItem
                key={item}
                className='m-1 block cursor-pointer hover:bg-gray-hover'
                // onClick={() => onItemClick(item)}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDown;
