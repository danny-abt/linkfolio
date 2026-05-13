export const personalInfo = {
  name: "Danny Emmanuel Aboutou",
  firstName: "Danny",
  title: "Étudiant en génie logiciel",
  greeting: "Salut, je suis",
  bio: "Je construis des projets réels et déployés — je livre vite en maîtrisant les bons outils. Je travaille en Agile avec des livrables concrets, en appliquant les bonnes pratiques : architecture solide, clean code, tests, sécurité et documentation.",
  email: "abdanny05@gmail.com",
  emailDisplay: "abdanny05@gmail.com",
  github: "https://github.com/danny-abt",
  location: "Québec, QC",
  country: "Canada",
  availability: "Disponible pour de nouveaux projets",
  availabilityDate: "Dès maintenant",
  responseTime: "Réponse sous 48h.",
  university: "Université Laval",
  program: "Baccalauréat en génie logiciel",
};

export interface Project {
  slug: string;
  title: string;
  shortTitle?: string;
  tagline: string;
  description: string;
  features: { title: string; description: string }[];
  role: string;
  duration: string;
  tags: string[];
  github?: string;
  live?: string;
  challenge: string;
  stats: { value: string; label: string }[];
  cover?: string;
  video?: string;
  thumbnails?: string[];
}

export const projects: Project[] = [
  {
    slug: "force-du-nombre-sec",
    title: "Force du Nombre S.E.C.",
    tagline:
      "Progiciel web privé de gestion financière et administrative pour un club d'investissement — mandat freelance.",
    description:
      "Conception et développement complet d'un système remplaçant les processus manuels (Excel) par une plateforme web moderne, sécurisée et maintenable.",
    features: [
      {
        title: "Stack full-stack typé & base de données",
        description:
          "Application Next.js, TypeScript, Prisma ORM et PostgreSQL — gestion des membres/investisseurs, suivi des cotisations et comptabilité complète, avec modèle de données normalisé et migrations versionnées.",
      },
      {
        title: "Architecture en couches (présentation / domaine / persistance)",
        description:
          "Séparation stricte des responsabilités garantissant la maintenabilité et l'extensibilité : chaque couche est isolée, testable indépendamment et remplaçable sans casser les autres.",
      },
      {
        title: "Authentification JWT & contrôle d'accès par rôles (RBAC)",
        description:
          "Sessions sécurisées avec rotation automatique des tokens, contrôle d'accès granulaire par rôle — chaque action est protégée côté serveur via Server Actions Next.js.",
      },
      {
        title: "Moteur de calcul interne",
        description:
          "Mise à jour automatique des valeurs d'investissement et du cumul de cotisations de chaque membre à chaque opération — cohérence des données garantie par transactions Prisma.",
      },
      {
        title: "Pipeline CI/CD complet — GitHub Actions",
        description:
          "Pipeline automatisé couvrant tests unitaires, d'intégration, de persistance, E2E et analyse statique (ESLint) — zéro déploiement sans green build.",
      },
      {
        title: "Sécurité applicative",
        description:
          "Headers HTTP durcis (CSP, HSTS, X-Frame-Options), protection contre les injections via Prisma ORM, gestion des sessions et validation stricte des entrées côté serveur.",
      },
      {
        title: "Documents automatisés (PDF & exports)",
        description:
          "Génération automatique de reçus PDF individuels et de rapports financiers exportables — remplace la création manuelle document par document.",
      },
    ],
    role: "Développeur Full Stack (Freelance)",
    duration: "Avril 2026",
    tags: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "GitHub Actions", "Tailwind CSS"],
    live: "",
    github: "",
    challenge:
      "Remplacer un système Excel manuel par une plateforme web moderne, sécurisée et maintenable, sans perte de données ni rupture pour les utilisateurs existants.",
    stats: [
      { value: "7", label: "Modules développés (auth, membres, cotisations, reçus…)" },
      { value: "5", label: "Types de tests automatisés (unit., intégr., persistance, E2E, lint)" },
      { value: "3", label: "Couches d'architecture (présentation / domaine / persistance)" },
    ],
    cover: "/projects/sec/SEC-home-page.jpg",
    thumbnails: [
      "/projects/sec/SEC-auth.png",
      "/projects/sec/SEC-home-page.jpg",
      "/projects/sec/SEC-stat.png",
      "/projects/sec/SEC-comptabilité.png",
    ],
  },
  {
    slug: "precommande-livres",
    title: "Précommande Livres",
    tagline:
      "Plateforme e-commerce de précommande de livres — découvrez les titres à paraître et réservez avant leur sortie.",
    description:
      "Conception et développement d'une boutique en ligne spécialisée dans la précommande de livres, avec catalogue par catégories, gestion des comptes utilisateurs et système de panier.",
    features: [
      {
        title: "Catalogue et navigation par catégories",
        description:
          "Parcours des titres à paraître organisés par catégories avec filtres dynamiques — expérience de navigation fluide et intuitive.",
      },
      {
        title: "Système de précommande",
        description:
          "Flux de commande complet permettant aux utilisateurs de réserver un livre avant sa date de sortie, avec confirmation et suivi.",
      },
      {
        title: "Authentification & compte utilisateur",
        description:
          "Gestion des sessions sécurisées, historique des commandes et préférences utilisateur.",
      },
      {
        title: "Design éditorial",
        description:
          "Interface soignée, typographie sérif et mise en page inspirée du monde de l'édition — expérience cohérente avec l'univers du livre.",
      },
    ],
    role: "Développeur Full Stack",
    duration: "2026",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL"],
    live: "",
    github: "",
    challenge:
      "Créer une expérience d'achat en ligne centrée sur la découverte, où l'utilisateur peut facilement trouver, explorer et précommander des livres avant leur parution.",
    stats: [
      { value: "4", label: "Sections principales (accueil, à paraître, catégories, à propos)" },
      { value: "SSR", label: "Rendu serveur pour SEO et performance" },
      { value: "JWT", label: "Authentification sécurisée" },
    ],
    cover: "/projects/book-host.jpg",
    thumbnails: ["/projects/book-host.jpg"],
  },
  {
    slug: "docuchat",
    title: "DocuChat",
    tagline:
      "AI PDF Analyzer — interrogez n'importe quel document en langage naturel via un chatbot IA.",
    description:
      "Application web full-stack permettant d'uploader un PDF et de poser des questions sur son contenu via une interface conversationnelle propulsée par Claude Sonnet (Anthropic).",
    features: [
      {
        title: "Architecture client/serveur stricte",
        description:
          "Extraction du texte PDF traitée côté serveur, appels à l'API Claude Sonnet isolés dans des routes API dédiées — aucune clé secrète exposée côté client.",
      },
      {
        title: "Gestion exhaustive des cas d'erreur",
        description:
          "Tous les cas d'échec couverts : PDF protégé par mot de passe, scanné sans OCR, corrompu, serveurs surchargés, perte de connexion, dépassement de la limite de taille Vercel — avec messages utilisateur explicites pour chaque cas.",
      },
      {
        title: "Conversation multi-tours avec historique contextuel",
        description:
          "Historique conversationnel maintenu entre les échanges pour des réponses cohérentes, interface drag & drop pour l'upload, déployé sur Vercel.",
      },
    ],
    role: "Développeur Full Stack",
    duration: "Février 2026",
    tags: ["Next.js", "TypeScript", "Claude Sonnet (Anthropic)", "Tailwind CSS", "Vercel"],
    live: "https://docuchat-dea.vercel.app",
    github: "",
    challenge:
      "Rendre l'interrogation d'un document long aussi simple que poser une question, tout en couvrant rigoureusement les cas d'erreur réels rencontrés en production.",
    stats: [
      { value: "API", label: "Claude Sonnet — Anthropic" },
      { value: "6+", label: "Cas d'erreur gérés explicitement" },
      { value: "SSR", label: "Extraction PDF côté serveur" },
    ],
    cover: "/projects/docuchat/docuchat-upload.png",
    thumbnails: [
      "/projects/docuchat/docuchat-upload.png",
      "/projects/docuchat/docuchat-chat.png",
    ],
  },
];

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "academic" | "professional" | "certification";
}

