import type { Metadata } from "next";
import { CtaPanel, PageHero } from "@/components/Blocks";
import { WorkGallery } from "@/components/Interactive";
import { Button, SplitHead } from "@/components/Primitives";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent restorations from our Shrewsbury workshop: longcase and bracket clocks, pocket watches, church tower clocks and vintage wristwatches.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Recently back <em>from the bench</em>
          </>
        }
        lede="A selection of clocks and watches we have restored for owners, parishes and estates across Shropshire. Every one arrived stopped, and every one went home keeping time."
        crumbs={[{ label: "Our Work" }]}
        image="workLongcase"
        note={{ title: "Photographed at every stage", text: "So owners see exactly what we did" }}
      >
        <Button href="/contact">Start your restoration</Button>
      </PageHero>

      <section className="section" aria-labelledby="gallery-title">
        <div className="wrap">
          <SplitHead
            eyebrow="Case studies"
            title={
              <span id="gallery-title">
                Pieces with a <em>second life</em>
              </span>
            }
            text="Filter by type to see the work that matters to you. Ask us and we will gladly share the full photographic record for any of these."
          />
          <WorkGallery />
        </div>
      </section>

      <CtaPanel
        title={
          <>
            Your piece could be <em>next</em>
          </>
        }
        text="Whatever its age or condition, we will take a careful look and give you an honest view of what is possible."
        image="workHunter"
      />
    </>
  );
}
