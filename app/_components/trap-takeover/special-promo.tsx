import type { ReactNode } from "react";

import { Active } from "@/app/_components/active";

interface SpecialPromoProps {
  active: boolean;
  title: string;
  description: string;
  icon?: ReactNode;
}

export const SpecialPromo = ({
  active,
  title,
  description,
  icon,
}: SpecialPromoProps) => {
  return (
    <Active active={active}>
      <h3 className="font-logo py-8 pb-12 text-center text-3xl font-semibold md:text-left">
        {title}
      </h3>
      <section className="radial-gradient flex flex-col items-center gap-4 rounded-lg bg-yellow-600 p-8 text-white md:flex-row">
        <div className="flex justify-between md:justify-start w-full items-center">
          {icon}
          <p className="mb-2 md:text-2xl md:ml-8 font-semibold p-4 md:p-0">
            {description}
          </p>
        </div>
      </section>
    </Active>
  );
};
