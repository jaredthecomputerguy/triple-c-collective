import Image from "next/image";
import Link from "next/link";
import brands from "@/lib/data/brands.json";

export const BrandCarousel = () => {
  return (
    <div className="flex gap-8 py-6 overflow-x-hidden items-center outline-none rounded-lg focus:outline-primary-purple active:outline-primary-purple">
      {brands.map((brand) => (
        <Link
          key={brand.id}
          href={brand.website}
          target="_blank"
          className="shrink-0 h-full animate-mobile-scroll sm:animate-desktop-scroll outline-none rounded-lg focus:outline-primary-purple active:outline-primary-purple">
          <Image
            className="aspect-square object-contain w-32 h-32 sm:w-48 sm:h-48"
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
