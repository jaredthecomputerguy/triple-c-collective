const content = `# Triple C Collective

> Triple C Collective is a licensed cannabis dispensary serving Clearlake and Lake County, California.

## Store Information

* [About Us](https://www.tripleccollective.com/about)
* [Delivery](https://www.tripleccollective.com/delivery)
* [Rewards Program](https://www.tripleccollective.com/reward-program)

## Location and Hours

* Location: Clearlake, Lake County, California
* Address: 14196 Lakeshore Drive, Clearlake, CA 95422
* Phone: (707) 701-4160
* Hours: Daily, 10:00 AM 9:30 PM PST

## Products and Services

Triple C Collective serves medical and adult-use cannabis customers, subject to applicable age and eligibility requirements.

* Cannabis flower
* Pre-rolls
* Vape cartridges and concentrates
* Edibles
* Beverages
* Other cannabis products available through the online menu
* In-store shopping
* Delivery, where available and subject to applicable eligibility and service-area restrictions

## Shopping

* [Online Menu](https://triplec.treez.io/onlinemenu)
* [Deals](https://www.tripleccollective.com/deals)
* [Trap Takeover Sale](https://www.tripleccollective.com/deals/trap-takeover)

## Additional Information

* [Home](https://www.tripleccollective.com/)
* [Contact Us](https://www.tripleccollective.com/contact)
* [Privacy Policy](https://www.tripleccollective.com/privacy-policy)
* [Cookie Policy](https://www.tripleccollective.com/cookie-policy)
* [Terms of Use](https://www.tripleccollective.com/terms-of-use)
`;

export const GET = async () => {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain charset=utf-8",
    },
  });
};
