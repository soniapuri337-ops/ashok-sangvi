import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { areas, nav, site } from "@/data/site";
import { useScrollY } from "@/hooks/useReveal";

type Group = "services" | "insights" | null;

export function Header() {
  const scrollY = useScrollY();
  const [open, setOpen] = useState<Group>(null);
  const [mobile, setMobile] = useState(false);
  const [acc, setAcc] = useState<Group>(null);
  const [progress, setProgress] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    setProgress(max > 0 ? Math.min(1, scrollY / max) : 0);
  }, [scrollY]);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    const onResize = () => setMobile(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    if (mobile && headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty("--header-bottom", `${rect.bottom}px`);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full origin-left"
          style={{
            transform: `scaleX(${progress})`,
            background: "linear-gradient(to right, #0e4a63, #4fa9c9)",
          }}
        />
      </div>

      <div className="bg-brandDeep">
        <div className="container-site flex h-9 items-center justify-between text-[12.5px]">
          <span className="hidden text-paper/80 md:block">{site.tagline}</span>
          <div className="flex items-center gap-5 text-paper/80">
            <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-brandLite">
              <Phone size={13} aria-hidden="true" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-brandLite">
              <Mail size={13} aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className="bg-paper/90 backdrop-blur-md backdrop-saturate-150"
        style={{ borderBottom: scrollY > 20 ? "1px solid #e1e9f1" : "1px solid transparent" }}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-6">
          <Link to="/" className="shrink-0" aria-label={`${site.name}, home`}>
            <img src={site.logo} alt={`${site.name}, ${site.tagline}`} width={220} height={44} className="h-11 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 xl:flex" aria-label="Main">
            <Link to="/" className="nav-underline text-[13.5px] font-medium whitespace-nowrap" data-active={isActive("/")}>
              Home
            </Link>
            <Link to="/about" className="nav-underline text-[13.5px] font-medium whitespace-nowrap" data-active={isActive("/about")}>
              About
            </Link>

            <div className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={open === "services"}
                onClick={() => setOpen(open === "services" ? null : "services")}
                onMouseEnter={() => setOpen("services")}
                className="nav-underline flex items-center gap-1 text-[13.5px] font-medium whitespace-nowrap"
                data-active={isActive("/services")}
              >
                Services <ChevronDown size={14} aria-hidden="true" />
              </button>
              {open === "services" ? (
                <div
                  className="absolute left-1/2 top-[calc(100%+18px)] w-[560px] -translate-x-1/2 rounded-[20px] border border-line bg-paper p-5 shadow-[0_2px_6px_rgba(16,38,58,.05),0_30px_64px_rgba(16,38,58,.10)]"
                  style={{ animation: "none" }}
                >
                  <ul className="grid grid-cols-2 gap-1">
                    {areas.map((a) => (
                      <li key={a.anchor}>
                        <Link
                          to="/services"
                          hash={a.anchor}
                          className="flex items-start gap-3 rounded-[14px] p-3 transition-colors hover:bg-mist"
                        >
                          <span className="mt-[2px] flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-sky font-data text-[11px] text-brandDeep">
                            {a.num}
                          </span>
                          <span>
                            <span className="block text-[13.5px] font-medium text-ink">{a.name}</span>
                            <span className="block text-[12px] text-muted2">{a.descriptor}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 border-t border-line pt-3">
                    <Link to="/services" className="text-[13px] font-medium text-brand">
                      All eight areas
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={open === "insights"}
                onClick={() => setOpen(open === "insights" ? null : "insights")}
                onMouseEnter={() => setOpen("insights")}
                className="nav-underline flex items-center gap-1 text-[13.5px] font-medium whitespace-nowrap"
                data-active={nav.insights.some((i) => isActive(i.to))}
              >
                Insights <ChevronDown size={14} aria-hidden="true" />
              </button>
              {open === "insights" ? (
                <div className="absolute left-1/2 top-[calc(100%+18px)] w-56 -translate-x-1/2 rounded-[14px] border border-line bg-paper p-2 shadow-[0_2px_6px_rgba(16,38,58,.05),0_30px_64px_rgba(16,38,58,.10)]">
                  {nav.insights.map((i) => (
                    <Link key={i.to} to={i.to} className="block rounded-[10px] px-3 py-2 text-[13.5px] transition-colors hover:bg-mist">
                      {i.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <Link to="/career" className="nav-underline text-[13.5px] font-medium whitespace-nowrap" data-active={isActive("/career")}>
              Career
            </Link>
            <Link to="/contact" className="nav-underline text-[13.5px] font-medium whitespace-nowrap" data-active={isActive("/contact")}>
              Contact
            </Link>
          </nav>

          <Link to="/contact" className="btn btn-primary hidden xl:inline-flex">
            Book a consultation
          </Link>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden"
            aria-expanded={mobile}
            aria-label={mobile ? "Close menu" : "Open menu"}
            onClick={() => setMobile((m) => !m)}
          >
            {mobile ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobile ? (
        <div
          className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-paper xl:hidden"
          style={{ top: "var(--header-bottom, 108px)" }}
        >
          <div className="container-site py-8">
            <ul className="space-y-1">
              {[{ label: "Home", to: "/" }, { label: "About", to: "/about" }].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="block py-3 text-lg" onClick={() => setMobile(false)}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-left text-lg"
                  aria-expanded={acc === "services"}
                  onClick={() => setAcc(acc === "services" ? null : "services")}
                >
                  Services <ChevronDown size={18} aria-hidden="true" />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: acc === "services" ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <ul className="pb-2 pl-4">
                      {areas.map((a) => (
                        <li key={a.anchor}>
                          <Link to="/services" hash={a.anchor} className="block py-2 text-[15px] text-inkSoft" onClick={() => setMobile(false)}>
                            {a.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-left text-lg"
                  aria-expanded={acc === "insights"}
                  onClick={() => setAcc(acc === "insights" ? null : "insights")}
                >
                  Insights <ChevronDown size={18} aria-hidden="true" />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: acc === "insights" ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <ul className="pb-2 pl-4">
                      {nav.insights.map((i) => (
                        <li key={i.to}>
                          <Link to={i.to} className="block py-2 text-[15px] text-inkSoft" onClick={() => setMobile(false)}>
                            {i.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              {[{ label: "Career", to: "/career" }, { label: "Contact", to: "/contact" }].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="block py-3 text-lg" onClick={() => setMobile(false)}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary mt-6 w-full" onClick={() => setMobile(false)}>
              Book a consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
