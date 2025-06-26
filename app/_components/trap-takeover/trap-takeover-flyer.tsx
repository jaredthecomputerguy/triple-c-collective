import { ImageViewer } from "@/app/_components/image-viewer";

const FLYER_IMAGE_PATH = "/images/trap-takeover/0704-flyer.png";
const FLYER_PDF_PATH = "/images/trap-takeover/0704-flyer.pdf";

export const TrapTakeoverFlyer = ({ active }: { active: boolean }) => {
  if (!active) {
    return null;
  }

  return (
    <section className="pb-8">
      <h3 className="font-logo py-4 text-center text-3xl font-semibold md:text-left">
        Flyer
      </h3>
      <hr />
      <ImageViewer
        className="mx-auto my-8 w-full max-w-2xl cursor-pointer rounded-xl"
        src={FLYER_IMAGE_PATH}
        alt="March 7th Trap Takeover Flyer"
        width={1236}
        height={1599}
      />
      <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-2">
        <a
          className="bg-primary-purple hover:bg-primary-purple/90 w-full cursor-pointer rounded-sm px-6 py-2 text-center font-semibold text-white transition-all"
          href={FLYER_PDF_PATH}
          download
        >
          Download PDF
        </a>
        <a
          className="bg-primary-purple hover:bg-primary-purple/90 w-full cursor-pointer rounded-sm px-6 py-2 text-center font-semibold text-white transition-all"
          href={FLYER_IMAGE_PATH}
          download
        >
          Download Image
        </a>
      </div>
    </section>
  );
};
