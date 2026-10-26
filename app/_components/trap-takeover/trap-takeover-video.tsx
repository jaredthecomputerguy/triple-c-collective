import { Active } from "@/app/_components/active";

const TRAP_TAKEOVER_VIDEO_PATH = "/videos/trap-takeover-0221-updated.mp4";

export const TrapTakeoverVideo = ({ active }: { active: boolean }) => {
  return (
    <Active active={active}>
      <section className="w-full">
        <video
          autoPlay
          muted
          preload="auto"
          className="mx-auto my-16 rounded-xl"
          loop
          playsInline>
          <source src={TRAP_TAKEOVER_VIDEO_PATH} type="video/mp4" />
        </video>
      </section>
    </Active>
  );
};
