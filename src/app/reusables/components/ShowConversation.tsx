import BotResponse from "./BotResponse";
import UserQuestion from "./UserQuestion";

interface Props {
  history: Map<string, string>;
}

export default function ShowConversation({ history }: Props) {
  let index = 0;
  const result: Array<any> = [];
  history.forEach((value, key) => {
    if (index < history.size - 1) {
      result.push(
        <div key={index++}>
          <UserQuestion contents={key}></UserQuestion>
          <BotResponse className="" contents={value}></BotResponse>
        </div>
      );
    }
  });
  return <div>{result}</div>;
}