const TYPE_LABELS: Record<Experience["type"], string> = {
  academic: "Académique",
  professional: "Professionnel",
  certification: "Certification",
};

export const experienceTypeLabel = (t: Experience["type"]) => TYPE_LABELS[t];

export const experiences: Experience[] = [
  {
    title: "Baccalauréat en génie logiciel",
    organization: "Université Laval",
    period: "2023 — 2027 (en cours)",
    description:
      "Formation approfondie en génie logiciel couvrant la sécurité informatique, la gestion de projets, l'interface homme-machine et la programmation avancée.",
    type: "academic",
  },
  {
    title: "Développement Full-Stack — Force du Nombre S.E.C.",
    organization: "Mandat freelance",
    period: "Avril 2026",
    description:
      "Conception et développement d'un progiciel web privé de gestion financière : architecture en couches, JWT + RBAC, pipeline CI/CD (GitHub Actions), tests unitaires/intégration/E2E, sécurité HTTP, génération de reçus PDF.",
    type: "professional",
  },
  {
    title: "Développement Backend — API REST",
    organization: "Université Laval — Processus du génie logiciel",
    period: "Hiver 2026",
    description:
      "API REST pour plateforme de vente anonyme en équipe Agile : architecture en couches, Clean Code, CI/CD GitHub Actions, conteneurisation Docker, déploiement GHCR, analyse de sécurité Snyk/Dependabot. Base de données : MongoDB.",
    type: "academic",
  },
  {
    title: "Développement logiciel — Logiciel de modélisation",
    organization: "Université Laval — Génie logiciel orienté objet",
    period: "Automne 2025",
    description:
      "Logiciel Java/Swing de modélisation d'installation de plancher chauffant : architecture MVC, moteur de graphe générant automatiquement un chemin en serpentin valide selon des contraintes physiques réelles.",
    type: "academic",
  },
  {
    title: "Développement Web — Application de gestion",
    organization: "Université Laval — Modèles et langages des bases de données",
    period: "Hiver 2025",
    description:
      "Application web Flask/MySQL pour automatiser la gestion d'un cabinet de conseil : hachage bcrypt, prévention injections SQL, sessions sécurisées, base de données relationnelle avec procédures stockées et triggers.",
    type: "academic",
  },
  {
    title: "Développement logiciel — Logiciel de gestion électorale",
    organization: "Université Laval — Programmation avancée C++",
    period: "Hiver 2024",
    description:
      "Logiciel de gestion électorale en C++ avec interface graphique (UI).",
    type: "academic",
  },
  {
    title: "Formation en apprentissage automatique",
    organization: "Université Laval — Plateforme PAX",
    period: "2025",
    description:
      "Préparation et nettoyage des données, régression, classification, traitement de données textuelles (ML & deep learning), traitement et analyse d'images, extraction et génération de contenu.",
    type: "certification",
  },
];

