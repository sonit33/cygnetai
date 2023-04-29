import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Thumbnail from "./Thumbnail";
import FeedbackIcons from "./FeedbackIcons";

interface Props {
  className: string;
  contents: string;
  placeholder?: string;
}

export default function BotResponse({
  className,
  contents,
  placeholder = "Hello! I am Aarya. I will help you with your Math questions.",
}: Props) {
  return (
    <div className="flex flex-col bg-blue-50">
      <div className="flex items-start">
        <div className="p-2">
          <Thumbnail type={"bot"} />
        </div>
        <div className="p-2">
          <div className={`markdown ${className}`}>
            <ReactMarkdown
              children={contents.length > 0 ? contents : placeholder}
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
