import Image from "next/image";

interface Props {
  type: "user" | "bot";
}

export default function Thumbnail({ type }: Props) {
  if (type == "bot")
    return <Image className="rounded-full shadow border bg-green-50 border-green-100" src={"/images/aarya-thumb.png"} alt="bot" width={60} height={60} />;
  else return <div className="rounded-full shadow border bg-slate-100 border-green-100 w-12 h-12"></div>;
}
