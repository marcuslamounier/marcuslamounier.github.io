import { ReactNode } from "react";
import { Box, Tooltip } from "@chakra-ui/react";
import { SkillType } from "../../types/SkillType";

type Props = {
  children: ReactNode;
  skill: SkillType;
};

const levels = ["Basics", "Intermediate", "Advanced"];

const GradeTooltip = ({ children, skill}: Props) => {
  return (
    <Tooltip
      placement="top"
      label={
        <Box as="div" textAlign="center">
          {skill.name}
          <br />
          {Array(skill.grade * 2 - 1).fill("★").join(" ")}
          <br />
          {levels[skill.grade - 1]}
        </Box>
      }
    >
      {children}
    </Tooltip>
  );
};

export default GradeTooltip;
