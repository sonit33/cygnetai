import InputMessage from "./InputMessage";

interface Props {
  placeholder: string;
  text: string;
  onType: (e: any) => void;
  onEnter: (e: any) => void;
  messageType: "info" | "warning" | "error";
  message: string;
  disable: boolean;
}
export default function TextInput({
  placeholder,
  onType,
  onEnter,
  text,
  messageType,
  message,
  disable,
}: Props) {
  return (
    <>
      <input
        value={text}
        disabled={disable}
        type="text"
        className="w-full rounded border border-blue-200 p-2 disabled:border-gray-200 disabled:bg-gray-100"
        placeholder={placeholder}
        onChange={onType}
        onKeyDown={onEnter}
      />
      <InputMessage type={messageType} message={message} />
    </>
  );
}
