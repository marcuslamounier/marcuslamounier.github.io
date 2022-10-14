export type SkillGroupEnum =
  | "FrontEnd"
  | "Backend"
  | "Languages"
  | "Others";

export type SkillEnum =
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
  | "WooCommerce"
  | "PowerBI"
  | "Excel"
  | "MaterialUI"
  | "Python"
  | "Chakra UI"
  | "Java"
  | "C++"
  | "Jira"
  | "MySQL"
  | "PostgreSql"
  | "MongoDB"
  | "Multi-language";

export type Skill = {
  name: SkillEnum;
  grade: 1 | 2 | 3;
};
