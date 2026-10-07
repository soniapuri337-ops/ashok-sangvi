/**
 * Business details and shared copy.
 * Everything a client might want to change lives in this folder.
 * Figures, years, prices and testimonials are demo content to be confirmed.
 */

export const site = {
  name: "The Clock Repairer",
  shortName: "Clock Repairer",
  url: "https://www.theclockrepairer.co.uk",
  tagline: "Clock and watch restoration in Shrewsbury",
  phone: "01743 871128",
  phoneHref: "tel:+441743871128",
  email: "info@theclockrepairer.co.uk",
  town: "Shrewsbury",
  county: "Shropshire",
  country: "England",
  addressLines: ["The Workshop", "Shrewsbury", "Shropshire"],
  visitNote: "Workshop visits by appointment",
  mapQuery: "Shrewsbury, Shropshire, England",
  founded: 1986,
  specialisms: [
    "Clock Repairers",
    "Pocket Watch Repairers",
    "Turret Clock Repairers",
    "Watch Repairers",
  ],
  hours: [
    { day: "Monday to Friday", time: "9.00 to 17.30", open: [9, 17.5], days: [1, 2, 3, 4, 5] },
    { day: "Saturday", time: "10.00 to 13.00", open: [10, 13], days: [6], note: "By appointment" },
    { day: "Sunday", time: "Closed", open: null, days: [0] },
  ],
  areas: [
    "Shrewsbury",
    "Telford",
    "Ludlow",
    "Oswestry",
    "Bridgnorth",
    "Church Stretton",
    "Market Drayton",
    "Whitchurch",
    "Much Wenlock",
    "Newport",
    "Welshpool",
    "The Welsh Borders",
  ],
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 40, suffix: "", label: "Years at the bench" },
  { value: 6400, suffix: "", label: "Clocks returned to time" },
  { value: 140, suffix: "", label: "Tower clocks in our care" },
  { value: 12, suffix: "", label: "Month guarantee on overhauls" },
];

export const promises = [
  { title: "Free written estimate", text: "No work begins until you have agreed the price in writing." },
  { title: "Twelve month guarantee", text: "Every full overhaul is covered for a year from collection." },
  { title: "Fully insured", text: "Your piece is insured from the moment it leaves your home." },
  { title: "Collection and delivery", text: "Across Shropshire and the Welsh borders, with set up included." },
  { title: "Traditional methods", text: "Parts are repaired before they are replaced, and made by hand when needed." },
];

export const process = [
  {
    title: "Tell us about your piece",
    text: "Call the workshop or send a few photographs. We will ask how it behaves, how old it is and what you know of its history.",
  },
  {
    title: "Collection or drop off",
    text: "Bring it to the bench or let us collect. Longcase clocks are dismantled in your home and travel in fitted crates.",
  },
  {
    title: "Inspection and written estimate",
    text: "The movement is examined under magnification. You receive a clear estimate with photographs and our recommendations.",
  },
  {
    title: "Restoration at the bench",
    text: "Strip down, clean, repair and reassemble. Worn parts are corrected by hand so the piece keeps its original character.",
  },
  {
    title: "Regulated and returned",
    text: "Every piece is tested for at least a week before it comes home, then set in beat and regulated in its new position.",
  },
];

export const testimonials = [
  {
    quote:
      "Our longcase clock had been silent for eleven years. It now strikes the hours exactly as my grandmother remembered, and it sits perfectly in beat on our uneven floor.",
    name: "Margaret Holloway",
    place: "Church Stretton",
    piece: "Eight day longcase clock",
  },
  {
    quote:
      "The parish has trusted them with our tower clock for years. Prompt every time the hour changes, and they explain everything in plain English to the committee.",
    name: "Revd. Andrew Baines",
    place: "Parish near Ludlow",
    piece: "Church turret clock",
  },
  {
    quote:
      "My father's railway pocket watch had a broken balance staff. They made a new one by hand and it keeps better time now than my phone.",
    name: "David Rowlands",
    place: "Telford",
    piece: "Railway issue pocket watch",
  },
  {
    quote:
      "Clear estimate, photographs at every stage and a beautifully cleaned movement. My 1960s automatic feels new without losing any of its age.",
    name: "James Parry",
    place: "Shrewsbury",
    piece: "Vintage automatic wristwatch",
  },
  {
    quote:
      "A French carriage clock that two other repairers turned away. Repeat work restored, glasses replaced, and it arrived home in a fitted box.",
    name: "Eleanor Whitfield",
    place: "Bridgnorth",
    piece: "French carriage clock",
  },
];

export const faqs = [
  {
    q: "How long does a repair usually take?",
    a: "Most clock overhauls take four to eight weeks, including at least a week of testing before collection. Watches are usually ready in three to five weeks. We will give you a firm date with your estimate.",
  },
  {
    q: "Do you collect and deliver?",
    a: "Yes. We collect across Shropshire and the Welsh borders. Longcase and wall clocks are dismantled in your home, carried in fitted crates and set up again on return, including setting the clock in beat.",
  },
  {
    q: "Will I know the cost before any work starts?",
    a: "Always. Estimates are free and written, with photographs of anything we find. No work begins until you have approved the price, and we will call you if anything unexpected appears.",
  },
  {
    q: "Is the work guaranteed?",
    a: "Full overhauls carry a twelve month guarantee from the day the piece comes home. Smaller repairs are guaranteed for the work carried out.",
  },
  {
    q: "Can you repair a clock that another repairer turned away?",
    a: "Often, yes. We make wheels, pinions, balance staffs and springs at the bench, so a missing or broken part rarely means the end of a clock.",
  },
  {
    q: "Should I keep winding a clock that has stopped?",
    a: "Please do not. Forcing a stopped clock can break a mainspring or damage the escapement. Leave it as it is and give us a call for advice.",
  },
  {
    q: "Do you look after church and estate clocks?",
    a: "Yes. We survey, restore and maintain turret clocks, with annual service contracts that include adjusting the clock for British Summer Time.",
  },
];
