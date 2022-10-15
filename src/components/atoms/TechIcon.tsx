import { IconType } from "react-icons/lib";
import { SkillEnum } from "../../types/SkillType";
import {
  SiAdobephotoshop,
  SiChakraui,
  SiCplusplus,
  SiExpress,
  SiGit,
  SiGitlab,
  SiGraphql,
  SiInkscape,
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPowerbi,
  SiTailwindcss,
  SiTypescript,
  SiWoo,
} from "react-icons/si";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGithubSquare,
  FaHtml5,
  FaJava,
  FaJira,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import { TbBrandNextjs, TbLanguage } from "react-icons/tb";
import { RiFileExcel2Fill } from "react-icons/ri";

const techIcons: Record<SkillEnum, IconType> = {
  TypeScript: SiTypescript,
  "node.js": FaNodeJs,
  GitHub: FaGithubSquare,
  GitLab: SiGitlab,
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
  Figma: FaFigma,
  Inkscape: SiInkscape,
  Photoshop: SiAdobephotoshop,
  "Vue.js": FaVuejs,
  AngularJS: FaAngular,
  "Tailwind CSS": SiTailwindcss,
  Git: SiGit,
  GraphQL: SiGraphql,
};

const TechIcon = (tech: String) => {
  return techIcons[tech as keyof typeof techIcons];
};

export default TechIcon;
