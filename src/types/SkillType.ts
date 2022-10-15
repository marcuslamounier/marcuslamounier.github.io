export type SkillGroupEnum =
  | "FrontEnd"
  | "BackEnd"
  | "Languages"
  | "Others";

export type SkillEnum =
  | "TypeScript"
  | "node.js"
  | "GitHub"
  | "GitLab"
  | "Git"
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
  | "Multi-language"
  | "Figma"
  | "Inkscape"
  | "Photoshop"
  | "Vue.js"
  | "AngularJS"
  | "Tailwind CSS"
  | "GraphQL";

export type SkillType = {
  name: SkillEnum;
  grade: 1 | 2 | 3;
};
