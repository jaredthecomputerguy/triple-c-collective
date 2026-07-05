import Link from "next/link";
import type { ReactNode } from "react";
import type { Route } from "next";

import { TopBanner } from "@/app/_components/banners/top-banner";
import { cn } from "@/lib/utils/shared";

import styles from "./styles.module.scss";

interface SevenTenSaleBannerProps {
  active: boolean;
  children?: ReactNode;
  href?: string;
}

export const SevenTenSaleBanner = ({
  active,
  children,
  href,
}: SevenTenSaleBannerProps) => {
  if (!href) return null;
  return (
    <TopBanner active={active} className="w-full pt-2">
      <Link href={href as Route} className="group flex flex-col items-center">
        <div className={styles.container}>
          <div className={styles.blobs}>
            <div className={styles.liquid}></div>
            <div className={styles.blob}></div>
            <div className={styles.blob}></div>
            <div className={styles.blob}></div>
            <div className={styles.blob}></div>
            <div className={styles.blob}></div>
          </div>
          <h1 className={cn(styles.text, "group-hover:text-underline")}>
            {children}
          </h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
          <title>7/10 Sale</title>
          <defs>
            <filter id="goog">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </Link>
    </TopBanner>
  );
};
