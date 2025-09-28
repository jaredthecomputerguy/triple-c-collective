import {
  Head,
  Tailwind,
  Preview,
  Hr,
  Link,
  Body,
  Heading,
  Section,
  Row,
  Text,
  Container,
  Html,
  Img,
  CodeInline,
} from "@react-email/components";

interface NewSubscriberEmailProps {
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
}

const NewSubscriberEmail = ({
  email,
  firstName,
  lastName,
  createdAt,
}: NewSubscriberEmailProps) => {
  const hasName = !!firstName || !!lastName;

  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Preview>{email} Just Subscribed to the Newsletter!</Preview>
        <Body className="bg-offwhite font-sans text-base">
          <Container className="bg-white p-45">
            <Img
              className="mx-auto h-24 w-24"
              src={`https://triplecnewsletter.com/opengraph-image.png`}
            />
            <Heading className="my-0 mb-4 text-center leading-8">
              New Subscriber Alert!
            </Heading>

            <Hr className="mx-0 my-[24px] w-full border border-solid !border-gray-300" />
            <Section>
              <Row>
                <Text className="text-base">The newsletter is growing...</Text>
                <CodeInline className="rounded-[6px] bg-gray-300 px-[4px] py-[2px]">
                  {hasName && `${firstName} ${lastName} | `}
                  {email}
                </CodeInline>{" "}
                <Text className="text-base">just subscribed at </Text>
                <CodeInline className="rounded-[6px] bg-gray-300 px-[4px] py-[2px]">
                  {createdAt.toLocaleString("en-US", { timeZone: "PST" })}
                </CodeInline>
                <Text className="text-base">
                  See more details in the{" "}
                  <Link href="https://resend.com/emails" target="_blank">
                    Resend Dashboard
                  </Link>
                  .
                </Text>
                <Hr className="mx-0 my-[24px] w-full border border-solid border-gray-300" />
                <Text className="text-center font-mono text-2xl font-bold">
                  Have a great day!
                </Text>
              </Row>
            </Section>

            <Hr className="mx-0 my-[24px] w-full border border-solid !border-gray-300" />

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

NewSubscriberEmail.PreviewProps = {
  email: "test@test.com",
  firstName: "Test",
  lastName: "User",
  createdAt: new Date(),
} satisfies NewSubscriberEmailProps;

export default NewSubscriberEmail;
