import Link from "next/link";

import { TopBanner } from "../top-banner";
import styles from "./styles.module.scss";
import { cn } from "@/lib/utils/shared";

interface SevenTenSaleBannerProps {
  active: boolean;
}

export const SevenTenSaleBanner = ({ active }: SevenTenSaleBannerProps) => {
  return (
    <TopBanner active={active} className="w-full">
      <Link href="/deals" className="group flex flex-col items-center">
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
            7/10 SALE - ALL DAY
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
