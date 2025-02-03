import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Triple C Collective",
  keywords: [
    "cannabis",
    "cannabis store",
    "dispensary",
    "marijuana",
    "weed",
    "pot",
    "Lake County",
    "California",
    "Triple C Collective",
    "flower",
    "dab",
    "concentrate",
    "edibles",
    "cbd",
    "kratom",
    "wellness",
    "Clearlake",
  ],
  description:
    "By using this website, you agree to comply with and be bound by the following terms and conditions of use. Please read these Terms of Use carefully before accessing or using our website.",
};

export default function TermsOfUsePage() {
  return (
    <main className="bg-[#fefefe]" id="main-content">
      <section className="prose mx-auto max-w-4xl bg-[#fefefe] px-4 py-6 pb-8 prose-h5:font-semibold prose-h5:text-[#111827] prose-h6:font-semibold prose-h6:text-[#111827] prose-a:text-blue-600 sm:py-12">
        <div>
          <h1 className="text-4xl font-semibold">Terms of Use</h1>
          <span className="mx-auto py-2 text-center text-gray-700">
            Last Updated: 12/31/2023
          </span>
          <hr className="my-1" />
        </div>
        <p>
          By using this website, you agree to comply with and be bound by the
          following terms and conditions of use. Please read these Terms of Use
          carefully before accessing or using our website.
        </p>{" "}
        <h2 className="py-2 text-3xl">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Triple C Collective website, you agree to be
          bound by these Terms of Use and all applicable laws and regulations.
          If you do not agree with any part of these terms, please do not use
          our website.
        </p>{" "}
        <h3 className="py-2 text-3xl">2. Age Restriction</h3>{" "}
        <p>
          You must be at least 21 years old, or 18 years old with a valid
          medical recommendation, to use this website. By accessing and using
          this site, you confirm that you are of legal age to purchase cannabis
          products.
        </p>{" "}
        <h4 className="py-2 text-3xl">3. Compliance with Laws</h4>{" "}
        <p>
          You agree to comply with all applicable federal, state, and local laws
          and regulations regarding the use of cannabis and related products.
          Triple C Collective reserves the right to refuse service to anyone for
          any reason at any time.
        </p>{" "}
        <h5 className="py-2 text-3xl">4. Product Information</h5>{" "}
        <p>
          Information about our cannabis products on the website is for
          informational purposes only. It does not constitute medical advice,
          and you should consult a healthcare professional for medical advice.{" "}
        </p>
        <h6 className="text-3xl">5. User Account</h6>
        <p>
          If you create an account on our website, you are responsible for
          maintaining the confidentiality of your account information and
          password. You agree to accept responsibility for all activities that
          occur under your account.
        </p>{" "}
        <h6 className="py-2 text-3xl">6. Prohibited Activities</h6> You agree
        not to engage in any activities that may be deemed illegal, including
        but not limited to:
        <ul className="list-disc pl-4">
          <li>Unauthorized access to our systems or data.</li>
          <li>Interference with the proper working of the website.</li>
          <li>Distribution of malicious code.</li>
          <li>Any activity that violates the rights of others.</li>
        </ul>
        <h6 className="py-2 text-3xl">7. Intellectual Property</h6>{" "}
        <p>
          All content on this website, including text, graphics, logos, images,
          and software, is the property of Triple C Collective and is protected
          by copyright and other intellectual property laws. You may not
          reproduce, modify, distribute, or republish any content without our
          written consent.
        </p>{" "}
        <h6 className="py-2 text-3xl">8. Limitation of Liability</h6>
        <p>
          Triple C Collective is not liable for any damages, including direct or
          indirect, arising from the use or inability to use our website or
          services.
        </p>{" "}
        <h6 className="py-2 text-3xl">9. Amendments</h6>{" "}
        <p>
          Triple C Collective reserves the right to modify or replace these
          Terms of Use at any time. It is your responsibility to check for
          updates periodically. Your continued use of the website after changes
          constitutes acceptance of the revised terms.
        </p>{" "}
        <h6 className="py-2 text-3xl">10. Contact Information</h6>{" "}
        <p>
          If you have any questions about these Terms of Use, please contact us
          using our{" "}
          <Link className="text-blue-500" href="/contact">
            contact page
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
