import { InstagramIcon } from "@/app/_components/icons/instagram-icon";
import { ImageViewer } from "@/app/_components/image-viewer";
import Link from "next/link";

const SPECIAL_PROMO_IMAGE_PATH = "/images/trap-takeover/reggie-painting.jpg";

export const SpecialPromo = ({ active }: { active: boolean }) => {
  if (!active) {
    return null;
  }

  return (
    <>
      <h3 className="font-logo py-8 pb-12 text-center text-3xl font-semibold md:text-left">
        Art Raffle Giveaway
      </h3>
      <section className="radial-gradient flex flex-col items-center gap-4 rounded-lg bg-yellow-600 p-8 text-white md:flex-row">
        <div className="flex flex-col items-center">
          <ImageViewer
            className="mx-auto my-8 w-full max-w-2xl cursor-pointer rounded-xl"
            src={SPECIAL_PROMO_IMAGE_PATH}
            alt="Painting by Reggie Baker"
            width={120}
            height={120}
          />
          <div className="flex gap-2">
            {/*
                  TODO: Add a link to another of Reggie's socials when I see him!
                  <Link
                    href="https://www.facebook.com/UnderdogGrill?mibextid=wwXIfr"
                    target="_blank"
                    className="group rounded-full bg-white p-1 hover:bg-blue-600"
                  >
                    <FacebookIcon className="transition-all group-hover:fill-white" />
                  </Link>
                  */}
            <Link
              href="https://www.instagram.com/reggiebak3r/"
              target="_blank"
              className="group rounded-full bg-white p-1 hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]">
              <InstagramIcon className="transition-all group-hover:fill-white" />
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-2 text-center text-xl font-semibold md:text-left">
            Win an original painting by{" "}
            <strong className="font-bold">Reggie Baker!</strong>
          </p>
          <div className="flex flex-col gap-2 text-left text-base">
            <p>
              Enter our special raffle during the Trap Takeover sale for a
              chance to win a one-of-a-kind painting created by talented local
              artist Reggie Baker.
            </p>
            <p>
              Every qualifying purchase earns you raffle entries, the more you
              buy, the better your odds!
            </p>
            <p>
              The lucky winner will be announced at the end of the event. Be
              sure to stick around or keep an eye on your phone!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
