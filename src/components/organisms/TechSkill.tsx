import {
  Box,
  HStack,
  Icon,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Skill } from "../../types/SkillType";
import TechIcon from "../atoms/TechIcon";
import GradeDegree from "../molecules/GradeDegree";

type Props = {
  skill: Skill;
};

const TechSkill = ({ skill }: Props) => {
  return (
    <Box
      w="100px"
      display="inline-block"
      mb={{ base: 3, lg: 5 }}
      mx={{ base: 2, md: 4, xl: 6 }}
    >
      <HStack
        w="100px"
        spacing={1.5}
        divider={<StackDivider borderColor="gray.300" />}
      >
        <GradeDegree grade={skill.grade} />
        <Icon
          as={TechIcon(skill.name)}
          boxSize={"calc(30px + 1rem)"}
          alignSelf="center"
        />
      </HStack>
      <Text as="h4" textAlign="right">
        {skill.name}
      </Text>
    </Box>
  );
};

export default TechSkill;
