import { Box, Icon, Text, Tooltip } from "@chakra-ui/react";
import { SkillEnum } from "../types/SkillType";
import { TechIcon } from "./atoms/TechIcon";

const skills: SkillEnum[] = [
  "Git",
  "Next.js",
  "React",
  "Chakra UI",
  "Bootstrap",
  "MaterialUI",
  "Tailwind CSS",
  "node.js",
  "PostgreSql",
  "MongoDB",
  "Jira",
  "Wordpress",
  "Inkscape",
  "Figma",
];

export const SkillsBrief = () => {
  return (
    <>
      <Text as="p">Some technologies I work with...</Text>
      <Box as="div" w="100%" textAlign="center" my={4} px={6}>
        {skills.map((skill, index) => {
          return (
            <Tooltip
              key={index}
              label={skill}
              placement="top"
              bgColor="gray.500"
            >
              <Box as="span" display="inline-block">
                <Icon
                  mx={4}
                  mb={6}
                  as={TechIcon(skill)}
                  boxSize={{ base: 10, md: 14 }}
                />
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </>
  );
};
