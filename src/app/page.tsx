"use client";

import { useEffect, useState } from "react";
import BotResponse from "./reusables/components/BotResponse";
import TextInput from "./reusables/components/TextInput";
import UserQuestion from "./reusables/components/UserQuestion";

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

export default function Home() {
  const [inquiry, setInquiry] = useState("");
  const [oldInquiry, setOldInquiry] = useState("");
  const [stream, setStream] = useState("");
  const [history, setHistory] = useState<Map<string, string>>(new Map());

  const renderResponse = (history: Map<string, string>) => {
    const result: Array<any> = [];
    let index = 0;
    history.forEach((value, key) => {
      if (index < history.size - 1) {
        result.push(
          <div key={index++}>
            <UserQuestion contents={key}></UserQuestion>
            <BotResponse className="" contents={value}></BotResponse>
          </div>
        );
      }
    });
    return result;
  };

  const appendHistory = (inquiry: string, response: string) => {
    if (response.length > 0) {
      history.set(inquiry, response);
      setHistory(history);
    }
  };

  const OnSubmit = async () => {
    const text = inquiry;
    setInquiry("");
    await Inquire(text);
  };

  const Inquire = async (question: string) => {
    setOldInquiry(question);
    const res = await fetch("/api/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userQuestion: question,
        botResponse: stream,
      }),
    });
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
          setStream(chunks.join(""));
        }
        appendHistory(question, chunks.join(""));
      }
    }
  };
  return (
    <div className="flex flex-col h-screen justify-end relative bg-gray-50 shadow">
      <div className="">{renderResponse(history)}</div>
      <div className="">
        <UserQuestion contents={oldInquiry}></UserQuestion>
        <BotResponse className="" contents={stream}></BotResponse>
      </div>
      <div className="sticky w-full bottom-0 h-24 bg-orange-50 flex flex-col gap-2 justify-center px-4 border-t-2 border-orange-100">
        <TextInput
          text={inquiry}
          placeholder="Type your question then press enter to begin"
          messageType="info"
          message="Aarya can be inaccurate sometimes about people, places, or facts."
          onType={(e) => {
            const text = e.target.value;
            setInquiry(text);
          }}
          onEnter={(e) => {
            if (e.key === "Enter" && inquiry.length > 3) {
              OnSubmit();
            }
          }}
        />
      </div>
    </div>
  );
}
