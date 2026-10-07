"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { images } from "@/content/images";
import { work, workService, type WorkCategory, type WorkItem } from "@/content/stories";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Plus } from "./Icons";

const CATS: ("All" | WorkCategory)[] = ["All", "Clocks", "Pocket watches", "Turret clocks", "Wristwatches"];

export function WorkGallery() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const list = cat === "All" ? work : work.filter((w) => w.category === cat);

  // Drive the native dialog from state so Escape, focus and the backdrop behave natively
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) {
      d.showModal();
      document.documentElement.classList.add("no-scroll");
    }
    if (open === null && d.open) d.close();
  }, [open]);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const onClose = () => {
      setOpen(null);
      document.documentElement.classList.remove("no-scroll");
    };
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  const step = (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + list.length) % list.length));
  const current: WorkItem | null = open !== null ? list[open] : null;

  return (
    <div className="gallery">
      <div className="gallery__bar">
        <div className="gallery__filters" role="group" aria-label="Filter restorations by type">
          {CATS.map((c) => {
            const count = c === "All" ? work.length : work.filter((w) => w.category === c).length;
            return (
              <button
                key={c}
                type="button"
                className={`gallery__filter${cat === c ? " is-active" : ""}`}
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
              >
                {c}
                <sup>{String(count).padStart(2, "0")}</sup>
              </button>
            );
          })}
        </div>
        <p className="gallery__count" aria-live="polite">
          Showing <strong>{list.length}</strong> of {work.length}
        </p>
      </div>

      <ul className="gallery__grid">
        {list.map((w, i) => {
          const img = images[w.image];
          return (
            <li key={`${cat}-${w.title}`} className={`case case--${i % 4}`} style={{ "--i": i } as React.CSSProperties}>
              <button type="button" className="case__btn" onClick={() => setOpen(i)} aria-haspopup="dialog">
                <span className="case__media">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 60vw" />
                </span>
                <span className="case__shade" aria-hidden="true" />
                <span className="case__top">
                  <span className="case__chip">{w.category}</span>
                  <span className="case__num">{String(work.indexOf(w) + 1).padStart(2, "0")}</span>
                </span>
                <span className="case__body">
                  <span className="case__place">
                    {w.place} <i aria-hidden="true" /> {w.year}
                  </span>
                  <span className="case__title">{w.title}</span>
                  <span className="case__more">
                    <span className="case__summary">{w.summary}</span>
                  </span>
                </span>
                <span className="case__open" aria-hidden="true">
                  <Plus size={20} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialog}
        className="case-dialog"
        aria-labelledby="case-dialog-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        {current && (
          <div className="case-dialog__inner" key={current.title}>
            <div className="case-dialog__media">
              <Image src={images[current.image].src} alt={images[current.image].alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className="case-dialog__body">
              <div className="case-dialog__top">
                <span className="case__chip case__chip--solid">{current.category}</span>
                <button type="button" className="case-dialog__close" onClick={() => setOpen(null)} aria-label="Close">
                  <Plus size={20} />
                </button>
              </div>
              <h2 id="case-dialog-title" className="case-dialog__title">
                {current.title}
              </h2>
              <dl className="case-dialog__meta">
                <div>
                  <dt>Location</dt>
                  <dd>{current.place}</dd>
                </div>
                <div>
                  <dt>Year</dt>
                  <dd>{current.year}</dd>
                </div>
                <div>
                  <dt>At the bench</dt>
                  <dd>{current.duration}</dd>
                </div>
              </dl>
              <p className="case-dialog__summary">{current.summary}</p>
              <p className="case-dialog__label">Work carried out</p>
              <ul className="case-dialog__tasks">
                {current.tasks.map((t) => (
                  <li key={t}>
                    <Check size={16} />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="case-dialog__foot">
                <Link href={`/contact?service=${workService[current.category]}#enquiry`} className="btn btn--primary btn--sm">
                  <span className="btn__label">Ask about a similar piece</span>
                  <span className="btn__icon" aria-hidden="true">
                    <span className="btn__glyphs">
                      <ArrowUpRight size={15} />
                      <ArrowUpRight size={15} />
                    </span>
                  </span>
                </Link>
                <div className="case-dialog__nav">
                  <span className="case-dialog__pos">
                    {String((open ?? 0) + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                  </span>
                  <button type="button" className="round-btn" onClick={() => step(-1)} aria-label="Previous restoration">
                    <ArrowLeft size={18} />
                  </button>
                  <button type="button" className="round-btn round-btn--solid" onClick={() => step(1)} aria-label="Next restoration">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
