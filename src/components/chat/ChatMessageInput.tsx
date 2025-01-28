import { Button } from '../ui/button';
import { Input } from '../ui/input';

const ChatMessageInput = () => {
  return (
    <div className='flex h-full items-center justify-center gap-3 p-5'>
      <Input placeholder='Write message' />
      <Button>Send</Button>
    </div>
  );
};

export default ChatMessageInput;
