import Thumbnail from "./Thumbnail";

interface Props {
  contents: string;
}

export default function UserQuestion({ contents }: Props) {
  return (
    <div className="flex items-start mx-auto max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div className="p-2">
        <Thumbnail type="user" />
      </div>
      <div className="p-4">
        <p>{contents}</p>
      </div>
    </div>
  );
}
