"use client";

import { useRouter } from "@bprogress/next";
import { type KeyboardEventHandler, useEffect, useRef, useState } from "react";

import { setAgeConsentAction } from "@/lib/actions/age-consent-action";
import { Logger } from "@/lib/logger";

type AgeModalProps = {
  initialShowModal: boolean;
};

export const AgeModal = ({ initialShowModal }: AgeModalProps) => {
  const [showModal, setShowModal] = useState(initialShowModal);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ageModalRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  async function handleYesClick() {
    setIsSubmitting(true);
    try {
      await setAgeConsentAction(rememberMe);
      setShowModal(false);
      router.refresh();
    } catch (error) {
      Logger.error("Failed to set age consent:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleKeyDownInModal: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Tab") {
      const focusableElements =
        ageModalRef.current?.querySelectorAll<HTMLElement>("button, input");

      if (!focusableElements) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      } else if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    }
  };

  useEffect(() => {
    if (showModal) {
      ageModalRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      ref={ageModalRef}
      id="age-modal"
      tabIndex={-1}
      onKeyDown={handleKeyDownInModal}
      role="dialog">
      <div className="rounded-lg bg-white p-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="text-primary-purple mx-auto h-12 w-12">
          <title>Close</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
          />
        </svg>

        <p className="py-4 text-center text-2xl font-semibold md:text-4xl">
          Are you 21 or older?
        </p>
        <p className="pb-2 text-center text-sm">
          Or 18+ with valid medical recommendation
        </p>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <label htmlFor="rememberMe">Remember Me</label>
            <div className="relative flex">
              <input
                className="border-primary-purple bg-primary-purple/50 checked:bg-primary-purple h-4 w-4 appearance-none rounded-sm border transition-colors ease-in-out"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
              />
              {rememberMe && (
                <div className="pointer-events-none absolute top-0 left-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#fefefe"
                    className="h-4 w-4"
                    strokeWidth={5}>
                    <title>Remember Me</title>
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 rounded-sm px-6 py-2 font-semibold text-white outline-hidden transition-all md:text-xl"
              onClick={handleYesClick}
              disabled={isSubmitting}
              type="button">
              {isSubmitting ? "Please wait..." : "Yes"}
            </button>
            <button
              className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 rounded-sm px-6 py-2 font-semibold text-white outline-hidden transition-all md:text-xl"
              onClick={() => router.replace("https://google.com")}
              disabled={isSubmitting}
              type="button">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
