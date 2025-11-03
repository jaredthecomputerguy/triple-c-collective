import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";

import { TopBanner } from "@/app/_components/banners/top-banner";
import { useToast } from "@/lib/use-toast";
import { sendWelcomeEmailAction } from "@/lib/actions/send-welcome-email-action";
import { cn } from "@/lib/utils/shared";

const NEWSLETTER_SUBMIT_KEY = "ns";

interface NewsletterBannerProps {
  active: boolean;
}

export const NewsletterBanner = ({ active }: NewsletterBannerProps) => {
  const [currentStep, setCurrentStep] = useState<
    "initial" | "consent" | "success"
  >("initial");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleNewsletterBannerSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await sendWelcomeEmailAction({
      toEmail: email
    });

    if (error) {
      toast({
        title: error,
        duration: 5000,
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    sessionStorage.setItem(NEWSLETTER_SUBMIT_KEY, "true");
    setIsSubmitting(false);
    setCurrentStep("success");
  };

  useEffect(() => {
    setHasSubmitted(!!sessionStorage.getItem(NEWSLETTER_SUBMIT_KEY));
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <TopBanner
        active={active}
        className={cn("pointer-events-none relative h-[56px] py-4 opacity-0")}
      />
    );
  }

  return (
    <TopBanner
      active={active}
      className={cn(
        "relative py-4 opacity-100 transition-opacity duration-500"
      )}>
      <form
        className="mr-8 flex flex-col items-center gap-2 px-4 text-sm md:text-base"
        onSubmit={handleNewsletterBannerSubmit}>
        {currentStep === "initial" && (
          <div className="flex flex-col items-center gap-2">
            <span className="text-center text-[#050505]">
              Subscribe to our newsletter for exclusive deals + more!
            </span>
            {!hasSubmitted && (
              <div className="flex w-full gap-2">
                <input
                  className="border-primary-purple w-full grow rounded-sm border bg-white/90 p-2 text-base text-black placeholder:text-gray-500 disabled:cursor-not-allowed disabled:bg-white/90 disabled:text-gray-500"
                  ref={emailInputRef}
                  type="email"
                  name="email"
                  id="bannerEmail"
                  disabled={hasSubmitted}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  minLength={1}
                  maxLength={100}
                  placeholder="Enter your email"
                  onKeyDown={(e) => {
                    if (e.key !== "Enter" || !emailInputRef.current) return;
                    const isValid = emailInputRef.current.reportValidity();
                    // HERE: I want to show some of the validation errors
                    if (isValid) {
                      setCurrentStep("consent");
                    }
                  }}
                />
                <button
                  type="button"
                  className="border-primary-purple text-primary-purple disabled:text-primary-purple/50 rounded-sm border bg-white px-4 py-2 font-semibold transition-all hover:bg-white/90 disabled:cursor-not-allowed"
                  disabled={hasSubmitted}
                  onClick={() => {
                    if (!emailInputRef.current) return;
                    const isValid = emailInputRef.current.reportValidity();
                    if (isValid) {
                      setCurrentStep("consent");
                    }
                  }}>
                  Subscribe
                </button>
              </div>
            )}
          </div>
        )}

        {currentStep === "consent" && (
          <div className="flex flex-col items-center gap-2">
            <span className="text-center text-[#050505]">
              Do you consent to receiving marketing emails and agree to our{" "}
              <Link
                className="text-blue-500 underline hover:text-blue-600"
                href="/terms-of-use">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                className="text-blue-500 underline hover:text-blue-600"
                href="/privacy-policy">
                Privacy Policy
              </Link>
              ?
            </span>
            <div className="flex gap-2 md:ml-8">
              <button
                type="submit"
                className="bg-primary-purple hover:bg-primary-purple/90 disabled:bg-primary-purple/50 rounded-sm border border-transparent px-4 py-2 text-sm font-semibold text-white transition-all disabled:cursor-not-allowed"
                disabled={isSubmitting}>
                Yes
              </button>
              <button
                type="button"
                className="rounded-sm border border-transparent bg-red-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-red-700/90 disabled:cursor-not-allowed disabled:bg-red-700/50"
                onClick={() => setCurrentStep("initial")}
                disabled={isSubmitting}>
                No
              </button>
            </div>
          </div>
        )}

        {currentStep === "success" && (
          <div className="flex flex-col items-center gap-2">
            <span className="text-center text-[#050505]">
              Thanks for subscribing!
            </span>
            <span className="text-center text-[#050505]">
              Check your email for more information!
            </span>
          </div>
        )}
      </form>
    </TopBanner>
  );
};
