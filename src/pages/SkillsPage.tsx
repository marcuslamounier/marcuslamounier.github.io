import { StackDivider, VStack } from "@chakra-ui/react";
import Section from "../components/organisms/Section";
import TechSkills from "../components/TechSkills";

const SkillsPage = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={12}
      align="stretch"
    >
      <Section title="Tech Skills">
        <TechSkills />
      </Section>
    </VStack>
  );
};

export default SkillsPage;
