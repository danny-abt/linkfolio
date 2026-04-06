"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/content";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// REMPLACE cet ID par le tien (formspree.io → New Form)
const FORMSPREE_ID = "xojpyrnv";
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-muted max-w-lg mx-auto">
            Un projet en tête ? N&apos;hésitez pas à me contacter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {formState === "success" ? (
            <div className="text-center py-16 px-6 bg-card border border-card-border rounded-2xl">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
              <p className="text-muted">
                Merci pour ton message. Je te répondrai dans les plus brefs
                délais.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-6 text-sm text-accent-light hover:text-accent transition-colors"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-muted mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-card-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              {formState === "error" && (
                <p className="text-red-400 text-sm">
                  Une erreur s&apos;est produite. Tu peux aussi me contacter à{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-accent-light underline"
                  >
                    {personalInfo.email}
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "sending"}
                className="w-full py-3 rounded-lg bg-accent hover:bg-accent-light text-white font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "sending" ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
