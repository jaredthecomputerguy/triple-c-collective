// @ts-expect-error Experimental
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function ContactPage() {
  // TODO: Implement this
  return (
    <section>
      Contact Page
      <GoogleMapsEmbed
        apiKey={process.env.GOOGLE_MAPS_API_KEY!}
        mode="place"
        allowfullscreen
        style="height: 500px; width: 500px"
        loading="eager"
        q="Triple C Collective, 14196 Lakeshore Ave. Clearlake CA 95422"
      />
    </section>
  );
}
