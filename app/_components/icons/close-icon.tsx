import type { SVGProps } from "react";

export const CloseIcon = ({
  className = "w-6 h-6",
  stroke = "currentColor",
  strokeWidth = 1.5
}: SVGProps<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
    >
      <title>Close Icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
