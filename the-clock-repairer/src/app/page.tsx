import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { HoroIcon, Check, Phone, Mail } from "@/components/Icons";
import { Accordion, QuoteBar, TestimonialSlider } from "@/components/Interactive";
import { LiveDial } from "@/components/LiveDial";
import { Counter, Parallax, ProcessTrack } from "@/components/Motion";
import { ArrowDisc, Button, Eyebrow, Photo, SectionHead, SplitHead } from "@/components/Primitives";
import { Seals } from "@/components/Seals";
import { images } from "@/content/images";
import { otherServices, services, type IconName } from "@/content/services";
import { faqs, process, site, stats, testimonials } from "@/content/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const clockTypes: { name: string; icon: IconName; href: string }[] = [
  { name: "Longcase", icon: "longcase", href: "/services/clock-repairs" },
  { name: "Bracket", icon: "bracket", href: "/services/clock-repairs" },
  { name: "Carriage", icon: "carriage", href: "/services/clock-repairs" },
  { name: "Mantel", icon: "mantel", href: "/services/clock-repairs" },
  { name: "Regulator", icon: "regulator", href: "/services/clock-repairs" },
  { name: "Pocket watch", icon: "pocket", href: "/services/pocket-watch-repairs" },
  { name: "Wristwatch", icon: "wrist", href: "/services/watch-repairs" },
  { name: "Turret clock", icon: "turret", href: "/services/turret-clock-repairs" },
];

