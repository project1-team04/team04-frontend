import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';

interface AuthNavLinksProps {
  leftText: string;
  rightText: string;
  leftPath: string;
  rightPath: string;
}
const AuthNavLinks = ({
  leftText,
  rightText,
  leftPath,
  rightPath,
}: AuthNavLinksProps) => {
  return (
    <div className='flex h-4 items-center gap-4 text-xs text-text-disabled'>
      <Link to={leftPath} className='cursor-pointer hover:text-text-sub'>
        {leftText}
      </Link>
      <Separator orientation='vertical' />
      <Link to={rightPath} className='cursor-pointer hover:text-text-sub'>
        {rightText}
      </Link>
    </div>
  );
};

export default AuthNavLinks;
