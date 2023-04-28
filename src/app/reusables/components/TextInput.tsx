import InputMessage from "./InputMessage";

interface Props {
  placeholder: string;
  text: string;
  onType: (e: any) => void;
  onEnter: (e: any) => void;
  messageType: "info" | "warning" | "error";
  message: string;
}
export default function TextInput({
  placeholder,
  onType,
  onEnter,
  text,
  messageType,
  message,
}: Props) {
  return (
    <>
      <input
        value={text}
        type="text"
        className="w-full rounded border border-blue-200 p-2"
        placeholder={placeholder}
        onChange={onType}
        onKeyDown={onEnter}
      />
      <InputMessage type={messageType} message={message} />
    </>
  );
}
