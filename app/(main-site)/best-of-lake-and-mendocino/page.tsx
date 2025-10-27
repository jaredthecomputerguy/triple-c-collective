import {
  Building,
  Users,
  Star,
  PillBottle,
  Briefcase,
  Cannabis,
  Store
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/app/_components/card";
import { Button } from "@/app/_components/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/app/_components/accordian";

import voteForUsImage from "@/public/images/bolm/vote-for-us.png";

export async function generateMetadata(): Promise<Metadata> {
  const title = `Best of Lake and Mendocino ${CONTEST_YEAR} | Triple C Collective`;
  const siteUrl = process.env.SITE_URL;

  return {
    title,
    description:
      "Vote for Triple C Collective in the Best of Lake & Mendocino 2026 contest. Proudly nominated across multiple categories, we’re honored to serve our community with the best cannabis products and service.",
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
      "trap takeover",
      "cannabis sale",
      "cannabis bogo",
      "flower sale",
      "edible sale",
      "cartridge sale",
      `Best of Lake and Mendocino ${CONTEST_YEAR}`,
      `Cannabis contest ${CONTEST_YEAR}`
    ],
    authors: [
      {
        name: "Jared Mercer",
        url: "https://jaredthecomputerguy.dev"
      }
    ],
    creator: "Jared Mercer",
    openGraph: {
      title: ``,
      url: `${process.env.SITE_URL}`,
      description:
        "Vote for Triple C Collective in the Best of Lake & Mendocino 2026 contest.",
      images: `${siteUrl}/opengraph-image.png`,
      siteName: "Triple C Collective",
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description:
        "Vote for Triple C Collective in the Best of Lake & Mendocino 2026 contest.",
      images: [`${siteUrl}/opengraph-image.png`]
    },
    robots: "all",
    metadataBase: new URL(`${siteUrl}`)
  };
}

const CONTEST_YEAR = 2026;

const FAQ: { id: number; trigger: string; content: string }[] = [
  {
    id: 1,
    trigger: "What is the Best of Lake and Mendocino contest?",
    content:
      "The Best of Lake and Mendocino, presented by Bicoastal Media, is a community-driven contest that highlights the best businesses, services, and organizations in Lake and Mendocino counties."
  },
  {
    id: 2,
    trigger: "How was Triple C Collective nominated?",
    content:
      "Nominations come directly from the community. After the nomination period closes, verified nominees like Triple C Collective are placed on the official ballot for voting."
  },
  {
    id: 3,
    trigger: "In which categories is Triple C Collective nominated?",
    content:
      "We’ve been nominated in multiple categories, including Best Cannabis Dispensary, Best CBD Products, Best Budtender Team, and more."
  },
  {
    id: 4,
    trigger: "How does voting work?",
    content:
      "Once voting begins, community members can cast one vote per category every 24 hours. Voting is done entirely online through the Best of Lake and Mendocino website."
  },
  {
    id: 5,
    trigger: "Do I need to register to vote?",
    content:
      "Yes. Registration with basic information, like your name and email, is required to validate votes and prevent fraud."
  },
  {
    id: 6,
    trigger: "Can I vote in person or with a paper ballot?",
    content:
      "No. All voting is done online only — there are no in-person or paper ballot options."
  },
  {
    id: 7,
    trigger: "How many times can I vote for Triple C Collective?",
    content:
      "You can vote once per category per day. That means you can support Triple C Collective daily throughout the entire voting period."
  },
  {
    id: 8,
    trigger: "When does voting take place?",
    content:
      "The regular voting period runs from Wednesday, September 17th at 12:00 pm through Wednesday, October 1st at 5:00 pm."
  },
  {
    id: 9,
    trigger: "When will winners be announced?",
    content:
      "Winners will be posted on the Best of Lake and Mendocino website on Wednesday, January 7th at 12:00 pm and featured in the official winners magazine."
  },
  {
    id: 10,
    trigger: "How are votes counted?",
    content:
      "Votes are tabulated by a third-party. Bicoastal Media and its affiliates don’t see the results until the tabulation is complete. Votes suspected of fraud or tampering may be disqualified."
  },
  {
    id: 11,
    trigger: "What happens if Triple C Collective wins?",
    content:
      "Winning is a community recognition of our service, products, and team. We’ll proudly share the award with our customers and continue to serve Lake and Mendocino counties with excellence."
  }
];

