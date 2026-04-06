export const personalInfo = {
  name: "Danny Emmanuel Aboutou",
  title: "Software Engineering Student",
  bio: "Étudiant en génie logiciel à l'Université Laval, passionné par le développement web, les systèmes distribués et la création de solutions logicielles élégantes.",
  email: "danny-emmanuel.aboutou.1@ulaval.ca",
  github: "https://github.com/danny-abt",
  university: "Université Laval",
  program: "Baccalauréat en génie logiciel",
  graduationYear: 2027,
};

export const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expériences", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Langages",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "C/C++", icon: "⚙️" },
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "✦" },
      { name: "TypeScript", icon: "TS" },
      { name: "HTML/CSS", icon: "🌐" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Node.js", icon: "▲" },
      { name: "Express", icon: "Ex" },
      { name: "Vue.js", icon: "V" },
      { name: "React", icon: "⚛" },
      { name: "Next.js", icon: "N" },
      { name: "Flask", icon: "🧪" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    title: "Outils & Infrastructure",
    skills: [
      { name: "Git/GitHub", icon: "🔀" },
      { name: "Docker", icon: "🐳" },
      { name: "MySQL", icon: "🗄" },
      { name: "MongoDB", icon: "🍃" },
      { name: "VS Code", icon: "📝" },
      { name: "Linux", icon: "🐧" },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "LinkFolio",
    description:
      "Portfolio personnel moderne construit avec Next.js, TypeScript et Tailwind CSS. Design dark premium avec animations fluides.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/danny-abt/linkfolio",
  },
  {
    title: "Projet à venir",
    description:
      "Un nouveau projet est en cours de développement. Restez à l'affût !",
    tags: ["Coming Soon"],
  },
  {
    title: "Projet à venir",
    description:
      "Un nouveau projet est en cours de développement. Restez à l'affût !",
    tags: ["Coming Soon"],
  },
];

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "academic" | "professional";
}

export const experiences: Experience[] = [
  {
    title: "Baccalauréat en génie logiciel",
    organization: "Université Laval",
    period: "2023 — 2027 (en cours)",
    description:
      "Formation approfondie en conception logicielle, algorithmes, systèmes d'exploitation, bases de données et génie logiciel appliqué.",
    type: "academic",
  },
];
