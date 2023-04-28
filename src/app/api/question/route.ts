import { generateAnswer } from "@/app/reusables/lib/core/features/generate-answer";
import { CoachGPT } from "@/app/reusables/lib/utils/gpt-personas";

let chatHistory = [...CoachGPT];

export async function POST(request: Request): Promise<Response> {
  const { userQuestion, botResponse } = (await request.json()) as {
    userQuestion: string;
    botResponse: string;
  };

  if (botResponse) {
    chatHistory.push({
      role: "assistant",
      content: botResponse,
    });
  }

  chatHistory.push({
    role: "user",
    content: decorate(userQuestion),
  });

  try {
    const stream = await generateAnswer(chatHistory);
    return new Response(stream);
  } catch (e: any) {
    console.error(e.message);
    throw new Error(`Server error`);
  }
}

function decorate(userQuestion: string): string {
  const instructions = [
    "If I ask something that is not related to math, respectfully decline",
    "While solving a math problem, let's think step by step but only provide the first step of the solution",
    "Ask me for the next",
    "Verify my response for the step",
    "If its not correct, ask me to try again",
    "If I ask you to solve the problem without attempting, respectfully decline",
    "Use markdown syntax",
    "Enclose numbers and mathematical expressions in dollar signs",
    "Use active voice and be succinct",
  ];
  return `Instructions: ${instructions.join(". ")} \n Prompt: ${userQuestion}`;
}
