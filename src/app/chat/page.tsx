"use client";

import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import BotResponse from "../_reusables/components/BotResponse";
import Conversation from "../_reusables/components/Conversation";
import TextInput from "../_reusables/components/TextInput";
import UserQuestion from "../_reusables/components/UserQuestion";
import { Message } from "../_reusables/lib/core/types/Message";

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
        <div className="bg-slate-100 border-b-2 border-t-2 border-slate-200">
          <UserQuestion contents={lastInquiry} />
        </div>
        <BotResponse contents={botResponse} loading={loading} />
      </div>
      <div className="sticky w-full bottom-0 bg-slate-200 justify-center p-4 border-t-2 border-slate-300 shadow">
        <div className="mx-auto max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col gap-2">
          <FontAwesomeIcon icon={faPaperPlane} className="absolute right-7 top-7 text-gray-200" />
          <TextInput
            text={inquiry}
            disable={loading}
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
    </div>
  );
}
