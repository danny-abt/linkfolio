"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { MediaSlot } from "@/components/MediaSlot";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectsSection() {
  return (
    <section id="projets" className="border-t border-[var(--line)] relative overflow-hidden">
      {/* Image ambiante droite */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-100"
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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              Projets récents
            </h2>
            <p className="mt-3 text-sm text-[var(--muted-strong)]">Projets professionnels et personnels.</p>
          </div>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            >
              <Link href={`/projets/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-xl border border-[var(--line)] mb-5 transition-all duration-500 group-hover:border-[var(--line-strong)]">
                  <div className="transition-transform duration-700 group-hover:scale-[1.03]">
                    <MediaSlot
                      ratio="video"
                      label={project.title}
                      src={project.cover}
                      objectFit="contain"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-medium text-white group-hover:opacity-80 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted-strong)] leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>
                  <span className="shrink-0 mt-1 text-[var(--muted)] group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300">
                    <ArrowUpRight />
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] tracking-wide text-[var(--muted-strong)] border border-[var(--line)] rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
