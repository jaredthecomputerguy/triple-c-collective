import { revalidatePath } from "next/cache";

export async function GET() {
  revalidatePath("/deals");

  console.log("-> Revalidating deals");

  return new Response("ok", { status: 200 });
}
