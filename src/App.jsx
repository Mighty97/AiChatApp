import { useState } from 'react';
import { ChatMessages } from './component/ChatMessages'
import { ChatInput } from './component/ChatInput'
import './App.css'

function App() {
   const [chatMessages, setChatMessages] = useState([{
    message: 'Hi robot',
    sender: 'user',
    id: crypto.randomUUID()
  }, {
    message: 'hello can i help you',
    sender: 'robot',
    id: crypto.randomUUID()
  },{
    message: 'Hi robot',
    sender: 'user',
    id: crypto.randomUUID()
  }, {
    message: 'hello can i help you',
    sender: 'robot',
    id: crypto.randomUUID()
  }]
);  
  return (
    <>
    <ChatMessages chatMessages={chatMessages} />
    <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </>
  )
}

export default App
