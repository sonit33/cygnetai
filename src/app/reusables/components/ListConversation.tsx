"use client";

import { ConversationType } from "../lib/core/types/ConversationType";
import React from "react";
import AssistantResponse from "./AssistantResponse";

interface Props {
  chatHistory: Array<ConversationType>;
  className: string;
}

export default function ListConversation({ chatHistory, className }: Props) {
  const list = chatHistory.map((h) => {
    return (
      <div key={h.timestamp}>
        <AssistantResponse contents={h.assistant}></AssistantResponse>
        <div className="font-bold">{h.user}</div>
      </div>
    );
  });
  return <div className={className}>{list}</div>;
}
