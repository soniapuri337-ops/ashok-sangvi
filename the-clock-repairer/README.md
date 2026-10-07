# The Clock Repairer

Website for The Clock Repairer, clock, pocket watch, turret clock and watch repairers in Shrewsbury, Shropshire.

Built with Next.js 16 (App Router), React 19 and TypeScript. Every page is statically generated, so the site is fast and cheap to host on Vercel.

## Run it locally

```sh
cd the-clock-repairer
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, the same command Vercel runs
```

Node 20.9 or newer is required.

## Deploy to Vercel

1. Push the repository to GitHub.
2. In Vercel choose **Add New Project** and import the repository.
3. Set **Root Directory** to `the-clock-repairer`. This step matters because the repository also holds another project at its root.
4. Leave the framework preset as **Next.js** and deploy. No environment variables are needed.

## Where to change things

| What | File |
| --- | --- |
| Phone, email, hours, areas, stats, FAQs, reviews | `src/content/site.ts` |
| The four services, prices, faults, what is included | `src/content/services.ts` |
| History timeline, values, team, case studies, consultancy | `src/content/stories.ts` |
| Every photograph and its alt text | `src/content/images.ts` |
| Colours, type and spacing tokens | `src/styles/base.css` (top of file) |

## Photographs

All photographs live in `public/images`. The files there now are branded placeholder plates. Replace each one with a real photograph **using the same file name** and it updates everywhere on the site. Portrait slots are 1200 × 1500, landscape slots are 1600 × 1067 and the hero is 2000 × 1250.

| File | Suggested subject |
| --- | --- |
| `hero-workbench.jpg` | Clockmaker's bench with an open movement, tweezers and loupe |
| `about-hands.jpg` | Hands adjusting a movement under a bench lamp |
| `workshop-tools.jpg` | Traditional tools on a leather bench mat |
| `clock-movement.jpg` | Close up of brass wheels inside a movement |
| `watchmaker-loupe.jpg` | Watchmaker inspecting a movement through an eyeglass |
| `antique-dial.jpg` | Antique dial with Roman numerals |
| `service-longcase.jpg` | Restored longcase clock in a hallway |
| `service-pocket-watch.jpg` | Open faced pocket watch with chain |
| `service-turret.jpg` | Church tower clock dial against the sky |
| `service-wristwatch.jpg` | Mechanical wristwatch with caseback open |
| `consultancy-report.jpg` | Condition report beside a carriage clock |
| `work-*.jpg` | One photograph per case study on the Our Work page |

## Contact form

The form works with no setup. It opens the visitor's email app with the enquiry already written and addressed to `info@theclockrepairer.co.uk`.

To receive enquiries directly instead, create a form at formspree.io and paste its endpoint into `FORM_ENDPOINT` in `src/components/Interactive.tsx`.

## Brand files

The logo was designed for this project. Master files are in `public/brand`:

* `logo.svg`, `logo.png`: full logo for light backgrounds
* `logo-reverse.svg`, `logo-reverse.png`: full logo on deep teal
* `logo-mark.svg`, `logo-mark.png`: the pocket watch mark on its own

The wordmark is converted to outlines, so the SVG files display correctly without the fonts installed.

**Palette**: porcelain `#F6F2EA`, enamel `#FFFCF6`, linen `#EEE7DA`, deep teal `#0C3A40`, teal `#125E67`, olive `#8C9B26`, brass `#A57C3F`.
**Type**: Libre Caslon Display for headings, Libre Caslon Text italic for accents, Hanken Grotesk for body copy.

## Demo content to confirm with the client

Founding year, statistics, guide prices, team names, testimonials, the history timeline and the case studies are written as realistic demo content. Each one lives in the `src/content` files above and should be confirmed or replaced before launch.
