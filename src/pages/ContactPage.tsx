import { StackDivider, VStack } from "@chakra-ui/react";
import Contact from "../components/Contact";
import Section from "../components/organisms/Section";

const ContactPage = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={12}
      align="stretch"
    >
      <Section title="Contact me">
        <Contact />
      </Section>
    </VStack>
  );
};

export default ContactPage;
