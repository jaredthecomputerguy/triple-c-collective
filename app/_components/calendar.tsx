"use client";

import { useEffect, useState } from "react";

const BASE_MAP_EMBED_URL =
  "https://calendar.google.com/calendar/embed?src=0a2e75fa7d8e821cfd43716f663bdcfe9bb6767a111de2fc5b339354d66ec913%40group.calendar.google.com&ctz=America%2FLos_Angeles";

export const Calendar = () => {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateSrc = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setIframeSrc(`${BASE_MAP_EMBED_URL}&mode=AGENDA`);
      } else {
        setIframeSrc(BASE_MAP_EMBED_URL);
      }
    };

    // Initial check
    updateSrc(mediaQuery);

    // Add listener
    mediaQuery.addEventListener("change", updateSrc);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", updateSrc);
    };
  }, []);

  if (!iframeSrc) return null; // prevent SSR mismatch or loading blank iframe

  return (
    <iframe
      title="Triple C Calendar"
      src={iframeSrc}
      style={{ border: 0, width: "100%" }}
      width="800"
      height="600"></iframe>
  );
};
