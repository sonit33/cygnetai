interface Props {
  type: "user" | "bot";
}

export default function Thumbnail({ type }: Props) {
  if (type == "bot")
    return (
      <div className="w-14 h-14">
        <img className="rounded-full shadow border bg-green-50 border-green-100 w-full" src="/images/aarya-thumb.png" />
      </div>
    );
  else return <div className="rounded-full shadow border bg-slate-100 border-green-100 w-14 h-14"></div>;
}
