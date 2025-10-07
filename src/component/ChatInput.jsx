import { chatMessages } from "./ChatMessage";

export function ChatInput() {
  function sendMessage() {
    console.log(chatMessages);
    chatMessages.push({
      message: 'testing push on add button',
      sender: 'user',
      id: crypto.randomUUID()
    });
    console.log(chatMessages);
  }
  return (
    <>
      <input type="text" placeholder="Send a message to Chatbot..." />
      <button onClick={sendMessage} >Send</button>
    </>
  )
}