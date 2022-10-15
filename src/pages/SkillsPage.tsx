import { StackDivider, VStack } from "@chakra-ui/react";
import { Section } from "../components/organisms/Section";
import { Skills } from "../components/Skills";

export const SkillsPage = () => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={12}
      align="stretch"
    >
      <Section title="Tech Skills">
        <Skills />
      </Section>
    </VStack>
  );
};
