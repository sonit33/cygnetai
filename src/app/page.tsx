"use client";

import BotResponse from "./reusables/components/BotResponse";
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
  return (
    <div className="flex flex-col h-screen justify-between relative border border-blue-50 shadow">
      <div className="">
        <UserQuestion></UserQuestion>
        <BotResponse></BotResponse>
      </div>
      <div className="sticky w-full bottom-0 h-24 bg-blue-50 flex items-center px-4 ">
        <input type="text" className="w-full rounded border border-blue-200 p-2" />
      </div>
    </div>
  );
}
