import type { SVGProps } from "react";
import type { IconName } from "@/content/services";

type P = SVGProps<SVGSVGElement> & { size?: number };

/* Interface glyphs, drawn on a 24 grid */
function Ui({ size = 20, children, ...rest }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: P) => (
  <Ui {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </Ui>
);
export const ArrowLeft = (p: P) => (
  <Ui {...p}>
    <path d="M19.5 12h-15M10.5 6l-6 6 6 6" />
  </Ui>
);
export const ArrowUpRight = (p: P) => (
  <Ui {...p}>
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </Ui>
);
export const ArrowUp = (p: P) => (
  <Ui {...p}>
    <path d="M12 19.5v-15M6 10.5l6-6 6 6" />
  </Ui>
);
export const Phone = (p: P) => (
  <Ui {...p}>
    <path d="M5.2 3.8h3.3l1.6 4.1-2.1 1.3a11 11 0 0 0 6.8 6.8l1.3-2.1 4.1 1.6v3.3a1.8 1.8 0 0 1-1.9 1.8A16.6 16.6 0 0 1 3.4 5.7a1.8 1.8 0 0 1 1.8-1.9Z" />
  </Ui>
);
export const Mail = (p: P) => (
  <Ui {...p}>
    <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2" />
    <path d="m3.8 6.4 8.2 6.4 8.2-6.4" />
  </Ui>
);
export const Pin = (p: P) => (
  <Ui {...p}>
    <path d="M12 21s6.8-6.1 6.8-11.2a6.8 6.8 0 0 0-13.6 0C5.2 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.8" r="2.4" />
  </Ui>
);
export const ClockGlyph = (p: P) => (
  <Ui {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.2V12l3.2 2" />
  </Ui>
);
export const Check = (p: P) => (
  <Ui {...p}>
    <path d="m5.5 12.5 4.2 4.2 8.8-9.4" />
  </Ui>
);
export const Plus = (p: P) => (
  <Ui {...p}>
    <path d="M12 5v14M5 12h14" />
  </Ui>
);
export const ChevronDown = (p: P) => (
  <Ui {...p}>
    <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />
  </Ui>
);
export const Star = ({ size = 16, ...rest }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...rest}>
    <path
      fill="currentColor"
      d="m12 2.8 2.7 5.9 6.4.7-4.8 4.3 1.4 6.3L12 16.8 6.3 20l1.4-6.3-4.8-4.3 6.4-.7L12 2.8Z"
    />
  </svg>
);

/* Horology line art, drawn on a 48 grid with a single stroke weight */
const art: Record<IconName, React.ReactNode> = {
  longcase: (
    <>
      <path d="M14 17v-7a10 7 0 0 1 20 0v7Z" />
      <circle cx="24" cy="11" r="4.4" />
      <path d="M24 11V8.4M24 11l2 1.2" />
      <path d="M17 17h14v19H17Z" />
      <path d="M20.5 20.5h7v12.5h-7Z" />
      <path d="M24 20.5v6.6" />
      <circle cx="24" cy="28.6" r="1.6" />
      <path d="M15 36h18v6H15ZM15.5 42v2.2M32.5 42v2.2" />
    </>
  ),
  bracket: (
    <>
      <path d="M19 8.2c3-3 7-3 10 0" />
      <path d="M12 18c0-5 5-8 12-8s12 3 12 8" />
      <path d="M12 18h24v20H12Z" />
      <circle cx="24" cy="27.5" r="6.6" />
      <path d="M24 27.5v-4M24 27.5l2.8 1.6" />
      <path d="M14 38v3h4v-3M30 38v3h4v-3" />
    </>
  ),
  carriage: (
    <>
      <path d="M17.5 13V10c4-5 9-5 13 0v3" />
      <path d="M11 13h26M11 41h26" />
      <path d="M13 13h22v28H13Z" />
      <circle cx="24" cy="24" r="6.2" />
      <path d="M24 24v-3.6M24 24l2.6 1.4" />
      <path d="M13 33.5h22M19 36h10v2.6H19Z" />
    </>
  ),
  mantel: (
    <>
      <path d="M8 38v-6c0-6 5-8 9-9 1-6 4-9 7-9s6 3 7 9c4 1 9 3 9 9v6Z" />
      <circle cx="24" cy="28" r="6" />
      <path d="M24 28v-3.4M24 28l2.4 1.4" />
      <path d="M6 38h36v3.4H6Z" />
    </>
  ),
  regulator: (
    <>
      <path d="m13 7 11-4.5L35 7" />
      <path d="M15 7h18v37H15Z" />
      <circle cx="24" cy="14.5" r="5.2" />
      <path d="M24 14.5v-3M24 14.5l2.2 1.2" />
      <path d="M18.5 22.5h11v18h-11Z" />
      <path d="M24 22.5v12" />
      <circle cx="24" cy="36.6" r="2.3" />
    </>
  ),
  pocket: (
    <>
      <circle cx="24" cy="5.8" r="3" />
      <path d="M21.6 8.8h4.8v3.2h-4.8Z" />
      <circle cx="24" cy="28" r="15" />
      <circle cx="24" cy="28" r="11.6" />
      <path d="M24 17.6v2.2M24 36.2v2.2M13.6 28h2.2M32.2 28h2.2" />
      <path d="M24 28v-6.2M24 28l4 2.4" />
    </>
  ),
  wrist: (
    <>
      <path d="M18.4 3.5h11.2l-1.2 10.2h-8.8ZM19.6 34.3h8.8l1.2 10.2H18.4Z" />
      <circle cx="24" cy="24" r="10.6" />
      <circle cx="24" cy="24" r="7.8" />
      <path d="M34.6 22.4h2.4v3.2h-2.4Z" />
      <path d="M24 24v-4.8M24 24l3.2 1.8" />
    </>
  ),
  turret: (
    <>
      <path d="M10 20 24 4l14 16" />
      <path d="M12 20v25.5h24V20" />
      <circle cx="24" cy="29" r="6.4" />
      <path d="M24 29v-3.8M24 29l2.8 1.6" />
      <path d="M20.5 45.5v-5.5h7v5.5M24 9.5v4" />
    </>
  ),
  dial: (
    <>
      <circle cx="21" cy="22" r="14" />
      <circle cx="21" cy="22" r="10.4" />
      <path d="M21 11.6v2.4M21 30v2.4M10.6 22H13M29 22h2.4" />
      <path d="M21 22v-5.6M21 22l3.6 2" />
      <path d="m33 34 6.5 6.5M38 39l4 4-2.4 2.4-4-4Z" />
    </>
  ),
  case: (
    <>
      <path d="M8 44V16a16 12 0 0 1 32 0v28Z" />
      <path d="M13 44V18a11 8.5 0 0 1 22 0v26" />
      <circle cx="24" cy="21" r="5" />
      <path d="M17 31h14M17 36h14M17 41h14" />
    </>
  ),
  barometer: (
    <>
      <circle cx="24" cy="8.4" r="4" />
      <path d="M21 12.4h6v11h-6Z" />
      <circle cx="24" cy="34" r="10.6" />
      <circle cx="24" cy="34" r="7.6" />
      <path d="m24 34 4.6-3.8" />
      <circle cx="24" cy="34" r="1.2" />
    </>
  ),
  van: (
    <>
      <path d="M4.5 14.5h24v19.5h-24Z" />
      <path d="M28.5 21h8.2l6.8 6.8V34h-15" />
      <path d="M31 23.5h5l3.5 3.5H31Z" />
      <circle cx="13" cy="35.5" r="3.6" />
      <circle cx="35.5" cy="35.5" r="3.6" />
      <path d="M9 20.5h8" />
    </>
  ),
  report: (
    <>
      <path d="M11.5 4.5h18l8 8v31h-26Z" />
      <path d="M29.5 4.5v8h8" />
      <path d="M17 19h15M17 24h15M17 29h8" />
      <circle cx="31" cy="35" r="4.4" />
      <path d="M31 35v-2.4M31 35l1.8 1" />
    </>
  ),
  contract: (
    <>
      <path d="M7.5 10h33v31h-33Z" />
      <path d="M7.5 17h33M16 6v7.5M32 6v7.5" />
      <circle cx="24" cy="29" r="7" />
      <path d="M24 29v-4M24 29l3 1.8" />
    </>
  ),
  loupe: (
    <>
      <circle cx="20" cy="20" r="11.5" />
      <circle cx="20" cy="20" r="7.5" />
      <path d="m28.4 28.4 11.6 11.6" strokeWidth={3.4} />
    </>
  ),
  wheel: (
    <>
      <circle cx="24" cy="24" r="16.5" strokeWidth={4.2} strokeDasharray="2.7 2.5" />
      <circle cx="24" cy="24" r="13.4" />
      <circle cx="24" cy="24" r="3.4" />
      <path d="M24 10.6v10M24 27.4v10M10.6 24h10M27.4 24h10" />
    </>
  ),
};

export function HoroIcon({ name, size = 48, ...rest }: P & { name: IconName }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {art[name]}
    </svg>
  );
}
