import { Clock, MapPin, Truck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardContent } from "@/app/_components/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/app/_components/table";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Delivery",
  description:
    "Craft cannabis delivery straight to your door with Triple C Collective.",
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
    "delivery"
  ],
  openGraph: {
    title: "Delivery | Triple C Collective",
    description: "Lake County's Premier Cannabis Dispensary",
    siteName: "Triple C Collective",
    locale: "en_US",
    type: "website"
  }
});

export default function DeliveryPage() {
  return (
    <main className="bg-[#fefefe]" id="main-content">
      <div className="mx-auto max-w-7xl bg-[#fefefe] px-4 py-6 sm:py-12">
        <section>
          <h1 className="font-logo py-4 text-4xl font-semibold">
            Cannabis Delivery in Lake County
          </h1>
          <hr className="pb-6" />
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-primary-purple text-3xl font-bold tracking-tighter">
                    Information
                  </h2>
                  <p className="text-gray-600">
                    We offer convenient delivery services to select areas in
                    Lake County. Our professional drivers ensure your products
                    arrive safely and discreetly.
                  </p>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Clock className="text-primary-purple h-6 w-6 min-w-6" />
                        <div>
                          <h3 className="font-bold">Delivery Times</h3>
                          <p className="text-sm text-gray-600">
                            We offer delivery services twice a day if we have a
                            driver available:
                          </p>
                          <ul className="mt-2 list-inside list-disc text-sm text-gray-600">
                            <li>12:00 PM</li>
                            <li>5:00 PM</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Truck className="text-primary-purple size-6 min-w-6" />
                        <div>
                          <h3 className="font-bold">Delivery Process</h3>
                          <p className="text-sm text-gray-600">
                            Place your order at least 15 minutes before our
                            delivery times. Our driver will contact you when
                            they&apos;re on the way. Please have your ID ready
                            for verification.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="text-primary-purple size-6 min-w-6" />
                        <div>
                          <h3 className="font-bold">Service Areas</h3>
                          <p className="text-sm text-gray-600">
                            We currently deliver to Clearlake, Lower Lake,
                            Clearlake Oaks, Twin Lakes, Hidden Valley,
                            Glenhaven, Cobb, Kelseyville, Middletown, Lucerne,
                            Spring Valley, Lakeport, and Upper Lake.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-primary-purple text-3xl font-bold tracking-tighter">
                    Delivery Fees
                  </h2>
                  <p className="text-gray-600">
                    Our delivery fees vary based on your location. See the table
                    below for specific pricing.
                  </p>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Location</TableHead>
                      <TableHead>Delivery Fee</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Clearlake & Lower Lake
                      </TableCell>
                      <TableCell>$10</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Clearlake Oaks & Twin Lakes
                      </TableCell>
                      <TableCell>$12</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Hidden Valley & Glenhaven
                      </TableCell>
                      <TableCell>$25</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Cobb, Kelseyville, Nice, Middletown, Lucerne, & Spring
                        Valley
                      </TableCell>
                      <TableCell>$30</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Lakeport & Upper Lake
                      </TableCell>
                      <TableCell>$35</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="text-primary-purple mb-2 text-2xl font-bold">
                    Ready to place an order?
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Call us to speak to an experieced budtender to help find the
                    products you want or browse our online menu to place an
                    order.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Link
                        className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 my-4 inline-block gap-2 rounded-sm px-6 py-2 font-semibold text-white outline-hidden transition-all md:text-xl"
                        href="tel:7077014160">
                        Call us: (707) 701-4160
                      </Link>
                    </div>
                  </div>
                  <Link
                    className="bg-primary-purple hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:bg-primary-purple/50 my-4 inline-block rounded-sm px-6 py-2 font-semibold text-white outline-hidden transition-all md:text-xl"
                    href="https://triplec.treez.io/onlinemenu/"
                    target="_blank">
                    Place an Order Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
