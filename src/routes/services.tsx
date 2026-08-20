import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { areas, servicePhases, servicesPage } from "@/data/site";
import { Masthead } from "@/components/Masthead";
import { Hairline, ImagePanel, Reveal, SplitHeading } from "@/components/Primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Ashok Sanghavi, CFP ChFC CLU" },
      {
        name: "description",
        content:
          "Wealth management, retirement planning, strategic tax planning, estate planning, asset protection, business strategies, employee benefits and long term care.",
      },
      { property: "og:title", content: "Services | Ashok Sanghavi, CFP ChFC CLU" },
      {
        property: "og:description",
        content:
          "Wealth management, retirement planning, strategic tax planning, estate planning, asset protection, business strategies, employee benefits and long term care.",
      },
    ],
  }),
  component: Services,
});

/** Fills each phase spine as it scrolls into view. */
function usePhaseSpines() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const nodes = refs.current.filter(Boolean) as HTMLDivElement[];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return refs;
}

function Services() {
  const spines = usePhaseSpines();
  const byAnchor = new Map(areas.map((a) => [a.anchor, a]));

  return (
    <>
      <Masthead
        breadcrumb={servicesPage.breadcrumb}
        eyebrow={servicesPage.eyebrow}
        heading={servicesPage.h1}
        line={servicesPage.line}
      />

      <section className="pt-16 lg:pt-24">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">{servicesPage.phaseEyebrow}</p>
            <div className="mt-4">
              <SplitHeading text={servicesPage.phaseHeading} />
            </div>
            <div className="mt-6">
              <Hairline />
            </div>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="prose-line">{servicesPage.phaseLine}</p>
          </Reveal>
        </div>
      </section>

      {servicePhases.map((phase, pi) => (
        <section key={phase.key} className={`py-16 lg:py-24 ${pi % 2 === 0 ? "" : "bg-mist"}`}>
          <div className="container-site">
            <div
              ref={(el) => {
                spines.current[pi] = el;
              }}
              className="phase-spine grid gap-10 pl-6 lg:grid-cols-12 lg:gap-16 lg:pl-10"
            >
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-[130px]">
                  <p className="font-data text-[11px] uppercase tracking-[0.2em] text-brandLite">
                    Phase {pi + 1} of {servicePhases.length}
                  </p>
                  <h2 className="h2 mt-3 text-balance">{phase.label}</h2>
                  <p className="mt-5 text-[15.5px] leading-[1.7] text-inkSoft">{phase.line}</p>
                </div>
              </div>

              <ul className="lg:col-span-8">
                {phase.anchors.map((anchor, ai) => {
                  const a = byAnchor.get(anchor);
                  if (!a) return null;
                  return (
                    <Reveal as="li" key={anchor} delay={ai * 0.08}>
                      <article
                        id={a.anchor}
                        className="area-row scroll-mt-[120px] border-t border-line py-9 first:border-t-0 first:pt-0 lg:px-6"
                      >
                        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                          <div className="lg:col-span-4">
                            <ImagePanel
                              src={a.image.src}
                              alt={a.image.alt}
                              w={800}
                              h={600}
                              radius={14}
                              className="aspect-[4/3]"
                            />
                          </div>
                          <div className="lg:col-span-8">
                            <h3 className="h3 text-balance">{a.name}</h3>
                            <p className="mt-3 text-[15.5px] leading-[1.7] text-inkSoft">{a.line}</p>

                            <div className="keep-rule mt-6">
                              <p className="keep-label">{servicesPage.keepLabel}</p>
                              <p className="mt-2 font-display text-[1.15rem] italic leading-snug text-brandDeep">
                                {a.keeps}
                              </p>
                            </div>

                            <ul className="mt-6 space-y-2">
                              {a.bullets.map((b) => (
                                <li key={b} className="flex gap-3 text-[15px] leading-[1.6] text-inkSoft">
                                  <span
                                    aria-hidden="true"
                                    className="mt-[9px] h-[5px] w-[5px] shrink-0 rotate-45 bg-brandLite"
                                  />
                                  {b}
                                </li>
                              ))}
                            </ul>

                            <p className="prose-line mt-6 text-[15.5px]">{a.extended}</p>

                            <Link
                              to="/contact"
                              className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-brand"
                            >
                              {servicesPage.discuss}
                              <span className="sr-only"> about {a.name}</span>
                              <ArrowRight size={16} aria-hidden="true" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container-site">
          <div className="rounded-[20px] bg-brandDeep px-7 py-16 text-center lg:px-16">
            <SplitHeading text={servicesPage.closingHeading} className="h2 mx-auto max-w-3xl text-paper" />
            <Reveal delay={0.1} className="mt-6">
              <p className="mx-auto max-w-2xl text-paper/88">{servicesPage.closingLine}</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <Link to="/contact" className="btn bg-paper text-brandDeep hover:bg-sky">
                {servicesPage.closingCta}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
