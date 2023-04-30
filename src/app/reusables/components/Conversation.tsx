import { useEffect, useState } from "react";
import UserQuestion from "./UserQuestion";
import BotResponse from "./BotResponse";
import { Message } from "../lib/core/types/Message";

interface Props {
  trigger: boolean;
}

export default function Conversation({ trigger }: Props) {
  const [messages, setMessages] = useState<Array<Message>>([]);

  useEffect(() => {
    async function loadConversation() {
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await fetch("/api/chat", params);
      if (res.ok) {
        const data = await res.json();
        if (data) {
          data.pop();
          setMessages(data);
        }
      }
    }
    loadConversation();
  }, [trigger]);

  const list = messages.map((m) => {
    return (
      <div key={m.id}>
        {m.role == "user" && <UserQuestion contents={m.content} />}
        {m.role == "assistant" && <BotResponse contents={m.content} />}
      </div>
    );
  });

  return <>{list}</>;
}
