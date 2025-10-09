import { useState } from "react";
import { Chatbot } from 'supersimpledev'
import './Chatinput.css'

export function ChatInput({chatMessages, setChatMessages}) {
   const [inputText,  setInputText] = useState('');
  function chatInputText(event) {
    
    setInputText(event.target.value);
  }
  function sendMessage(){
    const newChatMessages = [
      ...chatMessages, {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];
  
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages, {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  } 
  return (
    <div className="chat-input-container" >
      <input type="text" onChange={chatInputText} className="chat-input-text" value={inputText} placeholder="Send a message to Chatbot..." />
      <button onClick={sendMessage}   className="chat-send-button" >Send</button>
    </div>
  )
}