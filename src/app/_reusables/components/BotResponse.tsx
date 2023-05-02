import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Thumbnail from "./Thumbnail";
import FeedbackIcons from "./FeedbackIcons";
import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  contents: string;
  loading?: boolean;
}

export default function BotResponse({ className, contents, loading }: Props) {
  const scrollRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [loading]);

  return (
    <div ref={scrollRef} className="flex flex-col mx-auto max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div className="flex items-start">
        <div className="p-2">
          <Thumbnail type={"bot"} />
        </div>
        <div className="p-4">
          <div className={`markdown ${className}`}>
            <ReactMarkdown
              children={contents}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            ></ReactMarkdown>
          </div>
        </div>
      </div>
      <FeedbackIcons />
    </div>
  );
}
