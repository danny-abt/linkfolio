import Image from "next/image";

type MediaSlotProps = {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  ratio?: "video" | "square" | "tall" | "wide";
  objectFit?: "cover" | "contain";
};

const ratioClass: Record<NonNullable<MediaSlotProps["ratio"]>, string> = {
  video: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function MediaSlot({
  src,
  alt = "",
  label,
  className = "",
  ratio = "wide",
  objectFit = "contain",
}: MediaSlotProps) {
  const wrapper = `media-placeholder rounded-xl ${ratioClass[ratio]} ${className}`;

  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${ratioClass[ratio]} ${className} bg-[var(--background)]`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className={objectFit === "cover" ? "object-cover" : "object-contain"}
          priority
        />
      </div>
    );
  }

  return (
    <div className={wrapper}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-[var(--muted)]">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="1.5" />
            <path d="m21 15-3.5-3.5L9 20" />
          </svg>
          {label ? (
            <span className="text-xs tracking-[0.18em] uppercase">{label}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
