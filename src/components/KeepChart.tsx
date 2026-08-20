import { home } from "@/data/site";
import { Hairline, Reveal, SplitHeading } from "@/components/Primitives";
import { useReveal } from "@/hooks/useReveal";

export function KeepChart() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <div className="container-site">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="eyebrow">{home.chart.eyebrow}</p>
        <div className="mt-4">
          <SplitHeading text={home.chart.heading} />
        </div>
        <div className="mt-6">
          <Hairline />
        </div>
      </div>

      <div ref={ref} className="mx-auto mt-12 max-w-[900px] space-y-8">
        {home.chart.bars.map((bar) => (
          <div key={bar.label}>
            <p className="font-data text-[11px] uppercase tracking-[0.2em] text-inkSoft">{bar.label}</p>
            <div className="relative mt-3 h-11 overflow-hidden rounded-full bg-sky">
              <div
                className="absolute inset-y-0 left-0 flex items-center rounded-full bg-brandDeep pl-5 pr-4"
                style={{
                  width: `${bar.segment}%`,
                  transform: `scaleX(${revealed ? 1 : 0})`,
                  transformOrigin: "left",
                  transition: "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <span className="whitespace-nowrap font-data text-[10px] uppercase tracking-[0.16em] text-paper/88">
                  {home.chart.segmentLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
        <Reveal delay={0.1}>
          <p className="mx-auto max-w-2xl text-center text-[14px] text-muted2">{home.chart.caption}</p>
        </Reveal>
      </div>
    </div>
  );
}
