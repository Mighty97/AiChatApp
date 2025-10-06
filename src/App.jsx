import { ChatInput } from './component/ChatInput'
import { ChatMessage } from './component/ChatMessage'
import './App.css'

function App() {
  const chatMessages = [{
    message: 'Hello chatBot',
    sender: 'user'
  }, {
    message: 'hello how can i help you?',
    sender: 'robot'
  }, {
    message: 'Hello chatBot',
    sender: 'user'
  }, {
    message: 'hello how can i help you?',
    sender: 'robot'
  }];

  const chatMessageComponent = chatMessages.map((chatMessage) => {
    return (
      <ChatMessage message={chatMessage.message} sender={chatMessage.sender}  />
    )
  });

  return (
    <>
      {chatMessageComponent}
      <ChatInput />
    </>
  )
}

export default App
