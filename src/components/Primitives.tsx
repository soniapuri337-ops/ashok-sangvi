import { type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Hairline({ className = "" }: { className?: string }) {
  const { ref, className: rc } = useReveal<HTMLDivElement>();
  return <div ref={ref} className={`hairline ${rc} ${className}`} />;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "li" | "section";
}) {
  const { ref, className: rc } = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref as never}
      className={`reveal ${rc} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </As>
  );
}

export function SplitHeading({
  text,
  className = "h2",
  level = 2,
  italicFrom,
}: {
  text: string;
  className?: string;
  level?: 1 | 2 | 3;
  italicFrom?: string;
}) {
  const { ref, className: rc } = useReveal<HTMLHeadingElement>();
  const Tag = (`h${level}` as unknown) as "h2";
  const words = text.split(" ");
  const italicIndex = italicFrom ? words.indexOf(italicFrom.split(" ")[0]!) : -1;
  return (
    <Tag ref={ref} aria-label={text} className={`${className} ${rc}`}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          aria-hidden="true"
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
        >
          <span
            className="reveal-word"
            style={{
              transitionDelay: `${i * 0.05}s`,
              fontStyle: italicIndex >= 0 && i >= italicIndex ? "italic" : undefined,
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export function SectionHead({
  eyebrow,
  heading,
  line,
  level = 2,
  center = false,
}: {
  eyebrow: string;
  heading: string;
  line?: string;
  level?: 1 | 2;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : ""}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="mt-4">
        <SplitHeading text={heading} level={level} className={level === 1 ? "h1" : "h2"} />
      </div>
      <div className="mt-6">
        <Hairline />
      </div>
      {line ? (
        <Reveal delay={0.1} className="mt-6">
          <p className={`prose-line ${center ? "mx-auto" : ""}`}>{line}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function ImagePanel({
  src,
  alt,
  w,
  h,
  radius = 20,
  eager = false,
  className = "",
  objectPosition,
  gradient = true,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  radius?: number;
  eager?: boolean;
  className?: string;
  objectPosition?: string;
  gradient?: boolean;
}) {
  const { ref, className: rc } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`img-panel reveal ${eager ? "is-revealed" : rc} relative overflow-hidden bg-mist ${className}`}
      style={{ borderRadius: radius }}
    >
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "sync" : "async"}
        {...(eager ? { fetchPriority: "high" as const } : {})}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
      />
      {gradient ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
          style={{ background: "linear-gradient(to top, rgba(14,74,99,0.3), transparent)" }}
        />
      ) : null}
    </div>
  );
}
