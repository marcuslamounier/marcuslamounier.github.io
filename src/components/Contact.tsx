import { Text } from "@chakra-ui/react";
import CustomLink from "./atoms/CustomLink";

const Contact = () => {
  return (
    <Text as="p">
      Did you like my profile? Please contact me via{" "}
      <CustomLink url="https://www.linkedin.com/in/marcuslamounier/">
        LinkedIn
      </CustomLink>
      .
    </Text>
  );
};

export default Contact;
