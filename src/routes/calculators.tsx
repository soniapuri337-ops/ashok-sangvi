import { createFileRoute, Link } from "@tanstack/react-router";
import { calcPage } from "@/data/site";
import { Masthead } from "@/components/Masthead";
import { CalcCards } from "@/components/CalcCards";
import { Reveal } from "@/components/Primitives";

export const Route = createFileRoute("/calculators")({
  head: () => ({
    meta: [
      { title: "Financial Calculators | Ashok Sanghavi, CFP ChFC CLU" },
      {
        name: "description",
        content:
          "Investment, inflation, retirement savings, mortgage and income tax calculators, free and open in a new window.",
      },
      { property: "og:title", content: "Financial Calculators | Ashok Sanghavi, CFP ChFC CLU" },
      {
        property: "og:description",
        content:
          "Investment, inflation, retirement savings, mortgage and income tax calculators, free and open in a new window.",
      },
    ],
  }),
  component: Calculators,
});

function Calculators() {
  return (
    <>
      <Masthead
        breadcrumb={calcPage.breadcrumb}
        eyebrow={calcPage.eyebrow}
        heading={calcPage.h1}
        line={calcPage.line}
      />

      <section className="section">
        <div className="container-site">
          <Reveal>
            <p className="max-w-3xl text-[19px] text-inkSoft">{calcPage.opening}</p>
          </Reveal>
          <div className="mt-12">
            <CalcCards />
          </div>
          <Reveal delay={0.1} className="mt-8">
            <p className="max-w-3xl text-[14px] text-muted2">{calcPage.note}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-14">
            <div className="rounded-[20px] border border-line p-8 lg:p-12">
              <h2 className="h3">{calcPage.closingHeading}</h2>
              <p className="prose-line mt-4">{calcPage.closingBody}</p>
              <Link to="/contact" className="btn btn-primary mt-7">
                {calcPage.closingCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
