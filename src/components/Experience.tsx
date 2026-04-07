"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/content";

const badgeStyle = {
  academic: "bg-accent/10 text-accent-light",
  professional: "bg-green-500/10 text-green-400",
  certification: "bg-yellow-500/10 text-yellow-400",
};

const badgeLabel = {
  academic: "Académique",
  professional: "Professionnel",
  certification: "Certification",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Parcours</h2>
          <p className="text-muted max-w-lg mx-auto">
            Mon parcours académique, projets et formations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className={`relative pl-12 md:pl-0 mb-10 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              {/* dot */}
              <div
                className={`absolute top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-[0_0_8px_rgba(109,40,217,0.5)] ${
                  index % 2 === 0
                    ? "left-4 md:left-auto md:-right-1.5"
                    : "left-4 md:-left-1.5"
                }`}
              />

              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-mono mb-2 ${
                  badgeStyle[exp.type]
                }`}
              >
                {badgeLabel[exp.type]}
              </span>
              <h3 className="text-base font-semibold leading-snug">
                {exp.title}
              </h3>
              <p className="text-accent-light text-sm">{exp.organization}</p>
              <p className="text-muted text-xs mb-2">{exp.period}</p>
              <p className="text-muted text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
