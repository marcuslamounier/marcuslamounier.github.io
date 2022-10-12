import { IconType } from "react-icons/lib";
import {
  SiChakraui,
  SiCplusplus,
  SiExpress,
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
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiFileExcel2Fill } from "react-icons/ri";

type Techs =
  | "TypeScript"
  | "node.js"
  | "GitHub"
  | "JavaScript"
  | "CSS"
  | "express.js"
  | "HTML"
  | "Next.js"
  | "React"
  | "Bootstrap"
  | "Sass"
  | "Wordpress"
  | "Woocommerce"
  | "PowerBI"
  | "Excel"
  | "MaterialUI"
  | "Python"
  | "ChakraUI"
  | "Java"
  | "C++"
  | "Jira"
  | "MySQL"
  | "PostgreSql"
  | "MongoDB";

const techIcons: Record<Techs, IconType> = {
  TypeScript: SiTypescript,
  "node.js": FaNodeJs,
  GitHub: FaGithubSquare,
  JavaScript: FaJsSquare,
  CSS: FaCss3Alt,
  "express.js": SiExpress,
  HTML: FaHtml5,
  "Next.js": TbBrandNextjs,
  React: FaReact,
  Bootstrap: FaBootstrap,
  Sass: FaSass,
  Wordpress: FaWordpress,
  Woocommerce: SiWoo,
  PowerBI: SiPowerbi,
  Excel: RiFileExcel2Fill,
  MaterialUI: SiMaterialui,
  ChakraUI: SiChakraui,
  Java: FaJava,
  Python: FaPython,
  "C++": SiCplusplus,
  Jira: FaJira,
  MySQL: SiMysql,
  PostgreSql: SiPostgresql,
  MongoDB: SiMongodb,
};

const TechIcon = (tech: String) => {
  return techIcons[tech as keyof typeof techIcons];
};

export default TechIcon;
