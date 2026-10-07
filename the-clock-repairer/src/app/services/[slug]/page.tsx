import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { CtaPanel, PageHero } from "@/components/Blocks";
import { Check, ClockGlyph, HoroIcon } from "@/components/Icons";
import { Tabs } from "@/components/Interactive";
import { ArrowDisc, Button, Eyebrow, Photo, SectionHead, SplitHead } from "@/components/Primitives";
import { getService, services, timing } from "@/content/services";
import { process, site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.title} in ${site.town}`,
    description: `${s.short} ${s.priceFrom}. Free written estimates and collection across ${site.county}.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <PageHero
        eyebrow={`Service ${s.number}`}
        title={s.title}
        lede={s.lede}
        crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]}
        image={s.image}
        facts={[
          { value: s.priceFrom.replace(/^.* from /, "From "), label: "Guide price" },
          { value: s.turnaround, label: "Typical time" },
          { value: "12 months", label: "Guarantee" },
        ]}
      >
        <Button href={`/contact?service=${s.slug}#enquiry`}>Request an estimate</Button>
        <Button href={site.phoneHref} variant="outline" icon="up">
          {site.phone}
        </Button>
      </PageHero>

      <section className="section">
        <div className="wrap overview">
          <div className="overview__text">
            <Eyebrow>Overview</Eyebrow>
            <h2 className="h2" data-reveal="up">
              What a proper <em>{s.title.toLowerCase().replace(" repairs", "")}</em> repair involves
            </h2>
            {s.intro.map((p, i) => (
              <p key={i} className="overview__p" data-reveal="up" style={d(80 + i * 80)}>
                {p}
              </p>
            ))}
            <ul className="overview__list" data-reveal="up" style={d(240)}>
              {s.highlights.map((h) => (
                <li key={h}>
                  <span>
                    <Check size={16} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <aside className="glance" data-reveal="up" style={d(120)}>
            <span className="glance__icon">
              <HoroIcon name={s.icon} size={52} />
            </span>
            <h3 className="glance__title">At a glance</h3>
            <dl className="glance__list">
              <div>
                <dt>Guide price</dt>
                <dd>{s.priceFrom}</dd>
              </div>
              <div>
                <dt>Typical time</dt>
                <dd>{s.turnaround}</dd>
              </div>
              <div>
                <dt>Estimate</dt>
                <dd>Free and written</dd>
              </div>
              <div>
                <dt>Guarantee</dt>
                <dd>Twelve months</dd>
              </div>
              <div>
                <dt>Collection</dt>
                <dd>Across {site.county}</dd>
              </div>
            </dl>
            <Button href={`/contact?service=${s.slug}#enquiry`} variant="brass">
              Book this service
            </Button>
          </aside>
        </div>
      </section>

      <section className="section section--linen" aria-labelledby="incl-title">
        <div className="wrap">
          <SectionHead
            align="center"
            eyebrow="What is included"
            title={<span id="incl-title">Every stage, done by hand</span>}
            lede="A full service is far more than a clean. These are the steps your piece goes through on our bench."
          />
          <ul className="incl-grid">
            {s.included.map((it, i) => (
              <li key={it.title} className="incl" data-reveal="up" style={d(i * 70)}>
                <span className="incl__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="incl__title">{it.title}</h3>
                <p className="incl__text">{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="types-title">
        <div className="wrap">
          <SplitHead
            eyebrow="What we look after"
            title={
              <span id="types-title">
                Built for <em>every kind</em> of piece
              </span>
            }
            text="Each type of movement has its own quirks. Choose one to see how we approach it."
          />
          <div data-reveal="up">
            <Tabs
              label={`${s.title} by type`}
              items={s.types.map((t) => ({
                label: t.label,
                panel: (
                  <div className="type-panel">
                    <div className="type-panel__text">
                      <h3 className="h3-serif">{t.title}</h3>
                      <p>{t.text}</p>
                      <ol className="type-panel__points">
                        {t.points.map((p, i) => (
                          <li key={p}>
                            <span>{i + 1}.</span>
                            {p}
                          </li>
                        ))}
                      </ol>
                      <Button href={`/contact?service=${s.slug}#enquiry`} variant="outline" size="sm">
                        Ask about yours
                      </Button>
                    </div>
                    <Photo id={s.image} className="type-panel__photo" reveal={false} sizes="(max-width: 900px) 100vw, 45vw" />
                  </div>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      <section className="section faults-section" aria-labelledby="faults-title">
        <div className="wrap faults">
          <div className="faults__head" data-reveal="up">
            <Eyebrow tone="light">Common faults</Eyebrow>
            <h2 id="faults-title" className="h2">
              Sound <em>familiar?</em>
            </h2>
            <p>
              These are the problems we see most often. Nearly all of them can be put right, and none of them mean
              the end of your piece.
            </p>
            <Button href={`/contact?service=${s.slug}#enquiry`} variant="light">
              Describe the problem
            </Button>
          </div>
          <ul className="faults__list">
            {s.faults.map((f, i) => (
              <li key={f.title} className="fault" data-reveal="up" style={d(i * 60)}>
                <span className="fault__icon">
                  <ClockGlyph size={20} />
                </span>
                <div>
                  <h3 className="fault__title">{f.title}</h3>
                  <p className="fault__text">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--enamel" aria-labelledby="steps-title">
        <div className="wrap">
          <SectionHead
            eyebrow="How it works"
            title={
              <span id="steps-title">
                Five steps from <em>call to collection</em>
              </span>
            }
          />
          <ol className="mini-steps">
            {process.map((p, i) => (
              <li key={p.title} className="mini-step" data-reveal="up" style={d(i * 80)}>
                <span className="mini-step__num">{i + 1}</span>
                <h3 className="mini-step__title">{p.title}</h3>
                <p className="mini-step__text">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="related-title">
        <div className="wrap">
          <SplitHead
            eyebrow="Other services"
            title={<span id="related-title">More from the workshop</span>}
            text="Many owners bring us more than one piece. Here is what else we look after."
          />
          <ul className="svc-grid svc-grid--three">
            {others.map((o, i) => (
              <li key={o.slug} data-reveal="up" style={d(i * 90)}>
                <Link href={`/services/${o.slug}`} className="svc-card">
                  <span className="svc-card__top">
                    <span className="svc-card__num">{o.number}.</span>
                    <span className="svc-card__icon">
                      <HoroIcon name={o.icon} size={46} />
                    </span>
                  </span>
                  <span className="svc-card__title">{o.title}</span>
                  <span className="svc-card__text">{o.short}</span>
                  <span className="svc-card__foot">
                    <span className="svc-card__more">Learn more</span>
                    <ArrowDisc />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaPanel
        title={
          <>
            Ready to bring it <em>back to time?</em>
          </>
        }
        text={`Tell us about your piece and we will arrange a free written estimate. ${s.priceFrom}, ${timing(s).charAt(0).toLowerCase()}${timing(s).slice(1)}.`}
        image={s.image === "serviceTurret" ? "workChurch" : "cta"}
      />
    </>
  );
}
