import { ArrowUpRight, BarChart3, Hourglass, Home as HomeIcon, Receipt, TrendingUp, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { calculators } from "@/data/site";
import { Reveal } from "@/components/Primitives";

const icons: Record<string, LucideIcon> = {
  BarChart3,
  TrendingUp,
  Hourglass,
  Home: HomeIcon,
  Receipt,
};

export function CalcCards({ promo }: { promo?: ReactNode }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {calculators.map((c, i) => {
        const Icon = icons[c.icon]!;
        return (
          <Reveal as="li" key={c.href} delay={i * 0.06}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-flat group relative flex h-full flex-col overflow-hidden p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-sky text-brandDeep transition-colors duration-300 group-hover:bg-brandDeep group-hover:text-paper">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="font-data text-[11px] tracking-[0.2em] text-brandLite">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="h3 mt-6 text-[1.2rem] leading-snug">{c.title}</h3>
              <p className="mt-3 flex-1 text-[15px] text-inkSoft">{c.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 border-t border-line pt-4 text-[13px] font-medium text-brand">
                Open calculator
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                <span className="sr-only">{c.title}, opens in a new window</span>
              </span>
            </a>
          </Reveal>
        );
      })}
      {promo ? (
        <Reveal as="li" delay={calculators.length * 0.06}>
          {promo}
        </Reveal>
      ) : null}
    </ul>
  );
}
