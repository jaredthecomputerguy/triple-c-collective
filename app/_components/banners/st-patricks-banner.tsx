import Link from "next/link";

import { TopBanner } from "@/app/_components/banners/top-banner";

export const StPatricksBanner = ({ active }: { active: boolean }) => {
  return (
    <TopBanner
      active={active}
      className="group bg-lime-800 py-4 transition-colors hover:bg-lime-700"
      closeBtnClass="text-white">
      <Link href="/deals" className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 font-serif tracking-wider md:flex-row">
          <span className="z-50 text-center text-base md:text-2xl">Happy</span>
          <span className="z-50 text-center text-2xl transition-all motion-reduce:transition-none md:text-3xl md:group-hover:px-1 md:group-hover:text-4xl">
            St. Patrick&apos;s
          </span>
          <span className="z-50 text-center text-lg md:text-2xl">Day</span>
          <svg
            width="50"
            height="50"
            viewBox="0 0 215 234"
            fill="#009900"
            className="absolute">
            <title>St. Patrick&apos;s Day</title>
            <path d="M215.141,117.341c3.291-25.531-30.435-37.346-50.109-36.702c20.565-21.12,21.139-82.684-19.291-54.5c-8.249-53.786-59.09-13.651-59.853,22.91C65.84,22.042,19.937,19.389,31.183,63.042c-58.854-1.868-23.982,66.436,19.115,67.457c-31.552,25.345-29.373,50.841,8.254,55.072c-3.511,55.13,52.971,18.657,59.89-14.906c7.204,19.541-15.156,42.589-9.872,57.707c7.312,20.926,20.941-15.131,20.858-14.653c3.351-19.336-1.521-36.422,0.143-54.847c15.044-2.052,41.946,45.009,63.252,14.188c7.172-10.371,1.271-22.031-1.28-32.563C202.365,137.243,213.57,129.531,215.141,117.341C217.319,100.446,213.747,128.157,215.141,117.341z"></path>
          </svg>
        </div>
        <small className="text-amber-400 transition-all group-hover:underline">
          25% Off Select Drinks + More
        </small>
      </Link>
    </TopBanner>
  );
};
