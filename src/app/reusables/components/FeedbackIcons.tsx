import { HandThumbUpIcon, HandThumbDownIcon, ClipboardIcon } from "@heroicons/react/24/outline";
export default function FeedbackIcons() {
  return (
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
  );
}
