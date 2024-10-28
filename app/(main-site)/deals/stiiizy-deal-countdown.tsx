import Image from "next/image";
import stiiizyLogo from "@/public/images/brands/stiiizy-logo-black.png";
import stiiizyCarts from "@/public/images/brands/stiiizy-carts.png";

export const StiiizyDealCountdown = () => {
  return (
    <div className="flex flex-col items-center justify-center">
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
    </div>
  );
};
