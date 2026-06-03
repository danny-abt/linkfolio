"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences, experienceTypeLabel } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ExperienceSection({ compact = false }: { compact?: boolean }) {
  const items = compact ? experiences.slice(0, 4) : experiences;

  return (
    <section id="experiences" className="border-t border-[var(--line)] relative overflow-hidden">
      {/* Image ambiante droite */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.53]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_0%,transparent_40%,var(--background)_100%)]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_40%,transparent_85%,var(--background)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 py-32 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-20"
        >
          <p className="kicker mb-5" style={{ color: "var(--brand-blue)" }}>Parcours</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Parcours
          </h2>
          <p className="text-[var(--muted-strong)] max-w-xl mx-auto text-sm leading-relaxed">
            Formation académique, projets professionnels et certifications — du génie logiciel orienté objet à la sécurité applicative.
          </p>
        </motion.div>

        <div className="relative">
          {/* Ligne verticale — bleu identité */}
          <div className="absolute left-3 top-3 bottom-3 w-px bg-[var(--brand-blue-mid)] opacity-[0.53]" />

          <ol className="space-y-16 md:space-y-0 md:grid md:grid-cols-[1fr_1.2fr_auto] md:gap-x-10 md:gap-y-16">
            {items.map((exp, i) => (
              <motion.li
                key={exp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
                className="relative pl-12 md:pl-12 md:grid md:grid-cols-subgrid md:col-span-3"
              >
                {/* Dot avec halo bleu */}
                <span className="absolute left-0 top-3 flex h-6 w-6 items-center justify-center">
                  <span className="absolute h-6 w-6 rounded-full bg-[var(--background)] border border-[var(--brand-blue-mid)] opacity-[0.53]" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--brand-blue)]" />
                </span>

                <div>
                  <p className="kicker text-[10px] mb-3" style={{ color: "var(--brand-blue)" }}>
                    {experienceTypeLabel(exp.type)}
                  </p>
                  <h3 className="text-xl md:text-2xl font-medium text-white leading-tight">
                    {exp.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--muted-strong)]">
                    {exp.organization}
                  </p>
                </div>

                <div className="mt-4 md:mt-1 md:pl-2">
                  <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-3 md:mt-1 md:pl-4 md:text-right">
                  <p className="text-sm text-[var(--muted-strong)] tabular-nums whitespace-pre-line">
                    {exp.period}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
