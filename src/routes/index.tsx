import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { beliefs, calcPage, heroVideo, home, images, site } from "@/data/site";
import { Hairline, ImagePanel, Reveal, SectionHead, SplitHeading } from "@/components/Primitives";
import { StickyLedger } from "@/components/StickyLedger";
import { KeepChart } from "@/components/KeepChart";
import { CalcCards } from "@/components/CalcCards";
import { HeroVideo } from "@/components/HeroVideo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashok Sanghavi, CFP ChFC CLU | Peace of Mind Through Planning" },
      {
        name: "description",
        content:
          "Over thirty years helping individuals, families and business owners reduce tax exposure, protect assets and preserve what they have built.",
      },
      { property: "og:title", content: "Ashok Sanghavi, CFP ChFC CLU | Peace of Mind Through Planning" },
      {
        property: "og:description",
        content:
          "Over thirty years helping individuals, families and business owners reduce tax exposure, protect assets and preserve what they have built.",
      },
    ],
  }),
  component: Index,
});

function RotatingQuestion() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setText(home.questions[i]!);
      return;
    }
    const full = home.questions[i]!;
    if (phase === "typing") {
      if (text.length < full.length) {
        const t = setTimeout(() => setText(full.slice(0, text.length + 1)), 26);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), 2200);
      return () => clearTimeout(t);
    }
    if (phase === "holding") {
      setPhase("deleting");
      return;
    }
    if (text.length > 0) {
      const t = setTimeout(() => setText(full.slice(0, text.length - 1)), 12);
      return () => clearTimeout(t);
    }
    setI((n) => (n + 1) % home.questions.length);
    setPhase("typing");
    return;
  }, [text, phase, i, reduced]);

  return (
    <div className="min-h-[132px] sm:min-h-[104px]">
      <p className="text-[19px] leading-relaxed" aria-live="polite">
        <span className="text-ink">What if </span>
        <span className="text-brand">{text}</span>
        <span
          aria-hidden="true"
          className="ml-[2px] inline-block h-[1.05em] w-[2px] translate-y-[3px] bg-brand"
          style={{ animation: "caretBlink 1s steps(1, end) infinite" }}
        />
      </p>
    </div>
  );
}

