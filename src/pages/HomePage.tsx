import { StackDivider, VStack } from "@chakra-ui/react";
import AboutMeBrief from "../components/AboutMe";
import CustomLink from "../components/atoms/CustomLink";
import Section from "../components/organisms/Section";
import PortfolioBrief from "../components/PortfolioBrief";
import SkillsBrief from "../components/SkillsBrief";

const HomePage = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={12}
      align="stretch"
    >
      <Section title="About Me">
        <AboutMeBrief />
      </Section>

      <Section title="Tech Skills">
        <SkillsBrief />
        <CustomLink url="/skills">
          Know more about my skills...
        </CustomLink>
      </Section>

      <Section title="Recent Work">
        <PortfolioBrief />
        <CustomLink url="/portfolio">
          View complete portfolio...
        </CustomLink>
      </Section>
    </VStack>
  );
};

export default HomePage;
