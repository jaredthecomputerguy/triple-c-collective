import { useEffect } from "react";

export function usePathChangeCloseMenus(
  pathname: string,
  currentPath: string | undefined,
  setCurrentPath: (_p: string) => void,
  setShowMobileMenu: (_v: boolean) => void,
  setShowMoreLinksMenu: (_v: boolean) => void
) {
  useEffect(() => {
    setCurrentPath(pathname);

    if (pathname !== currentPath) {
      setShowMobileMenu(false);
      setShowMoreLinksMenu(false);
    } else {
      setShowMobileMenu(false);
    }
  }, [
    pathname,
    currentPath,
    setCurrentPath,
    setShowMobileMenu,
    setShowMoreLinksMenu
  ]);
}