function Index() {
  return (
    <>
      {/* Hero: full bleed, video behind. The thesis is the headline, and the
          colour rule is stated here first — gold is what you keep. */}
      <section className="relative overflow-hidden bg-brandDeep">
        <ImagePanel
          src={images.heroHome.src}
          alt=""
          w={images.heroHome.w}
          h={images.heroHome.h}
          eager
          radius={0}
          gradient={false}
          className="absolute inset-0 h-full w-full opacity-[0.28]"
        />
        <HeroVideo mp4={heroVideo.mp4} webm={heroVideo.webm} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(14,74,99,.94) 0%, rgba(14,74,99,.82) 46%, rgba(14,74,99,.55) 100%)",
          }}
        />

        <div className="container-site relative py-20 lg:py-32">
          <div className="max-w-4xl">
            <p className="font-data text-[11px] uppercase tracking-[0.2em] text-brandLite">{home.eyebrow}</p>

            <h1 className="h1 mt-6 text-paper">
              What you <span className="text-keep">keep</span> matters
              <br />
              <span className="italic text-paper/78">more than what you make.</span>
            </h1>

            <div className="mt-9 max-w-2xl">
              <RotatingQuestion />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn bg-paper text-brandDeep hover:bg-sky">
                Request a consultation
              </Link>
              <Link to="/services" className="btn btn-onDark">
                See the eight areas
              </Link>
            </div>
          </div>

          <ul className="mt-16 grid gap-x-10 gap-y-6 border-t border-paper/18 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {home.facts.map((f) => (
              <li key={f} className="font-data text-[11px] uppercase leading-relaxed tracking-[0.16em] text-paper/70">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The promise, carried out of the hero so it reads as a statement */}
      <section className="border-b border-line bg-paper py-10">
        <div className="container-site flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-data text-[11px] uppercase tracking-[0.2em] text-muted2">{home.promise.eyebrow}</p>
            <p className="mt-2 font-display text-[1.5rem] italic text-ink">{home.promise.line}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {site.credentials.map((c) => (
              <li key={c} className="chip-gold">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <StickyLedger />
        <div className="container-site mt-14">
          <Link to="/services" className="btn btn-ghost w-full">
            {home.ledger.cta}
          </Link>
        </div>
      </section>

      <section className="section bg-mist">
        <KeepChart />
      </section>

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHead eyebrow={home.fiduciary.eyebrow} heading={home.fiduciary.heading} />
            <Reveal delay={0.1} className="mt-8">
              <p className="font-display text-[2rem] leading-snug text-brandDeep">{home.fiduciary.quote}</p>
            </Reveal>
            <div className="mt-6 space-y-5">
              {home.fiduciary.paragraphs.map((p, n) => (
                <Reveal key={p} delay={0.15 + n * 0.05}>
                  <p className="prose-line">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25} className="mt-8">
              <a
                href={home.fiduciary.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-brand"
              >
                {home.fiduciary.linkLabel}, opens in a new window
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <ImagePanel
              src={images.fiduciary.src}
              alt={images.fiduciary.alt}
              w={images.fiduciary.w}
              h={images.fiduciary.h}
              className="aspect-[9/7]"
            />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-site">
          <SectionHead eyebrow={home.cpa.eyebrow} heading={home.cpa.heading} line={home.cpa.line} />
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {home.cpa.items.map((q, n) => (
              <Reveal as="li" key={q} delay={(n % 3) * 0.05}>
                <div className="card-flat group relative h-full overflow-hidden p-6 pl-7 transition-transform duration-300 hover:-translate-y-1">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-brand transition-transform duration-500 group-hover:scale-y-100"
                  />
                  <div className="flex items-start gap-4">
                    <span className="font-display text-[2rem] leading-none text-brandLite transition-colors duration-300 group-hover:text-brand">
                      {String(n + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-[15.5px] leading-snug text-ink">{q}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <div className="shadow-lifted overflow-hidden rounded-[20px]">
              <ImagePanel
                src={site.portrait}
                alt="Ashok Sanghavi, CFP, ChFC, CLU"
                w={1000}
                h={1250}
                radius={20}
                objectPosition="50% 18%"
                className="aspect-[4/5]"
              />
            </div>
            <div className="shadow-raised mt-6 rounded-[14px] border border-line bg-paper p-5 lg:absolute lg:-bottom-8 lg:-right-8 lg:mt-0">
              <p className="font-display text-[1.25rem] text-ink">Ashok Sanghavi</p>
              <p className="mt-1 font-data text-[11px] uppercase tracking-[0.2em] text-gold">CFP, ChFC, CLU</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionHead eyebrow={home.advisor.eyebrow} heading={home.advisor.heading} />
            <div className="mt-8 space-y-5">
              {home.advisor.paragraphs.map((p, n) => (
                <Reveal key={p} delay={0.1 + n * 0.05}>
                  <p className="prose-line">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25} className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-[15px] font-medium text-brand">
                {home.advisor.linkLabel}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-site">
          <div className="rounded-[20px] bg-brandDeep px-7 py-16 lg:px-16">
            <p className="font-data text-[11px] uppercase tracking-[0.2em] text-brandLite">
              {home.beliefsShort.eyebrow}
            </p>
            <div className="mt-4">
              <SplitHeading text={home.beliefsShort.heading} className="h2 text-paper" />
            </div>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {beliefs.map((b, n) => (
                <Reveal as="li" key={b.num} delay={n * 0.06}>
                  <p className="font-display text-[2.4rem] leading-none text-brandLite">{b.num}</p>
                  <p className="mt-3 text-[15.5px] text-paper">{b.title}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2} className="mt-12">
              <Link to="/core-beliefs" className="btn btn-onDark">
                {home.beliefsShort.cta}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-site">
          <div className="grid gap-10 rounded-[20px] border border-line p-7 lg:grid-cols-2 lg:p-14">
            <div>
              <p className="eyebrow">{home.debt.eyebrow}</p>
              <div className="mt-4">
                <SplitHeading text={home.debt.heading} />
              </div>
              <div className="mt-6">
                <Hairline />
              </div>
            </div>
            <div>
              <Reveal>
                <p className="text-[19px] text-ink">{home.debt.lead}</p>
              </Reveal>
              <Reveal delay={0.1} className="mt-5">
                <p className="prose-line">{home.debt.body}</p>
              </Reveal>
              <Reveal delay={0.15} className="mt-8">
                <a href={home.debt.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {home.debt.cta}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-site">
          <SectionHead eyebrow="TOOLS" heading={calcPage.h1} line={calcPage.line} />
          <div className="mt-12">
            <CalcCards />
          </div>
          <Reveal delay={0.1} className="mt-10">
            <Link to="/calculators" className="inline-flex items-center gap-2 text-[15px] font-medium text-brand">
              {home.calcShort.link}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="font-display text-[2.1rem] italic leading-snug text-brandDeep">{home.closing.quote}</p>
            <div className="mx-auto mt-8 max-w-md">
              <Hairline />
            </div>
            <Reveal delay={0.1} className="mt-8">
              <p className="prose-line mx-auto">{home.closing.line}</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <Link to="/contact" className="btn btn-primary">
                {home.closing.cta}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

