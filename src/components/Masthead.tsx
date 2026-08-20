import { Link } from "@tanstack/react-router";
import { Hairline, Reveal, SplitHeading } from "@/components/Primitives";

export type MastheadStat = { figure: string; label: string };

export function Masthead({
  breadcrumb,
  eyebrow,
  heading,
  line,
  stats,
}: {
  breadcrumb: string;
  eyebrow: string;
  heading: string;
  line: string;
  stats?: MastheadStat[];
}) {
  return (
    <section className="bg-mist pt-[140px] pb-14 lg:pt-[190px] lg:pb-20">
      <div className="container-site">
        <nav aria-label="Breadcrumb" className="font-data text-[11px] uppercase tracking-[0.2em] text-muted2">
          <Link to="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <span className="px-2" aria-hidden="true">
            /
          </span>
          <span className="text-brand">{breadcrumb}</span>
        </nav>
        <p className="eyebrow mt-6">{eyebrow}</p>
        <div className="mt-4 max-w-4xl">
          <SplitHeading text={heading} level={1} className="h1" />
        </div>
        <Reveal delay={0.1} className="mt-6">
          <p className="prose-line">{line}</p>
        </Reveal>
        <div className="mt-8">
          <Hairline />
        </div>
        {stats?.length ? (
          <Reveal delay={0.15} className="mt-8">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-[2.2rem] leading-none text-brandDeep">{s.figure}</span>
                    <span className="mt-3 block text-[14px] leading-snug text-inkSoft">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
