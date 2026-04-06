"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/content";

export default function Contact() {
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

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          action={`mailto:${personalInfo.email}`}
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
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
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent hover:bg-accent-light text-white font-medium transition-colors"
          >
            Envoyer
          </button>
        </motion.form>
      </div>
    </section>
  );
}
