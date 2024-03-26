import Image from "next/image";
import Link from "next/link";
import brands from "@/lib/data/brands.json";

export const BrandCarousel = () => {
  return (
    <div className="flex items-center gap-8 overflow-x-hidden rounded-lg py-6 outline-none focus:outline-primary-purple">
      {brands.map((brand) => (
        <Link
          key={brand.id}
          href={brand.website}
          target="_blank"
          className="h-full shrink-0 animate-mobile-scroll rounded-lg outline-none focus:outline-primary-purple sm:animate-desktop-scroll"
        >
          <Image
            className="aspect-square h-32 w-32 object-contain sm:h-48 sm:w-48"
            src={brand.src!}
            alt={brand.alt}
            width={300}
            height={300}
            priority
          />
        </Link>
      ))}
    </div>
  );
};
