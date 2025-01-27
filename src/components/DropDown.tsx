import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface DropDownProps {
  buttonText?: React.ReactNode;
  items: { label: string; onClick: () => void }[];
  className?: string;
}

function DropDown({ buttonText, items, className }: DropDownProps) {
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
        <DropdownMenuContent className='min-w-fit'>
          <DropdownMenuGroup className='w-fit divide-y divide-divider-default'>
            {items.map(({ label, onClick }) => (
              <DropdownMenuItem
                key={label}
                className='flex cursor-pointer justify-center px-4 py-2'
                onClick={onClick}
              >
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDown;
