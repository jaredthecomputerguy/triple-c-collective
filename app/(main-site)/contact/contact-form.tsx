"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { sendEmail } from "@/lib/send-email";
import { useToast } from "@/lib/use-toast";

export interface EmailInfo {
  name?: string;
  from: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const [emailInfo, setEmailInfo] = useState<EmailInfo>({
    from: "",
    message: "",
    subject: "",
    name: "",
  });
  const [emailIsSending, setEmailIsSending] = useState(false);

  const { toast } = useToast();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;

    setEmailInfo((prevState) => {
      return { ...prevState, [e.target.name]: value };
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailIsSending(true);

    const hasSentEmail = sessionStorage.getItem("es");

    if (hasSentEmail && process.env.NODE_ENV !== "development") {
      setEmailIsSending(false);
      return toast({
        title: "You've already sent a message today.",
        description: "Please try again tomorrow.",
        duration: 5000,
        variant: "destructive",
      });
    }

    const { from, message, subject, name } = emailInfo;

    if (!from || !message || !subject) {
      return;
    }

    const { error } = await sendEmail({
      from,
      message,
      subject: `Message from website contact page: '${subject}'`,
      name,
    });

    if (error) {
      setEmailIsSending(false);
      return toast({
        title: "Something went wrong...",
        description: "Please try again later.",
        duration: 5000,
        variant: "destructive",
      });
    }

    setEmailIsSending(false);

    setEmailInfo({
      from: "",
      message: "",
      subject: "",
      name: "",
    });

    toast({
      title: "Your message was sent.",
      duration: 5000,
    });

    sessionStorage.setItem("es", new Date().toString());
  };

  return (
    <form className="flex flex-col gap-2 pt-4" onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-1">
        <label className="text-primary-purple font-semibold" htmlFor="name">
          Name
        </label>
        <input
          className="focus:outline-primary-purple rounded-sm border-2 border-gray-500 p-2 outline-hidden placeholder:text-gray-600"
          onChange={handleInputChange}
          type="text"
          id="name"
          autoComplete="name"
          value={emailInfo.name}
          name="name"
          placeholder="Jane Doe"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-primary-purple font-semibold" htmlFor="from">
          Email
        </label>
        <input
          className="focus:outline-primary-purple rounded-sm border-2 border-gray-500 p-2 outline-hidden placeholder:text-gray-600"
          required
          min="1"
          max="100"
          value={emailInfo.from}
          onChange={handleInputChange}
          type="email"
          id="from"
          name="from"
          placeholder="janedoe@example.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-primary-purple font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          className="focus:outline-primary-purple rounded-sm border-2 border-gray-500 p-2 outline-hidden placeholder:text-gray-600"
          required
          min="1"
          max="100"
          value={emailInfo.subject}
          onChange={handleInputChange}
          type="text"
          id="subject"
          name="subject"
          placeholder="Questions, Comments, Concerns..."
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-primary-purple font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          className="focus:outline-primary-purple mb-2 rounded-sm border-2 border-gray-500 p-2 outline-hidden placeholder:text-gray-600"
          required
          onChange={handleInputChange}
          value={emailInfo.message}
          rows={5}
          id="message"
          name="message"
          placeholder="Enter your message here..."
        />
      </div>
      <button
        className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 rounded-sm px-6 py-2 font-semibold text-white outline-hidden transition-all md:text-xl"
        disabled={emailIsSending}
        type="submit"
      >
        {emailIsSending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
};
