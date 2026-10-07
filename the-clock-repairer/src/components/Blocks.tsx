import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { ImageKey } from "@/content/images";
import { site } from "@/content/site";
import { timing, type Service } from "@/content/services";
import { Check, HoroIcon, Phone } from "./Icons";
import { Button, Eyebrow, Photo } from "./Primitives";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/* Ring of minute ticks used behind inner page imagery */
export function TrackRing({ className = "" }: { className?: string }) {
  return (
    <svg className={`track-ring ${className}`} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle cx="100" cy="100" r="99" />
      <circle cx="100" cy="100" r="86" />
      {Array.from({ length: 60 }).map((_, i) => (
        <line key={i} x1="100" y1="1" x2="100" y2={i % 5 === 0 ? 14 : 8} transform={`rotate(${i * 6} 100 100)`} />
      ))}
    </svg>
  );
}

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  image,
  children,
  note,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  crumbs: Crumb[];
  image: ImageKey;
  children?: ReactNode;
  note?: { title: string; text: string };
}) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero__grid">
        <div className="page-hero__text">
          <nav aria-label="Breadcrumb" className="crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="h1 page-hero__title">{title}</h1>
          <p className="lede page-hero__lede">{lede}</p>
          {children && <div className="page-hero__actions">{children}</div>}
        </div>
        <div className="page-hero__media">
          <TrackRing className="page-hero__ring" />
          <Photo id={image} className="photo--arch page-hero__photo" priority sizes="(max-width: 900px) 90vw, 460px" />
          {note && (
            <div className="page-hero__note">
              <span className="page-hero__note-icon">
                <Check size={18} />
              </span>
              <span>
                <strong>{note.title}</strong>
                {note.text}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* Closing call to action with an arched photograph */
export function CtaPanel({
  title,
  text,
  image = "cta",
}: {
  title: ReactNode;
  text: string;
  image?: ImageKey;
}) {
  return (
    <section className="section cta">
      <div className="wrap">
        <div className="cta__panel">
          <div className="cta__text" data-reveal="up">
            <Eyebrow>Book a repair</Eyebrow>
            <h2 className="h2">{title}</h2>
            <p className="lede">{text}</p>
            <div className="cta__actions">
              <Button href="/contact">Request an estimate</Button>
              <a href={site.phoneHref} className="cta__phone">
                <span className="cta__phone-icon">
                  <Phone size={18} />
                </span>
                <span>
                  <small>Or call the workshop</small>
                  {site.phone}
                </span>
              </a>
            </div>
          </div>
          <div className="cta__media">
            <TrackRing className="cta__ring" />
            <Photo id={image} className="photo--arch cta__photo" sizes="(max-width: 900px) 80vw, 380px" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Horizontal service row: photo, details, bullet points, link */
export function ServiceRow({ s, index }: { s: Service; index: number }) {
  return (
    <article className="svc-row" data-reveal="up" style={d(index * 60)}>
      <Link href={`/services/${s.slug}`} className="svc-row__media" tabIndex={-1} aria-hidden="true">
        <Photo id={s.image} reveal={false} sizes="(max-width: 900px) 100vw, 420px" />
        <span className="svc-row__num">{s.number}</span>
      </Link>
      <div className="svc-row__body">
        <div className="svc-row__head">
          <span className="svc-row__icon">
            <HoroIcon name={s.icon} size={40} />
          </span>
          <div>
            <h3 className="svc-row__title">
              <Link href={`/services/${s.slug}`}>{s.title}</Link>
            </h3>
            <p className="svc-row__meta">
              {s.priceFrom} <i aria-hidden="true" /> {timing(s)}
            </p>
          </div>
        </div>
        <p className="svc-row__text">{s.lede}</p>
        <ul className="svc-row__list">
          {s.highlights.map((h) => (
            <li key={h}>
              <Check size={16} />
              {h}
            </li>
          ))}
        </ul>
        <div className="svc-row__foot">
          <Button href={`/services/${s.slug}`} variant="outline" size="sm">
            See details
          </Button>
        </div>
      </div>
    </article>
  );
}
