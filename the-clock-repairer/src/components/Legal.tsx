import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow } from "./Primitives";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <section className="legal-hero">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span aria-current="page">{title}</span>
              </li>
            </ol>
          </nav>
          <Eyebrow>Last updated {updated}</Eyebrow>
          <h1 className="h1">{title}</h1>
        </div>
      </section>
      <section className="section section--tight">
        <div className="wrap">
          <div className="prose">{children}</div>
        </div>
      </section>
    </>
  );
}
