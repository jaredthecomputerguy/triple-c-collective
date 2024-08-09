"use client";

import { useToast } from "@/lib/use-toast";

export const RevalidateDeals = () => {
  const { toast } = useToast();

  const revalidateDeals = async () => {
    const deals = await fetch("/api/deals/revalidate");
    const ok = await deals.text();

    if (ok === "ok") {
      toast({
        title: "Deals Revalidated",
        description: "The deals have been revalidated",
      });
    }
  };

  return (
    <button
      className="rounded border border-white px-4 py-2 hover:bg-white/10"
      onClick={revalidateDeals}
    >
      Revalidate Deals
    </button>
  );
};
