"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MediaSlot } from "@/components/MediaSlot";

const EASE = [0.22, 1, 0.36, 1] as const;

type Item = { src?: string; label: string };

export function ProjectCarousel({
  mainSrc,
  mainLabel,
  thumbnails,
  bgColor,
}: {
  mainSrc?: string;
  mainLabel: string;
  thumbnails: Item[];
  bgColor?: string;
}) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const visible = thumbnails.length > 0 ? thumbnails : [];
  const current = visible[active] ?? { src: mainSrc, label: mainLabel };

  return (
    <div>
      {/* Visuel principal */}
      <motion.div
        key={active}
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative overflow-hidden border border-[var(--line)]"
        style={bgColor ? { backgroundColor: bgColor } : undefined}
      >
        <MediaSlot
          ratio="wide"
          src={current.src}
          label={current.label}
          alt={current.label}
          bgColor={bgColor}
        />
      </motion.div>

      {/* Thumbnails */}
      {visible.length > 1 && (
        <div className="relative mt-5">
          <button
            type="button"
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            aria-label="Précédent"
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--background)] text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white hover:text-[var(--background)]"
          >
            <ChevronLeft />
          </button>

          <div
            ref={trackRef}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-3 px-10">
              {visible.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  style={{ borderRadius: 0, ...(bgColor ? { backgroundColor: bgColor } : {}) }}
                  className={`shrink-0 w-[180px] overflow-hidden border transition-all duration-300 ${
                    active === i
                      ? "border-white"
                      : "border-[var(--line)] opacity-60 hover:opacity-100"
                  }`}
                >
                  <MediaSlot ratio="video" src={t.src} label={t.label} bgColor={bgColor} />
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActive((a) => Math.min(visible.length - 1, a + 1))}
            disabled={active === visible.length - 1}
            aria-label="Suivant"
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--background)] text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white hover:text-[var(--background)]"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
