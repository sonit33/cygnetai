import { HandThumbUpIcon, HandThumbDownIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import Thumbnail from "./Thumbnail";

interface Props {
  className: string;
  contents: string;
}

export default function BotResponse({ className, contents }: Props) {
  return (
    <div className="flex flex-col bg-blue-50">
      <div className="flex items-center">
        <div className="p-2">
          <Thumbnail type={"bot"} />
        </div>
        <div className="p-2">
          <div className={`markdown ${className}`}>
            <ReactMarkdown children={contents} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}></ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-2 p-2">
        <div className="">
          <ClipboardIcon className="h-4 w-4 text-slate-500 cursor-pointer" />
        </div>
        <div className="">
          <HandThumbUpIcon className="h-4 w-4 text-slate-500 cursor-pointer" />
        </div>
        <div className="">
          <HandThumbDownIcon className="h-4 w-4 text-slate-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
