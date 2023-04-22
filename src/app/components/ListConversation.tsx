"use client";

import { ConversationType } from "../lib/core/types/ConversationType";
import React from "react";
import AssistantResponse from "./AssistantResponse";

interface Props {
  chatHistory: Array<ConversationType>;
}

export default function ListConversation({ chatHistory }: Props) {
  const list = chatHistory.map((h) => {
    return (
      <div key={h.timestamp}>
        <AssistantResponse contents={h.assistant}></AssistantResponse>
        <div className="font-bold mt-2">{h.user}</div>
      </div>
    );
  });
  if (list.length > 0)
    return (
      <>
        <div className="border-t border-gray-200"></div>
        {list}
      </>
    );
  else return <></>;
}
