import type { CSSProperties, ReactNode } from "react";
import { promises } from "@/content/site";
import { Check, HoroIcon } from "./Icons";

const centres: ReactNode[] = [
  <HoroIcon key="a" name="report" size={36} />,
  <span key="b" className="seal__numeral">12</span>,
  <Check key="c" size={30} />,
  <HoroIcon key="d" name="van" size={38} />,
  <HoroIcon key="e" name="wheel" size={36} />,
];

const ringText = [
  "Free estimates • Written and agreed •",
  "Twelve month guarantee • Every overhaul •",
  "Fully insured • Bench to doorstep •",
  "Collected and delivered • Shropshire •",
  "Traditional methods • Made by hand •",
];

export function Seals() {
  return (
    <ul className="seals">
      {promises.map((p, i) => (
        <li key={p.title} className="seal" data-reveal="up" style={{ "--d": `${i * 80}ms` } as CSSProperties}>
          <div className="seal__badge" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="seal__ring">
              <defs>
                <path id={`seal-path-${i}`} d="M60 60m-47 0a47 47 0 1 1 94 0a47 47 0 1 1-94 0" />
              </defs>
              <circle cx="60" cy="60" r="58" className="seal__outer" />
              <circle cx="60" cy="60" r="36" className="seal__inner" />
              <text className="seal__text">
                <textPath href={`#seal-path-${i}`} startOffset="0" textLength="292">
                  {ringText[i].toUpperCase()}
                </textPath>
              </text>
            </svg>
            <span className="seal__centre">{centres[i]}</span>
          </div>
          <div className="seal__copy">
            <p className="seal__title">{p.title}</p>
            <p className="seal__text-body">{p.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
