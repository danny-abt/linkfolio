"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1] as const;
const FORMSPREE_ID = "xojpyrnv";

type Status = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-[var(--line)] relative overflow-hidden">
      {/* Image ambiante droite : identique à Expérience */}
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

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 py-32 md:py-48">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* Colonne gauche : infos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="kicker mb-5" style={{ color: "var(--brand-blue)" }}>Contact</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
              Contact
            </h2>
            <p className="text-[var(--muted-strong)] mb-10">
              Un projet en tête ? N&apos;hésitez pas à me contacter.
            </p>
            <p className="text-sm text-[var(--muted-strong)] leading-relaxed max-w-md mb-12">
              Je suis ouvert aux collaborations, aux missions freelance et aux opportunités
              enrichissantes. {personalInfo.responseTime}
            </p>

            <div className="space-y-7">
              <InfoRow icon={<MailIcon />} value={personalInfo.emailDisplay} label="Email" />
              <InfoRow icon={<PinIcon />} value={personalInfo.location} label={personalInfo.country} />
              <InfoRow icon={<ClockIcon />} value={personalInfo.availability} label={personalInfo.availabilityDate} />
            </div>
          </motion.div>

          {/* Colonne droite : formulaire avec image ambiante */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="lg:pt-2">
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Nom">
                  <input name="name" type="text" required placeholder="Votre nom" className="input-field" />
                </Field>
                <Field label="Email">
                  <input name="email" type="email" required placeholder="Votre adresse email" className="input-field" />
                </Field>
              </div>

              <Field label="Message" className="mt-7">
                <textarea name="message" required rows={6} placeholder="Votre message…" className="input-field resize-none" />
              </Field>

              {status === "success" && (
                <p className="mt-6 text-sm text-green-400">
                  Message envoyé ✓. Je vous réponds sous 48h.
                </p>
              )}
              {status === "error" && (
                <p className="mt-6 text-sm text-red-400">
                  Une erreur s&apos;est produite. Écrivez-moi directement à{" "}
                  <a href={`mailto:${personalInfo.email}`} className="underline">
                    {personalInfo.email}
                  </a>
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="mt-9 w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-md font-medium transition-all duration-300 hover:gap-4 active:scale-[0.99] disabled:opacity-[0.53] disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, var(--brand-blue-mid) 0%, #2a5c75 100%)",
                  color: "#fff",
                }}
              >
                {status === "sending" ? "Envoi…" : status === "success" ? "Envoyé ✓" : "Envoyer le message"}
                {status !== "sending" && status !== "success" && <ArrowRight />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm mb-2.5" style={{ color: "var(--brand-blue)" }}>{label}</span>
      {children}
    </label>
  );
}

function InfoRow({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center" style={{ color: "var(--brand-blue)" }}>
        {icon}
      </span>
      <div className="flex-1 border-l pl-4 -ml-px" style={{ borderColor: "var(--brand-blue-mid)", opacity: 1 }}>
        <p className="text-white">{value}</p>
        <p className="mt-1 text-sm text-[var(--muted)]">{label}</p>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
