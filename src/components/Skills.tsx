import {
  Box,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SkillType, SkillGroupEnum } from "../types/SkillType";
import { TechSkill } from "./organisms/TechSkill";

type SkillsShowed = Extract<
  SkillGroupEnum,
  "FrontEnd" | "Languages" | "BackEnd" | "Others"
>;

const skills: Record<SkillsShowed, SkillType[]> = {
  FrontEnd: [
    { name: "Next.js", grade: 3 },
    { name: "React", grade: 3 },
    { name: "Vue.js", grade: 2 },
    { name: "AngularJS", grade: 1 },
    { name: "HTML", grade: 3 },
    { name: "CSS", grade: 3 },
    { name: "Chakra UI", grade: 3 },
    { name: "Bootstrap", grade: 3 },
    { name: "MaterialUI", grade: 2 },
    { name: "Tailwind CSS", grade: 2 },
    { name: "Sass", grade: 2 },
    { name: "Figma", grade: 2 },
  ],
  BackEnd: [
    { name: "node.js", grade: 2 },
    { name: "express.js", grade: 2 },
    { name: "MySQL", grade: 2 },
    { name: "PostgreSql", grade: 2 },
    { name: "MongoDB", grade: 2 },
    { name: "GraphQL", grade: 1 },
  ],
  Languages: [
    { name: "TypeScript", grade: 3 },
    { name: "JavaScript", grade: 3 },
    { name: "Python", grade: 3 },
    { name: "C++", grade: 2 },
    { name: "Java", grade: 1 },
  ],
  Others: [
    { name: "Git", grade: 3 },
    { name: "Jira", grade: 2 },
    { name: "Excel", grade: 3 },
    { name: "Wordpress", grade: 2 },
    { name: "PowerBI", grade: 2 },
    { name: "Inkscape", grade: 3 },
    { name: "Photoshop", grade: 1 },
  ],
};

export const Skills = () => {
  return (
    <VStack divider={<StackDivider borderColor="gray.100" />}>
      {Object.keys(skills).map((skillGroup, indexGroup) => {
        return (
          <Box w="100%" key={indexGroup}>
            <Text as="h3">{skillGroup}</Text>
            <Box as="div" textAlign="center">
              {skills[skillGroup as SkillsShowed].map(
                (skill, index) => {
                  return (
                    <TechSkill key={index} skill={skill} />
                  );
                }
              )}
            </Box>
          </Box>
        );
      })}
    </VStack>
  );
};
