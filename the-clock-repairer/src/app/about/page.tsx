import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { CtaPanel, PageHero } from "@/components/Blocks";
import { HoroIcon } from "@/components/Icons";
import { Tabs } from "@/components/Interactive";
import { Counter } from "@/components/Motion";
import { Button, Eyebrow, Photo, SectionHead, SplitHead } from "@/components/Primitives";
import type { IconName } from "@/content/services";
import { site, stats } from "@/content/site";
import { team, timeline, values } from "@/content/stories";

export const metadata: Metadata = {
  title: "About the Workshop",
  description:
    "A family clock and watch repair workshop in Shrewsbury, Shropshire. Four decades of restoring longcase, bracket, carriage, pocket watch and turret clocks by hand.",
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
const valueIcons: IconName[] = ["wheel", "loupe", "report", "contract"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            A family workshop that <em>repairs before it replaces</em>
          </>
        }
        lede={`Since ${site.founded} we have looked after the clocks and watches of ${site.county}, from farmhouse longcases to the tower clocks of parish churches.`}
        crumbs={[{ label: "About" }]}
        image="about"
        note={{ title: `Since ${site.founded}`, text: "Four benches, one standard of care" }}
      >
        <Button href="/contact">Talk to the workshop</Button>
        <Button href="/our-work" variant="outline" icon="up">
          Recent work
        </Button>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SplitHead
            eyebrow="How we work"
            title={
              <>
                Patient work, <em>honest</em> advice
              </>
            }
            text="We believe a good repair should be invisible. The clock should look as it always has, sound as it always has and simply keep better time. That means keeping original parts, correcting wear by hand and never doing more than a piece needs."
          />
          <ul className="value-grid">
            {values.map((v, i) => (
              <li key={v.title} className="value-card" data-reveal="up" style={d(i * 90)}>
                <span className="value-card__num">{String(i + 1).padStart(2, "0")}.</span>
                <span className="value-card__icon">
                  <HoroIcon name={valueIcons[i]} size={40} />
                </span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__text">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--linen" aria-labelledby="story-title">
        <div className="wrap">
          <SectionHead
            align="center"
            eyebrow="Through the years"
            title={<span id="story-title">Four decades at the bench</span>}
            lede="From a single bench and a secondhand lathe to a workshop trusted with some of the county's oldest clocks."
          />
          <div data-reveal="up">
            <Tabs
              label="Our history"
              variant="year"
              items={timeline.map((t) => ({
                label: t.year,
                panel: (
                  <div className="story">
                    <Photo id={t.image} className="story__photo" reveal={false} sizes="(max-width: 900px) 100vw, 50vw" />
                    <div className="story__text">
                      <p className="story__year">{t.year}</p>
                      <h3 className="h3-serif">{t.title}</h3>
                      <p>{t.text}</p>
                    </div>
                  </div>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      <section className="section section--tight stats-band" aria-label="The workshop in numbers">
        <div className="wrap">
          <ul className="stats-row">
            {stats.map((s, i) => (
              <li key={s.label} data-reveal="up" style={d(i * 80)}>
                <p className="stats-row__num">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="stats-row__label">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="wrap">
          <SplitHead
            eyebrow="The bench"
            title={
              <span id="team-title">
                The hands behind <em>every repair</em>
              </span>
            }
            text="A small team means the person who inspects your piece is the person who restores it. You will always know who is working on your clock or watch."
          />
          <ul className="team-grid">
            {team.map((m, i) => (
              <li key={m.name} className="person" data-reveal="up" style={d(i * 90)}>
                <div className="person__portrait" aria-hidden="true">
                  <span className="person__ring" />
                  <span className="person__initials">{m.initials}</span>
                </div>
                <div className="person__body">
                  <h3 className="person__name">{m.name}</h3>
                  <p className="person__role">{m.role}</p>
                  <p className="person__note">{m.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--enamel quote-band">
        <div className="wrap quote-band__grid">
          <Photo id="movement" className="quote-band__photo" sizes="(max-width: 900px) 100vw, 40vw" />
          <figure className="quote-band__body" data-reveal="up">
            <Eyebrow>Our approach</Eyebrow>
            <blockquote>
              <p>
                A good conservator will advise you on ongoing care, from winding and hand setting to cleaning and
                regulation, and will always work to the principle of minimum intervention.
              </p>
            </blockquote>
            <figcaption>The idea every repair at our bench is built on</figcaption>
          </figure>
        </div>
      </section>

      <CtaPanel
        title={
          <>
            Bring us the clock that <em>everyone has given up on</em>
          </>
        }
        text="Send us a few photographs or call for a chat. We will tell you honestly what we see and what it would take to bring it back."
      />
    </>
  );
}
