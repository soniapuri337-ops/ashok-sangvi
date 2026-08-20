# Ashok Sanghavi — deploy notes

## Deploying to Vercel

1. Push this folder to a Git repository, or drag it into the Vercel dashboard.
2. Vercel detects Vite automatically. If it asks:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
3. Deploy.

Verified locally with `npm install` then `npm run build`. Build passes clean.

## Before going live

Nothing is required. This deploys and works as is. Both items below are
optional upgrades you can do whenever you like.

**Contact form (optional).** The form already works. While `FORM_ENDPOINT` in
`src/data/site.ts` still contains `REPLACE_ME`, the form skips the network
entirely and opens the visitor's mail client with every field already filled in,
addressed to `info@ashoksanghavi.com`. No failed request, no error flash.

To move to Formspree later: create a form at formspree.io and swap `REPLACE_ME`
for the form id. One string. The code switches paths on its own.

**Hero video (optional).** Drop a file named `hero-home.mp4` into `/public` and
it turns on by itself. No code change. Full encoding instructions are in
`public/hero-video-README.txt`. Without it the hero shows the still image under
the gradient, which is a finished state.

## What changed in this pass

**Services page, rebuilt.** The eight areas were eight identical alternating
blocks numbered 01 to 08. That numbering implied a sequence that did not exist.
They are now grouped into the four moments where money actually leaves:
while you earn, while you hold, when you draw, and what you leave. That is a
real sequence, so "Phase 1 of 4" is now true rather than decorative.

**A colour rule.** `--color-gold` was defined in the tokens and used almost
nowhere. It now carries exactly one meaning across the whole site: what stays
with the client. Teal is the system money moves through, gold is what survives
it. Every area on the services page carries one gold "what this keeps" line,
and the homepage headline sets the rule by putting "keep" in gold.

No invented figures were used for this. A percentage bar would have looked
better and would have been a fabricated number, which is a compliance problem on
an advisory site.

**One animation, in one place.** Each phase has a spine on its left edge that
fills from brandLite to gold as the phase enters view, so the colour states the
argument. It runs on `transform: scaleY`, unobserves after firing, and renders
already filled under `prefers-reduced-motion`.

**Homepage hero.** Now full bleed with the video slot behind it, gradient scrim
over, headline carrying the colour rule, and the four credibility facts on a
rule beneath. The promise and credentials moved into their own band below.

**Equal height cards.** About steps, career "what matters here", and both card
grids on Watch and Learn had ragged bottoms because the copy lengths were
uneven. Copy is now balanced to within a couple of words per card and the cards
use flex with a pinned footer.

**Contact form.** Added `autocomplete` to name, email and phone, `inputmode` on
phone, and `spellcheck` off on email. This is the single highest impact change
in this pass. The audience is largely over 50 and filling this in on a phone.

**Removed `src/components/ui`.** Around 40 shadcn files with zero imports from
the real code.

## Known gaps

- Three areas still use Unsplash images: Zero Estate Tax Planning, Asset
  Protection, Employee Benefit Guidance. They render correctly. Asset Protection
  was previously reusing the exact same photo as the homepage hero, which is now
  fixed.
- The five local images are between 960 and 1060 pixels wide. Acceptable, but
  slightly soft on retina screens. Higher resolution originals would improve it.
- The Wealth Management image is currency notes. For a fiduciary CFP practice
  that is a weak signal, and returns imagery is a sensitive area in advisory
  marketing. Worth revisiting with the client.
