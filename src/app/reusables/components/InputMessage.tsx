interface Props {
  type: "info" | "warning" | "error";
  message: string;
}

export default function InputMessage({ type, message }: Props) {
  let textColor = "text-gray-500";
  if (type == "error") {
    textColor = "text-orange-500";
  } else if (type == "warning") {
    textColor = "text-yellow-500";
  } else {
    textColor = "text-gray-500";
  }
  return <p className={`text-xs ${textColor} px-1`}>{message}</p>;
}
