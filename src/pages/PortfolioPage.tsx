import { StackDivider, VStack } from "@chakra-ui/react";
import Section from "../components/organisms/Section";
import Portfolio from "../components/Portfolio";

const PortfolioPage = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={12}
      align="stretch"
    >
      <Section title="Portfolio">
        <Portfolio />
      </Section>
    </VStack>
  );
};

export default PortfolioPage;
