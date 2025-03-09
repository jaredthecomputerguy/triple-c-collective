"use client";

import { useToast } from "@/lib/use-toast";
import { Button } from "../_components/button";
import { sendWelcomeEmailAction } from "./actions";
import { useState, type ChangeEvent } from "react";

export const NewsletterForm = () => {
  const { toast } = useToast();
  const [newsletterValues, setNewsletterValues] = useState<{
    firstName: string;
    lastName: string;
    email: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewsletterValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNewsletterFormSubmit = async () => {
    setIsSubmitting(true);
    const { error } = await sendWelcomeEmailAction({
      toEmail: newsletterValues.email,
      firstName: newsletterValues.firstName,
      lastName: newsletterValues.lastName,
    });

    if (error) {
      toast({
        title: error,
        duration: 5000,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    toast({
      title: "Check your email for confirmation.",
      duration: 5000,
      variant: "default",
    });
    // TODO: maybe redirect the user at this point, or pop up a nicer modal idk
  };

  return (
    <form
      action={handleNewsletterFormSubmit}
      className="flex flex-col items-center gap-4"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="firstName" className="text-[#fefefe] font-semibold">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="p-2 rounded"
          value={newsletterValues.firstName}
          onChange={handleNewsletterValueChange}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="lastName" className="text-[#fefefe] font-semibold">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="p-2 rounded"
          value={newsletterValues.lastName}
          onChange={handleNewsletterValueChange}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-[#fefefe] font-semibold">
          Email<span className="text-red-400">&#42;</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="p-2 rounded"
          required
          max={255}
          min={1}
          value={newsletterValues.email}
          onChange={handleNewsletterValueChange}
        />
      </div>
      <Button
        className="bg-white font-semibold px-16 hover:bg-[#EEE]"
        variant={"ghost"}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading..." : "Subscribe"}
      </Button>
    </form>
  );
};
