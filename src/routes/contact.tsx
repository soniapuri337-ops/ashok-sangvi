import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone, CalendarClock } from "lucide-react";
import { FORM_ENDPOINT, areas, contactPage, site } from "@/data/site";
import { Masthead } from "@/components/Masthead";
import { Reveal } from "@/components/Primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Ashok Sanghavi, CFP ChFC CLU" },
      {
        name: "description",
        content:
          "Request a no cost, no obligation consultation. Call 1-866-800-4771 or send a message.",
      },
      { property: "og:title", content: "Contact | Ashok Sanghavi, CFP ChFC CLU" },
      {
        property: "og:description",
        content:
          "Request a no cost, no obligation consultation. Call 1-866-800-4771 or send a message.",
      },
    ],
  }),
  component: Contact,
});

/** True until a real Formspree form id is pasted into FORM_ENDPOINT. */
const ENDPOINT_READY = !FORM_ENDPOINT.includes("REPLACE_ME");

/** Builds a prefilled mailto so the form still works with no backend set up. */
function mailtoFrom(data: FormData, to: string) {
  const get = (k: string) => String(data.get(k) ?? "").trim();
  const lines = [
    `Name: ${get("name")}`,
    `Email: ${get("email")}`,
    `Phone: ${get("phone") || "not given"}`,
    `Topic: ${get("topic")}`,
    "",
    "Situation:",
    get("situation") || "not given",
  ];
  const subject = `Consultation request from ${get("name") || "the website"}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "mailed">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // No endpoint configured yet: hand off to the visitor's mail client rather
    // than firing a request that is guaranteed to fail.
    if (!ENDPOINT_READY) {
      setStatus("loading");
      window.location.href = mailtoFrom(data, site.email);
      window.setTimeout(() => setStatus("mailed"), 600);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const details = [
    { icon: Phone, label: "Call", value: site.phone, href: site.phoneHref },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      icon: CalendarClock,
      label: "Meeting request",
      value: site.meetingEmail,
      href: `mailto:${site.meetingEmail}`,
    },
    { icon: MapPin, label: "Office", value: site.address, href: undefined },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn profile, opens in a new window",
      href: site.linkedin,
    },
  ];

  return (
    <>
      <Masthead
        breadcrumb={contactPage.breadcrumb}
        eyebrow={contactPage.eyebrow}
        heading={contactPage.h1}
        line={contactPage.line}
      />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="card-flat p-7">
              <ul>
                {details.map((d, n) => {
                  const Icon = d.icon;
                  const external = d.label === "LinkedIn";
                  return (
                    <li key={d.label} className={n > 0 ? "border-t border-line pt-4 mt-4" : ""}>
                      <div className="flex items-start gap-4">
                        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-sky text-brandDeep">
                          <Icon size={17} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-data text-[11px] uppercase tracking-[0.2em] text-muted2">
                            {d.label}
                          </span>
                          {d.href ? (
                            <a
                              href={d.href}
                              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                              className="mt-1 block text-[15.5px] text-ink transition-colors hover:text-brand"
                            >
                              {d.value}
                            </a>
                          ) : (
                            <span className="mt-1 block text-[15.5px] text-ink">{d.value}</span>
                          )}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="card-flat mt-6 p-7">
              <p className="eyebrow">{contactPage.paper.eyebrow}</p>
              <h2 className="h3 mt-3">{contactPage.paper.heading}</h2>
              <p className="mt-2 text-[15px] text-inkSoft">{contactPage.paper.line}</p>
              <a
                href={contactPage.paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost mt-6"
              >
                {contactPage.paper.cta}, opens in a new window
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <p className="prose-line mt-6 text-[15px]">{contactPage.note}</p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[20px] border border-line p-7 lg:p-10">
              {status === "success" || status === "mailed" ? (
                <p role="status" aria-live="polite" className="text-[17px] text-ink">
                  {status === "success" ? contactPage.form.success : contactPage.form.mailOpened}
                </p>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-[14px] font-medium text-ink">
                        {contactPage.form.name}
                      </label>
                      <input id="name" name="name" required aria-required="true" autoComplete="name" className="field" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-[14px] font-medium text-ink">
                        {contactPage.form.email}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        autoComplete="email"
                        spellCheck={false}
                        className="field"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-[14px] font-medium text-ink">
                        {contactPage.form.phone}
                      </label>
                      <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className="field" />
                    </div>
                    <div>
                      <label htmlFor="topic" className="mb-2 block text-[14px] font-medium text-ink">
                        {contactPage.form.topic}
                      </label>
                      <select id="topic" name="topic" className="field" defaultValue={areas[0]!.name}>
                        {areas.map((a) => (
                          <option key={a.anchor} value={a.name}>
                            {a.name}
                          </option>
                        ))}
                        <option value={contactPage.form.topicOther}>{contactPage.form.topicOther}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="situation" className="mb-2 block text-[14px] font-medium text-ink">
                      {contactPage.form.situation}
                    </label>
                    <textarea
                      id="situation"
                      name="situation"
                      rows={6}
                      placeholder={contactPage.form.placeholder}
                      className="field"
                    />
                  </div>

                  {status === "error" ? (
                    <p role="alert" className="text-[15px] text-brandDeep">
                      {contactPage.form.error}
                    </p>
                  ) : null}

                  <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
                    {status === "loading"
                      ? ENDPOINT_READY
                        ? contactPage.form.sending
                        : contactPage.form.mailOpening
                      : contactPage.form.submit}
                  </button>
                </form>
              )}
            </div>
            <p className="mt-4 text-[13px] text-muted2">{contactPage.form.privacy}</p>
          </div>
        </div>
      </section>
    </>
  );
}
