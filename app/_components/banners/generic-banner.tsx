import { cn } from "@/lib/utils";
import { TopBanner } from "./top-banner";
import type { ReactNode } from "react";

interface GenericBannerProps {
  active: boolean;
  children?: ReactNode;
  className?: string;
  closeBtnClass?: string;
}

export const GenericBanner = ({
  active,
  children,
  className,
  closeBtnClass,
}: GenericBannerProps) => {
  return (
    <TopBanner
      active={active}
      className={cn(
        "relative py-4 opacity-100 transition-opacity duration-500",
        className,
      )}
      closeBtnClass={closeBtnClass}
    >
      {children && (
        <div className="flex flex-col items-center gap-2">{children}</div>
      )}
    </TopBanner>
  );
};
