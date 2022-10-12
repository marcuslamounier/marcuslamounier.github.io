import { StackDivider, VStack } from "@chakra-ui/react";
import Portfolio from "../components/Portfolio";

const PortfolioPage = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={12}
      align="stretch"
    >
      <Portfolio />
    </VStack>
  );
};

export default PortfolioPage;
