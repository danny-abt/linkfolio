"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  const nameParts = personalInfo.name.split(" ");
  const firstLine = nameParts.slice(0, 2).join(" ");
  const secondLine = nameParts.slice(2).join(" ");

  return (
    <section className="relative min-h-[92vh] overflow-hidden flex flex-col">
      {/* Image de fond */}
      <div
        className="absolute inset-0 -z-0"
        style={{
          backgroundImage: "url('/laptop.jpg')",
          backgroundSize: "64%",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dégradé gauche — très large */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_0%,var(--background)_35%,rgba(10,10,10,0.8)_52%,rgba(10,10,10,0.2)_68%,transparent_82%)]" />
        {/* Dégradé bas — très large */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background)_0%,var(--background)_22%,rgba(10,10,10,0.8)_38%,rgba(10,10,10,0.3)_52%,transparent_68%)]" />
        {/* Dégradé droite */}
        <div className="absolute inset-0 bg-[linear-gradient(to_left,var(--background)_0%,rgba(10,10,10,0.7)_8%,transparent_28%)]" />
        {/* Dégradé haut */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,rgba(10,10,10,0.5)_10%,transparent_28%)]" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex-1 grid lg:grid-cols-[55fr_45fr]">
        {/* Colonne gauche — texte */}
        <div className="flex items-center px-6 md:px-12 py-24 md:py-32">
          <div className="w-full">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-[var(--muted-strong)] text-sm mb-5"
            >
              {personalInfo.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05, ease: EASE }}
              className="display text-[2.8rem] sm:text-[3.3rem] lg:text-[3.5rem] leading-[1.05] text-white"
            >
              {firstLine}
              <br />
              {secondLine}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="text-lg sm:text-xl text-[var(--muted-strong)] mt-4"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              className="mt-6 text-[var(--muted-strong)] leading-relaxed text-lg max-w-md"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="#projets" className="btn-primary">
                Voir mes projets
                <ArrowUpRight />
              </Link>
              <Link href="#contact" className="btn-secondary">
                Me contacter
                <EnvelopeIcon />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Colonne droite — vide, l'image est en fond */}
        <div className="hidden lg:block" />
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 pb-8 px-6 md:px-12"
      >
        <a
          href="#projets"
          className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-[var(--line-strong)] text-[var(--muted-strong)] hover:text-white hover:border-white transition-colors duration-300"
          aria-label="Faire défiler vers les projets"
        >
          <span className="scroll-bounce">
            <svg width="14" height="20" viewBox="0 0 20 28" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M10 4v18M4 16l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </motion.div>
    </section>
  );
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}
