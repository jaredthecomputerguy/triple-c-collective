"use client";

import { Button } from "@/app/_components/button";
import Link from "next/link";
import { unsubscribeUserAction } from "./actions";

export const UnsubscribeForm = ({ contactId }: { contactId: string }) => {
  return (
    <form
      action={() => unsubscribeUserAction(contactId)}
      className="flex flex-col gap-4 py-4"
    >
      <p>Are you sure you want to unsubscribe?</p>{" "}
      <p>
        Press the button below to confirm, or press Cancel to go back to our
        home page.
      </p>
      <div className="flex gap-2 py-2">
        <Button
          className="rounded bg-primary-purple px-6 py-6 font-semibold text-white outline-none transition-all hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 md:text-xl"
          type="submit"
        >
          Confirm
        </Button>
        <Button
          className="rounded bg-red-600 px-6 py-6 font-semibold text-white outline-none transition-all hover:bg-red-600/80 focus:bg-red-600/80 focus:outline-primary-purple md:text-xl"
          asChild
        >
          <Link href="/">Cancel</Link>
        </Button>
      </div>
      <div className="mb-12 md:mb-48" />
    </form>
  );
};