const reasons = [
  { title: "One pair of hands, start to finish", text: "The clockmaker who inspects your piece is the one who restores it and sets it up at home." },
  { title: "Parts made, not just ordered", text: "Wheels, pinions, balance staffs and springs are cut and fitted at our own bench." },
  { title: "Photographs at every stage", text: "You see what we found inside, what we recommend and what we did." },
  { title: "Set up properly at home", text: "Cases levelled, clocks set in beat and regulated in the spot where they will live." },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------ hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__frame">
          <Parallax className="hero__media" speed={0.16}>
            <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="100vw" className="hero__img" />
          </Parallax>
          <div className="hero__shade" aria-hidden="true" />
          <div className="wrap hero__content">
            <Eyebrow tone="light">Clock and watch restoration in {site.town}</Eyebrow>
            <h1 id="hero-title" className="display hero__title">
              <span className="line">
                <span>Careful hands for</span>
              </span>{" "}
              <span className="line">
                <span>clocks that have</span>
              </span>{" "}
              <span className="line">
                <span>
                  <em>stopped keeping time.</em>
                </span>
              </span>
            </h1>
            <p className="hero__lede">
              Longcase, bracket and carriage clocks, pocket watches, tower clocks and wristwatches. Collected from your
              home, restored at our bench and returned keeping honest time.
            </p>
            <div className="hero__actions">
              <Button href="/contact" variant="light">
                Book a repair
              </Button>
              <Button href="/our-work" variant="ghost" icon="up">
                See recent work
              </Button>
            </div>
          </div>
          <div className="wrap hero__dock">
            <QuoteBar />
            <div className="hero__dial">
              <LiveDial size={104} />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ promises */}
      <section className="section--tight promises" aria-label="Our promises">
        <div className="wrap">
          <Seals />
        </div>
      </section>

      {/* ------------------------------------------------ intro + stats */}
      <section className="section intro">
        <div className="wrap">
          <SplitHead
            eyebrow="About the workshop"
            title={
              <>
                A {site.town} bench with <em>four decades</em> of patience
              </>
            }
            text="We are a small family workshop of clockmakers and watchmakers. Every piece is repaired by the same hands from first inspection to final regulation, and nothing leaves until it has kept good time for a week."
            action={
              <Button href="/about" variant="outline" size="sm">
                More about us
              </Button>
            }
          />
          <div className="intro-grid">
            <div className="stat-tile" data-reveal="up">
              <span className="stat-tile__ring" aria-hidden="true" />
              <p className="stat-tile__num">
                <Counter value={stats[0].value} suffix="+" />
              </p>
              <p className="stat-tile__label">{stats[0].label}</p>
              <p className="stat-tile__note">Repairing clocks in Shropshire since {site.founded}</p>
            </div>
            <Photo id="workshop" className="intro-grid__photo" sizes="(max-width: 900px) 100vw, 45vw" />
            <div className="stat-card" data-reveal="up" style={d(140)}>
              {stats.slice(1, 3).map((s) => (
                <div key={s.label} className="stat-card__item">
                  <p className="stat-card__num">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="stat-card__label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ services */}
      <section className="section section--linen" aria-labelledby="services-title">
        <div className="wrap">
          <div className="split-head">
            <div className="split-head__main" data-reveal="up">
              <Eyebrow>What we repair</Eyebrow>
              <h2 id="services-title" className="h2">
                Four specialisms, <em>one standard</em> of care
              </h2>
            </div>
            <div data-reveal="up" style={d(120)}>
              <p className="split-head__text">
                Every repair begins with a careful inspection and a written estimate. The work is then done by hand, by
                a specialist in your kind of piece.
              </p>
              <div className="split-head__action">
                <Button href="/services" variant="outline" size="sm">
                  All services
                </Button>
              </div>
            </div>
          </div>

          <ul className="svc-grid">
            {services.map((s, i) => (
              <li key={s.slug} data-reveal="up" style={d(i * 90)}>
                <Link href={`/services/${s.slug}`} className="svc-card">
                  <span className="svc-card__top">
                    <span className="svc-card__num">{s.number}.</span>
                    <span className="svc-card__icon">
                      <HoroIcon name={s.icon} size={46} />
                    </span>
                  </span>
                  <span className="svc-card__title">{s.title}</span>
                  <span className="svc-card__text">{s.short}</span>
                  <span className="svc-card__foot">
                    <span className="svc-card__more">Learn more</span>
                    <ArrowDisc />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="also" data-reveal="up">
            <p className="also__label">Also at the bench</p>
            <ul className="also__list">
              {otherServices.map((o) => (
                <li key={o.title}>
                  <HoroIcon name={o.icon} size={22} />
                  {o.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ showcase */}
      <section className="section showcase">
        <div className="wrap">
          <SplitHead
            eyebrow="Inside the workshop"
            title={
              <>
                Repaired by hand, <em>proven by time</em>
              </>
            }
            text="Clocks are machines that have run for generations on a few drops of oil. We return them to their proper tolerances, keep every original part we can and test each one on our bench before it goes home."
          />
          <div className="showcase__media">
            <Photo id="movement" className="showcase__photo" sizes="(max-width: 1300px) 100vw, 1260px" />
            <div className="showcase__chip" data-reveal="scale" style={d(400)}>
              <span className="showcase__chip-num">7</span>
              <span>
                <strong>Days on test</strong>
                Every clock runs, strikes and keeps time for a full week before it leaves the bench.
              </span>
            </div>
          </div>
          <div className="showcase__cols">
            <p data-reveal="up">
              <strong>Conservation first.</strong> We follow the principle of minimum intervention, doing what the piece
              needs and nothing it does not, so its history stays intact.
            </p>
            <p data-reveal="up" style={d(120)}>
              <strong>Parts made at the bench.</strong> When a part cannot be saved we make a new one by hand, matched to
              the original in material, finish and form.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ process */}
      <section className="section section--enamel process" aria-labelledby="process-title">
        <div className="wrap process__grid">
          <div className="process__aside">
            <div className="process__sticky" data-reveal="up">
              <Eyebrow>How it works</Eyebrow>
              <h2 id="process-title" className="h2">
                From a stopped clock to <em>a steady beat</em>
              </h2>
              <p className="lede">
                Five clear steps, a written estimate before any work starts, and photographs so you can see exactly what
                we did.
              </p>
              <div className="process__cta">
                <Button href="/contact">Start with a call</Button>
              </div>
            </div>
          </div>
          <ProcessTrack>
            {process.map((p, i) => (
              <li key={p.title} className="step" data-reveal="up" style={d(i * 60)}>
                <span className="step__num">{i + 1}</span>
                <div className="step__body">
                  <h3 className="step__title">{p.title}</h3>
                  <p className="step__text">{p.text}</p>
                </div>
              </li>
            ))}
          </ProcessTrack>
        </div>
      </section>

      {/* ------------------------------------------------ why us */}
      <section className="section why" aria-labelledby="why-title">
        <div className="wrap">
          <SplitHead
            eyebrow="Why owners choose us"
            title={
              <>
                The care your piece <em>deserves</em>
              </>
            }
            text="Families, collectors, parish councils and estates send us their clocks for the same reasons. Patient work, honest advice and a result that lasts."
          />
          <div className="why__grid">
            <div className="why__media" data-reveal="left">
              <Photo id="loupe" className="why__photo" reveal={false} sizes="(max-width: 900px) 100vw, 40vw" />
              <div className="why__badge">
                <LiveDial size={64} showStatus={false} />
                <span>
                  <strong>Twelve month</strong> guarantee on every overhaul
                </span>
              </div>
            </div>
            <div className="why__card" data-reveal="right">
              <h3 id="why-title" className="sr-only">
                Reasons to choose us
              </h3>
              <ul className="checks">
                {reasons.map((r, i) => (
                  <li key={r.title} className="checks__item" data-reveal="up" style={d(200 + i * 90)}>
                    <span className="checks__icon" aria-hidden="true">
                      <Check size={20} />
                    </span>
                    <span>
                      <strong>{r.title}</strong>
                      <span>{r.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ clocks we care for */}
      <section className="section section--linen types" aria-labelledby="types-title">
        <div className="wrap">
          <SectionHead
            align="center"
            eyebrow="Clocks we care for"
            title={
              <span id="types-title">
                From the hall to <em>the church tower</em>
              </span>
            }
            lede="If it ticks, strikes or chimes, it has probably been on our bench. These are the pieces we see most often."
          />
          <ul className="types__list">
            {clockTypes.map((t, i) => (
              <li key={t.name} data-reveal="up" style={d(i * 60)}>
                <Link href={t.href} className="type">
                  <span className="type__disc">
                    <HoroIcon name={t.icon} size={54} />
                  </span>
                  <span className="type__name">{t.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ turret band */}
      <section className="band" aria-labelledby="band-title">
        <Parallax className="band__media" speed={0.1}>
          <Image src={images.serviceTurret.src} alt="" fill sizes="100vw" className="band__img" />
        </Parallax>
        <div className="band__shade" aria-hidden="true" />
        <div className="wrap band__inner">
          <div className="band__text" data-reveal="up">
            <Eyebrow tone="light">Turret clocks</Eyebrow>
            <h2 id="band-title" className="h2">
              Keeping time for <em>the whole parish</em>
            </h2>
            <p>
              We survey, restore and maintain church, estate and civic clocks across {site.county}. Annual contracts
              include cleaning, adjustment and the change to British Summer Time.
            </p>
            <Button href="/services/turret-clock-repairs" variant="light">
              Turret clock care
            </Button>
          </div>
          <div className="band__round" data-reveal="scale" style={d(200)}>
            <svg className="band__ring" viewBox="0 0 200 200" aria-hidden="true">
              {Array.from({ length: 60 }).map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="2"
                  x2="100"
                  y2={i % 5 === 0 ? 10 : 6}
                  transform={`rotate(${i * 6} 100 100)`}
                />
              ))}
            </svg>
            <div className="band__circle">
              <Image src={images.workChurch.src} alt={images.workChurch.alt} fill sizes="320px" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ testimonials */}
      <section className="section reviews" aria-labelledby="reviews-title">
        <div className="wrap">
          <div className="reviews__head" data-reveal="up">
            <div>
              <Eyebrow>Kind words</Eyebrow>
              <h2 id="reviews-title" className="h2">
                Clocks back in their <em>rightful place</em>
              </h2>
            </div>
            <p className="lede">
              A few notes from owners across {site.county} whose clocks and watches have come home from our bench.
            </p>
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* ------------------------------------------------ faq */}
      <section className="section section--enamel faq" aria-labelledby="faq-title">
        <div className="wrap faq__grid">
          <div className="faq__aside">
            <SectionHead
              eyebrow="Questions"
              title={<span id="faq-title">Before you bring it in</span>}
              lede="The questions we are asked most often. If yours is not here, the workshop is only a phone call away."
            />
            <div className="ask-card" data-reveal="up">
              <p className="ask-card__title">Still wondering?</p>
              <a href={site.phoneHref} className="ask-card__line">
                <Phone size={18} /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="ask-card__line">
                <Mail size={18} /> {site.email}
              </a>
            </div>
          </div>
          <Accordion items={faqs.slice(0, 6)} />
        </div>
      </section>
    </>
  );
}
