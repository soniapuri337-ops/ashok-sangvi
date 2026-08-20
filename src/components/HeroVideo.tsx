import { useEffect, useState } from "react";

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

/**
 * Desktop only decorative video that sits on top of the hero image panel.
 *
 * The image underneath stays the LCP element and is never removed, so if the
 * video is blocked, slow, or unsupported the hero still looks finished.
 *
 * The video is not mounted at all when any of these are true:
 *   - viewport is under 1024px
 *   - the visitor has reduced motion turned on
 *   - the browser reports data saver or a connection slower than 4g
 */
export function HeroVideo({ mp4, webm }: { mp4: string; webm?: string | undefined }) {
  const [mount, setMount] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const conn = (navigator as Navigator & { connection?: NetworkInfo }).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && conn.effectiveType !== "4g") return;

    let timer = 0;
    const arm = () => {
      timer = window.setTimeout(() => setMount(true), 800);
    };

    if (document.readyState === "complete") {
      arm();
    } else {
      window.addEventListener("load", arm, { once: true });
    }

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", arm);
    };
  }, []);

  if (!mount) return null;

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      onCanPlay={() => setReady(true)}
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
        ready ? "opacity-45" : "opacity-0"
      }`}
    >
      {webm ? <source src={webm} type="video/webm" /> : null}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
