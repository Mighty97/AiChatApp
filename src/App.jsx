import { ChatInput } from './component/ChatInput'
import { ChatMessage,chatMessages } from './component/ChatMessage'
import './App.css'

function App() {
  return (
    <>
      {chatMessages.map((chatMessage) => {
    return (
      <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id} />
    )
  })}
      <ChatInput />
    </>
  )
}

export default App
