import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { CtaPanel, PageHero } from "@/components/Blocks";
import { HoroIcon } from "@/components/Icons";
import { Button, Eyebrow, SectionHead, SplitHead, Stars } from "@/components/Primitives";
import { WorkGallery } from "@/components/WorkGallery";
import { images } from "@/content/images";
import { featuredWork, recordSteps, work, workService } from "@/content/stories";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent restorations from our Shrewsbury workshop: longcase and bracket clocks, pocket watches, church tower clocks and vintage wristwatches.",
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function OurWorkPage() {
  const f = featuredWork;
  const img = images[f.image];
  const categories = new Set(work.map((w) => w.category)).size;

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Recently back <em>from the bench</em>
          </>
        }
        lede="A selection of clocks and watches restored for owners, parishes and estates across Shropshire. Every one arrived stopped, and every one went home keeping time."
        crumbs={[{ label: "Our Work" }]}
        image="workLongcase"
        facts={[
          { value: String(work.length), label: "Recent restorations shown" },
          { value: String(categories), label: "Specialisms under one roof" },
          { value: "Every stage", label: "Photographed and recorded" },
        ]}
      >
        <Button href="/contact">Start your restoration</Button>
      </PageHero>

      {/* ------------------------------------------------ featured restoration */}
      <section className="section" aria-labelledby="featured-title">
        <div className="wrap featured">
          <figure className="featured__media" data-reveal="up">
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 900px) 100vw, 55vw" />
            <figcaption className="featured__tag">
              <span>Featured restoration</span>
              {f.place}, {f.year}
            </figcaption>
          </figure>

          <div className="featured__body">
            <div data-reveal="up">
              <Eyebrow>Case study</Eyebrow>
              <h2 id="featured-title" className="h2">
                {f.title}
              </h2>
            </div>

            <dl className="featured__meta" data-reveal="up" style={d(80)}>
              <div>
                <dt>The piece</dt>
                <dd>{f.piece}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{f.place}</dd>
              </div>
              <div>
                <dt>At the bench</dt>
                <dd>{f.duration}</dd>
              </div>
              <div>
                <dt>Guarantee</dt>
                <dd>Twelve months</dd>
              </div>
            </dl>

            <div data-reveal="up" style={d(140)}>
              <p className="featured__label">The brief</p>
              <p className="featured__brief">{f.brief}</p>
            </div>

            <div data-reveal="up" style={d(200)}>
              <p className="featured__label">What we did</p>
              <ol className="featured__steps">
                {f.steps.map((s, i) => (
                  <li key={s}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            <figure className="featured__quote" data-reveal="up" style={d(260)}>
              <Stars />
              <blockquote>
                <p>{f.quote.text}</p>
              </blockquote>
              <figcaption>
                <strong>{f.quote.name}</strong> {f.quote.place}
              </figcaption>
            </figure>

            <div data-reveal="up" style={d(300)}>
              <Button href={`/contact?service=${workService[f.category]}#enquiry`}>Restore a piece like this</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ collection */}
      <section className="section section--linen" aria-labelledby="gallery-title">
        <div className="wrap">
          <SplitHead
            eyebrow="The collection"
            title={
              <span id="gallery-title">
                Pieces with a <em>second life</em>
              </span>
            }
            text="Choose a type to narrow the list, then open any restoration to see what we found and what we did."
          />
          <WorkGallery />
        </div>
      </section>

      {/* ------------------------------------------------ the record */}
      <section className="section section--enamel" aria-labelledby="record-title">
        <div className="wrap">
          <SectionHead
            align="center"
            eyebrow="Documented work"
            title={<span id="record-title">Every restoration comes with a record</span>}
            lede="You will always know what was done to your piece, and so will the next person who looks after it."
          />
          <ol className="record">
            {recordSteps.map((r, i) => (
              <li key={r.title} className="record__step" data-reveal="up" style={d(i * 90)}>
                <span className="record__top">
                  <span className="record__icon">
                    <HoroIcon name={r.icon} size={34} />
                  </span>
                  <span className="record__num">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <h3 className="record__title">{r.title}</h3>
                <p className="record__text">{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaPanel
        title={
          <>
            Your piece could be <em>next</em>
          </>
        }
        text="Whatever its age or condition, we will take a careful look and give you an honest view of what is possible."
        image="workHunter"
      />
    </>
  );
}
