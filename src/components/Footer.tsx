import { Link, useRouterState } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { areas, consultBand, images, nav, partners, site } from "@/data/site";
import { Eyebrow, Hairline, Reveal, SplitHeading } from "@/components/Primitives";

export function ConsultBand() {
  return (
    <section className="relative overflow-hidden bg-brandDeep">
      <img
        src={images.consultation.src}
        alt=""
        width={images.consultation.w}
        height={images.consultation.h}
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14]"
      />
      <div className="container-site relative section text-center">
        <p className="font-data text-[11px] uppercase tracking-[0.2em] text-brandLite">{consultBand.eyebrow}</p>
        <div className="mt-4">
          <SplitHeading text={consultBand.heading} className="h2 text-paper mx-auto max-w-4xl" />
        </div>
        <div className="mx-auto mt-6 max-w-4xl">
          <Hairline />
        </div>
        <Reveal delay={0.1} className="mt-6">
          <p className="mx-auto max-w-xl text-paper/88">{consultBand.line}</p>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn bg-paper text-brandDeep hover:bg-sky">
              {consultBand.cta}
            </Link>
            <a href={site.phoneHref} className="btn btn-onDark">
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const year = new Date().getFullYear();

  return (
    <>
      {pathname === "/contact" ? null : <ConsultBand />}
      <footer className="bg-brandDeep text-paper/80">
        <div className="container-site py-20">
          <div className="grid gap-12 lg:grid-cols-4">
            <div>
              <span className="inline-flex rounded-[14px] bg-paper p-3">
                <img src={site.logo} alt={`${site.name}, ${site.tagline}`} width={220} height={44} className="h-10 w-auto" loading="lazy" decoding="async" />
              </span>
              <p className="mt-6 text-[15px] leading-relaxed text-paper/80">
                Certified Financial Planner, Chartered Financial Consultant and Chartered Life Underwriter. A non
                practicing Certified Public Accountant with a Chartered Accountant background, and over thirty years in
                financial services.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {site.credentials.map((c) => (
                  <li key={c} className="chip-onDark">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-data text-[11px] uppercase tracking-[0.2em] text-brandLite">Pages</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                {nav.pages.map((p) => (
                  <li key={p.to}>
                    <Link to={p.to} className="transition-colors hover:text-paper">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-data text-[11px] uppercase tracking-[0.2em] text-brandLite">Services</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                {areas.map((a) => (
                  <li key={a.anchor}>
                    <Link to="/services" hash={a.anchor} className="transition-colors hover:text-paper">
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-data text-[11px] uppercase tracking-[0.2em] text-brandLite">Contact</h2>
              <ul className="mt-5 space-y-4 text-[15px]">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-1 shrink-0" aria-hidden="true" />
                  <a href={site.phoneHref} className="transition-colors hover:text-paper">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="mt-1 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-paper">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 shrink-0" aria-hidden="true" />
                  <span>{site.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin size={16} className="mt-1 shrink-0" aria-hidden="true" />
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-paper"
                  >
                    LinkedIn profile, opens in a new window
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* replace with compliance approved language before launch */}
          <p className="mt-16 border-t border-paper/15 pt-8 text-[12.5px] leading-relaxed text-paper/55">
            {site.disclosure}
          </p>

          <div className="mt-8 flex flex-col gap-4 border-t border-paper/15 pt-8 text-[12.5px] text-paper/55 md:flex-row md:items-center md:justify-between">
            <p>
              Copyright {year} {site.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-5">
              {partners.map((p) => (
                <li key={p.href}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export { Eyebrow };
