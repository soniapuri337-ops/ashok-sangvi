import type { Metadata } from "next";
import { LegalPage } from "@/components/Legal";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="October 2026">
      <p>These terms apply to repairs, restorations, reports and valuations carried out by {site.name}.</p>
      <h2>Estimates</h2>
      <p>
        Estimates are free and given in writing. No work begins until you approve the estimate. If we find something
        unexpected during the work we will contact you before going further.
      </p>
      <h2>Collection and delivery</h2>
      <p>
        Pieces are insured from the moment we collect them until they are returned. Collection and delivery charges
        are confirmed with your estimate.
      </p>
      <h2>Guarantee</h2>
      <p>
        Full overhauls are guaranteed for twelve months from the date of return, covering the work we carried out. The
        guarantee does not cover accidental damage, misuse or work by others.
      </p>
      <h2>Uncollected items</h2>
      <p>
        We will contact you when your piece is ready. Items not collected within three months of that notice may be
        subject to a storage charge.
      </p>
      <h2>Questions</h2>
      <p>
        Please contact us on {site.phone} or <a href={`mailto:${site.email}`}>{site.email}</a> with any questions about
        these terms.
      </p>
    </LegalPage>
  );
}
