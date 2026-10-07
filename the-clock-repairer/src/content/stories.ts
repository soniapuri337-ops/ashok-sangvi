import type { ImageKey } from "./images";

export const timeline: { year: string; title: string; text: string; image: ImageKey }[] = [
  {
    year: "1986",
    title: "A single bench",
    text: "The workshop began with one bench, a secondhand lathe and a steady stream of longcase clocks from farmhouses around Shrewsbury.",
    image: "workshop",
  },
  {
    year: "1997",
    title: "Up the tower",
    text: "A call from a parish near Ludlow brought our first turret clock. Within a few years we were caring for church and estate clocks across the county.",
    image: "workChurch",
  },
  {
    year: "2008",
    title: "The Shrewsbury workshop",
    text: "We moved into a larger workshop with room for wheel cutting, a timing bench and a proper collection service for longcase clocks.",
    image: "movement",
  },
  {
    year: "2016",
    title: "Watches at the bench",
    text: "A dedicated watch bench was added for pocket watches and wristwatches, with a timing machine and pressure tester.",
    image: "loupe",
  },
  {
    year: "Today",
    title: "Four benches, one standard",
    text: "A small team of clockmakers and watchmakers, still repairing before replacing and still testing every piece for a week before it goes home.",
    image: "about",
  },
];

export const values = [
  { title: "Repair before replace", text: "Original parts carry the history of a piece. We correct wear by hand and only make new parts when we must." },
  { title: "Minimum intervention", text: "We follow conservation principles, doing what the clock needs and nothing it does not." },
  { title: "Honest estimates", text: "Plain language, photographs of what we find, and a price you agree before any work begins." },
  { title: "Tested for a week", text: "Nothing leaves the bench until it has run, struck and kept time for at least seven days." },
];

export const team = [
  { name: "Robert Ashdown", role: "Master clockmaker", initials: "RA", note: "At the bench since 1986. Longcase and turret clocks." },
  { name: "Helen Ashdown", role: "Workshop manager", initials: "HA", note: "Estimates, collections and the diary for tower clock visits." },
  { name: "Tom Pritchard", role: "Watchmaker", initials: "TP", note: "Pocket watches, vintage wristwatches and timing work." },
  { name: "Sam Evans", role: "Clockmaker", initials: "SE", note: "Carriage, bracket and French clocks. Wheel cutting." },
];

export type WorkCategory = "Clocks" | "Pocket watches" | "Turret clocks" | "Wristwatches";

export const work: {
  title: string;
  category: WorkCategory;
  image: ImageKey;
  place: string;
  summary: string;
  tasks: string[];
}[] = [
  {
    title: "Georgian eight day longcase",
    category: "Clocks",
    image: "workLongcase",
    place: "Church Stretton",
    summary: "Silent for eleven years. Full overhaul, two new pivots and a rebuilt strike.",
    tasks: ["Strip down and clean", "Rebushing", "Strike rebuilt"],
  },
  {
    title: "Silver hunter pocket watch",
    category: "Pocket watches",
    image: "workHunter",
    place: "Oswestry",
    summary: "New balance staff turned by hand, hinge pinned and case spring adjusted.",
    tasks: ["Balance staff", "Case repair", "Service"],
  },
  {
    title: "Parish church tower clock",
    category: "Turret clocks",
    image: "workChurch",
    place: "Near Ludlow",
    summary: "Flatbed movement restored on site and fitted with automatic winding.",
    tasks: ["Restoration", "Auto winding", "Annual contract"],
  },
  {
    title: "Vintage automatic wristwatch",
    category: "Wristwatches",
    image: "workAutomatic",
    place: "Shrewsbury",
    summary: "Full service, new crown and seals, timed in five positions.",
    tasks: ["Service", "Crown and seals", "Regulation"],
  },
  {
    title: "Victorian fusee bracket clock",
    category: "Clocks",
    image: "workBracket",
    place: "Much Wenlock",
    summary: "Fusee chain replaced and the verge escapement brought back to a clean beat.",
    tasks: ["Fusee chain", "Verge escapement", "Case waxed"],
  },
  {
    title: "Railway issue pocket watch",
    category: "Pocket watches",
    image: "workRailway",
    place: "Telford",
    summary: "Mainspring, jewel and enamel dial care, with the original issue markings kept.",
    tasks: ["Mainspring", "Jewelling", "Dial care"],
  },
  {
    title: "Estate stable block clock",
    category: "Turret clocks",
    image: "workEstate",
    place: "Bridgnorth",
    summary: "Cupola dial regilded and the movement restored after thirty years at rest.",
    tasks: ["Dial gilding", "Movement restored", "Seasonal servicing"],
  },
  {
    title: "French carriage clock with repeat",
    category: "Clocks",
    image: "workCarriage",
    place: "Bridgnorth",
    summary: "Platform escapement serviced, repeat work set up and two glasses replaced.",
    tasks: ["Platform service", "Repeat work", "Glasses"],
  },
];

export const consultancy = {
  offers: [
    {
      title: "Condition reports",
      text: "A written assessment of a clock or watch with photographs, history notes and clear recommendations.",
      points: ["Movement and case examined", "Photographic record", "Prioritised recommendations"],
    },
    {
      title: "Insurance and probate valuations",
      text: "Independent valuations for insurers, executors and families dividing a collection.",
      points: ["Replacement and market values", "Written for insurers and executors", "Family heirloom records"],
    },
    {
      title: "Collection care",
      text: "Advice for owners, houses and museums on winding, handling and the right environment.",
      points: ["Care plans for collections", "Handling and winding training", "Environment checks"],
    },
    {
      title: "Turret clock surveys",
      text: "Survey reports for parishes and councils planning restoration or applying for grants.",
      points: ["Grant ready reports", "Costed options", "Liaison with advisers"],
    },
  ],
  checks: [
    { title: "Assess the condition of your clocks", text: "and advise on any treatment they need." },
    { title: "Recommend a programme of ongoing care", text: "including how often each piece should be inspected." },
    { title: "Show you how to wind, set and regulate", text: "so the clock is handled safely at home." },
    { title: "Work to minimum intervention", text: "keeping as much original material as possible." },
  ],
};
