import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

export default function FeedbackIcons() {
  return (
    <div className="flex flex-row-reverse gap-2 p-2">
      <div className="">
        {/* <ClipboardIcon className="h-4 w-4 text-slate-500 cursor-pointer" /> */}
        <FontAwesomeIcon icon={faClipboard} className="h-4 w-4 text-slate-500" />
      </div>
      <div className="">
        <FontAwesomeIcon icon={faThumbsUp} className="h-4 w-4 text-slate-500" />
        {/* <HandThumbUpIcon className="h-4 w-4 text-slate-500 cursor-pointer" /> */}
      </div>
      <div className="">
        {/* <HandThumbDownIcon className="h-4 w-4 text-slate-600 cursor-pointer" /> */}
        <FontAwesomeIcon icon={faThumbsDown} className="h-4 w-4 text-slate-500" />
      </div>
    </div>
  );
}
