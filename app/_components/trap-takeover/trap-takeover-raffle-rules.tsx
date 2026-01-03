import { ImageViewer } from "@/app/_components/image-viewer";

const RAFFLE_RULES_PATH = "/images/trap-takeover/other/raffle-rules.png";

export const TrapTakeoverRaffleRules = () => {
  return (
    <section className="w-full" id="raffle-rules">
      <h3 className="font-logo py-4 text-center text-3xl font-semibold md:text-left">
        Raffle Rules
      </h3>
      <hr />
      <ImageViewer
        className="mx-auto my-8 w-full max-w-2xl cursor-pointer rounded-xl"
        src={RAFFLE_RULES_PATH}
        alt="Raffle Rules"
        width={1236}
        height={1599}
      />
    </section>
  );
};
