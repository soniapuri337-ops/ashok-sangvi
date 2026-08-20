import { createFileRoute, Link } from "@tanstack/react-router";
import { beliefs, beliefsPage, images } from "@/data/site";
import { Masthead } from "@/components/Masthead";
import { Hairline, Reveal, SplitHeading } from "@/components/Primitives";

export const Route = createFileRoute("/core-beliefs")({
  head: () => ({
    meta: [
      { title: "Core Beliefs | Ashok Sanghavi, CFP ChFC CLU" },
      {
        name: "description",
        content:
          "Five principles for the risk averse. Capital preservation, steady income, diversification, insurance and a long term perspective.",
      },
      { property: "og:title", content: "Core Beliefs | Ashok Sanghavi, CFP ChFC CLU" },
      {
        property: "og:description",
        content:
          "Five principles for the risk averse. Capital preservation, steady income, diversification, insurance and a long term perspective.",
      },
    ],
  }),
  component: CoreBeliefs,
});

function CoreBeliefs() {
  return (
    <>
      <Masthead
        breadcrumb={beliefsPage.breadcrumb}
        eyebrow={beliefsPage.eyebrow}
        heading={beliefsPage.h1}
        line={beliefsPage.line}
      />

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <p className="max-w-3xl text-[19px] text-inkSoft">{beliefsPage.opening}</p>
          </Reveal>
        </div>
      </section>

      {beliefs.map((b, n) => (
        <section key={b.num} className={n % 2 === 0 ? "bg-mist py-16 lg:py-20" : "py-16 lg:py-20"}>
          <div className="container-site grid gap-6 lg:grid-cols-12 lg:gap-12">
            <p className="font-display text-[3rem] leading-none text-brandLite lg:col-span-2">{b.num}</p>
            <div className="lg:col-span-3">
              <h2 className="h3">{b.title}</h2>
              <div className="mt-4">
                <Hairline />
              </div>
            </div>
            <Reveal delay={0.05} className="lg:col-span-7">
              <p className="prose-line">{b.body}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-[20px] bg-brandDeep px-7 py-20 text-center lg:px-16">
            <img
              src={images.beliefs.src}
              alt=""
              width={images.beliefs.w}
              height={images.beliefs.h}
              loading="lazy"
              decoding="async"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="relative">
              <SplitHeading text={beliefsPage.closingHeading} className="h2 mx-auto max-w-3xl text-paper" />
              <Reveal delay={0.1} className="mt-8">
                <Link to="/contact" className="btn bg-paper text-brandDeep hover:bg-sky">
                  {beliefsPage.closingCta}
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
