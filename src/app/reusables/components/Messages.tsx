interface Props {
  messages: Array<{
    id: number;
    content: string;
    role: string;
  }>;
}
export default function Messages({ messages }: Props) {
  const divs = messages.map((m) => {
    return (
      <div key={m.id}>
        <div>{m.role}</div>
        <div>{m.content}</div>
      </div>
    );
  });
  return <div>{divs}</div>;
}
