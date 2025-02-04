import { forwardRef, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface ChatMessageInputProps {
  onSendMessage: (message: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  onFocus?: () => void;
}

const ChatMessageInput = forwardRef<HTMLInputElement, ChatMessageInputProps>(
  ({ onSendMessage, onFocus }, ref) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
      if (!message.trim()) return;
      onSendMessage(message);
      setMessage('');
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    };

    return (
      <div className='flex items-center justify-center h-full gap-3 p-5'>
        <Input
          ref={ref}
          placeholder='Write message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          onFocus={onFocus}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    );
  }
);

export default ChatMessageInput;
