"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const NUMERALS = ["XII", "I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

type Now = { h: number; m: number; s: number; day: number };

function londonNow(): Now {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "short",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "0";
  const wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { h: +get("hour"), m: +get("minute"), s: +get("second"), day: wd };
}

function status(now: Now) {
  const t = now.h + now.m / 60;
  const today = site.hours.find((r) => r.days.includes(now.day));
  if (today?.open && t >= today.open[0] && t < today.open[1]) {
    return { open: true, text: today.note ? `Open now, ${today.note.toLowerCase()}` : "Workshop open now" };
  }
  if (today?.open && t < today.open[0]) {
    return { open: false, text: `Closed now, opens today at ${Math.floor(today.open[0])}.00` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (now.day + i) % 7;
    const row = site.hours.find((r) => r.days.includes(d));
    if (row?.open) {
      const hh = Math.floor(row.open[0]);
      const label = i === 1 ? "tomorrow" : DAY_NAMES[d];
      return { open: false, text: `Closed now, opens ${label} at ${hh}.00` };
    }
  }
  return { open: false, text: "Closed now" };
}

export function LiveDial({ size = 132, showStatus = true }: { size?: number; showStatus?: boolean }) {
  // Display time until mounted, so server and client markup match
  const [now, setNow] = useState<Now | null>(null);

  useEffect(() => {
    setNow(londonNow());
    const id = window.setInterval(() => setNow(londonNow()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const n = now ?? { h: 10, m: 9, s: 36, day: 1 };
  const secTotal = n.h * 3600 + n.m * 60 + n.s;
  const hourDeg = ((n.h % 12) + n.m / 60) * 30;
  const minDeg = (n.m + n.s / 60) * 6;
  const secDeg = secTotal * 6; // keeps increasing so the hand never sweeps backwards
  const st = now ? status(now) : null;
  const time = now ? `${String(n.h).padStart(2, "0")}:${String(n.m).padStart(2, "0")}` : "";

  return (
    <div className="live-dial">
      <svg
        className="live-dial__face"
        width={size}
        height={size}
        viewBox="0 0 200 200"
        role="img"
        aria-label={now ? `The time in Shrewsbury is ${time}` : "Workshop clock"}
      >
        <circle cx="100" cy="100" r="98" className="ld-bezel" />
        <circle cx="100" cy="100" r="90" className="ld-enamel" />
        <circle cx="100" cy="100" r="84" className="ld-track" />
        <circle cx="100" cy="100" r="77" className="ld-track" />
        {Array.from({ length: 60 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="16"
            x2="100"
            y2={i % 5 === 0 ? 24 : 21}
            className={i % 5 === 0 ? "ld-tick ld-tick--hour" : "ld-tick"}
            transform={`rotate(${i * 6} 100 100)`}
          />
        ))}
        {NUMERALS.map((r, i) => {
          const a = ((i * 30 - 90) * Math.PI) / 180;
          return (
            <text
              key={r}
              x={100 + 61 * Math.cos(a)}
              y={100 + 61 * Math.sin(a)}
              className="ld-num"
              textAnchor="middle"
              dominantBaseline="central"
              transform={`rotate(${i * 30} ${100 + 61 * Math.cos(a)} ${100 + 61 * Math.sin(a)})`}
            >
              {r}
            </text>
          );
        })}
        <text x="100" y="134" className="ld-sign" textAnchor="middle">
          SHREWSBURY
        </text>
        <g className="ld-hand ld-hand--hour" style={{ transform: `rotate(${hourDeg}deg)` }}>
          <path d="M100 112 L100 72" />
          <circle cx="100" cy="66" r="6.4" className="ld-moon" />
          <path d="M100 60 L100 54" />
        </g>
        <g className="ld-hand ld-hand--minute" style={{ transform: `rotate(${minDeg}deg)` }}>
          <path d="M100 114 L100 34" />
          <circle cx="100" cy="44" r="3.6" className="ld-moon" />
          <path d="M100 40 L100 26" />
        </g>
        <g className={`ld-hand ld-hand--second${now ? " is-live" : ""}`} style={{ transform: `rotate(${secDeg}deg)` }}>
          <path d="M100 124 L100 22" />
          <circle cx="100" cy="118" r="4.2" />
        </g>
        <circle cx="100" cy="100" r="5" className="ld-cap" />
        <circle cx="100" cy="100" r="1.8" className="ld-pin" />
      </svg>
      {showStatus && (
        <div className="live-dial__meta">
          <span className="live-dial__label">Shrewsbury time</span>
          <span className="live-dial__time">{time || " "}</span>
          <span className={`live-dial__status${st?.open ? " is-open" : ""}`}>
            <i aria-hidden="true" />
            {st?.text ?? " "}
          </span>
        </div>
      )}
    </div>
  );
}
