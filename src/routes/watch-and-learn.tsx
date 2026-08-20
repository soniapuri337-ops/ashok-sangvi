import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Layers, type LucideIcon } from "lucide-react";
import { images, watchPage } from "@/data/site";
import { Masthead } from "@/components/Masthead";
import { ImagePanel, Reveal, SectionHead } from "@/components/Primitives";

const icons: Record<string, LucideIcon> = { Layers, BookOpen };

export const Route = createFileRoute("/watch-and-learn")({
  head: () => ({
    meta: [
      { title: "Watch and Learn | Ashok Sanghavi, CFP ChFC CLU" },
      {
        name: "description",
        content:
          "Short explanations of the concepts that decide how much you keep, how you retire and how you leave your legacy.",
      },
      { property: "og:title", content: "Watch and Learn | Ashok Sanghavi, CFP ChFC CLU" },
      {
        property: "og:description",
        content:
          "Short explanations of the concepts that decide how much you keep, how you retire and how you leave your legacy.",
      },
    ],
  }),
  component: WatchAndLearn,
});

function WatchAndLearn() {
  return (
    <>
      <Masthead
        breadcrumb={watchPage.breadcrumb}
        eyebrow={watchPage.eyebrow}
        heading={watchPage.h1}
        line={watchPage.line}
      />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 lg:col-span-7">
            {watchPage.paragraphs.map((p, n) => (
              <Reveal key={p} delay={n * 0.05}>
                <p className="prose-line">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-5">
            <ImagePanel
              src={images.tablet.src}
              alt={images.tablet.alt}
              w={images.tablet.w}
              h={images.tablet.h}
              className="aspect-[9/7]"
            />
          </div>
        </div>

        <div className="container-site mt-16 grid gap-6 lg:grid-cols-2">
          {watchPage.major.map((m, n) => {
            const Icon = icons[m.icon]!;
            return (
              <Reveal key={m.href} delay={n * 0.06} className="h-full">
                <div className="card-flat flex h-full flex-col p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-sky text-brandDeep">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h2 className="h3 mt-6 min-h-[2.5em] leading-[1.25] text-balance">{m.title}</h2>
                  <p className="mt-3 text-[15.5px] leading-[1.68] text-inkSoft">{m.body}</p>
                  <div className="mt-auto pt-7">
                    <a href={m.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Open in a new window
                      <ArrowUpRight size={16} aria-hidden="true" />
                      <span className="sr-only">{m.title}</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-site">
          <SectionHead eyebrow="FINANCIAL PRINCIPLES" heading={watchPage.principlesHeading} />
          <ul className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {watchPage.principles.map((p, n) => (
              <Reveal as="li" key={p.href} delay={n * 0.06} className="h-full">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-flat flex h-full flex-col p-6"
                >
                  <h3 className="min-h-[2.6em] text-[16px] font-medium leading-[1.3] text-ink text-balance">
                    {p.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[13px] font-medium text-brand">
                    Open in a new window
                    <ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only">{p.title}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1} className="mt-12">
            <div className="rounded-[20px] border border-line bg-paper p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
              <div>
                <h3 className="h3">{watchPage.blog.heading}</h3>
                <p className="mt-2 text-[15px] text-inkSoft">{watchPage.blog.line}</p>
              </div>
              <a
                href={watchPage.blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost mt-6 lg:mt-0"
              >
                {watchPage.blog.cta}, opens in a new window
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
