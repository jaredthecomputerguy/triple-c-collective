import { ImageViewer } from "@/app/_components/image-viewer";

export default function TrapTakeoverPage() {
  return (
    <main className="bg-[#fefefe]">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <h1 className="py-4 font-logo text-4xl font-semibold">Trap Takeover</h1>
        <hr className="pb-12" />
        <ImageViewer
          className="mx-auto h-full w-full cursor-pointer object-cover object-top"
          src="/images/trap-takeover/06072024_traptakeover.webp"
          alt="Trap Takeover"
          width={1920}
          height={1080}
        />
      </div>
    </main>
  );
}
