import Link from "next/link";
import { nav, site } from "@/content/site";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { Button } from "./Primitives";
import { BackToTop } from "./Interactive";
import { Mail, Phone, Pin } from "./Icons";

/* A full minute track, drawn once and used as a quiet watermark */
function MinuteTrack() {
  return (
    <svg className="footer__track" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="168" fill="none" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 60 }).map((_, i) => (
        <line
          key={i}
          x1="200"
          y1="8"
          x2="200"
          y2={i % 5 === 0 ? 34 : 22}
          stroke="currentColor"
          strokeWidth={i % 5 === 0 ? 2.4 : 1}
          transform={`rotate(${i * 6} 200 200)`}
        />
      ))}
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <MinuteTrack />
      <div className="wrap">
        <div className="footer__cta" data-reveal="up">
          <div>
            <p className="footer__kicker">Has a family clock gone quiet?</p>
            <h2 className="footer__title">Let us bring it back to time.</h2>
          </div>
          <div className="footer__cta-actions">
            <Button href="/contact" variant="brass">
              Arrange a collection
            </Button>
            <Button href={site.phoneHref} variant="ghost" icon="up">
              {site.phone}
            </Button>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" aria-label={`${site.name}, home`}>
              <Logo tone="light" />
            </Link>
            <p>
              Clock, pocket watch, turret clock and watch repairers in {site.town}, caring for timepieces across{" "}
              {site.county} and the Welsh borders since {site.founded}.
            </p>
            <ul className="footer__chips" aria-label="Specialisms">
              {site.specialisms.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <nav className="footer__col" aria-label="Services">
            <h3>Services</h3>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/consultancy">Consultancy and valuations</Link>
              </li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Workshop">
            <h3>Workshop</h3>
            <ul>
              {nav
                .filter((n) => !["/", "/services"].includes(n.href))
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
              <li>
                <Link href="/contact#faq">Questions</Link>
              </li>
            </ul>
          </nav>

          <div className="footer__col footer__visit">
            <h3>Visit and call</h3>
            <p className="footer__line">
              <Pin size={17} />
              <span>
                {site.town}, {site.county}
                <small>{site.visitNote}</small>
              </span>
            </p>
            <a className="footer__line" href={site.phoneHref}>
              <Phone size={17} />
              <span>{site.phone}</span>
            </a>
            <a className="footer__line" href={`mailto:${site.email}`}>
              <Mail size={17} />
              <span>{site.email}</span>
            </a>
            <dl className="footer__hours">
              {site.hours.map((h) => (
                <div key={h.day}>
                  <dt>{h.day}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of service</Link>
            </li>
          </ul>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
