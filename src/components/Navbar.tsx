"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/experiences", label: "Expériences" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[color-mix(in_srgb,var(--background)_75%,transparent)] backdrop-blur-xl border-b border-[var(--line)]">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="text-2xl font-medium tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          Portfolio<span style={{ color: "var(--brand-blue)" }}>.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors duration-300 ${
                  active ? "text-white" : "text-[var(--muted-strong)] hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-white"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn-secondary">
          Me contacter
          <ArrowUpRight />
        </Link>
      </div>
    </header>
  );
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