const CATEGORIES = [
  {
    name: "CBD Products",
    icon: PillBottle,
    description: "Recognized for our premium CBD product selection and quality"
  },
  {
    name: "Cannabis Dispensary",
    icon: Building,
    description: "Honored as a top cannabis dispensary in the region"
  },
  {
    name: "Cannabis Expert Budtender Team",
    icon: Users,
    description: "Our knowledgeable team provides exceptional customer service"
  },
  {
    name: "Cannabis Flower",
    icon: Cannabis,
    description: "Celebrated for our premium flower selection and quality"
  },
  {
    name: "Place to Work",
    icon: Briefcase,
    description:
      "Recognized as an outstanding workplace in the cannabis industry"
  },
  {
    name: "Vape/Smoke Shop",
    icon: Store,
    description:
      "Acknowledged for our comprehensive vape and smoking accessories"
  }
];

export default function BestOfLakeAndMendocinoPage() {
  return (
    <main className="bg-[#fefefe]">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <h1 className="font-logo py-4 text-4xl font-semibold">
          Best of Lake &amp; Mendocino 2026
        </h1>
        <hr className="pb-4" />

        <div className="container py-4 md:py-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-primary-purple text-3xl font-bold tracking-tighter">
                  Our Nominations
                </h2>
                <p className="text-gray-600">
                  We&apos;re honored to be recognized in these categories,
                  reflecting our commitment to excellence in cannabis retail,
                  customer service, and community engagement.
                </p>
              </div>

              <div className="grid gap-4">
                {CATEGORIES.map((category) => (
                  <Card key={category.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <category.icon className="text-primary-purple h-8 w-8 min-w-8" />
                        <div>
                          <h3 className="text-lg font-bold">{category.name}</h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-primary-purple text-3xl font-bold tracking-tighter">
                  Vote for Us!
                </h2>
                <p className="text-gray-600">
                  Your support means everything to us. Help us win by casting
                  your vote in the official Best of Lake & Mendocino 2026
                  contest.
                </p>
              </div>

              <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-8 max-w-sm rounded-lg bg-white p-6 shadow">
                    <Image
                      src={voteForUsImage}
                      alt="Best of Lake & Mendocino 2026 Logo - Vote for Us"
                      priority
                    />
                  </div>
                  <h3 className="text-primary-purple mb-4 text-2xl font-bold">
                    Cast Your Vote Today
                  </h3>
                  <p className="mb-6 text-gray-700">
                    Visit the official voting site to support Triple C
                    Collective in all six categories. Every vote counts!
                  </p>
                  <Button
                    className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 px-8 py-3 text-lg font-semibold text-white"
                    asChild
                  >
                    <Link
                      className="text-white"
                      href="https://votebolm.com/triple-c-collective"
                      target="_blank"
                    >
                      Vote Now - Official Site
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-primary-purple mb-3 text-xl font-bold">
                    Why Vote for Triple C Collective?
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <Star className="text-primary-purple mt-1 h-4 w-4 min-w-4" />
                      <span>
                        Expert budtenders with extensive cannabis knowledge
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="text-primary-purple mt-1 h-4 w-4 min-w-4" />
                      <span>
                        Premium quality products and extensive selection
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="text-primary-purple mt-1 h-4 w-4 min-w-4" />
                      <span>Commitment to customer service and community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="text-primary-purple mt-1 h-4 w-4 min-w-4" />
                      <span>
                        Supporting the local Lake County cannabis industry
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            {/* TODO: add the accordion component */}
          </div>
          <hr className="mt-16 pb-4" />
          <h2 className="font-logo py-8 text-center text-4xl font-semibold">
            Frequently Asked Questions
          </h2>
          <div className="px-4 md:px-6">
            <Accordion type="multiple" className="mx-auto">
              {FAQ.map((faq, i) => (
                <AccordionItem value={`item-${i}`} key={faq.id}>
                  <AccordionTrigger>{faq.trigger}</AccordionTrigger>
                  <AccordionContent>{faq.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
}
