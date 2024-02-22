"use client";

import { useRouter } from "next/navigation";
import { KeyboardEventHandler, useEffect, useRef, useState } from "react";

export const AgeModal = () => {
  const [showModal, setShowModal] = useState<boolean>();
  const [rememberMe, setRememberMe] = useState(false);

  const ageModalRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  function handleYesClick() {
    if (rememberMe) {
      localStorage.setItem("age-consent", "true");
      setShowModal(false);
    } else {
      sessionStorage.setItem("age-consent", "true");
      setShowModal(false);
    }
  }

  function checkStorageForAgeConsent() {
    const localAgeConsent = localStorage.getItem("age-consent");
    const sessionAgeConsent = sessionStorage.getItem("age-consent");

    if (!localAgeConsent && !sessionAgeConsent) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    } else {
      setShowModal(false);
      document.body.style.overflow = "auto";
    }
  }

  const handleKeyDownInModal: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Tab") {
      const focusableElements = ageModalRef.current?.querySelectorAll<HTMLElement>("button, input");

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
    checkStorageForAgeConsent();
    if (showModal) {
      ageModalRef.current?.focus();
    }
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      ref={ageModalRef}
      onKeyDown={handleKeyDownInModal}>
      <div className="bg-white p-8 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-primary-purple">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
          />
        </svg>

        <p className="md:text-4xl text-2xl font-semibold text-center py-4">Are you 21 or older?</p>
        <p className="text-center text-sm pb-2">Or 18+ with valid medical recommendation</p>
        <div className="flex flex-col justify-center gap-4">
          <div className="gap-2 justify-center flex items-center">
            <label htmlFor="rememberMe">Remember Me</label>
            <div className="relative flex">
              <input
                className="appearance-none bg-primary-purple/50 w-4 border border-primary-purple h-4 rounded transition-colors ease-in-out checked:bg-primary-purple"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
              />
              {rememberMe && (
                <div className="absolute top-0 left-0 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#fefefe"
                    className="w-4 h-4"
                    strokeWidth={5}>
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
          <div className="flex gap-4 justify-center">
            <button
              className="px-6 py-2 font-semibold text-white transition-all rounded outline-none bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple"
              onClick={handleYesClick}>
              Yes
            </button>
            <button
              className="px-6 py-2 font-semibold text-white transition-all rounded outline-none bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple"
              onClick={() => router.push("https://google.com")}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
