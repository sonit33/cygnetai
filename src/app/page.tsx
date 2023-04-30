"use client";

import { useState } from "react";
import BotResponse from "./reusables/components/BotResponse";
import TextInput from "./reusables/components/TextInput";
import UserQuestion from "./reusables/components/UserQuestion";
import Conversation from "./reusables/components/Conversation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

/**
 * User experience same as the OpenAI page
 * The page needs a main section, a left-side panel for past sessions, Start a new session button on the panel
 * Previous sessions read-only
 * Start a new session to chat
 * When the session is active:
 * 1. Place a text box at the bottom of the page for accepting prompts.
 * 1.1 Enter to submit
 * 1.2 A submit button with a paper plane icon
 * 2. Chat history section on top
 * 2.1 Question asked and the streaming response rolls up the page in a section
 * 2.2 Prompt and response in a separate visual hierarchy
 * 2.3 Thumbs up or down at the top-right of the response section
 * 2.4 Aarya logo in response section
 * 2.5 User thumbnail in the question section
 * 3. A fixed navbar at the top
 * 3.1 End the session button
 * 3.2 Show session info e.g. generated a name and start time
 * @returns
 */

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

export default function Home() {
  const [lastInquiry, setlastInquiry] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const OnSubmit = async () => {
    setLoading(true);
    await Inquire();
    setInquiry("");
    setLoading(false);
  };

  const Inquire = async () => {
    setlastInquiry(inquiry);
    const inquiryBody: Array<Message> = [
      {
        id: Date.now(),
        content: botResponse,
        role: "assistant",
      },
      {
        id: Date.now() + 1,
        content: inquiry,
        role: "user",
      },
    ];
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiryBody),
    };
    const res = await fetch("/api/chat", params);
    if (res.ok) {
      const data = res.body;
      const chunks = [];
      if (data) {
        const reader = data.getReader();
        const decoder = new TextDecoder();
        let done = false;
        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          const chunkValue = decoder.decode(value);
          chunks.push(chunkValue);
          setBotResponse(chunks.join(""));
        }
      }
    }
  };
  return (
    <div className="flex flex-col min-h-screen justify-end relative">
      <div>
        <Conversation trigger={loading} />
        <UserQuestion contents={lastInquiry} />
        <BotResponse contents={botResponse} />
      </div>
      <div className="sticky w-full bottom-0 bg-orange-50 flex flex-col gap-2 justify-center p-4 border-t-2 border-orange-100">
        <FontAwesomeIcon icon={faPaperPlane} className="absolute right-7 top-7 text-gray-200" />
        <TextInput
          text={inquiry}
          placeholder="Send a message."
          messageType="info"
          message="Aarya can be inaccurate sometimes about people, places, or facts."
          onType={(e) => setInquiry(e.target.value)}
          onEnter={(e) => {
            if (e.key === "Enter" && inquiry.length > 1) {
              OnSubmit();
            }
          }}
        />
      </div>
    </div>
  );
}
