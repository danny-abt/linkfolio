export const personalInfo = {
  name: "Danny Emmanuel Aboutou",
  title: "Software Engineering Student",
  bio: "Étudiant en génie logiciel à l'Université Laval. Je construis des projets réels et déployés — je livre vite en maîtrisant les bons outils.",
  email: "danny-emmanuel.aboutou.1@ulaval.ca",
  github: "https://github.com/danny-abt",
  university: "Université Laval",
  program: "Baccalauréat en génie logiciel",
  graduationYear: 2027,
};

export const aboutStats = [
  { value: "2", label: "Projets déployés" },
];

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
      { name: "CI/CD", icon: "⚡" },
      { name: "MySQL", icon: "🗄" },
      { name: "MongoDB", icon: "🍃" },
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
    live: "https://linkfolio-dea.vercel.app",
  },
  {
    title: "DocuChat",
    description:
      "Application web permettant d'uploader un PDF et de poser des questions sur son contenu via une interface conversationnelle.",
    tags: ["Next.js", "Claude AI", "TypeScript", "Tailwind CSS"],
    live: "https://docuchat-dea.vercel.app",
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
  type: "academic" | "professional" | "certification";
}

export const experiences: Experience[] = [
  {
    title: "Baccalauréat en génie logiciel",
    organization: "Université Laval",
    period: "2023 — 2027 (en cours)",
    description:
      "Sécurité informatique, gestion de projets, interface personne-machine, programmation avancée.",
    type: "academic",
  },
  {
    title: "Formation en apprentissage automatique",
    organization: "Université Laval — Plateforme PAX",
    period: "2025",
    description:
      "Préparation et nettoyage de données, régression, classification. Traitement de données textuelles (ML & deep learning), traitement et analyse d'images, extraction et génération de contenu d'image à l'aide de l'apprentissage profond.",
    type: "certification",
  },
  {
    title: "Responsive Web Design Certification",
    organization: "freeCodeCamp",
    period: "2020",
    description: "Certification en design web responsive — HTML, CSS.",
    type: "certification",
  },
    {
    title: "Développement d'API REST",
    organization: "Université Laval — Processus du génie logiciel",
    period: "Hiver 2026 (en cours)",
    description:
      "Architecture en couches, pipeline CI/CD (GitHub Actions), conteneurisation Docker, déploiement GHCR. Méthode Agile en équipe.",
    type: "academic",
  },
];
