import { ImageViewer } from "@/app/_components/image-viewer";

export default function TrapTakeoverPage() {
  return (
    <main className="bg-[#fefefe]">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <span className="px-1 pb-1 text-gray-600">June 7th, 2024</span>
        <h1 className="pb-4 font-logo text-4xl font-semibold">Trap Takeover</h1>
        <hr className="pb-4" />
        <section>
          {/* <h2 className="py-4 font-logo text-3xl font-semibold">
             Featured Brands
           </h2>
          <p className="py-4 text-lg"></p> */}
        </section>
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