export const competences = [
  "Sécurité, Architecture logicielle",
  "CI/CD, Automatisation métier",
  "Next.js, TypeScript, Prisma ORM, PostgreSQL, Tailwind CSS",
];

export interface Service {
  title: string;
  description: string;
  tools: string[];
}

export const services: Service[] = [
  {
    title: "Développement Full-Stack",
    description:
      "Conception et développement d'applications web complètes, du front-end au back-end, avec une stack moderne et typée.",
    tools: ["Next.js", "TypeScript", "Node.js", "Prisma ORM", "PostgreSQL"],
  },
  {
    title: "Front-End",
    description:
      "Interfaces réactives, accessibles et performantes. Design system, composants réutilisables et expérience utilisateur soignée.",
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Back-End & API",
    description:
      "Architecture en couches, API REST robustes, authentification sécurisée (JWT, RBAC), gestion des sessions et validation côté serveur.",
    tools: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "CI/CD & DevOps",
    description:
      "Pipeline d'intégration et de déploiement continu couvrant tests automatisés, analyse statique, conteneurisation et déploiement cloud.",
    tools: ["GitHub Actions", "Docker", "Vercel", "Azure", "Google Cloud", "Neon", "Supabase"],
  },
  {
    title: "Développement logiciel",
    description:
      "Clean code, architecture solide (MVC, couches), tests automatisés, documentation technique et revue de code.",
    tools: ["Python", "Java", "C/C++", "Swing", "JUnit", "Flask", "TDD", "ESLint"],
  },
  {
    title: "Sécurité applicative",
    description:
      "Sécurisation des applications web : authentification, protection des données, analyse de vulnérabilités et durcissement des headers HTTP.",
    tools: ["JWT", "bcrypt", "RBAC", "Snyk", "Dependabot", "Headers HTTP"],
  },
];
