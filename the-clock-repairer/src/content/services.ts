import type { ImageKey } from "./images";

export type IconName =
  | "longcase"
  | "bracket"
  | "carriage"
  | "mantel"
  | "regulator"
  | "pocket"
  | "wrist"
  | "turret"
  | "dial"
  | "case"
  | "barometer"
  | "van"
  | "report"
  | "contract"
  | "loupe"
  | "wheel";

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  icon: IconName;
  image: ImageKey;
  lede: string;
  intro: string[];
  highlights: string[];
  included: { title: string; text: string }[];
  faults: { title: string; text: string }[];
  types: { label: string; title: string; text: string; points: string[] }[];
  turnaround: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "clock-repairs",
    number: "01",
    title: "Clock Repairs",
    short: "Longcase, bracket, mantel, carriage and wall clocks overhauled by hand and returned keeping honest time.",
    icon: "longcase",
    image: "serviceClock",
    lede: "From the family longcase in the hall to a carriage clock on the mantelpiece, every movement is stripped, cleaned and corrected by hand.",
    intro: [
      "A clock is a machine that has been running, often for centuries, on a few drops of oil. Over time that oil turns to grit, pivots wear oval and the clock begins to stop, strike the wrong hour or lose time.",
      "A full overhaul brings the movement back to its proper tolerances. We take it apart completely, clean every part, polish the pivots, rebush worn holes and replace only what cannot be saved.",
    ],
    highlights: ["Complete strip down and clean", "Pivots polished and holes rebushed", "Strike and chime set up", "Home set up included"],
    included: [
      { title: "Full strip down and clean", text: "Every wheel, pinion and plate dismantled and cleaned in our ultrasonic tanks." },
      { title: "Pivot polishing and rebushing", text: "Worn pivots burnished and oval holes rebushed so the train runs freely again." },
      { title: "Mainsprings and suspension", text: "Tired or broken springs replaced with correctly sized new ones." },
      { title: "Escapement adjustment", text: "Pallets dressed and depthing set so the clock runs with a steady, even beat." },
      { title: "Strike and chime work", text: "Count wheels and rack striking set up, chimes brought back into sequence." },
      { title: "Setting up at home", text: "We level the case, set the clock in beat and regulate it in its own position." },
    ],
    faults: [
      { title: "Stops after a few hours", text: "Usually dried oil and wear in the train or a tired mainspring." },
      { title: "Strikes the wrong hour", text: "The strike has slipped out of step with the hands and needs resetting." },
      { title: "Uneven tick", text: "The clock is out of beat, often after being moved or knocked." },
      { title: "Gains or loses time", text: "Regulation, a worn escapement or a damaged suspension spring." },
      { title: "Will not wind", text: "A broken mainspring, gut line or click spring needs attention." },
      { title: "Chime out of tune", text: "Hammers and chime barrel need adjusting so the melody is clean." },
    ],
    types: [
      { label: "Longcase", title: "Longcase clocks", text: "Thirty hour and eight day movements, painted and brass dials, country and town cases.", points: ["Collected and set up at home", "Seat boards and weights checked", "Case care advice included"] },
      { label: "Bracket", title: "Bracket and fusee clocks", text: "English fusee movements, verge and anchor escapements, repeat and quarter chiming.", points: ["Fusee chains and lines replaced", "Verge escapements restored", "Bell and gong striking"] },
      { label: "Carriage", title: "Carriage clocks", text: "French and English carriage clocks, timepieces, strikers and repeaters.", points: ["Platform escapements serviced", "Bevelled glasses replaced", "Repeat work set up"] },
      { label: "Mantel", title: "Mantel and wall clocks", text: "French drum movements, marble and slate cases, Vienna regulators and dial clocks.", points: ["Pendulums and suspension", "Bezels and glasses refitted", "Cases cleaned and waxed"] },
    ],
    turnaround: "4 to 8 weeks",
    priceFrom: "Overhauls from £240",
  },
  {
    slug: "pocket-watch-repairs",
    number: "02",
    title: "Pocket Watch Repairs",
    short: "Key wound and keyless pocket watches serviced, with balance staffs, jewels and springs made at the bench.",
    icon: "pocket",
    image: "servicePocket",
    lede: "Pocket watches are often the most personal pieces we see. We repair them with the same patience their makers gave them.",
    intro: [
      "Most pocket watches that reach us have stopped after a knock, a dropped moment or decades in a drawer. A broken balance staff, a dry movement or a cracked glass is usually the cause, and nearly all of it can be put right.",
      "We service English lever, Swiss cylinder and verge fusee movements, and turn new balance staffs on the lathe when an original cannot be found.",
    ],
    highlights: ["Balance staffs made by hand", "Jewels and springs replaced", "Glasses fitted to case", "Hinges and catches repaired"],
    included: [
      { title: "Full service", text: "Movement dismantled, cleaned, inspected and lubricated with the correct oils." },
      { title: "Balance staffs", text: "New staffs turned on the lathe and fitted when the original is broken." },
      { title: "Jewelling", text: "Cracked or missing jewels replaced and endshakes set correctly." },
      { title: "Mainsprings", text: "Modern alloy springs fitted to the right strength for the movement." },
      { title: "Glasses and cases", text: "Crystals fitted, hinges pinned and case springs adjusted so lids close crisply." },
      { title: "Dial care", text: "Enamel dials cleaned with care and hairline cracks stabilised." },
    ],
    faults: [
      { title: "Stopped after a fall", text: "Almost always a broken balance staff pivot." },
      { title: "Will not wind", text: "A broken mainspring or a worn keyless works." },
      { title: "Hands loose", text: "The cannon pinion has lost its grip and needs tightening." },
      { title: "Lid will not stay shut", text: "Worn case springs or catches need adjusting." },
      { title: "Cracked glass", text: "A new glass is fitted to the bezel by hand." },
      { title: "Runs in short bursts", text: "Dried oil and dirt in the train and escapement." },
    ],
    types: [
      { label: "English lever", title: "English lever watches", text: "Full plate and three quarter plate English movements, many with fusees.", points: ["Fusee chains repaired", "Lever escapements serviced", "Silver and gold cases"] },
      { label: "Swiss", title: "Swiss keyless watches", text: "Cylinder and lever movements from the late nineteenth century onwards.", points: ["Keyless works rebuilt", "Cylinders replaced", "Open face and hunter cases"] },
      { label: "Verge", title: "Verge fusee watches", text: "The oldest watches we handle, often from the eighteenth century.", points: ["Verges and balances", "Pierced cocks cleaned", "Pair cases repaired"] },
      { label: "Railway", title: "Railway and military", text: "Issued watches built to keep strict time, with their records intact.", points: ["Accuracy testing in positions", "Original parts retained", "Provenance noted"] },
    ],
    turnaround: "3 to 6 weeks",
    priceFrom: "Services from £180",
  },
  {
    slug: "turret-clock-repairs",
    number: "03",
    title: "Turret Clock Repairs",
    short: "Church, estate and town clocks surveyed, restored and maintained, with annual contracts across the county.",
    icon: "turret",
    image: "serviceTurret",
    lede: "A tower clock keeps time for a whole community. We look after them from the bell frame to the hands on the dial.",
    intro: [
      "Turret clocks are large, slow and remarkably long lived, but weather, pigeons and years without oil take their toll. Hands slip, strike hammers fail and the clock stops in the first cold snap.",
      "We survey, restore and maintain church, estate and civic clocks across Shropshire and the borders, working with parish councils, estates and diocesan advisers.",
    ],
    highlights: ["Condition surveys and reports", "Annual service contracts", "Automatic winding fitted", "Dials and hands refurbished"],
    included: [
      { title: "Survey and report", text: "A written condition report with photographs for councils and grant applications." },
      { title: "Movement restoration", text: "Frames, wheels and escapements cleaned and repaired on site or in the workshop." },
      { title: "Automatic winding", text: "Discreet auto winders fitted so no one has to climb the tower each week." },
      { title: "Dials and hands", text: "Dials repainted or gilded and hands rebalanced to stop them slipping." },
      { title: "Bells and hammers", text: "Strike hammers, wires and cranks overhauled so the hour sounds cleanly." },
      { title: "Seasonal adjustment", text: "Clocks set for British Summer Time as part of an annual contract." },
    ],
    faults: [
      { title: "Stops in cold weather", text: "Thickened oil and worn bearings that need cleaning and lubrication." },
      { title: "Hands slip", text: "Out of balance hands or a worn motion work need correcting." },
      { title: "Strike stops working", text: "Hammer springs, wires or the strike train need attention." },
      { title: "Losing time", text: "Pendulum adjustment or a worn escapement." },
      { title: "Weather damage", text: "Dial and leading off work exposed to wind and rain." },
      { title: "Difficult winding", text: "Worn ratchets and clicks or a case for automatic winding." },
    ],
    types: [
      { label: "Church", title: "Church tower clocks", text: "Flatbed and birdcage movements with hour and quarter striking.", points: ["Working with diocesan advisers", "Faculty friendly reports", "Bell frame liaison"] },
      { label: "Estate", title: "Estate and stable clocks", text: "Stable block and courtyard clocks on country estates and farms.", points: ["Restoration to working order", "Cupola dials refurbished", "Seasonal servicing"] },
      { label: "Civic", title: "Town and civic clocks", text: "Market halls, schools and public buildings.", points: ["Electric conversions assessed", "Public safety checks", "Maintenance logs kept"] },
      { label: "Contracts", title: "Annual care contracts", text: "One or two visits a year to clean, oil, adjust and report.", points: ["Fixed annual fee", "Priority call outs", "Summer time changes"] },
    ],
    turnaround: "Surveys within 2 weeks",
    priceFrom: "Contracts from £320 a year",
  },
  {
    slug: "watch-repairs",
    number: "04",
    title: "Watch Repairs",
    short: "Mechanical, automatic and quartz wristwatches serviced, regulated and tested for water resistance.",
    icon: "wrist",
    image: "serviceWatch",
    lede: "From a first watch to a family heirloom, we service wristwatches so they run accurately and keep their character.",
    intro: [
      "Mechanical watches need a full service every five to seven years. Without it the oils dry, wear increases and accuracy slips. Quartz watches need care too, with seals and batteries checked before leaks cause damage.",
      "We service manual and automatic movements, regulate them on a timing machine in several positions and pressure test cases before they leave the bench.",
    ],
    highlights: ["Full mechanical service", "Timing in five positions", "Pressure testing", "Crystals and crowns"],
    included: [
      { title: "Complete service", text: "Movement dismantled, cleaned, lubricated and reassembled to specification." },
      { title: "Regulation", text: "Timed on our machine in five positions and adjusted for accuracy." },
      { title: "Water resistance", text: "Seals replaced and the case pressure tested before return." },
      { title: "Crystals and crowns", text: "Mineral, sapphire and acrylic crystals fitted, crowns and stems replaced." },
      { title: "Quartz care", text: "Batteries, circuits and coils tested and replaced with seals checked." },
      { title: "Bracelets and straps", text: "Bracelets cleaned, links adjusted and quality straps fitted." },
    ],
    faults: [
      { title: "Running fast", text: "Often magnetism from phones or speakers. Demagnetising helps." },
      { title: "Condensation under glass", text: "A failed seal. Needs attention before rust sets in." },
      { title: "Automatic not winding", text: "Worn rotor bearing or winding train." },
      { title: "Crown will not screw down", text: "A damaged tube or crown needs replacing." },
      { title: "Date sticks", text: "The calendar works need cleaning and adjustment." },
      { title: "Battery leaked", text: "The movement needs cleaning before corrosion spreads." },
    ],
    types: [
      { label: "Automatic", title: "Automatic watches", text: "Self winding movements from everyday pieces to fine Swiss calibres.", points: ["Rotor and reverser service", "Timing in positions", "Pressure tested"] },
      { label: "Manual", title: "Hand wound watches", text: "Classic manual wind watches, including many from the 1940s to 1970s.", points: ["Original parts kept", "Mainsprings replaced", "Dials handled with care"] },
      { label: "Vintage", title: "Vintage and heirloom", text: "Watches with family history that deserve careful conservation.", points: ["Patina preserved", "Period correct parts", "Photographic record"] },
      { label: "Quartz", title: "Quartz watches", text: "Battery, seal and movement replacement for quartz pieces.", points: ["Circuit testing", "Seal replacement", "Same week service"] },
    ],
    turnaround: "3 to 5 weeks",
    priceFrom: "Services from £160",
  },
];

export const otherServices: { title: string; text: string; icon: IconName }[] = [
  { title: "Dial restoration", text: "Painted, silvered and enamel dials cleaned, conserved or restored.", icon: "dial" },
  { title: "Case and cabinet work", text: "Veneers, mouldings and finials repaired with sympathetic polishing.", icon: "case" },
  { title: "Barometers", text: "Wheel and stick barometers serviced and recalibrated.", icon: "barometer" },
  { title: "Moving and setting up", text: "Longcase and wall clocks moved safely between homes and set in beat.", icon: "van" },
  { title: "Valuations and reports", text: "Written reports for insurance, probate and family records.", icon: "report" },
  { title: "Maintenance contracts", text: "Regular care for homes, offices, hotels and collections.", icon: "contract" },
];

/* "Typically 4 to 8 weeks", or the phrase as written when it is not a duration */
export function timing(s: Service) {
  return /^\d/.test(s.turnaround) ? `Typically ${s.turnaround}` : s.turnaround;
}

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
