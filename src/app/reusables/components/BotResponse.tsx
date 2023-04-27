import { HandThumbUpIcon, HandThumbDownIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import Thumbnail from "./Thumbnail";
export default function BotResponse() {
  return (
    <div className="flex flex-col bg-yellow-50 border-b border-yellow-100">
      <div className="flex items-center">
        <div className="p-2">
          <Thumbnail type={"bot"} />
        </div>
        <div className="w-full">
          <div className="p-2">Long answer from Open AI</div>
        </div>
      </div>
      <div className="flex flex-row-reverse p-2 gap-2">
        <div className="">
          <ClipboardIcon className="h-4 w-4 text-black cursor-pointer" />
        </div>
        <div className="">
          <HandThumbUpIcon className="h-4 w-4 text-black cursor-pointer" />
        </div>
        <div className="">
          <HandThumbDownIcon className="h-4 w-4 text-black cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
