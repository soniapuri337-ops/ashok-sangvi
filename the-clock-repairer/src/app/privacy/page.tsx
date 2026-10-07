import type { Metadata } from "next";
import { LegalPage } from "@/components/Legal";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 2026">
      <p>
        {site.name} respects your privacy. This notice explains what we collect when you contact us or use this
        website, and how we look after it.
      </p>
      <h2>What we collect</h2>
      <p>
        When you send an enquiry we receive your name, contact details, postcode and the description of your clock or
        watch. If you send photographs, we keep those with your enquiry.
      </p>
      <h2>How we use it</h2>
      <p>
        We use your details only to reply to you, prepare estimates, arrange collection and delivery, and keep a record
        of the work carried out on your piece. We never sell or share your details for marketing.
      </p>
      <h2>How long we keep it</h2>
      <p>
        Repair records are kept for six years so we can honour guarantees and answer questions about past work. You
        can ask us to delete your details at any time where we are not required to keep them.
      </p>
      <h2>Maps and cookies</h2>
      <p>
        Our contact page shows a Google map, which may set its own cookies when it loads. This website does not use
        advertising or tracking cookies.
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask to see, correct or delete the information we hold about you by writing to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or calling {site.phone}.
      </p>
    </LegalPage>
  );
}
