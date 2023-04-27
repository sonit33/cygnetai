import Thumbnail from "./Thumbnail";

export default function UserQuestion() {
  return (
    <div className="flex bg-pink-50 items-center border-b border-pink-100">
      <div className="p-2">
        <Thumbnail />
      </div>
      <div className="p-2">
        <p>List down 20 most commonly used algorithms in computer science</p>
      </div>
    </div>
  );
}
