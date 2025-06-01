import { useEffect } from "react";

export function useViewportHeight(setViewportHeight: (_v: number) => void) {
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setViewportHeight]);
}
