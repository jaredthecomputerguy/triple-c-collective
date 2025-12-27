import { useCallback, useEffect, useState } from "react";

export const useIsMobile = (mobileScreenSize = 768) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const checkIsMobile = useCallback(
    (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches);
    },
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(max-width: ${mobileScreenSize}px)`);

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", checkIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", checkIsMobile);
    };
  }, [mobileScreenSize, checkIsMobile]);

  return isMobile;
};
