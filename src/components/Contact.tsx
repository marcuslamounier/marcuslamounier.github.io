import { Link, Text } from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Text as="p">
      Did you like my profile? Please contact me via{" "}
      <Link
        href="https://www.linkedin.com/in/marcuslamounier/"
        target="_blank"
      >
        Linkedin
      </Link>
      .
    </Text>
  );
};
