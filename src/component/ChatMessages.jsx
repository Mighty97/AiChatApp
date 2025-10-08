
import { ChatMessage } from './ChatMessage'

export function ChatMessages({chatMessages}) {
  return (
    <div>
      {chatMessages.map((chatMessage) => {
        return (
        <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id} />
      )})
    }
   
    </div>
 
  );
};
