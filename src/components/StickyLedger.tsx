import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { areas, home, servicesPage } from "@/data/site";
import { Hairline, ImagePanel, Reveal, SplitHeading } from "@/components/Primitives";

export function StickyLedger() {
  const [active, setActive] = useState(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = panels.current.findIndex((p) => p === e.target);
            if (i >= 0) setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    panels.current.forEach((p) => p && io.observe(p));
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => {
    const el = panels.current[i];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-[120px]">
          <p className="eyebrow">{home.ledger.eyebrow}</p>
          <div className="mt-4">
            <SplitHeading text={home.ledger.heading} />
          </div>
          <div className="mt-6">
            <Hairline />
          </div>
          <Reveal delay={0.1} className="mt-6">
            <p className="prose-line">{home.ledger.line}</p>
          </Reveal>

          <ul className="mt-10 hidden lg:block">
            {areas.map((a, i) => (
              <li key={a.anchor}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={active === i ? "true" : undefined}
                  className="group flex w-full items-center gap-4 py-3 text-left transition-colors duration-300"
                >
                  <span
                    className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] font-data text-[11px] transition-colors duration-300"
                    style={{
                      background: active === i ? "#e6f1f8" : "transparent",
                      color: active === i ? "#0b7fa8" : "#6b819a",
                    }}
                  >
                    {a.num}
                  </span>
                  <span
                    className="text-[15px] transition-colors duration-300"
                    style={{ color: active === i ? "#0b7fa8" : "#3f5a72" }}
                  >
                    {a.name}
                  </span>
                  <span className="relative ml-auto h-px flex-1 bg-line">
                    <span
                      className="absolute inset-0 origin-left bg-brandLite transition-transform duration-[400ms]"
                      style={{ transform: `scaleX(${active === i ? 1 : 0})` }}
                    />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-8 lg:col-span-7">
        {areas.map((a, i) => (
          <div
            key={a.anchor}
            ref={(el) => {
              panels.current[i] = el;
            }}
            className="overflow-hidden rounded-[20px] border border-line bg-paper transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(16,38,58,.04),0_12px_28px_rgba(16,38,58,.06)]"
          >
            <ImagePanel src={a.image.src} alt={a.image.alt} w={800} h={450} radius={0} className="aspect-[16/9]" />
            <div className="p-7">
              <div className="flex items-baseline gap-3">
                <span className="font-data text-[13px] text-brand">{a.num}</span>
                <h3 className="h3">{a.name}</h3>
              </div>
              <p className="mt-4 text-[15.5px] text-inkSoft">{a.line}</p>
              <ul className="mt-5 space-y-2">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] text-inkSoft">
                    <span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] shrink-0 rotate-45 bg-brandLite" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                hash={a.anchor}
                className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-brand"
              >
                {servicesPage.readFull}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
