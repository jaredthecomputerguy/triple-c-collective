import { ShirtIcon } from "lucide-react";

export const SpecialPromo = ({ active }: { active: boolean }) => {
  if (!active) {
    return null;
  }

  return (
    <>
      <h3 className="font-logo py-8 pb-12 text-center text-3xl font-semibold md:text-left">
        T-Shirts for the First 50 Customers!
      </h3>
      <section className="radial-gradient flex flex-col items-center gap-4 rounded-lg bg-yellow-600 p-8 text-white md:flex-row">
        <div className="flex justify-between md:justify-start w-full items-center">
          <ShirtIcon className="size-24" />
          <p className="mb-2 md:text-2xl md:ml-8 font-semibold p-4 md:p-0">
            The first 50 customers in line get an exclusive T-shirt free just
            for coming in!
          </p>
        </div>
      </section>
    </>
  );
};
