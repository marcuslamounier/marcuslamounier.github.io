import { IconType } from "react-icons/lib";
import {
  SiChakraui,
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPowerbi,
  SiTypescript,
  SiWoo,
} from "react-icons/si";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithubSquare,
  FaHtml5,
  FaJava,
  FaJira,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import { TbBrandNextjs, TbLanguage } from "react-icons/tb";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SkillEnum } from "../../types/SkillType";

const techIcons: Record<SkillEnum, IconType> = {
  TypeScript: SiTypescript,
  "node.js": FaNodeJs,
  GitHub: FaGithubSquare,
  JavaScript: SiJavascript,
  CSS: FaCss3Alt,
  "express.js": SiExpress,
  HTML: FaHtml5,
  "Next.js": TbBrandNextjs,
  React: FaReact,
  Bootstrap: FaBootstrap,
  Sass: FaSass,
  Wordpress: FaWordpress,
  WooCommerce: SiWoo,
  PowerBI: SiPowerbi,
  Excel: RiFileExcel2Fill,
  MaterialUI: SiMaterialui,
  "Chakra UI": SiChakraui,
  Java: FaJava,
  Python: FaPython,
  "C++": SiCplusplus,
  Jira: FaJira,
  MySQL: SiMysql,
  PostgreSql: SiPostgresql,
  MongoDB: SiMongodb,
  "Multi-language": TbLanguage,
};

const TechIcon = (tech: String) => {
  return techIcons[tech as keyof typeof techIcons];
};

export default TechIcon;
