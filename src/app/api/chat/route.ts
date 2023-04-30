import { generateAnswer } from "@/app/reusables/lib/core/features/generate-answer";
import { GPTMessage } from "@/app/reusables/lib/core/types/GPTMessage";
import { Message } from "@/app/reusables/lib/core/types/Message";

const Messages: Array<Message> = [];

export async function GET() {
  return new Response(JSON.stringify(Messages));
}

export async function POST(request: Request): Promise<Response> {
  const messages: Array<Message> = await request.json();
  const gptMessages: Array<GPTMessage> = [];
  messages.forEach((m) => {
    if (m.content.length > 0) {
      Messages.push(m);
    }
  });
  Messages.forEach((m) => {
    gptMessages.push({
      role: m.role,
      content: m.content,
    });
  });

  try {
    const stream = await generateAnswer(gptMessages);
    return new Response(stream);
  } catch (e: any) {
    console.error(e.message);
    throw new Error(`Server error`);
  }
}

function decorate(userQuestion: string): string {
  const instructions = [
    // "If I ask something that is not related to math, respectfully decline",
    // "While solving a math problem, let's think step by step but only provide the first step of the solution",
    // "Ask me for the next",
    // "Verify my response for the step",
    // "If its not correct, ask me to try again",
    // "If I ask you to solve the problem without attempting, respectfully decline",
    // "Use markdown syntax",
    // "Enclose numbers and mathematical expressions in dollar signs",
    // "Use active voice and be succinct",
    "",
  ];
  return `Instructions: ${instructions.join(". ")} \n Prompt: ${userQuestion}`;
}
