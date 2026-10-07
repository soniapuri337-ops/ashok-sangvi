"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { Button } from "./Primitives";
import { ArrowUpRight, ChevronDown, ClockGlyph, HoroIcon, Mail, Phone, Pin } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const lastY = useRef(0);
  const burger = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLDivElement>(null);

  // Shrink once scrolled, slide away when scrolling down, return when scrolling up
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 24);
      if (y < 200) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      lastY.current = y;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Drawer: lock scroll, close on Escape, move focus in and back out
  useEffect(() => {
    const root = document.documentElement;
    if (!menuOpen) {
      root.classList.remove("no-scroll");
      return;
    }
    root.classList.add("no-scroll");
    const first = drawer.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        burger.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      root.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const today = site.hours[0];

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar__inner">
          <p className="topbar__item">
            <Pin size={15} />
            {site.town}, {site.county}
          </p>
          <p className="topbar__item topbar__item--hours">
            <ClockGlyph size={15} />
            {today.day} {today.time}
          </p>
          <div className="topbar__end">
            <a className="topbar__item topbar__link" href={`mailto:${site.email}`}>
              <Mail size={15} />
              {site.email}
            </a>
            <a className="topbar__item topbar__link" href={site.phoneHref}>
              <Phone size={15} />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`site-header${scrolled ? " is-scrolled" : ""}${hidden && !menuOpen && !megaOpen ? " is-hidden" : ""}`}
      >
        <div className="wrap site-header__inner">
          <Link href="/" className="site-header__brand" aria-label={`${site.name}, home`}>
            <Logo compact={scrolled} />
          </Link>

          <nav className="nav" aria-label="Main">
            <ul className="nav__list">
              {nav.map((item) =>
                item.href === "/services" ? (
                  <li
                    key={item.href}
                    className={`nav__item nav__item--mega${megaOpen ? " is-open" : ""}`}
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <Link href={item.href} className={`nav__link${isActive(item.href) ? " is-active" : ""}`}>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="nav__caret"
                      aria-expanded={megaOpen}
                      aria-controls="mega-services"
                      aria-label="Show services"
                      onClick={() => setMegaOpen((v) => !v)}
                    >
                      <ChevronDown size={16} />
                    </button>
                    <div id="mega-services" className="mega" onBlur={(e) => {
                      if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setMegaOpen(false);
                    }}>
                      <div className="mega__inner">
                        <ul className="mega__list">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link href={`/services/${s.slug}`} className="mega__link">
                                <span className="mega__icon">
                                  <HoroIcon name={s.icon} size={34} />
                                </span>
                                <span>
                                  <span className="mega__title">{s.title}</span>
                                  <span className="mega__text">{s.short}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="mega__feature">
                          <p className="mega__kicker">Not sure what it needs?</p>
                          <p className="mega__lead">Send us a few photographs and we will tell you what we see.</p>
                          <Button href="/contact" variant="light" size="sm">
                            Ask the workshop
                          </Button>
                          <Link href="/services" className="mega__all">
                            All services <ArrowUpRight size={15} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.href} className="nav__item">
                    <Link
                      href={item.href}
                      className={`nav__link${isActive(item.href) ? " is-active" : ""}`}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="site-header__actions">
            <a href={site.phoneHref} className="call-chip">
              <span className="call-chip__icon">
                <Phone size={17} />
              </span>
              <span className="call-chip__text">
                <span className="call-chip__label">Call the workshop</span>
                <span className="call-chip__num">{site.phone}</span>
              </span>
            </a>
            <Button href="/contact" className="site-header__cta">
              Book a repair
            </Button>
            <button
              ref={burger}
              type="button"
              className={`burger${menuOpen ? " is-open" : ""}`}
              aria-expanded={menuOpen}
              aria-controls="drawer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

      </header>

      <div
        id="drawer"
        ref={drawer}
        className={`drawer${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="wrap drawer__inner">
          <nav aria-label="Mobile">
            <ul className="drawer__list">
              {nav.map((item, i) => (
                <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                  <Link href={item.href} className={`drawer__link${isActive(item.href) ? " is-active" : ""}`}>
                    <span className="drawer__num">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="drawer__services">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>
                  <HoroIcon name={s.icon} size={26} />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="drawer__contact">
            <a href={site.phoneHref}>
              <Phone size={18} /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={18} /> {site.email}
            </a>
            <Button href="/contact">Book a repair</Button>
          </div>
        </div>
      </div>
    </>
  );
}
