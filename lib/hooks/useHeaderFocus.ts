import { useEffect } from "react";

export function useHeaderFocus(setShouldHeaderShow: (_v: boolean) => void) {
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const handleFocusIn = () => {
      setShouldHeaderShow(true);
    };

    header.addEventListener("focusin", handleFocusIn);
    return () => header.removeEventListener("focusin", handleFocusIn);
  }, [setShouldHeaderShow]);
}
