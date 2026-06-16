"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sectors } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = [
  // Finance & Gestion
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>,
  // Commerce en ligne
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>,
  // IA & Analyse documentaire
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 10h8M8 14h5" />
  </svg>,
  // Formation & Accompagnement
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>,
];

export function SectorsSection() {
  return (
    <section className="border-t border-[var(--line)] relative overflow-hidden">
      {/* Image ambiante */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.53]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--background)_0%,transparent_30%,transparent_70%,var(--background)_100%)]" />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_30%,transparent_70%,var(--background)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 py-20 md:py-28">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 text-center"
        >
          <p className="kicker mb-5" style={{ color: "var(--brand-blue)" }}>Domaines</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Secteurs d&apos;intervention
          </h2>
          <p className="text-[var(--muted-strong)] max-w-xl mx-auto text-sm leading-relaxed">
            Des secteurs variés, des projets concrets livrés.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 hover:border-[var(--line-strong)] transition-colors duration-300"
            >
              <div
                className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line-strong)]"
                style={{ color: "var(--brand-blue)" }}
              >
                {ICONS[i]}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {sector.title}
              </h3>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
