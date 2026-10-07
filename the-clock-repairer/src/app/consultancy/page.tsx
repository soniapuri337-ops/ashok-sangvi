import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { CtaPanel, PageHero } from "@/components/Blocks";
import { Check, HoroIcon } from "@/components/Icons";
import { LiveDial } from "@/components/LiveDial";
import { ArrowDisc, Button, Photo, SectionHead, SplitHead } from "@/components/Primitives";
import type { IconName } from "@/content/services";
import { consultancy } from "@/content/stories";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultancy, Reports and Valuations",
  description:
    "Horological consultancy in Shropshire: condition reports, insurance and probate valuations, collection care advice and turret clock surveys for parishes and estates.",
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
const offerIcons: IconName[] = ["report", "case", "loupe", "turret"];

const clients = [
  "Private owners",
  "Collectors",
  "Parish councils",
  "Country estates",
  "Museums and trusts",
  "Insurers",
  "Executors and solicitors",
  "Hotels and offices",
];

export default function ConsultancyPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultancy"
        title={
          <>
            Advice, reports and <em>valuations</em>
          </>
        }
        lede="Clocks are works of art and working machines at the same time. We help owners decide how to care for them, what they are worth and what work, if any, they need."
        crumbs={[{ label: "Consultancy" }]}
        image="consult"
        note={{ title: "Independent advice", text: "No obligation to use our repair service" }}
      >
        <Button href="/contact?service=consultancy#enquiry">Arrange a consultation</Button>
      </PageHero>

      <section className="section" aria-labelledby="offers-title">
        <div className="wrap">
          <SplitHead
            eyebrow="What we offer"
            title={
              <span id="offers-title">
                Expert eyes on <em>your collection</em>
              </span>
            }
            text="Whether you own a single family heirloom or look after the clocks of a whole estate, our reports give you a clear picture and a sensible plan."
          />
          <ul className="offer-grid">
            {consultancy.offers.map((o, i) => (
              <li key={o.title} className="offer" data-reveal="up" style={d(i * 90)}>
                <div className="offer__top">
                  <span className="offer__num">0{i + 1}.</span>
                  <span className="offer__icon">
                    <HoroIcon name={offerIcons[i]} size={40} />
                  </span>
                </div>
                <h3 className="offer__title">{o.title}</h3>
                <p className="offer__text">{o.text}</p>
                <ul className="offer__points">
                  {o.points.map((p) => (
                    <li key={p}>
                      <Check size={15} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?service=consultancy#enquiry" className="offer__link">
                  Enquire <ArrowDisc />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--linen" aria-labelledby="conservator-title">
        <div className="wrap">
          <SplitHead
            eyebrow="Consulting a conservator"
            title={
              <span id="conservator-title">
                Static object or <em>working machine?</em>
              </span>
            }
            text="As the owner or custodian you decide whether a clock should be kept running or preserved at rest, and whether worn parts should be repaired or replaced. We help you make that choice with the facts in front of you."
          />
          <div className="why__grid">
            <div className="why__media why__media--brass" data-reveal="left">
              <Photo id="loupe" className="why__photo" reveal={false} sizes="(max-width: 900px) 100vw, 40vw" />
              <div className="why__badge">
                <LiveDial size={64} showStatus={false} />
                <span>
                  <strong>Minimum intervention</strong> keeping original material wherever possible
                </span>
              </div>
            </div>
            <div className="why__card" data-reveal="right">
              <div>
                <p className="why__card-lead">A consultation with us will:</p>
                <ul className="checks">
                  {consultancy.checks.map((c, i) => (
                    <li key={c.title} className="checks__item" data-reveal="up" style={d(200 + i * 90)}>
                      <span className="checks__icon" aria-hidden="true">
                        <Check size={20} />
                      </span>
                      <span>
                        <strong>{c.title}</strong>
                        <span>{c.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="clients-title">
        <div className="wrap">
          <SectionHead
            align="center"
            eyebrow="Who we work with"
            title={<span id="clients-title">Trusted by owners and organisations</span>}
            lede="Reports are written in plain English, with photographs, so they are useful to committees, insurers and families alike."
          />
          <ul className="client-chips" data-reveal="up">
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaPanel
        title={
          <>
            Planning care for <em>a collection?</em>
          </>
        }
        text="Tell us about the clocks you look after and what you need to know. We will suggest the right kind of visit or report."
        image="consult"
      />
    </>
  );
}
