import React from "react";
import { ChatMessage } from './ChatMessage'

export function ChatMessages() {
  const chatMessages = [{
    message: 'Hi robot',
    sender: 'user'
  }, {
    message: 'hello can i help you',
    sender: 'robot'
  }];

  return (
    <>
      {chatMessages.map((message, sender) => {
        <ChatMessage message={message} sender={sender} />
      })
    }
    </>
  );
};