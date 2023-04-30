import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Thumbnail from "./Thumbnail";
import FeedbackIcons from "./FeedbackIcons";

interface Props {
  className?: string;
  contents: string;
}

export default function BotResponse({ className, contents }: Props) {
  return (
    <div className="flex flex-col bg-blue-50">
      <div className="flex items-start">
        <div className="p-2">
          <Thumbnail type={"bot"} />
        </div>
        <div className="p-2">
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
