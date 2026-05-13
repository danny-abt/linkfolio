"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import type { Project } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectDetail({ project }: { project: Project }) {
  const thumbnails =
    project.thumbnails && project.thumbnails.length > 0
      ? project.thumbnails.map((src, i) => ({ src, label: `Aperçu ${i + 1}` }))
      : Array.from({ length: 4 }, (_, i) => ({
          src: undefined,
          label: `Aperçu ${i + 1}`,
        }));

  return (
    <section className="relative mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-36">
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mb-10"
      >
        <Link
          href="/projets"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors duration-300 group"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Retour aux projets
        </Link>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
        {/* Colonne gauche — contenu */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="lg:sticky lg:top-28"
        >
          <p className="kicker mb-5" style={{ color: "var(--brand-blue)" }}>Projet</p>
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-white">
            {project.title}
          </h1>
          <p className="mt-6 text-[var(--muted-strong)] leading-relaxed">
            {project.tagline}
          </p>

          {/* Séparateur */}
          <div className="my-10 h-px bg-[var(--line)]" />

          {/* Features */}
          <ul className="space-y-7">
            {project.features.map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
                className="flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--line-strong)] text-white">
                  <FeatureIcon index={i} />
                </span>
                <div>
                  <h3 className="text-white font-medium">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-[var(--muted-strong)] leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Boutons */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Voir le site
                <ArrowUpRight />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Voir le code
                <GithubIcon />
              </a>
            )}
            {!project.live && !project.github && (
              <p className="text-xs text-[var(--muted)] italic">
                Liens à venir
              </p>
            )}
          </div>

          {/* Méta */}
          <div className="mt-16 pt-12 border-t border-[var(--line)] grid grid-cols-3 gap-8 text-sm">
            <Meta label="Rôle" value={project.role} />
            <Meta label="Durée" value={project.duration} />
            <Meta label="Technologies" value={project.tags.join(", ")} />
          </div>
        </motion.div>

        {/* Colonne droite — médias + stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="relative"
        >
          {/* Image ambiante derrière le carousel */}
          <div className="hidden lg:block absolute -inset-8 -z-10 rounded-3xl overflow-hidden pointer-events-none">
            <Image src="/hero.png" alt="" fill sizes="55vw"
              className="object-cover object-right opacity-[0.38]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_0%,transparent_40%,transparent_60%,var(--background)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,var(--background)_30%,transparent_50%,transparent_85%,var(--background)_100%)]" />
          </div>
          <ProjectCarousel
            mainSrc={project.cover}
            mainLabel={`Aperçu ${project.title}`}
            thumbnails={thumbnails}
          />

          {/* Stats / Défi */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mt-10 rounded-xl bg-[var(--surface)] px-8 py-9"
            style={{ border: "1px solid var(--brand-blue-mid)" }}
          >
            <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:items-start">
              <div>
                <div className="flex items-center gap-2.5 mb-3" style={{ color: "var(--brand-blue)" }}>
                  <QuoteIcon />
                  <p className="text-base font-medium">Le défi</p>
                </div>
                <p className="text-sm text-[var(--muted-strong)] leading-relaxed max-w-md">
                  {project.challenge}
                </p>
              </div>
              {project.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-medium tracking-tight tabular-nums" style={{ color: "var(--brand-blue)" }}>
                    {s.value}
                  </p>
                  <p className="mt-2 text-[13px] text-[var(--muted-strong)] leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="kicker text-[10px] mb-2" style={{ color: "var(--brand-blue)" }}>{label}</p>
      <p className="text-sm text-white leading-snug">{value}</p>
    </div>
  );
}

function FeatureIcon({ index }: { index: number }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const icons = [
    <svg key="0" {...props}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
    <svg key="1" {...props}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
    <svg key="2" {...props}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  ];
  return icons[index % icons.length];
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.5 6c-2 0-3.5 1.6-3.5 3.6 0 1.5 1 2.7 2.4 3.1-.5 1.6-1.7 2.5-3.4 2.8v1.5c3.3-.2 6-2.2 6-5.9V6H7.5Zm9 0c-2 0-3.5 1.6-3.5 3.6 0 1.5 1 2.7 2.4 3.1-.5 1.6-1.7 2.5-3.4 2.8v1.5c3.3-.2 6-2.2 6-5.9V6h-1.5Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}
