import { getOpenApiKey } from "../../utils/env-reader";
import { toReadableStream } from "../../utils/readable-stream";
import { GPTPayload } from "../types/GPTPayload";

export function generateAnswer(payload: GPTPayload): Promise<ReadableStream<any>> {
  const encoder = new TextEncoder();
  return toReadableStream(
    async () => {
      const opts = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getOpenApiKey()}`,
        },
        method: "POST",
        body: JSON.stringify(payload),
      };
      const res = await fetch("https://api.openai.com/v1/chat/completions", opts);

      if (!res.ok) {
        throw new Error(`GPT call failed: ${res.statusText}`);
      }
      return res;
    },
    (event, controller) => {
      if (event.type === "event") {
        const data = event.data;
        // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
        if (data === "[DONE]") {
          controller.close();
          return;
        }
        try {
          const json = JSON.parse(data);
          const text = json.choices[0].delta.content;
          if (text) {
            const queue = encoder.encode(text);
            controller.enqueue(queue);
          }
        } catch (e) {
          // maybe parse error
          controller.error(e);
        }
      }
    }
  );
}
