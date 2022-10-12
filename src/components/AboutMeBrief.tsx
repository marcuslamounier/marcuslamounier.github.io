import { Text } from "@chakra-ui/react";
import CustomLink from "./atoms/CustomLink";
import Section from "./organisms/Section";

const AboutMeBrief = () => {
  return (
    <Section title="About Me">
      <Text as="p">
        I work as a Software Engineer and can also exert the role of
        ProductOwner in Scrum projects.
      </Text>
      <Text as="p">
        Started my career as Informatics Technician. Graduated in Production
        Engineering and executed jobs in within continuous improvement and
        business assessment for small companies. Returned to my original area
        and graduated as Information Systems Bachelor. Worked in various
        projects using JavaScript and TypeScript based frameworks. I can also
        handle tasks in a huge range of software. I can work in administrative
        and operational areas as well.
      </Text>
      <CustomLink url="/about-me" label="More about me..." />
    </Section>
  );
};

export default AboutMeBrief;
