"use client";

import Link from "next/link";

import { Button } from "@/app/_components/button";
import { unsubscribeUserAction } from "@/lib/actions/unsubscribe-user-action";

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
          className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 rounded-sm px-6 py-6 font-semibold text-white outline-hidden transition-all md:text-xl"
          type="submit"
        >
          Confirm
        </Button>
        <Button
          className="focus:outline-primary-purple rounded-sm bg-red-600 px-6 py-6 font-semibold text-white outline-hidden transition-all hover:bg-red-600/80 focus:bg-red-600/80 md:text-xl"
          asChild
        >
          <Link href="/">Cancel</Link>
        </Button>
      </div>
      <div className="mb-12 md:mb-48" />
    </form>
  );
};
