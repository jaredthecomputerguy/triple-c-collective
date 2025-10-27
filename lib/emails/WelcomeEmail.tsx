import {
  Body,
  Container,
  Head,
  Heading,
  Text,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Link,
  Column,
  Hr
} from "@react-email/components";

type WelcomeEmailProps = {
  siteUrl: string;
  contactId: string;
};

export const WelcomeEmail = ({ contactId }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb"
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px"
              }
            }
          }
        }}
      >
        <Preview>Welcome - Triple C Newsletter</Preview>
        <Body className="bg-offwhite font-sans text-base">
          <Container className="bg-white p-45">
            <Img
              className="mx-auto h-24 w-24"
              src={`https://tripleccollective.com/images/logo.png`}
            />
            <Heading className="my-0 mb-4 text-center leading-8">
              Welcome to the Triple C Newsletter
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Thank you for your support, we look forward to keeping you
                  updated on the latest events, exclusive offers, and important
                  store news.
                </Text>

                <Text className="text-base">
                  As a subscriber, you&apos;ll get exclusive access to:
                </Text>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="w-[90%]">
                  <Text className="m-0 text-[20px] leading-[28px] font-semibold text-gray-900">
                    Upcoming Events
                  </Text>
                  <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                    Be the first to know about our in-store events, product
                    launches, and more.
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr className="mx-0 my-[24px] w-full border border-solid !border-gray-300" />
            <Section>
              <Row>
                <Column className="w-[90%]">
                  <Text className="m-0 text-[20px] leading-[28px] font-semibold text-gray-900">
                    Exclusive Deals
                  </Text>
                  <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                    Receive special offers, discounts, and promotions just for
                    you.
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr className="mx-0 my-[24px] w-full border border-solid !border-gray-300" />
            <Section>
              <Row>
                <Column className="w-[90%]">
                  <Text className="m-0 text-[20px] leading-[28px] font-semibold text-gray-900">
                    Holiday & Store Updates
                  </Text>
                  <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                    Stay informed with important updates and holiday hours.
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr className="mx-0 my-[24px] w-full border border-solid !border-gray-300" />

            <Text className="text-center underline">
              <Link
                href={`https://tripleccollective.com/newsletter/unsubscribe?contactId=${contactId}`}
              >
                Unsubscribe
              </Link>
            </Text>

            <Text className="m-0 text-center text-gray-400">
              Triple C Collective
            </Text>
            <Text className="m-0 text-center text-gray-400">
              14196 Lakeshore Dr, Clearlake, CA
            </Text>
            <Text className="m-0 text-center text-gray-400">
              (707) 701-4160
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
