import { ChatInput } from './component/ChatInput'
import { ChatMessage } from './component/ChatMessage'
import './App.css'

function App() {
  return (
    <>
      <ChatMessage message='Hello chatBot' sender='user' />
      <ChatMessage message='Hello how can i help you?' sender='robot'/>
      <ChatMessage message='Hello chatBot' sender='user'/>
      <ChatMessage message='Hello how can i help you?' sender='robot'/>
      <ChatInput />
    </>
  )
}

export default App
