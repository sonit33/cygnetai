"use client";

import { useState } from "react";
import { ConversationType } from "./lib/core/types/ConversationType";
import ListConversation from "./components/ListConversation";
import Chatbox from "./components/Chatbox";

export default function Home() {
  const [chatHistory, setChatHistory] = useState<Array<ConversationType>>([]);

  return (
    <>
      <h3 className="md:text-lg xl:text-xl text-black">My name is Da Vinci. I am your math teacher. Ask me anything.</h3>
      <div className="items-baseline">
        <Chatbox
          afterSubmit={(userQuestion, botResponse) => {
            chatHistory.push({ timestamp: Date.now(), user: userQuestion, assistant: botResponse });
            setChatHistory([...chatHistory]);
          }}
        />
        <div className="markdown">
          <ListConversation chatHistory={chatHistory}></ListConversation>
        </div>
      </div>
    </>
  );
}
