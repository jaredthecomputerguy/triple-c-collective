import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { type EmailInfo } from "./contact-form";

export const ContactEmail = ({ from, subject, message, name }: EmailInfo) => {
  return (
    <Html lang="en">
      <Text>From: {from}</Text>
      <Text>Name: {name}</Text>
      <Text>Subject: {subject}</Text>
      <Text>Message: {message}</Text>
    </Html>
  );
};
