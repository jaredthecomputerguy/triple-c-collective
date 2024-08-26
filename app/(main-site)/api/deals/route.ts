import type { DealsResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await fetch(
    `${process.env.POCKETBASE_BASE_URL!}/${process.env.POCKETBASE_DEAL_URL}`,
  );
  const deals = (await res.json()) as DealsResponse;

  return NextResponse.json<DealsResponse>(deals);
};
