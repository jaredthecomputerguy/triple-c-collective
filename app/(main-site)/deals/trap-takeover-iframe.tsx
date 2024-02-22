import { cn } from "@/lib/utils";

export const TrapTakeoverIframe = ({ className = "" }) => {
  return (
    <iframe
      title="Illa Guerrilla Trap Takeover Countdown Clock"
      src="https://illaguerrilla.com/iframe-triple-c/"
      loading="eager"
      width="100%"
      height="110%"
      className={cn("outline-none rounded-xl", className)}
    />
  );
};
