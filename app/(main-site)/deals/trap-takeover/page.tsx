import { ImageViewer } from "@/app/_components/image-viewer";
import Image from "next/image";
import Link from "next/link";

export default function TrapTakeoverPage() {
  return (
    <main className="bg-[#fefefe]">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <span className="px-1 pb-1 text-gray-600">June 7th, 2024</span>
        <h1 className="pb-4 font-logo text-4xl font-semibold">Trap Takeover</h1>
        <hr className="pb-4" />
        <section>
          <h2 className="py-4 text-center font-logo text-3xl font-semibold md:text-left">
            Featured Brands
          </h2>
          <div className="flex flex-col justify-evenly py-8 text-lg sm:flex-row">
            <div className="flex flex-col items-center hover:underline">
              <Link
                className="p-2"
                href="https://www.akwaabafarms.com/"
                target="_blank"
              >
                <h3 className="text-center font-logo text-2xl font-semibold">
                  Akwaaba Farms
                </h3>
                <Image
                  src="/images/brands/akwaaba.png"
                  width={200}
                  height={200}
                  alt="Akwaaba Farms Logo"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center hover:underline">
              <Link
                className="p-2"
                href="https://www.dompen.co"
                target="_blank"
              >
                <h3 className="font-logo text-2xl font-semibold">Dompen</h3>
                <Image
                  src="/images/brands/dompen.avif"
                  width={200}
                  height={200}
                  alt="Dompen Logo"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center hover:underline">
              <Link
                className="p-2"
                href="https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=BIG%20BOY%20DRO"
                target="_blank"
              >
                <h3 className="font-logo text-2xl font-semibold">
                  Big Boy Dro
                </h3>
                <Image
                  src="/images/brands/big-boy-dro.png"
                  width={200}
                  height={200}
                  alt="Big Boy Dro Logo"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center hover:underline">
              <Link
                className="p-2"
                href="https://www.midsfactory.com/"
                target="_blank"
              >
                <h3 className="font-logo text-2xl font-semibold">
                  Midsfactory
                </h3>
                <Image
                  src="/images/brands/midsfactory.png"
                  width={200}
                  height={200}
                  alt="Midsfactory Logo"
                />
              </Link>
            </div>
          </div>
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
