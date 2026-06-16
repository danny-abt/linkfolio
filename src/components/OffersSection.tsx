"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { offers } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICONS = [
  // Sites web (globe)
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  // Applications sur mesure (layout)
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>,
  // Conseil (loupe)
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5M8 11h6M11 8v6" />
  </svg>,
  // Automatisation (engrenage)
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>,
  // Déploiement (fusée)
  <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
  // Maintenance (clé)
  <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
];

export function OffersSection() {
  return (
    <section id="services" className="border-t border-[var(--line)] relative overflow-hidden">
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
          <p className="kicker mb-5" style={{ color: "var(--brand-blue)" }}>Ce que je propose</p>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
            Services
          </h2>
          <p className="text-[var(--muted-strong)] max-w-xl mx-auto text-sm leading-relaxed">
            Ce que je fais pour vous : de l&apos;analyse du besoin à la mise en production.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 hover:border-[var(--line-strong)] transition-colors duration-300"
            >
              {/* Icône */}
              <div
                className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line-strong)]"
                style={{ color: "var(--brand-blue)" }}
              >
                {ICONS[i]}
              </div>

              {/* Titre */}
              <h3 className="mb-3 text-lg font-semibold text-white">
                {offer.title}
              </h3>

              {/* Bullets */}
              <ul className="space-y-2">
                {offer.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-[var(--muted-strong)]">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "var(--brand-blue)" }} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
