import { firebaseInit } from "@/app/reusables/lib/utils/firebase-init";

export async function GET() {
  const app = firebaseInit();
  return new Response(JSON.stringify(app));
}
