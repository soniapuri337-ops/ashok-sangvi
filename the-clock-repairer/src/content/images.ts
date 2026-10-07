/**
 * Every photograph on the site, in one place.
 * Files live in /public/images. Replace a file with one of the same name
 * (or change the src here) and it updates everywhere it is used.
 */

export type Img = { src: string; alt: string; w: number; h: number };

const img = (file: string, alt: string, w = 1600, h = 1067): Img => ({
  src: `/images/${file}`,
  alt,
  w,
  h,
});

export const images = {
  hero: img("hero-workbench.jpg", "A clockmaker's bench with an open movement, tweezers and a loupe", 2000, 1250),
  about: img("about-hands.jpg", "Hands adjusting a clock movement under a bench lamp", 1200, 1500),
  workshop: img("workshop-tools.jpg", "Traditional clockmaking tools laid out on a leather bench mat", 1600, 1067),
  movement: img("clock-movement.jpg", "Brass wheels and pinions inside a clock movement", 1600, 1067),
  loupe: img("watchmaker-loupe.jpg", "A watchmaker inspecting a movement through an eyeglass", 1200, 1500),
  cta: img("antique-dial.jpg", "An antique clock dial with Roman numerals and blued hands", 1200, 1500),
  serviceClock: img("service-longcase.jpg", "A restored longcase clock in a hallway", 1200, 1500),
  servicePocket: img("service-pocket-watch.jpg", "An open faced pocket watch with its chain", 1200, 1500),
  serviceTurret: img("service-turret.jpg", "A church tower clock dial against the sky", 1200, 1500),
  serviceWatch: img("service-wristwatch.jpg", "A mechanical wristwatch with its caseback open on the bench", 1200, 1500),
  consult: img("consultancy-report.jpg", "A condition report being written beside a carriage clock", 1600, 1067),
  workLongcase: img("work-longcase.jpg", "A Georgian eight day longcase clock after restoration", 1200, 1500),
  workBracket: img("work-bracket.jpg", "A Victorian fusee bracket clock on a mantelpiece", 1200, 1500),
  workCarriage: img("work-carriage.jpg", "A French carriage clock with bevelled glass panels", 1200, 1500),
  workHunter: img("work-hunter.jpg", "A silver hunter pocket watch with the lid open", 1200, 1500),
  workRailway: img("work-railway.jpg", "A railway issue pocket watch with a white enamel dial", 1200, 1500),
  workChurch: img("work-church.jpg", "A flatbed turret clock movement inside a church tower", 1200, 1500),
  workEstate: img("work-estate.jpg", "A stable block clock on a country estate", 1200, 1500),
  workAutomatic: img("work-automatic.jpg", "A vintage automatic wristwatch on a leather strap", 1200, 1500),
} satisfies Record<string, Img>;

export type ImageKey = keyof typeof images;
