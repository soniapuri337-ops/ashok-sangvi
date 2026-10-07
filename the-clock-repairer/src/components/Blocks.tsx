import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { images, type ImageKey } from "@/content/images";
import { site } from "@/content/site";
import { timing, type Service } from "@/content/services";
import { Check, HoroIcon, Phone } from "./Icons";
import { Parallax } from "./Motion";
import { Button, Eyebrow, Photo } from "./Primitives";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

type Crumb = { label: string; href?: string };
export type Fact = { value: string; label: string };

const defaultFacts: Fact[] = [
  { value: "Free", label: "Written estimates" },
  { value: "12 months", label: "Guarantee on overhauls" },
  { value: `Since ${site.founded}`, label: "At the bench in Shrewsbury" },
];

/* Inner page opening: title and intro side by side, then a wide banner with key facts */
export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  image,
  children,
  facts = defaultFacts,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  crumbs: Crumb[];
  image: ImageKey;
  children?: ReactNode;
  facts?: Fact[];
}) {
  const img = images[image];
  return (
    <section className="page-hero">
      <div className="wrap">
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
        <div className="page-hero__head">
          <div className="page-hero__main">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="h1 page-hero__title">{title}</h1>
          </div>
          <div className="page-hero__side">
            <p className="lede page-hero__lede">{lede}</p>
            {children && <div className="page-hero__actions">{children}</div>}
          </div>
        </div>
        <div className="page-hero__banner">
          <div className="page-hero__frame">
            <Parallax className="page-hero__media" speed={0.08}>
              <Image src={img.src} alt={img.alt} fill priority sizes="(max-width: 1340px) 100vw, 1260px" className="page-hero__img" />
            </Parallax>
          </div>
          <ul className="page-hero__facts">
            {facts.map((f) => (
              <li key={f.label}>
                <span className="page-hero__fact-value">{f.value}</span>
                <span className="page-hero__fact-label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Closing call to action: copy on the left, full height photograph on the right */
export function CtaPanel({
  title,
  text,
  image = "cta",
}: {
  title: ReactNode;
  text: string;
  image?: ImageKey;
}) {
  const img = images[image];
  return (
    <section className="section cta">
      <div className="wrap">
        <div className="cta__panel" data-reveal="up">
          <div className="cta__text">
            <Eyebrow>Book a repair</Eyebrow>
            <h2 className="h2">{title}</h2>
            <p className="lede">{text}</p>
            <ul className="cta__points">
              {["Free written estimate", "Collection across Shropshire", "Twelve month guarantee"].map((t) => (
                <li key={t}>
                  <Check size={16} />
                  {t}
                </li>
              ))}
            </ul>
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
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 900px) 100vw, 45vw" className="cta__img" />
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
