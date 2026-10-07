import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { images, type ImageKey } from "@/content/images";
import { ArrowRight, ArrowUpRight } from "./Icons";

/* A tiny dial used as the eyebrow marker */
export function MiniDial({ size = 18 }: { size?: number }) {
  return (
    <svg className="mini-dial" width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="8.6" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 3v1.6M17 10h-1.6M10 17v-1.6M3 10h1.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path className="mini-dial__hand" d="M10 10V5.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 10l2.6 1.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Eyebrow({ children, tone }: { children: ReactNode; tone?: "light" }) {
  return (
    <p className={`eyebrow${tone === "light" ? " eyebrow--light" : ""}`}>
      <MiniDial />
      <span>{children}</span>
    </p>
  );
}

/* Hairline with a minute track centre, used under centred headings */
export function Ornament({ tone }: { tone?: "light" }) {
  return (
    <svg
      className={`ornament${tone === "light" ? " ornament--light" : ""}`}
      width="132"
      height="14"
      viewBox="0 0 132 14"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 7h46M86 7h46" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={i}
          d={`M${50 + i * 4} ${i % 4 === 0 ? 2 : 4.5}V${i % 4 === 0 ? 12 : 9.5}`}
          stroke="currentColor"
          strokeWidth={i % 4 === 0 ? 1.4 : 1}
        />
      ))}
    </svg>
  );
}

type BtnVariant = "primary" | "brass" | "outline" | "light" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  size?: "md" | "sm";
  icon?: "arrow" | "up" | "none";
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "children">;

export function Button({ href, children, variant = "primary", size = "md", icon = "arrow", className = "", ...rest }: ButtonProps) {
  const cls = `btn btn--${variant} btn--${size}${icon === "none" ? " btn--plain" : ""} ${className}`.trim();
  const Glyph = icon === "up" ? ArrowUpRight : ArrowRight;
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      {icon !== "none" && (
        <span className="btn__icon" aria-hidden="true">
          <span className="btn__glyphs">
            <Glyph size={size === "sm" ? 15 : 17} />
            <Glyph size={size === "sm" ? 15 : 17} />
          </span>
        </span>
      )}
    </>
  );
  const external = /^(https?:|tel:|mailto:)/.test(href);
  if (external) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

/* Circular arrow used in cards, rotates on hover of the parent */
export function ArrowDisc({ label }: { label?: string }) {
  return (
    <span className="arrow-disc" aria-hidden={label ? undefined : true}>
      <ArrowUpRight size={18} />
      {label && <span className="sr-only">{label}</span>}
    </span>
  );
}

type PhotoProps = {
  id: ImageKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
  reveal?: boolean;
  style?: CSSProperties;
  fill?: boolean;
};

export function Photo({ id, className = "", sizes = "(max-width: 900px) 100vw, 50vw", priority, reveal = true, style, fill = true }: PhotoProps) {
  const img = images[id];
  return (
    <div className={`photo ${className}`} data-reveal={reveal ? "photo" : undefined} style={style}>
      {fill ? (
        <Image src={img.src} alt={img.alt} fill sizes={sizes} priority={priority} className="photo__img" />
      ) : (
        <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes={sizes} priority={priority} className="photo__img" />
      )}
    </div>
  );
}

type HeadProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  tone?: "light";
  as?: "h1" | "h2";
  children?: ReactNode;
};

export function SectionHead({ eyebrow, title, lede, align = "left", tone, as: H = "h2", children }: HeadProps) {
  return (
    <header className={`section-head section-head--${align}${tone ? " section-head--light" : ""}`} data-reveal="up">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <H className="h2">{title}</H>
      {align === "center" && <Ornament tone={tone} />}
      {lede && <p className="lede">{lede}</p>}
      {children}
    </header>
  );
}

/* Heading on the left, supporting paragraph on the right */
export function SplitHead({ eyebrow, title, text, action }: { eyebrow: string; title: ReactNode; text: ReactNode; action?: ReactNode }) {
  return (
    <div className="split-head">
      <div className="split-head__main" data-reveal="up">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="h2">{title}</h2>
        {action && <div className="split-head__action">{action}</div>}
      </div>
      <p className="split-head__text" data-reveal="up" style={{ "--d": "120ms" } as CSSProperties}>
        {text}
      </p>
    </div>
  );
}

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="stars" role="img" aria-label={`${count} out of 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="m12 2.8 2.7 5.9 6.4.7-4.8 4.3 1.4 6.3L12 16.8 6.3 20l1.4-6.3-4.8-4.3 6.4-.7L12 2.8Z" />
        </svg>
      ))}
    </span>
  );
}
