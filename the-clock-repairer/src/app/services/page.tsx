import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { CtaPanel, PageHero, ServiceRow } from "@/components/Blocks";
import { HoroIcon, Pin } from "@/components/Icons";
import { LiveDial } from "@/components/LiveDial";
import { ArrowDisc, Button, SectionHead, SplitHead } from "@/components/Primitives";
import { otherServices, services } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Clock and Watch Repair Services",
  description:
    "Clock repairs, pocket watch repairs, turret clock repairs and watch repairs in Shrewsbury, Shropshire. Guide prices, turnaround times and what each service includes.",
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Clock and watch repairs, <em>done properly</em>
          </>
        }
        lede="Four specialisms under one roof, each handled by a clockmaker or watchmaker who knows your kind of piece. Every job starts with a free written estimate."
        crumbs={[{ label: "Services" }]}
        image="serviceClock"
        note={{ title: "Free estimates", text: "Agreed in writing before work starts" }}
      >
        <Button href="/contact">Request an estimate</Button>
      </PageHero>

      <section className="section" aria-labelledby="svc-list-title">
        <div className="wrap">
          <SplitHead
            eyebrow="Our specialisms"
            title={
              <span id="svc-list-title">
                What we <em>repair</em>
              </span>
            }
            text="Choose a specialism to see what is included, the faults we fix most often and the types of piece we look after."
          />
          <div className="svc-rows">
            {services.map((s, i) => (
              <ServiceRow key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--linen" aria-labelledby="more-title">
        <div className="wrap">
          <SectionHead
            align="center"
            eyebrow="Also at the bench"
            title={<span id="more-title">Everything around the clock</span>}
            lede="Dials, cases, barometers and the careful business of moving a longcase clock from one home to another."
          />
          <ul className="mini-grid">
            {otherServices.map((o, i) => (
              <li key={o.title} data-reveal="up" style={d(i * 70)}>
                <Link href="/contact" className="mini-card">
                  <span className="mini-card__icon">
                    <HoroIcon name={o.icon} size={38} />
                  </span>
                  <span className="mini-card__title">{o.title}</span>
                  <span className="mini-card__text">{o.text}</span>
                  <span className="mini-card__more">
                    Ask about this <ArrowDisc />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="prices-title">
        <div className="wrap prices">
          <div className="prices__intro" data-reveal="up">
            <SectionHead
              eyebrow="Guide prices"
              title={
                <span id="prices-title">
                  Clear prices, <em>agreed first</em>
                </span>
              }
              lede="Every piece is different, so these are starting points. Your written estimate will show the exact cost before any work begins."
            />
          </div>
          <div className="price-table" data-reveal="up" style={d(120)}>
            <div className="price-table__head" aria-hidden="true">
              <span>Service</span>
              <span>Guide price</span>
              <span>Typical time</span>
            </div>
            <ul>
              {services.map((s) => (
                <li key={s.slug} className="price-row">
                  <Link href={`/services/${s.slug}`} className="price-row__name">
                    <HoroIcon name={s.icon} size={30} />
                    {s.title}
                  </Link>
                  <span className="price-row__price">{s.priceFrom}</span>
                  <span className="price-row__time">{s.turnaround}</span>
                </li>
              ))}
              <li className="price-row">
                <span className="price-row__name">
                  <HoroIcon name="report" size={30} />
                  Valuations and reports
                </span>
                <span className="price-row__price">Reports from £90</span>
                <span className="price-row__time">1 to 2 weeks</span>
              </li>
            </ul>
            <p className="price-table__note">Collection and delivery is quoted with your estimate. Final prices are always confirmed in writing.</p>
          </div>
        </div>
      </section>

      <section className="section section--enamel" aria-labelledby="areas-title">
        <div className="wrap areas">
          <div data-reveal="up">
            <SectionHead
              eyebrow="Areas we cover"
              title={
                <span id="areas-title">
                  Collected from across <em>{site.county}</em>
                </span>
              }
              lede="We collect, deliver and set up clocks throughout the county and along the Welsh borders. Watches can also be sent to us by insured post."
            />
            <ul className="areas__list">
              {site.areas.map((a) => (
                <li key={a}>
                  <Pin size={15} />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="areas__card" data-reveal="up" style={d(150)}>
            <LiveDial size={150} />
            <dl className="areas__hours">
              {site.hours.map((h) => (
                <div key={h.day}>
                  <dt>{h.day}</dt>
                  <dd>
                    {h.time}
                    {h.note && <small>{h.note}</small>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CtaPanel
        title={
          <>
            Not sure which service <em>you need?</em>
          </>
        }
        text="Describe how your clock or watch is behaving and we will point you in the right direction. There is no charge for advice."
        image="servicePocket"
      />
    </>
  );
}
