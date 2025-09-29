import { useEffect } from "react";

export function useScrollHeader(
  setShouldHeaderShow: (_v: boolean) => void,
  setShowMobileMenu: (_v: boolean) => void
) {
  useEffect(() => {
    let lastScroll = window.pageYOffset;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const delta = currentScroll - lastScroll;
      const topOffset = 200;
      const threshold = 5;

      if (currentScroll < topOffset) {
        setShouldHeaderShow(true);
      } else if (Math.abs(delta) > threshold) {
        const isScrollingUp = delta < 0;
        setShouldHeaderShow(isScrollingUp);

        if (!isScrollingUp) {
          setShowMobileMenu(false);
        }
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShouldHeaderShow, setShowMobileMenu]);
}
