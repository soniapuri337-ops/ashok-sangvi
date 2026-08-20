import { createFileRoute, Link } from "@tanstack/react-router";
import { about, images, site } from "@/data/site";
import { Masthead } from "@/components/Masthead";
import { ImagePanel, Reveal, SectionHead, SplitHeading } from "@/components/Primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ashok Sanghavi | CFP, ChFC, CLU, Elkhart Indiana" },
      {
        name: "description",
        content:
          "A Certified Financial Planner and non practicing CPA with a Chartered Accountant background, working under Global Financial Group LLC.",
      },
      { property: "og:title", content: "About Ashok Sanghavi | CFP, ChFC, CLU, Elkhart Indiana" },
      {
        property: "og:description",
        content:
          "A Certified Financial Planner and non practicing CPA with a Chartered Accountant background, working under Global Financial Group LLC.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Masthead
        breadcrumb={about.breadcrumb}
        eyebrow={about.eyebrow}
        heading={about.h1}
        line={about.line}
        stats={about.stats}
      />

      <section className="section">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="shadow-lifted overflow-hidden rounded-[20px]">
              <ImagePanel
                src={site.portrait}
                alt={about.portraitAlt}
                w={1000}
                h={1250}
                radius={20}
                objectPosition="50% 18%"
                className="aspect-[4/5]"
              />
            </div>
            <ul className="mt-8">
              {about.details.map((d) => (
                <li key={d.label} className="border-b border-line py-4">
                  <span className="font-data text-[11px] uppercase tracking-[0.2em] text-muted2">{d.label}</span>
                  <p className="mt-1 text-[15.5px] text-ink">{d.value}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5">
              {about.paragraphs.map((p, n) => (
                <Reveal key={p} delay={n * 0.05}>
                  <p className="prose-line">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} className="mt-10">
              <div>
                <div className="h-px w-24 bg-brandLite" />
                <p className="mt-6 font-display text-[1.9rem] italic leading-snug text-brandDeep">{about.quote}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-site">
          <SectionHead eyebrow="HOW THE WORK RUNS" heading="Four steps, and no surprises" />
          <ul className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
            {about.steps.map((s, n) => (
              <Reveal as="li" key={s.num} delay={n * 0.06} className="h-full">
                <div className="card-flat flex h-full flex-col p-7">
                  <p className="font-display text-[2.4rem] leading-none text-brandLite">{s.num}</p>
                  <h3 className="h3 mt-4 min-h-[2.5em] leading-[1.25] text-balance">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.68] text-inkSoft">{s.body}</p>
                  <div className="mt-auto pt-7">
                    <div className="h-px w-full bg-line" />
                    <p className="mt-3 font-data text-[10.5px] uppercase tracking-[0.18em] text-muted2">
                      {s.tag}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHead eyebrow={about.practice.eyebrow} heading={about.practice.heading} />
            <div className="mt-8 space-y-5">
              {about.practice.paragraphs.map((p, n) => (
                <Reveal key={p} delay={0.1 + n * 0.05}>
                  <p className="prose-line">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} className="mt-8">
              <Link to="/contact" className="btn btn-primary">
                {about.practice.cta}
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <ImagePanel
              src={site.team}
              alt={about.practice.teamAlt}
              w={1390}
              h={927}
              objectPosition="50% 32%"
              className="aspect-[4/3]"
            />
            <p className="sr-only">{images.aboutPractice.alt}</p>
          </div>
        </div>
      </section>
    </>
  );
}
