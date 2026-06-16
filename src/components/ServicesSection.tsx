"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = [
  // Full-Stack (fusionné)
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="m9 8 3 3-3 3M13 14h3" />
  </svg>,
  // IA & Automatisation (sparkles)
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v1M12 20v1M4.22 4.22l.7.7M19.07 19.07l.71.71M3 12h1M20 12h1M4.93 19.07l-.71.71M19.78 4.93l-.71-.71" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 8v1M12 15v1M8 12h1M15 12h1" />
  </svg>,
  // CI/CD
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a9 9 0 1 0 9 9" />
    <path d="M16 3h5v5" />
    <path d="m21 3-5 5" />
  </svg>,
  // Développement logiciel
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <path d="M14 2v6h6M9 13l2 2-2 2M13 17h2" />
  </svg>,
  // Tests & Qualité : checkmark
  <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
  // Sécurité
  <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
];

export function ServicesSection() {
  return (
    <section id="competences" className="border-t border-[var(--line)] relative overflow-hidden">
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

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-28">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 text-center"
        >
          <p className="kicker mb-5" style={{ color: "var(--brand-blue)" }}>Expertise technique</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Compétences
          </h2>
          <p className="text-[var(--muted-strong)] max-w-xl mx-auto text-sm leading-relaxed">
            Les technologies et savoir-faire derrière chaque projet : du prototype au produit déployé.
          </p>
        </motion.div>

        <div className="grid gap-px bg-[var(--line)] rounded-2xl overflow-hidden border border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
              className="bg-[var(--background)] p-8"
            >
              {/* Icône */}
              <div
                className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line-strong)]"
                style={{ color: "var(--brand-blue)" }}
              >
                {ICONS[i]}
              </div>

              {/* Titre */}
              <h3 className="mb-3 text-base font-medium text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm text-[var(--muted-strong)] leading-relaxed">
                {service.description}
              </p>

              {/* Outils */}
              <div className="flex flex-wrap gap-1.5">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 text-[11px] tracking-wide rounded-full border border-[var(--line)] text-[var(--muted-strong)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
