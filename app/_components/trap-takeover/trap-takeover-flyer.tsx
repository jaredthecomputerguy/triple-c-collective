import { ImageViewer } from "@/app/_components/image-viewer";

interface TrapTakeoverFlyerProps {
  active: boolean;
  flyerImagePath: string;
  flyerPDFPath: string;
  flyerImageAlt: string;
}

export const TrapTakeoverFlyer = ({
  active,
  flyerImagePath,
  flyerPDFPath,
  flyerImageAlt
}: TrapTakeoverFlyerProps) => {
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
        src={flyerImagePath}
        alt={flyerImageAlt}
        width={1236}
        height={1599}
      />
      <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-2">
        <a
          className="bg-primary-purple hover:bg-primary-purple/90 w-full cursor-pointer rounded-sm px-6 py-2 text-center font-semibold text-white transition-all"
          href={flyerPDFPath}
          download>
          Download PDF
        </a>
        <a
          className="bg-primary-purple hover:bg-primary-purple/90 w-full cursor-pointer rounded-sm px-6 py-2 text-center font-semibold text-white transition-all"
          href={flyerImagePath}
          download>
          Download Image
        </a>
      </div>
    </section>
  );
};
