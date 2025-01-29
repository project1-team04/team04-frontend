import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface ChatMessageInputProps {
  onSendMessage: (message: string) => void;
}

const ChatMessageInput: React.FC<ChatMessageInputProps> = ({
  onSendMessage,
}) => {
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
    <div className='flex h-full items-center justify-center gap-3 p-5'>
      <Input
        placeholder='Write message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
};

export default ChatMessageInput;
