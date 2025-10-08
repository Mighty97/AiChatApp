import { useState } from "react";
import { ChatMessages } from "./ChatMessages";

export function ChatInput({chatMessages, setChatMessages}) {
   const [inputText,  setInputText] = useState('');
  function chatInputText(event) {
    // console.log(event.target.value);
    setInputText(event.target.value);
  }
  function sendMessage(){
    console.log(inputText);
    setChatMessages([
      ...chatMessages, {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]);
  }
  
   
  return (
    <>
      <input type="text" onChange={chatInputText} placeholder="Send a message to Chatbot..." />
      <button onClick={sendMessage} >Send</button>
    </>
  )
}