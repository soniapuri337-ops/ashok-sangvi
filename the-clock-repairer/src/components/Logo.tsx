import geo from "@/content/logo-geometry.json";

type Tone = "ink" | "light";

const palette: Record<Tone, { fg: string; accent: string; dial: string }> = {
  ink: { fg: "var(--teal-900)", accent: "var(--brass-500)", dial: "var(--enamel)" },
  light: { fg: "var(--enamel)", accent: "var(--brass-300)", dial: "var(--teal-950)" },
};

export function LogoMark({ tone = "ink", size = 44, live = false }: { tone?: Tone; size?: number; live?: boolean }) {
  const c = palette[tone];
  const h = geo.hourHand;
  const m = geo.minuteHand;
  return (
    <svg
      className={live ? "logo-mark logo-mark--live" : "logo-mark"}
      width={size}
      height={(size * 66) / 64}
      viewBox="0 0 64 66"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="5.6" r="3.9" fill="none" stroke={c.fg} strokeWidth="2.2" />
      <rect x="28.6" y="8.4" width="6.8" height="3.6" rx="1" fill={c.fg} />
      <rect x="30" y="11.4" width="4" height="2" fill={c.fg} />
      <circle cx={geo.cx} cy={geo.cy} r="27.6" fill={c.fg} />
      {geo.flutes.map((k, i) => (
        <line key={i} {...k} stroke={c.dial} strokeWidth="0.9" strokeLinecap="round" opacity="0.55" />
      ))}
      <circle cx={geo.cx} cy={geo.cy} r="23.2" fill={c.dial} />
      <circle cx={geo.cx} cy={geo.cy} r="21.2" fill="none" stroke={c.fg} strokeWidth="0.7" />
      {geo.ticks.map(({ quarter, ...k }, i) => (
        <line key={i} {...k} stroke={c.fg} strokeWidth={quarter ? 2.4 : 1.5} strokeLinecap="round" />
      ))}
      <g className="logo-mark__minute" style={{ transformOrigin: `${geo.cx}px ${geo.cy}px` }}>
        <line x1={m.x1} y1={m.y1} x2={m.x2} y2={m.y2} stroke={c.accent} strokeWidth="1.9" strokeLinecap="round" />
      </g>
      <g className="logo-mark__hour" style={{ transformOrigin: `${geo.cx}px ${geo.cy}px` }}>
        <line x1={h.x1} y1={h.y1} x2={h.x2} y2={h.y2} stroke={c.accent} strokeWidth="2.4" strokeLinecap="round" />
        <circle cx={h.moon.cx} cy={h.moon.cy} r={h.moon.r} fill={c.dial} stroke={c.accent} strokeWidth="1.4" />
      </g>
      <circle cx={geo.cx} cy={geo.cy} r="2.6" fill={c.accent} />
      <circle cx={geo.cx} cy={geo.cy} r="1" fill={c.dial} />
    </svg>
  );
}

export function Logo({ tone = "ink", compact = false }: { tone?: Tone; compact?: boolean }) {
  return (
    <span className={`logo logo--${tone}${compact ? " logo--compact" : ""}`}>
      <LogoMark tone={tone} size={compact ? 40 : 46} live />
      <span className="logo__type">
        <span className="logo__the">The</span>
        <span className="logo__name">Clock Repairer</span>
      </span>
    </span>
  );
}
