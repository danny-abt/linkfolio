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
    slug: "inboxbrief",
    title: "InboxBrief",
    tagline:
      "SaaS qui connecte votre Gmail, classe vos courriels par IA et envoie un résumé quotidien prêt à lire.",
    description:
      "Produit SaaS déployé en production : résumé IA de votre boîte Gmail, abonnement Pro via Stripe, envoi automatisé et application bilingue.",
    features: [
      {
        title: "Résumé intelligent par IA",
        description:
          "Claude analyse vos courriels, les classe par priorité et envoie un brief clair chaque jour.",
      },
      {
        title: "Connexion Gmail sécurisée",
        description:
          "OAuth Google en lecture seule. L'application ne peut jamais modifier ni envoyer de courriel.",
      },
      {
        title: "Envoi automatique programmé",
        description:
          "Le digest est envoyé à l'heure choisie (quotidien, jours ouvrés ou désactivé).",
      },
      {
        title: "Abonnement Pro intégré",
        description:
          "Paiement, factures et renouvellement directement dans l'application. Apple Pay et Google Pay inclus.",
      },
      {
        title: "Chatbot sur vos résumés",
        description:
          "Posez des questions sur le contenu de chaque digest via un assistant conversationnel.",
      },
      {
        title: "Architecture en couches",
        description:
          "Code structuré, testable et évolutif. Chaque service externe est isolé derrière une interface.",
      },
      {
        title: "Données chiffrées",
        description:
          "Courriels, résumés et conversations chiffrés au repos en base de données.",
      },
      {
        title: "Bilingue FR / EN",
        description:
          "Interface et emails en français et anglais, avec SEO intégré.",
      },
    ],
    role: "Développeur Full Stack (produit SaaS)",
    duration: "Juin 2026",
    tags: [
      "Next.js",
      "TypeScript",
      "Claude (Anthropic)",
      "Supabase / PostgreSQL",
      "Stripe",
      "Clerk",
      "Inngest",
      "Resend",
      "Tailwind CSS",
    ],
    live: "https://inboxbriefs.com",
    github: "",
    challenge:
      "Transformer une boîte de réception surchargée en un résumé quotidien fiable, tout en bâtissant un produit SaaS complet avec paiement, tâches planifiées et sécurité des données.",
    challengeLabel: "Produit SaaS",
    stats: [
      { value: "Live", label: "Déployé en production sur inboxbriefs.com" },
      { value: "3 priorités", label: "Classement IA : urgent / important / info" },
      { value: "FR / EN", label: "Application et emails entièrement bilingues" },
    ],
    cover: "/projects/inboxbrief/accueil.png",
    coverBg: "#1a1a1a",
    thumbnails: [
      "/projects/inboxbrief/accueil.png",
      "/projects/inboxbrief/dashboard.png",
    ],
  },
  {
    slug: "force-du-nombre-sec",
    title: "Force du Nombre S.E.C.",
    tagline:
      "ERP web de gestion financière pour un club d'investissement, mandat freelance.",
    description:
      "Remplacement d'un système Excel manuel par une plateforme web complète, sécurisée et maintenable.",
    features: [
      {
        title: "Gestion des membres et cotisations",
        description:
          "Suivi complet des membres, cotisations et comptabilité du club.",
      },
      {
        title: "Architecture en couches",
        description:
          "Code structuré pour garantir la maintenabilité et la testabilité.",
      },
      {
        title: "Authentification & rôles",
        description:
          "Chaque utilisateur accède uniquement à ce qui lui est autorisé.",
      },
      {
        title: "Calculs automatiques",
        description:
          "Totaux, soldes et cumuls mis à jour automatiquement à chaque opération.",
      },
      {
        title: "CI/CD & tests automatisés",
        description:
          "Chaque mise à jour est vérifiée et déployée automatiquement.",
      },
      {
        title: "Sécurité applicative",
        description:
          "Accès sécurisés, validation des données et protection contre les attaques courantes.",
      },
      {
        title: "Documents automatisés",
        description:
          "Reçus PDF et rapports financiers générés en un clic.",
      },
    ],
    role: "Développeur Full Stack (Freelance)",
    duration: "Avril 2026",
    tags: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "GitHub Actions", "Tailwind CSS"],
    live: "",
    github: "",
    challenge:
      "Remplacer un système Excel manuel par une plateforme web sans perte de données ni rupture pour les utilisateurs.",
    challengeLabel: "Mandat",
    stats: [],
    cover: "/projects/sec/SEC-home-page.jpg",
    coverBg: "#ffffff",
    impact: [
      {
        value: "~20h",
        label: "économisées par mois",
        description: "Cotisations, reçus et rapports : tout se fait en quelques clics.",
      },
      {
        value: "1 clic",
        label: "pour créer et envoyer un reçu",
        description: "Ce qui prenait 15 minutes dans Word est réduit à une seule action.",
      },
      {
        value: "Zéro",
        label: "erreur de calcul",
        description: "Totaux, soldes et rapports calculés automatiquement à chaque opération.",
      },
      {
        value: "100%",
        label: "centralisé et sécurisé",
        description: "Tout l'historique financier dans un seul endroit, au lieu de fichiers Excel éparpillés.",
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
      "Boutique e-commerce de précommande de livres avant leur sortie.",
    description:
      "Catalogue par catégories, système de précommande, comptes utilisateurs et design inspiré de l'univers du livre.",
    features: [
      {
        title: "Catalogue par catégories",
        description:
          "Titres à paraître organisés avec filtres dynamiques.",
      },
      {
        title: "Système de précommande",
        description:
          "Réservation d'un livre avant sa sortie, avec confirmation et suivi.",
      },
      {
        title: "Compte utilisateur",
        description:
          "Sessions sécurisées, historique des commandes et préférences.",
      },
      {
        title: "Design éditorial",
        description:
          "Typographie sérif et mise en page inspirée du monde du livre.",
      },
    ],
    role: "Développeur Full Stack",
    duration: "2026",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL"],
    live: "",
    github: "",
    challenge:
      "Créer une expérience d'achat centrée sur la découverte, où l'utilisateur peut explorer et précommander des livres avant leur parution.",
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
      "Posez des questions sur n'importe quel PDF via un chatbot IA.",
    description:
      "Uploadez un PDF, posez vos questions en langage naturel. Propulsé par Claude Sonnet (Anthropic).",
    features: [
      {
        title: "Traitement côté serveur",
        description:
          "Extraction du PDF et appels à l'IA isolés côté serveur. Aucune clé exposée côté client.",
      },
      {
        title: "Gestion des erreurs",
        description:
          "PDF protégé, corrompu, sans OCR, connexion perdue : chaque cas a un message explicite.",
      },
      {
        title: "Conversation multi-tours",
        description:
          "Historique maintenu entre les échanges pour des réponses cohérentes. Upload par drag & drop.",
      },
    ],
    role: "Développeur Full Stack",
    duration: "Février 2026",
    tags: ["Next.js", "TypeScript", "Claude Sonnet (Anthropic)", "Tailwind CSS", "Vercel"],
    live: "https://docuchat-dea.vercel.app",
    github: "",
    challenge:
      "Rendre l'interrogation d'un document aussi simple que poser une question, en couvrant tous les cas d'erreur réels.",
    challengeLabel: null,
    stats: [
      { value: "API", label: "Claude Sonnet (Anthropic)" },
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
    title: "Développement Full-Stack : Force du Nombre S.E.C.",
    organization: "Mandat freelance",
    period: "Avril 2026",
    description:
      "Conception et développement d'un progiciel web privé de gestion financière : architecture en couches, JWT + RBAC, pipeline CI/CD (GitHub Actions), tests unitaires/intégration/E2E, sécurité HTTP, génération de reçus PDF.",
    type: "professional",
  },
  {
    title: "Développement Backend : API REST",
    organization: "Université Laval, Processus du génie logiciel",
    period: "Hiver 2026",
    description:
      "API REST pour plateforme de vente anonyme en équipe Agile : architecture en couches, Clean Code, CI/CD GitHub Actions, conteneurisation Docker, déploiement GHCR, analyse de sécurité Snyk/Dependabot. Base de données : MongoDB.",
    type: "academic",
  },
  {
    title: "Développement logiciel : Logiciel de modélisation",
    organization: "Université Laval, Génie logiciel orienté objet",
    period: "Automne 2025",
    description:
      "Logiciel Java/Swing de modélisation d'installation de plancher chauffant : architecture MVC, moteur de graphe générant automatiquement un chemin en serpentin valide selon des contraintes physiques réelles.",
    type: "academic",
  },
  {
    title: "Développement Web : Application de gestion de cabinet",
    organization: "Université Laval, Modèles et langages des bases de données",
    period: "Hiver 2025",
    description:
      "Application web Flask/MySQL multi-rôles (admin, conseiller, client) pour la gestion complète d'un cabinet de conseil financier : CRUD clients et contrats, tableau de bord avec statistiques, authentification sécurisée (bcrypt, sessions Flask), prévention des injections SQL, base de données relationnelle avec procédures stockées et triggers.",
    type: "academic",
  },
  {
    title: "Formation en apprentissage automatique",
    organization: "Université Laval, Plateforme PAX",
    period: "2025",
    description:
      "Préparation et nettoyage des données, régression, classification, traitement de données textuelles (ML & deep learning), traitement et analyse d'images, extraction et génération de contenu.",
    type: "certification",
  },
  {
    title: "Développement logiciel : Logiciel de gestion électorale",
    organization: "Université Laval, Programmation avancée C++",
    period: "Hiver 2024",
    description:
      "Logiciel de gestion électorale en C++ avec interface graphique (UI).",
    type: "academic",
  },
  {
    title: "Baccalauréat en génie logiciel",
    organization: "Université Laval",
    period: "2023 à 2027 (en cours)",
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
    description: "Du front au back, du design au déploiement.",
    tools: ["Next.js", "React", "Vue.js", "Angular", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "IA & Automatisation",
    description: "Chatbots, intégration d'IA et automatisation de tâches répétitives.",
    tools: ["Claude (Anthropic)", "OpenAI", "LangChain", "Python", "API REST", "Webhooks", "n8n"],
  },
  {
    title: "CI/CD & DevOps",
    description: "Tests automatisés, conteneurisation et déploiement continu.",
    tools: ["GitHub Actions", "Docker", "Git", "Vercel", "Google Cloud", "Azure"],
  },
  {
    title: "Développement logiciel & POO",
    description: "Architecture propre, orientée objet, dans plusieurs langages.",
    tools: ["Python", "Java", "C/C++", "C#", "Rust", "PHP", "Qt", "Swing", "UML", "NumPy", "Scikit-learn"],
  },
  {
    title: "Tests & Qualité",
    description: "Tests unitaires, intégration et E2E pour du code fiable.",
    tools: ["JUnit", "Google Test", "TDD", "Tests E2E", "Tests d'intégration", "ESLint", "Lint"],
  },
  {
    title: "Sécurité applicative",
    description: "Authentification, protection des données et analyse de vulnérabilités.",
    tools: ["JWT", "bcrypt", "RBAC", "Snyk", "Dependabot", "Headers HTTP"],
  },
];

// Secteurs d'intervention, basés sur les projets réels
export interface Sector {
  title: string;
  description: string;
}

export const sectors: Sector[] = [
  {
    title: "Finance & Gestion",
    description:
      "Suivi des membres, cotisations, comptabilité et génération de documents.",
  },
  {
    title: "Commerce en ligne",
    description:
      "Boutiques et plateformes e-commerce avec catalogue, commandes et comptes clients.",
  },
  {
    title: "Formation & Accompagnement",
    description:
      "Plateformes LMS avec parcours, suivi de progression et espace tuteur.",
  },
];

// Services orientés client, ce que je propose / valeur livrée
export interface Offer {
  title: string;
  bullets: string[];
}

export const offers: Offer[] = [
  {
    title: "Développement logiciel",
    bullets: [
      "Applications web, desktop et mobile",
      "Code structuré et maintenable",
      "Livraison complète du projet",
    ],
  },
  {
    title: "Applications web sur mesure",
    bullets: [
      "Portails, tableaux de bord, outils internes",
      "Construit selon votre fonctionnement",
      "De l'idée au déploiement",
    ],
  },
  {
    title: "Conseil & cadrage",
    bullets: [
      "Compréhension de votre contexte",
      "Définition du périmètre avant de développer",
      "Solution adaptée et durable",
    ],
  },
  {
    title: "Automatisation & IA",
    bullets: [
      "Remplacement des tâches manuelles",
      "Chatbots et assistants intelligents",
      "Connexion à des modèles d'IA",
    ],
  },
  {
    title: "Déploiement & mise en ligne",
    bullets: [
      "Hébergement et configuration",
      "Déploiement automatisé",
      "Sécurisé et prêt à l'emploi",
    ],
  },
  {
    title: "Maintenance & suivi",
    bullets: [
      "Corrections après livraison",
      "Ajout de fonctionnalités",
      "Accompagnement continu",
    ],
  },
];
