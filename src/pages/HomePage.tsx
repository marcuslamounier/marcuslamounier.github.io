import { StackDivider, VStack } from "@chakra-ui/react";
import AboutMeBrief from "../components/AboutMeBrief";
import PortfolioBrief from "../components/PortfolioBrief";

const HomePage = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={12}
      align="stretch"
    >
      <AboutMeBrief />
      {/* <Section title="Tech Skills">abc</Section> */}
      <PortfolioBrief />
      {/* <Section title="Get in touch">abc</Section> */}
    </VStack>
  );
};

export default HomePage;
