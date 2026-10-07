"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useId, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, Check, Plus } from "./Icons";
import { Stars } from "./Primitives";

/* ---------- Back to top ---------- */
export function BackToTop() {
  return (
    <button
      type="button"
      className="to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}

/* ---------- Tabs ---------- */
export function Tabs({
  items,
  label,
  variant = "pill",
}: {
  items: { label: string; panel: ReactNode }[];
  label: string;
  variant?: "pill" | "year";
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % items.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = items.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div className={`tabs tabs--${variant}`}>
      <div className="tabs__list" role="tablist" aria-label={label}>
        {items.map((t, i) => (
          <button
            key={t.label}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            className={`tabs__tab${active === i ? " is-active" : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {items.map((t, i) => (
        <div
          key={t.label}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          hidden={active !== i}
          className="tabs__panel"
          tabIndex={0}
        >
          {active === i && t.panel}
        </div>
      ))}
    </div>
  );
}

/* ---------- Accordion ---------- */
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`acc${isOpen ? " is-open" : ""}`} data-reveal="up" style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
            <h3 className="acc__h">
              <button
                type="button"
                className="acc__btn"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="acc__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="acc__q">{item.q}</span>
                <span className="acc__icon" aria-hidden="true">
                  <Plus size={18} />
                </span>
              </button>
            </h3>
            <div id={`${id}-${i}`} className="acc__panel">
              <div className="acc__inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Testimonials ---------- */
type Testimonial = { quote: string; name: string; place: string; piece: string };

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const card = el.firstElementChild as HTMLElement | null;
      const w = card ? card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0") : 1;
      setIndex(Math.round(el.scrollLeft / w));
      setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const w = card ? card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0") : el.clientWidth;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <div className="slider">
      <div className="slider__controls">
        <p className="slider__count" aria-hidden="true">
          <strong>{String(Math.min(index + 1, items.length)).padStart(2, "0")}</strong> / {String(items.length).padStart(2, "0")}
        </p>
        <div className="slider__btns">
          <button type="button" className="round-btn" onClick={() => go(-1)} disabled={edges.start} aria-label="Previous review">
            <ArrowLeft size={18} />
          </button>
          <button type="button" className="round-btn round-btn--solid" onClick={() => go(1)} disabled={edges.end} aria-label="Next review">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <ul ref={track} className="slider__track" aria-label="Customer reviews">
        {items.map((t) => {
          const initials = t.name
            .replace("Revd. ", "")
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2);
          return (
            <li key={t.name} className="review">
              <div className="review__mono" aria-hidden="true">
                <span>{initials}</span>
              </div>
              <figure className="review__body">
                <Stars />
                <blockquote className="review__quote">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="review__by">
                  <span className="review__name">{t.name}</span>
                  <span className="review__meta">
                    {t.place} <i aria-hidden="true" /> {t.piece}
                  </span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------- Hero estimate bar ---------- */
export function QuoteBar() {
  const router = useRouter();
  const [service, setService] = useState(services[0].slug);
  const [postcode, setPostcode] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams({ service });
    if (postcode.trim()) q.set("postcode", postcode.trim().toUpperCase());
    router.push(`/contact?${q.toString()}#enquiry`);
  };
  return (
    <form className="quote-bar" onSubmit={submit} aria-label="Request an estimate">
      <label className="quote-bar__field">
        <span className="quote-bar__label">What needs attention?</span>
        <select value={service} onChange={(e) => setService(e.target.value)}>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title.replace(" Repairs", "")}
            </option>
          ))}
        </select>
      </label>
      <label className="quote-bar__field">
        <span className="quote-bar__label">Your postcode</span>
        <input
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          placeholder="SY1 1AA"
          autoComplete="postal-code"
          maxLength={9}
        />
      </label>
      <button type="submit" className="quote-bar__submit">
        <span>Get an estimate</span>
        <ArrowRight size={18} />
      </button>
    </form>
  );
}

/* ---------- Contact form ---------- */

/**
 * Set this to a Formspree (or similar) endpoint to post enquiries.
 * While it is empty the form opens the visitor's email app with everything filled in.
 */
export const FORM_ENDPOINT = "";

type Errors = Partial<Record<"name" | "contact" | "message", string>>;

export function ContactForm() {
  const params = useSearchParams();
  const initialService = params.get("service") ?? "";
  const initialPostcode = params.get("postcode") ?? "";
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("name")) next.name = "Please tell us your name.";
    if (!v("email") && !v("phone")) next.contact = "Please leave an email address or a phone number.";
    else if (v("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) next.contact = "That email address does not look quite right.";
    if (v("message").length < 10) next.message = "A few words about the piece will help us prepare.";
    setErrors(next);
    if (Object.keys(next).length) {
      // Errors render on the next pass, so find the first invalid field by name
      const order: [keyof Errors, string][] = [["name", "name"], ["contact", "email"], ["message", "message"]];
      const firstName = order.find(([k]) => next[k])?.[1];
      formRef.current?.querySelector<HTMLElement>(`[name="${firstName}"]`)?.focus();
      return;
    }

    const serviceTitle = services.find((s) => s.slug === v("service"))?.title ?? "General enquiry";
    const lines = [
      `Name: ${v("name")}`,
      `Email: ${v("email") || "not given"}`,
      `Phone: ${v("phone") || "not given"}`,
      `Postcode: ${v("postcode") || "not given"}`,
      `Service: ${serviceTitle}`,
      `Collection wanted: ${fd.get("collection") ? "Yes" : "No"}`,
      "",
      v("message"),
    ];

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Repair enquiry: ${serviceTitle}`);
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setState("sent");
      return;
    }

    setState("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      setState(res.ok ? "sent" : "failed");
    } catch {
      setState("failed");
    }
  };

  if (state === "sent") {
    return (
      <div className="form-done" role="status">
        <span className="form-done__icon">
          <Check size={26} />
        </span>
        <h3>Thank you, your enquiry is on its way.</h3>
        <p>
          We reply to every message within one working day. If your email app did not open, please write to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phone}</a>.
        </p>
        <button type="button" className="link-btn" onClick={() => setState("idle")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} className="form" onSubmit={submit} noValidate>
      <div className="form__row">
        <Field label="Your name" name="name" autoComplete="name" error={errors.name} required />
        <Field label="Postcode" name="postcode" autoComplete="postal-code" defaultValue={initialPostcode} />
      </div>
      <div className="form__row">
        <Field label="Email" name="email" type="email" autoComplete="email" error={errors.contact} />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <label className="field">
        <span className="field__label">What needs attention?</span>
        <select name="service" defaultValue={initialService}>
          <option value="">Choose one</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="consultancy">Consultancy or valuation</option>
          <option value="other">Something else</option>
        </select>
      </label>
      <Field
        label="Tell us about the piece"
        name="message"
        textarea
        error={errors.message}
        required
        hint="What it is, how it behaves and anything you know of its history."
      />
      <label className="check">
        <input type="checkbox" name="collection" />
        <span className="check__box" aria-hidden="true">
          <Check size={14} />
        </span>
        <span>I would like the piece collected from my home</span>
      </label>
      <div className="form__foot">
        <button type="submit" className="btn btn--brass btn--md" disabled={state === "sending"}>
          <span className="btn__label">{state === "sending" ? "Sending" : "Send enquiry"}</span>
          <span className="btn__icon" aria-hidden="true">
            <span className="btn__glyphs">
              <ArrowRight size={17} />
              <ArrowRight size={17} />
            </span>
          </span>
        </button>
        <p className="form__note">
          Prefer to talk? <a href={site.phoneHref}>{site.phone}</a>
        </p>
      </div>
      {state === "failed" && (
        <p className="form__error" role="alert">
          Something went wrong sending your message. Please call or email us directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  error,
  hint,
  required,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  error?: string;
  hint?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
}) {
  const id = useId();
  const describedBy = [hint ? `${id}-hint` : "", error ? `${id}-err` : ""].filter(Boolean).join(" ") || undefined;
  const common = {
    id,
    name,
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": describedBy,
    "aria-required": required || undefined,
    ...rest,
  };
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {textarea ? <textarea rows={5} {...common} /> : <input type={type} {...common} />}
      {hint && (
        <span className="field__hint" id={`${id}-hint`}>
          {hint}
        </span>
      )}
      {error && (
        <span className="field__error" id={`${id}-err`}>
          {error}
        </span>
      )}
    </div>
  );
}

/* Small link with an arrow that slides */
export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="arrow-link">
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}
