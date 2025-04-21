"use client";

import { useToast } from "@/lib/use-toast";
import type React from "react";

import { useState, type FormEvent, useRef } from "react";
import { sendWelcomeEmailAction } from "./actions";
import Link from "next/link";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { toast } = useToast();
  const subRef = useRef<HTMLDivElement>(null);

  const handleNewsletterFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreedToTerms) {
      toast({
        title: "You must consent to subscribe.",
        duration: 5000,
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    const { error } = await sendWelcomeEmailAction({
      toEmail: email,
      firstName: firstName,
      lastName: lastName,
    });

    if (error) {
      toast({
        title: error,
        duration: 5000,
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    setLoading(false);
    setHasSubmitted(true);
    subRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div
      className="items-center justify-center rounded-lg p-4 text-white md:flex md:p-6"
      ref={subRef}
    >
      <div className="mb-6 flex flex-col items-center gap-4 text-center">
        <div className="mb-6 flex flex-col items-center gap-4 text-center">
          <h3 className="font-logo text-2xl font-semibold md:text-3xl">
            Join the Triple C Collective Newsletter
          </h3>
          <p className="max-w-md text-pretty">
            Subscribe to our newsletter to get exclusive deals, flyers for
            upcoming sales, new product alerts, and updates.
          </p>
        </div>

        {hasSubmitted ? (
          <>
            <h3 className="font-logo text-2xl font-semibold md:text-3xl">
              Thanks for subscribing!
            </h3>
            <p className="max-w-md">Check your email for your confirmation.</p>
          </>
        ) : (
          <form
            onSubmit={handleNewsletterFormSubmit}
            className="mx-auto max-w-md space-y-4"
          >
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="firstName" className="text-white">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Bob"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded border-none bg-white/90 p-2 text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex flex-col items-start gap-1">
              <label htmlFor="lastName" className="text-white">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Marley"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded border-none bg-white/90 p-2 text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex flex-col items-start gap-1">
              <label htmlFor="email" className="text-white">
                Email
                <span className="text-red-600"> *</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border-none bg-white/90 p-2 text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-start space-x-2">
              <input
                id="terms"
                type="checkbox"
                required
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms((prev) => !prev)}
                className="mt-1 data-[state=checked]:border-white data-[state=checked]:bg-white"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link
                  href="/terms-of-use"
                  className="text-blue-400 underline"
                  target="_blank"
                >
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-400 underline"
                  target="_blank"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to receive marketing emails.
                <span className="text-red-600"> *</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-white px-6 py-2 font-semibold text-primary-purple transition-all hover:bg-white/90"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#5D3FD3] border-t-transparent"></div>
                  Subscribing...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Subscribe
                </span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
