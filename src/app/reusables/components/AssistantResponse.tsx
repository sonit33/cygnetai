import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

interface Props {
  contents: string;
  className?: string;
}
export default function AssistantResponse({ contents, className }: Props) {
  if (contents.trim().length > 0) {
    return (
      <div className={`markdown border shadow p-4 mt-2 text-xl ${className}`}>
        <ReactMarkdown children={contents} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}></ReactMarkdown>
      </div>
    );
  }
  return <></>;
}
