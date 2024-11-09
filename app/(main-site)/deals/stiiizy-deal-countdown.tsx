import Image from "next/image";
import stiiizyLogo from "@/public/images/brands/stiiizy-logo-black.png";
import stiiizyCarts from "@/public/images/brands/stiiizy-carts.png";
import Link from "next/link";

export const StiiizyDealCountdown = () => {
  return (
    <Link
      className="flex flex-col items-center justify-center rounded-xl underline-offset-4 hover:underline"
      href="https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=STIIIZY"
      id="stiiizy"
      target="_blank"
    >
      <Image
        src={stiiizyCarts}
        alt="Stiiizy Cartridges"
        width={2048 / 8}
        height={2048 / 8}
      />
      <h3 className="flex flex-col items-center gap-4 font-stiiizy text-5xl text-[#241f1f]">
        <Image
          src={stiiizyLogo}
          width={1258 / 6}
          height={598 / 6}
          alt="Stiiizy Logo"
        />{" "}
        Saturdays &amp; Sundays
      </h3>
      <p className="py-4 text-center font-stiiizy text-3xl">
        Buy two, get one free every weekend
      </p>
    </Link>
  );
};
