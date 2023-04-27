import Thumbnail from "./Thumbnail";

export default function UserQuestion() {
  return (
    <div className="flex items-center bg-blue-100">
      <div className="p-2">
        <Thumbnail type="user" />
      </div>
      <div className="p-2">
        <p>List down 20 most commonly used algorithms in computer science</p>
      </div>
    </div>
  );
}
