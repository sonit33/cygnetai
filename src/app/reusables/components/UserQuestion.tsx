import Thumbnail from "./Thumbnail";

interface Props {
  contents: string;
  placeholder?: string;
}

export default function UserQuestion({
  contents,
  placeholder = "Start by typing a question below.",
}: Props) {
  return (
    <div className="flex items-start bg-blue-100">
      <div className="p-2">
        <Thumbnail type="user" />
      </div>
      <div className="p-2">
        <p>{contents.length > 0 ? contents : placeholder}</p>
      </div>
    </div>
  );
}
