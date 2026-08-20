import { ArrowUp } from "lucide-react";
import { useScrollY } from "@/hooks/useReveal";

export function BackToTop() {
  const y = useScrollY();
  const visible = y > 540;
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper text-brand transition-opacity duration-[350ms]"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
