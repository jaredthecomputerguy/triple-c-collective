import { TopBanner } from "./top-banner";

interface NewsletterBannerProps {
  active: boolean;
}

export const NewsletterBanner = ({ active }: NewsletterBannerProps) => {
  if (!active) {
    return null;
  }

  function scrollNewsletterIntoView() {
    const newsletter = document.querySelector("#newsletter");

    if (!newsletter) {
      throw new Error("Couldn't find any element with an id of 'newsletter'");
    }

    newsletter.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <TopBanner active={active} className="py-4 text-black">
      <button className="text-black" onClick={scrollNewsletterIntoView}>
        Newsletter
      </button>
    </TopBanner>
  );
};
