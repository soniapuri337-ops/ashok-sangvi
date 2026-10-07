import type { Metadata } from "next";
import { Suspense, type CSSProperties } from "react";
import { PageHero } from "@/components/Blocks";
import { ClockGlyph, Mail, Phone, Pin } from "@/components/Icons";
import { Accordion, ContactForm } from "@/components/Interactive";
import { LiveDial } from "@/components/LiveDial";
import { Eyebrow, SectionHead } from "@/components/Primitives";
import { faqs, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact and Book a Repair",
  description: `Contact ${site.name} in ${site.town}, ${site.county}. Call ${site.phone}, email ${site.email} or send an enquiry for a free written estimate.`,
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function ContactPage() {
  const cards = [
    {
      icon: <Pin size={22} />,
      label: "Visit the workshop",
      value: `${site.town}, ${site.county}`,
      note: site.visitNote,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`,
      cta: "Get directions",
    },
    {
      icon: <Phone size={22} />,
      label: "Call us",
      value: site.phone,
      note: "Monday to Friday, 9.00 to 17.30",
      href: site.phoneHref,
      cta: "Call now",
    },
    {
      icon: <Mail size={22} />,
      label: "Email us",
      value: site.email,
      note: "We reply within one working day",
      href: `mailto:${site.email}`,
      cta: "Write to us",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us about <em>your clock</em>
          </>
        }
        lede="Call, email or send the form below. A few photographs and a description of how your piece behaves are all we need to give you an honest first opinion."
        crumbs={[{ label: "Contact" }]}
        image="cta"
        note={{ title: "Free written estimates", text: "No work starts without your approval" }}
      />

      <section className="section section--tight" aria-label="Ways to reach us">
        <div className="wrap">
          <ul className="info-cards">
            {cards.map((c, i) => (
              <li key={c.label} data-reveal="up" style={d(i * 80)}>
                <a
                  href={c.href}
                  className="info-card"
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="info-card__icon">{c.icon}</span>
                  <span className="info-card__label">{c.label}</span>
                  <span className="info-card__value">{c.value}</span>
                  <span className="info-card__note">{c.note}</span>
                  <span className="info-card__cta">{c.cta}</span>
                </a>
              </li>
            ))}
            <li data-reveal="up" style={d(240)}>
              <div className="info-card info-card--hours">
                <span className="info-card__icon">
                  <ClockGlyph size={22} />
                </span>
                <span className="info-card__label">Opening hours</span>
                <dl className="info-card__hours">
                  {site.hours.map((h) => (
                    <div key={h.day}>
                      <dt>{h.day}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="enquiry" className="section enquiry" aria-labelledby="enquiry-title">
        <div className="wrap enquiry__grid">
          <div className="enquiry__map" data-reveal="up">
            <iframe
              title={`Map showing ${site.town}, ${site.county}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=12&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="enquiry__map-card">
              <LiveDial size={86} />
            </div>
          </div>
          <div className="enquiry__form" data-reveal="up" style={d(120)}>
            <Eyebrow>Send an enquiry</Eyebrow>
            <h2 id="enquiry-title" className="h3-serif">
              Request a free estimate
            </h2>
            <p className="enquiry__intro">
              Fields marked with a star are required. Leave either an email address or a phone number.
            </p>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section id="faq" className="section section--enamel faq" aria-labelledby="faq-title">
        <div className="wrap faq__grid">
          <div className="faq__aside">
            <SectionHead
              eyebrow="Questions"
              title={<span id="faq-title">Good to know</span>}
              lede="Everything owners usually ask before sending us a clock or watch."
            />
          </div>
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
