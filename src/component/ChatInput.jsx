import { useState } from "react";
import { Chatbot } from 'supersimpledev'
// import { ChatMessages } from "./ChatMessages";

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
    <>
      <input type="text" onChange={chatInputText} value={inputText} placeholder="Send a message to Chatbot..." />
      <button onClick={sendMessage} >Send</button>
    </>
  )
}