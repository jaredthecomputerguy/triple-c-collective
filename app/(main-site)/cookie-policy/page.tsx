import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Triple C Collective",
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California. Proudly open for over 15 years, we offer a diverse selection of high-quality cannabis products, expert guidance, and a welcoming environment for cannabis enthusiasts. Discover a trusted name in the industry - Triple C Collective, your premier destination for a decade and a half of cannabis excellence.",
};

export default function CookiePolicyPage() {
  return (
    <main className="bg-[#fefefe]" id="main-content">
      <section className="prose mx-auto max-w-4xl bg-[#fefefe] px-4 py-6 prose-h5:font-semibold prose-h5:text-[#111827] prose-h6:font-semibold prose-h6:text-[#111827] prose-a:text-blue-600 sm:py-12">
        <h1 className="text-4xl font-semibold">Cookie Policy</h1>
        <span className="mx-auto text-center text-gray-700">
          Last Updated: 12/31/2023
        </span>
        <hr className="my-1" />
        <article className="pb-6">
          <h2 className="mt-6 text-3xl">What Are Cookies</h2>
          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience.
          </p>
          <p>
            This page describes what information they gather, how we use it and
            why we sometimes need to store these cookies. We will also share how
            you can prevent these cookies from being stored however this may
            downgrade or &apos;break&apos; certain elements of the sites
            functionality.
          </p>
          <h3 className="py-2 text-3xl">How We Use Cookies</h3>
          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site.
          </p>
          <p>
            It is recommended that you leave on all cookies if you are not sure
            whether you need them or not in case they are used to provide a
            service that you use.
          </p>
          <h4 className="py-2 text-3xl">Disabling Cookies</h4>
          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this).
          </p>
          <p>
            Be aware that disabling cookies will affect the functionality of
            this and many other websites that you visit. Disabling cookies will
            usually result in also disabling certain functionality and features
            of the this site.
          </p>
          <p>Therefore it is recommended that you do not disable cookies.</p>
          <h5 className="py-2 text-3xl">The Cookies We Set</h5>
          <p>
            In order to provide you with a great experience on this site we
            provide the functionality to set your preferences for how this site
            runs when you use it. In order to remember your preferences we need
            to set cookies so that this information can be called whenever you
            interact with a page is affected by your preferences.
          </p>
          <h6 className="py-2 text-3xl">More Information</h6>
          <p>
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren&apos;t sure whether
            you need or not it&apos;s usually safer to leave cookies enabled in
            case it does interact with one of the features you use on our site.
          </p>
          <p>
            However if you are still looking for more information then you can
            contact us via our{" "}
            <Link className="text-blue-500" href="/contact">
              contact page
            </Link>
            .
          </p>
        </article>
      </section>
    </main>
  );
}
