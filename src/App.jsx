import { useState } from 'react';
import { ChatMessages } from './component/ChatMessages'
import { ChatInput } from './component/ChatInput'
import './App.css'

function App() {
   const [chatMessages, setChatMessages] 
   = useState([{
    message: `Hi welcome. Currently, I only know how to flip a coin, roll a dice, or get today's date. Let me know how I can help!`,
    sender: 'robot',
    id: crypto.randomUUID()
  }]
);  

  return (
    <div className='chat-app-container'>
      <div className='chat-messages-container' >
        <ChatMessages chatMessages={chatMessages} />
      </div>
      <div className='chat-input-button-container' >
        <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
      </div>
    </div>
  )
}

export default App
