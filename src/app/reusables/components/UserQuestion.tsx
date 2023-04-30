import Thumbnail from "./Thumbnail";

interface Props {
  contents: string;
}

export default function UserQuestion({ contents }: Props) {
  return (
    <div className="flex items-start bg-blue-100">
      <div className="p-2">
        <Thumbnail type="user" />
      </div>
      <div className="p-2">
        <p>{contents}</p>
      </div>
    </div>
  );
}
