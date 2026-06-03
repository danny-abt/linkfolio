export const personalInfo = {
  name: "Danny Emmanuel Aboutou",
  firstName: "Danny",
  title: "Développeur Full-Stack",
  greeting: "Bonjour, je suis",
  bio: "6 ans d'expérience en développement front-end\n3 ans en back-end\nBaccalauréat en génie logiciel, Université Laval\nArchitecture solide, sécurité et bonnes pratiques",
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
  challengeLabel?: string | null;
  stats: { value: string; label: string }[];
  cover?: string;
  coverBg?: string;
  video?: string;
  thumbnails?: string[];
  impact?: { value: string; label: string; description: string }[];
}

export const projects: Project[] = [
  {
    slug: "force-du-nombre-sec",
    title: "Force du Nombre S.E.C.",
    tagline:
      "ERP web privé de gestion financière et administrative pour un club d'investissement — mandat freelance.",
    description:
      "Conception et développement complet d'un système remplaçant les processus manuels (Excel) par une plateforme web moderne, sécurisée et maintenable.",
    features: [
      {
        title: "Application web full-stack",
        description:
          "Gestion complète des membres, cotisations et comptabilité du club — interface moderne, base de données relationnelle et API robuste.",
      },
      {
        title: "Architecture en couches",
        description:
          "Code structuré en couches séparées pour garantir la maintenabilité, la testabilité et la facilité d'évolution dans le temps.",
      },
      {
        title: "Authentification & contrôle d'accès par rôles",
        description:
          "Connexion sécurisée avec gestion des rôles — chaque utilisateur accède uniquement aux données et actions qui lui sont autorisées.",
      },
      {
        title: "Moteur de calcul automatique",
        description:
          "Les totaux, soldes et cumuls de chaque membre sont recalculés et mis à jour automatiquement à chaque opération.",
      },
      {
        title: "Pipeline CI/CD — déploiement automatisé",
        description:
          "Tests automatisés et déploiement continu : chaque mise à jour est vérifiée avant d'être mise en production.",
      },
      {
        title: "Sécurité applicative",
        description:
          "Protection des données sensibles du club : accès sécurisés, validation des entrées et défense contre les attaques courantes.",
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
    challengeLabel: "Mandat",
    stats: [],
    cover: "/projects/sec/SEC-home-page.jpg",
    coverBg: "#ffffff",
    impact: [
      {
        value: "~20h",
        label: "économisées par mois",
        description: "Suivi des cotisations, génération des reçus et rapports financiers — tout ce qui se faisait manuellement se fait maintenant en quelques clics.",
      },
      {
        value: "1 clic",
        label: "pour créer et envoyer un reçu",
        description: "Ce qui prenait 15 minutes dans Word — mise en page, export PDF, envoi par email — est réduit à une seule action.",
      },
      {
        value: "Zéro",
        label: "erreur de calcul",
        description: "Les totaux cumulés, soldes et rapports sont calculés et mis à jour automatiquement à chaque opération.",
      },
      {
        value: "100%",
        label: "centralisé et sécurisé",
        description: "Tout l'historique financier du club est dans un seul endroit, sécurisé, au lieu d'être éparpillé dans des fichiers Excel.",
      },
    ],
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
    challengeLabel: null,
    stats: [
      { value: "4", label: "Sections principales (accueil, à paraître, catégories, à propos)" },
      { value: "SSR", label: "Rendu serveur pour SEO et performance" },
      { value: "JWT", label: "Authentification sécurisée" },
    ],
    cover: "/projects/book-host.jpg",
    coverBg: "#ffffff",
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
    challengeLabel: null,
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
    title: "Développement Web — Application de gestion de cabinet",
    organization: "Université Laval — Modèles et langages des bases de données",
    period: "Hiver 2025",
    description:
      "Application web Flask/MySQL multi-rôles (admin, conseiller, client) pour la gestion complète d'un cabinet de conseil financier : CRUD clients et contrats, tableau de bord avec statistiques, authentification sécurisée (bcrypt, sessions Flask), prévention des injections SQL, base de données relationnelle avec procédures stockées et triggers.",
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
  {
    title: "Développement logiciel — Logiciel de gestion électorale",
    organization: "Université Laval — Programmation avancée C++",
    period: "Hiver 2024",
    description:
      "Logiciel de gestion électorale en C++ avec interface graphique (UI).",
    type: "academic",
  },
  {
    title: "Baccalauréat en génie logiciel",
    organization: "Université Laval",
    period: "2023 — 2027 (en cours)",
    description:
      "Formation axée sur le développement backend et frontend, la conception de systèmes, les processus de génie logiciel (Agile, CI/CD), la sécurité applicative et la gestion de projets en équipe.",
    type: "academic",
  },
  {
    title: "Formation en développement web",
    organization: "KidLancers Academy",
    period: "2020",
    description:
      "Apprentissage du développement web et de la conception de sites web par projets concrets",
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
      "Conception et développement d'applications web complètes — interfaces réactives, API robustes, base de données, déploiement. Du wireframe au produit en production.",
    tools: ["Next.js", "React", "TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
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
    title: "Programmation orientée objet",
    description:
      "Conception orientée objet, design patterns, architecture MVC, modélisation et développement de logiciels robustes et maintenables.",
    tools: ["Java", "C/C++", "Python", "Swing", "JUnit", "UML"],
  },
  {
    title: "Sécurité applicative",
    description:
      "Sécurisation des applications web : authentification, protection des données, analyse de vulnérabilités et durcissement des headers HTTP.",
    tools: ["JWT", "bcrypt", "RBAC", "Snyk", "Dependabot", "Headers HTTP"],
  },
];

// Secteurs d'intervention — basés sur les projets réels
export interface Sector {
  title: string;
  description: string;
}

export const sectors: Sector[] = [
  {
    title: "Finance & Gestion",
    description:
      "Développement de plateformes de gestion financière et administrative — suivi des investissements, comptabilité, gestion des membres et génération de documents.",
  },
  {
    title: "Commerce en ligne",
    description:
      "Conception de boutiques et plateformes e-commerce : catalogue produits, système de commande, gestion des comptes utilisateurs et expérience d'achat fluide.",
  },
  {
    title: "IA & Analyse documentaire",
    description:
      "Intégration de modèles d'intelligence artificielle dans des applications web — analyse de documents, extraction d'information et interfaces conversationnelles.",
  },
  {
    title: "Formation & Accompagnement",
    description:
      "Développement de plateformes LMS sur mesure — gestion des parcours de formation, suivi de progression, dépôt de livrables, paiements en ligne et espace tuteur.",
  },
];

// Services orientés client — ce que je propose / valeur livrée
export interface Offer {
  title: string;
  description: string;
}

export const offers: Offer[] = [
  {
    title: "Sites web pour PME, startups & entrepreneurs",
    description:
      "Un site professionnel, moderne et performant qui reflète votre image, renforce votre crédibilité et convertit vos visiteurs en clients.",
  },
  {
    title: "Applications web sur mesure",
    description:
      "Des solutions web conçues précisément pour vos besoins métier — outils de gestion, plateformes internes ou interfaces clients, développées de A à Z.",
  },
  {
    title: "Conseil & analyse de besoin",
    description:
      "J'analyse votre contexte, je clarifie le besoin réel avec vous et je propose la solution la plus adaptée, fiable et durable à votre situation.",
  },
  {
    title: "Automatisation des processus",
    description:
      "Je transforme vos opérations manuelles en flux automatisés, fiables et traçables — pour gagner en efficacité et réduire les risques d'erreur.",
  },
  {
    title: "Déploiement & mise en production",
    description:
      "Mise en ligne, hébergement et intégration continue : votre solution en production, sécurisée, performante et accessible à vos utilisateurs.",
  },
  {
    title: "Maintenance & évolution",
    description:
      "Un accompagnement continu après la livraison — corrections, améliorations et évolutions pour que votre solution reste performante dans le temps.",
  },
];
