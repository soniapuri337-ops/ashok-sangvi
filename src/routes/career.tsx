import { createFileRoute } from "@tanstack/react-router";
import { careerPage, images, site } from "@/data/site";
import { Masthead } from "@/components/Masthead";
import { ImagePanel, Reveal, SectionHead } from "@/components/Primitives";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career | Ashok Sanghavi, CFP ChFC CLU" },
      {
        name: "description",
        content:
          "Building a practice in Elkhart, Indiana around planning rather than selling. Get in touch if that is the work you want.",
      },
      { property: "og:title", content: "Career | Ashok Sanghavi, CFP ChFC CLU" },
      {
        property: "og:description",
        content:
          "Building a practice in Elkhart, Indiana around planning rather than selling. Get in touch if that is the work you want.",
      },
    ],
  }),
  component: Career,
});

function Career() {
  return (
    <>
      <Masthead
        breadcrumb={careerPage.breadcrumb}
        eyebrow={careerPage.eyebrow}
        heading={careerPage.h1}
        line={careerPage.line}
      />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 lg:col-span-7">
            {careerPage.paragraphs.map((p, n) => (
              <Reveal key={p} delay={n * 0.05}>
                <p className="prose-line">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-5">
            <ImagePanel
              src={images.career.src}
              alt={images.career.alt}
              w={images.career.w}
              h={images.career.h}
              className="aspect-[3/2]"
            />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-site">
          <SectionHead eyebrow="WHAT MATTERS HERE" heading={careerPage.mattersHeading} />
          <ul className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {careerPage.matters.map((m, n) => (
              <Reveal as="li" key={m.title} delay={n * 0.06} className="h-full">
                <div className="card-flat flex h-full flex-col p-7">
                  <h3 className="h3 min-h-[2.5em] leading-[1.25] text-balance">{m.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.68] text-inkSoft">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1} className="mt-14">
            <div className="rounded-[20px] border border-line bg-paper p-8 lg:p-12">
              <h2 className="h3">{careerPage.closingHeading}</h2>
              <p className="prose-line mt-4">{careerPage.closingBody}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${site.email}`} className="btn btn-primary">
                  {careerPage.emailCta}
                </a>
                <a href={site.phoneHref} className="btn btn-ghost">
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
