/**
 * Formspree endpoint for the contact form.
 *
 * While this still contains REPLACE_ME the form does NOT attempt a network
 * request. It opens the visitor's mail client with everything they typed
 * already filled in, addressed to site.email. That path works on a fresh
 * deploy with no setup at all.
 *
 * To switch to Formspree later: create a form at formspree.io, then swap
 * REPLACE_ME below for the form id. Nothing else needs to change.
 */
export const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

const U = "https://images.unsplash.com";

export const site = {
  name: "Ashok Sanghavi",
  tagline: "Peace of Mind Through Planning",
  phone: "1-866-800-4771",
  phoneHref: "tel:18668004771",
  email: "info@ashoksanghavi.com",
  meetingEmail: "asanghavi@aol.com",
  address: "25416 County 6 Road, Suite 102, Elkhart, IN 46514",
  linkedin:
    "https://www.linkedin.com/in/ashok-hiralal-sanghavi-cfp-chfc-clu-8778976/",
  logo: "/logo.png",
  portrait: "/ashok-portrait.jpg",
  team: "/team.jpg",
  credentials: ["CFP", "ChFC", "CLU", "CPA 1988"],
  disclosure:
    "Ashok Sanghavi operates under Global Financial Group LLC and is a Registered Investment Advisor Representative with Honor, Townsend and Kent. He is a Member and Educator in the National Retirement Foundation. Material on this website is provided for general education and does not constitute individual investment, tax or legal advice.",
};

export const images = {
  heroHome: {
    src: `${U}/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=72`,
    alt: "Light falling between tall city buildings",
    w: 1600,
    h: 1000,
  },
  thesis: {
    src: `${U}/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=72`,
    alt: "A planner working through figures on paper",
    w: 900,
    h: 1100,
  },
  fiduciary: {
    src: `${U}/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=72`,
    alt: "A pencil and a laptop during a planning session",
    w: 900,
    h: 700,
  },
  consultation: {
    src: `${U}/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1600&q=72`,
    alt: "",
    w: 1600,
    h: 900,
  },
  aboutPractice: {
    src: `${U}/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1200&q=72`,
    alt: "Charts and figures reviewed on a laptop",
    w: 1200,
    h: 800,
  },
  tablet: {
    src: `${U}/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=900&q=72`,
    alt: "A professional reviewing figures on a tablet",
    w: 900,
    h: 700,
  },
  career: {
    src: `${U}/photo-1444653389962-8149286c578a?auto=format&fit=crop&w=1200&q=72`,
    alt: "A newspaper and a quiet desk at the start of the day",
    w: 1200,
    h: 800,
  },
  beliefs: {
    src: `${U}/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=900&q=72`,
    alt: "A newspaper page carrying financial reporting",
    w: 900,
    h: 1100,
  },
};

export type Area = {
  num: string;
  name: string;
  anchor: string;
  short: string;
  descriptor: string;
  keeps: string;
  line: string;
  bullets: string[];
  extended: string;
  image: { src: string; alt: string };
};

const areaImg = (id: string, alt: string) => ({
  src: `${U}/${id}?auto=format&fit=crop&w=800&q=72`,
  alt,
});

export const areas: Area[] = [
  {
    num: "01",
    name: "Wealth Management",
    anchor: "wealth-management",
    keeps: "The compounding that tax would otherwise have taken out each year",
    short: "Wealth Management",
    descriptor: "Portfolios aligned with tax",
    line: "Institutional grade investment strategies, thoughtfully curated and enhanced through collaboration with experienced third party asset managers. All aligned with your long term vision for growth, preservation, and legacy.",
    bullets: [
      "Portfolios built around your tax position, not separately from it",
      "Independent third party managers, reviewed rather than sold",
      "Written expectations agreed before anything is implemented",
    ],
    extended:
      "Two portfolios can hold the same investments and deliver very different outcomes once tax is accounted for. Where an asset is held matters as much as what it is. The work here is deciding what belongs in a taxable account, what belongs in a qualified account, and what should never have been in either.",
    image: { src: "/wealth-management.webp", alt: "United States hundred dollar notes fanned out on a plain surface" },
  },
  {
    num: "02",
    name: "Retirement Planning",
    anchor: "retirement-planning",
    keeps: "The low bracket years, used before required distributions close them",
    short: "Retirement Planning",
    descriptor: "Accumulation into income",
    line: "A disciplined transition from accumulation to income, marking the beginning of your five star freedom phase of retirement.",
    bullets: [
      "A withdrawal order designed to keep your bracket low year after year",
      "Social Security timing modelled against the rest of the plan",
      "Required distributions anticipated years ahead rather than absorbed",
    ],
    extended:
      "The years between finishing work and the start of required distributions are the most valuable planning window most people will ever have, and they are also the years most people leave untouched. Income is often at its lowest, which is exactly when conversions and realisations cost the least.",
    image: { src: "/retirement-planning.webp", alt: "A couple walking a coastal path together on a clear day" },
  },
  {
    num: "03",
    name: "Strategic Tax Planning",
    anchor: "strategic-tax-planning",
    keeps: "The difference between recording the year and deciding it",
    short: "Strategic Tax Planning",
    descriptor: "Exposure reduced in advance",
    line: "Proactive, forward looking strategies that reduce tax exposure across your active income, passive income, and qualified funds.",
    bullets: [
      "Entity structure reviewed against how you actually earn",
      "Roth conversion windows identified and used deliberately",
      "Cost Segregation and credit opportunities examined for owners",
    ],
    extended:
      "This is the centre of the practice. A return records what happened. A plan decides what happens. The difference between the two, compounded across a working life, is usually the largest single number in the whole engagement.",
    image: { src: "/strategic-tax-planning.webp", alt: "A calendar with the tax filing date circled in red" },
  },
  {
    num: "04",
    name: "Zero Estate Tax Planning",
    anchor: "zero-estate-tax-planning",
    keeps: "The part of the estate that would have gone to settling tax",
    short: "Zero Estate Tax Planning",
    descriptor: "Estate impact minimised",
    line: "Advanced planning to minimize or eliminate estate tax impact.",
    bullets: [
      "Titling and beneficiary designations checked against the intent",
      "Trust structures matched to the family, not to a template",
      "Charitable strategies that create income and a current deduction",
    ],
    extended:
      "Most estate problems are not caused by the size of the estate. They are caused by a beneficiary form filled in twenty years ago that nobody has looked at since. The documents and the titling have to agree with each other, and often they quietly do not.",
    image: areaImg("photo-1444653614773-995cb1ef9efa", "A business newspaper open on a desk"),
  },
  {
    num: "05",
    name: "Asset Protection",
    anchor: "asset-protection",
    keeps: "Everything a single claim could otherwise have reached at once",
    short: "Asset Protection",
    descriptor: "Structures that genuinely shield",
    line: "Strategic structures designed to safeguard your assets. Protecting against risk while preserving long term value.",
    bullets: [
      "A review of what your existing entity genuinely shields",
      "Liability layered so a single event cannot reach everything",
      "Insurance treated as structure rather than as a product",
    ],
    extended:
      "A great deal of what people believe is protected is not. An entity formed for tax reasons often provides far less shelter than the owner assumes, and the gap tends to be discovered at the worst possible moment.",
    image: areaImg("photo-1628348068343-c6a848d2b6dd", "A professional reviewing figures on a tablet"),
  },
  {
    num: "06",
    name: "Business Strategies",
    anchor: "business-strategies",
    keeps: "The value of the business at exit, measured after tax rather than before",
    short: "Business Strategies",
    descriptor: "Succession and exit planning",
    line: "Thoughtfully structured buy sell and succession planning, integrated with tax efficient exit strategies.",
    bullets: [
      "Buy sell agreements funded rather than merely written",
      "Succession planned while there is still time to choose",
      "Exit modelled after tax, because the headline number is not the number",
    ],
    extended:
      "An unfunded buy sell agreement is a promise without a source. The document says what should happen and stays silent on where the money comes from. That question is worth answering long before anyone needs the answer.",
    image: { src: "/business-strategies.webp", alt: "Two people greeting each other after an agreement" },
  },
  {
    num: "07",
    name: "Employee Benefit Guidance",
    anchor: "employee-benefit-guidance",
    keeps: "The people who would be hardest to replace, funded with money that was leaving anyway",
    short: "Employee Benefit Guidance",
    descriptor: "Plans that retain talent",
    line: "Tailored benefit strategies that strengthen your organization. Helping attract, retain, and support top tier talent.",
    bullets: [
      "Plan design that rewards the people you most want to keep",
      "Owner contributions maximised within the rules",
      "Administration kept simple enough that it survives a busy year",
    ],
    extended:
      "Plan design is a retention tool that most owners treat as an administrative chore. Done properly it rewards the handful of people who would be hardest to replace, and it does so with money that would otherwise have gone to tax.",
    image: areaImg("photo-1551836022-d5d88e9218df", "Two colleagues in conversation across a desk"),
  },
  {
    num: "08",
    name: "Long Term Care",
    anchor: "long-term-care",
    keeps: "The rest of the plan, kept intact when care costs arrive",
    short: "Long Term Care",
    descriptor: "Care costs planned early",
    line: "Strategic long term care solutions that protect both your family and your finances.",
    bullets: [
      "The cost of care modelled honestly against the plan",
      "Options compared, including those that return value if unused",
      "A written plan so the decision never falls on one family member alone",
    ],
    extended:
      "This is the conversation families postpone and then have under pressure, usually in a hospital corridor. Held early and calmly, it is simply another line in the plan. Held late, it reshapes everything around it.",
    image: { src: "/long-term-care.webp", alt: "A carer walking with an older person through a field at sunset" },
  },
];

export const nav = {
  pages: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Core Beliefs", to: "/core-beliefs" },
    { label: "Watch and Learn", to: "/watch-and-learn" },
    { label: "Calculators", to: "/calculators" },
    { label: "Career", to: "/career" },
    { label: "Contact", to: "/contact" },
  ],
  insights: [
    { label: "Core Beliefs", to: "/core-beliefs" },
    { label: "Watch and Learn", to: "/watch-and-learn" },
    { label: "Calculators", to: "/calculators" },
  ],
};

export const partners = [
  { label: "National Retirement Foundation", href: "https://site.nationalretirementfoundation.com/main" },
  { label: "HTK", href: "https://www.htk.com/" },
  { label: "FFR", href: "https://ffrmembers.com/home" },
  { label: "ABS", href: "https://www.absgo.com/" },
];

export const heroVideo = {
  mp4: "/hero-home.mp4",
  // Optional. Drop hero-home.webm into /public and add it here for smaller files.
  webm: undefined as string | undefined,
};

export const consultBand = {
  eyebrow: "NO COST, NO OBLIGATION",
  heading: "Find out how to save taxes and protect your wealth",
  line: "We begin with relationships, because trust is never assumed. It is earned.",
  cta: "Request a consultation",
};

export const home = {
  eyebrow: "GLOBAL FINANCIAL GROUP, ELKHART, INDIANA",
  h1a: "What you keep matters",
  h1b: "more than what you make.",
  questions: [
    "your capital gains tax could be reduced all the way to zero?",
    "you could still reduce your taxes even with high W2 income?",
    "your business deductions could lower your taxes by 20 to 50 percent?",
    "Cost Segregation could shrink your real estate income taxes to the minimum allowed?",
    "you are missing valuable R and D Credits under OBBA without even knowing it?",
    "your retirement accounts could become tax free through strategic Roth financing?",
    "your business could legally fund $400,000 to $500,000 per year toward your retirement?",
    "a 401(h) arrangement could give you a triple tax advantaged way to fund future medical expenses inside your pension?",
    "your Schedule C or 1099 income taxes could be reduced significantly with the right structure?",
    "your highly appreciated assets could fund charity, create lifetime income, pass wealth to your heirs, and give you a current year tax deduction?",
  ],
  facts: [
    "30+ YEARS IN FINANCIAL SERVICES",
    "CPA EXAM 1988",
    "EIGHT AREAS OF PLANNING",
    "38 YEARS IN ELKHART",
  ],
  promise: {
    eyebrow: "THE PROMISE",
    line: "Peace of mind through planning.",
  },
  thesis: {
    eyebrow: "WHY THIS PRACTICE EXISTS",
    heading: "Most of the work happens before the return is filed",
    paragraphs: [
      "By the time a tax return is being prepared, the year is over and the decisions have already been made. Almost everything that changes the number was decided months earlier, in how income was taken, how the business was structured, how assets were held, and when gains were realised.",
      "That is the work I do. Not filing, and not chasing returns in a market nobody controls, but arranging the structure around your income so that less of it leaves in the first place and more of it stays where you can direct it.",
      "For most of the people I sit with, that structural work is worth more over a decade than any single investment decision they will make in the same period.",
    ],
    quote:
      "Success is not simply measured in numbers, but in the clarity, confidence, and security you carry into the future.",
  },
  ledger: {
    eyebrow: "WHAT WE OFFER",
    heading: "Eight areas, and they are not separate",
    line: "Tax planning without asset protection is only half a plan. Each area below is handled personally, and each one is built with the others in mind.",
    cta: "See every area in detail",
  },
  chart: {
    eyebrow: "THE POINT OF ALL OF IT",
    heading: "The same income, two different outcomes",
    bars: [
      { label: "WITHOUT PLANNING", segment: 38 },
      { label: "WITH PLANNING", segment: 22 },
    ],
    segmentLabel: "TAX AND EXPOSURE",
    caption:
      "Illustrative only. The proportions above are for explanation and are not a projection, a guarantee, or a representation of any individual result.",
  },
  fiduciary: {
    eyebrow: "WE ARE A FIDUCIARY",
    heading: "What does that mean?",
    quote:
      "Someone legally bound to put your interests first, at the highest standard of care.",
    paragraphs: [
      "That is why we operate under a fiduciary standard. Your goals prioritized, your interests protected, always.",
      "It also means the recommendation and the reason for it are written down. If a strategy is right for you, you should be able to explain it to your family in your own words. That is the test I hold myself to.",
    ],
    linkLabel: "Read the CFP Board Code of Ethics",
    linkHref: "https://www.cfp.net/ethics/code-of-ethics-and-standards-of-conduct",
  },
  cpa: {
    eyebrow: "FIFTEEN QUESTIONS",
    heading: "What your CPA is not telling you",
    line: "Worth asking before you file again. If more than three of these are new to you, there is probably room in your plan.",
    items: [
      "Hire your young kids in your business",
      "Lower your income taxes by 20 to 50 percent",
      "Fund your retirement plan up to $400,000",
      "Conventional IRA planning can cost you",
      "Is funding a DB plan a mistake?",
      "Can you legally exclude your employees from a DB plan?",
      "Convert a DB plan to a Roth IRA with no out of pocket taxes",
      "Create tax free retirement income",
      "Let the IRS pay for your kids college education",
      "LLC, S Corp or C Corp? The wrong choice can be a million dollar mistake",
      "How to avoid paying capital gains taxes up front",
      "Create tax free rental or business income",
      "Is your LLC really protecting you?",
      "Tax planning with W2 income",
      "Is it better to have your home mortgage free?",
    ],
  },
  advisor: {
    eyebrow: "THE ADVISOR",
    heading: "A trusted voice in every client relationship",
    paragraphs: [
      "Ashok Sanghavi is a Certified Financial Planner, Chartered Financial Consultant, and Chartered Life Underwriter. He passed the CPA exam in 1988 and has a Chartered Accountant background. With over thirty years of experience in financial services, Ashok brings deep expertise and a trusted voice to every client relationship, operating under Global Financial Group LLC.",
      "He is a Member and Educator in the National Retirement Foundation and a Registered Investment Advisor Representative with Honor, Townsend and Kent.",
      "He has lived in Elkhart, Indiana for thirty eight years, and much of the practice has grown from people who were introduced by someone he had already helped. That is the pace this work is meant to move at.",
    ],
    linkLabel: "More about Ashok",
  },
  beliefsShort: {
    eyebrow: "FIVE CORE BELIEFS",
    heading: "The bedrock, for the risk averse",
    cta: "Read all five in full",
  },
  debt: {
    eyebrow: "THE NATIONAL DEBT",
    heading: "A wake up call",
    lead: "This will determine how much you keep, how you retire, and how you leave your legacy.",
    body: "Tax law is written by people managing a number that keeps moving. Planning around the rules as they are today, while they are still today, is the only version of this that anyone controls.",
    cta: "View the live debt clock",
    href: "https://www.usdebtclock.org/",
  },
  calcShort: { link: "More about these tools" },
  closing: {
    quote:
      "We begin with relationships, because trust is never assumed. It is earned.",
    line: "Through thoughtful guidance and a client first approach, we focus on what truly matters.",
    cta: "Request a consultation",
  },
};

export const beliefs = [
  {
    num: "01",
    title: "Capital Preservation",
    body: "Preserving the capital invested is paramount. In retirement planning, the focus is on safeguarding the principal amount to ensure financial security during retirement years. This belief emphasizes low risk investment strategies and conservative financial planning to minimize the possibility of significant losses.",
  },
  {
    num: "02",
    title: "Steady Income Streams",
    body: "Prioritizing steady income streams over high risk, high return investments is crucial. A reliable and predictable income, such as dividends from blue chip stocks, interest from bonds, or annuity payments, provides stability and peace of mind, especially during retirement when regular income is essential to cover living expenses.",
  },
  {
    num: "03",
    title: "Diversification for Stability",
    body: "Diversification across asset classes, industries, and geographic regions is key to managing risk. By spreading investments across a variety of assets, including stocks, bonds, real estate, and cash equivalents, the impact of adverse market conditions on the overall portfolio can be mitigated. This belief underscores the importance of not putting all eggs in one basket.",
  },
  {
    num: "04",
    title: "Risk Management Through Insurance",
    body: "Insurance plays a vital role in risk management for the risk averse. Adequate health insurance, long term care insurance, and disability insurance protect against unexpected medical expenses and income loss due to illness or disability. Additionally, life insurance can provide financial security for loved ones in the event of the policyholder's death.",
  },
  {
    num: "05",
    title: "Long Term Perspective",
    body: "Adopting a long term perspective is fundamental to navigating market volatility and economic uncertainties. Rather than succumbing to short term market fluctuations, the focus is on the long term growth and preservation of wealth. This belief encourages disciplined investment habits, patience, and a steadfast commitment to financial goals despite temporary setbacks.",
  },
];

export const beliefsPage = {
  breadcrumb: "Core Beliefs",
  eyebrow: "WHAT I BELIEVE",
  h1: "Five principles for the risk averse",
  line: "These are my top five core beliefs about retirement and risk. Please read them before you and I have a conversation about your financial future.",
  opening:
    "I think it is important for you to understand the bedrock of my financial principles for the risk averse. These rules are the basis of my retirement and risk philosophy.",
  closingHeading: "If those five sound like you, we will get along",
  closingCta: "Request a consultation",
};

export const about = {
  breadcrumb: "About",
  eyebrow: "ABOUT",
  h1: "Thirty years of helping people keep more of what they built",
  line: "A Certified Financial Planner and non practicing CPA who has spent three decades on a single question, which is how much of what you earn actually stays with you. Tax, retirement, estate and asset protection are handled together here, because in practice they were never separate problems.",
  stats: [
    { figure: "1988", label: "Passed the CPA exam, with a Chartered Accountant background" },
    { figure: "30+", label: "Years advising individuals, families and business owners" },
    { figure: "38", label: "Years living and working in Elkhart, Indiana" },
    { figure: "8", label: "Areas of planning, each one handled personally" },
  ],
  details: [
    { label: "Firm", value: "Global Financial Group LLC" },
    { label: "Advisor", value: "Registered Investment Advisor Representative with Honor, Townsend and Kent" },
    { label: "Member", value: "Member and Educator, National Retirement Foundation" },
    { label: "Based", value: "Elkhart, Indiana" },
  ],
  paragraphs: [
    "Ashok Sanghavi is a Certified Financial Planner, Chartered Financial Consultant, and Chartered Life Underwriter. He passed the CPA exam in 1988 and has a Chartered Accountant background. With over thirty years of experience in financial services, Ashok brings deep expertise and a trusted voice to every client relationship, operating under Global Financial Group LLC.",
    "He is a Member and Educator in the National Retirement Foundation and a Registered Investment Advisor Representative with Honor, Townsend and Kent.",
    "Ashok's planning practice spans retirement planning, strategic income tax planning, estate planning, Roth conversion strategies, asset protection, business succession planning, and comprehensive wealth management, helping individuals and families build, protect, and preserve their financial legacy.",
    "He has resided in Elkhart, Indiana with his wonderful wife and children for the past thirty eight years. In his professional life, he has dedicated more than thirty years to helping family, friends, and clients achieve their own Financial Peace of Mind.",
    "He strives every day to offer financial strategies that work for every person seeking advice. He is a professional with the experience and skill to help you keep and increase your assets, eliminate your debt, and find the best financial tax benefits for your needs.",
  ],
  quote:
    "His goal is the successful creation, cultivation, preservation, and distribution of your wealth.",
  steps: [
    {
      num: "01",
      title: "The first conversation",
      body: "There is no cost and no obligation. You describe the situation, I ask a number of questions, and by the end of it we both know whether there is anything worth doing. Sometimes the honest answer is that your arrangement is already sound, and I will say so.",
      tag: "No cost, no obligation",
    },
    {
      num: "02",
      title: "The picture, in full",
      body: "Income, entity structure, retirement accounts, property, insurance and estate documents are looked at together rather than one at a time. Most of the opportunity sits in the gaps between those things, which is exactly where nobody thinks to look, and where the larger numbers usually turn up.",
      tag: "One complete view",
    },
    {
      num: "03",
      title: "The written plan",
      body: "You receive the recommendation and the reasoning behind it, in plain language, with the numbers set out so they can be checked. If you cannot explain a strategy to your family in your own words, it is not finished yet, and we keep working until you can.",
      tag: "Written in plain language",
    },
    {
      num: "04",
      title: "The years after",
      body: "Tax law moves, businesses change, children grow up and plans need adjusting. We review on a schedule rather than when something has already gone wrong, and I would far rather hear about a change while it happens than read about it later on a return.",
      tag: "Reviewed on a schedule",
    },
  ],
  practice: {
    eyebrow: "THE PRACTICE",
    heading: "Not a one man desk",
    paragraphs: [
      "Thirty years of client relationships are supported by a team, so nothing waits on a single calendar and nothing depends on one person being available.",
      "Clients are spread across Indiana, Illinois, Michigan, Ohio, Wisconsin and further afield, and most conversations now happen by video, which means where you live has stopped being the constraint it used to be.",
    ],
    cta: "Request a consultation",
    teamAlt: "Ashok Sanghavi with the Global Financial Group team",
  },
  portraitAlt: "Ashok Sanghavi, CFP, ChFC, CLU",
};

export const servicePhases = [
  {
    key: "earn",
    label: "While you earn",
    line: "The years when income is highest are the years the structure around it matters most. Almost everything that changes the final number is decided here, long before a return is prepared.",
    anchors: ["strategic-tax-planning", "business-strategies", "employee-benefit-guidance"],
  },
  {
    key: "hold",
    label: "While you hold",
    line: "Money that has already been earned still leaks, through where it sits and what it is exposed to. Two portfolios holding the same investments can end up very far apart.",
    anchors: ["wealth-management", "asset-protection"],
  },
  {
    key: "draw",
    label: "When you draw",
    line: "Turning a balance into an income is the part most plans never rehearse. The order you withdraw in, and the timing you choose, decide how much of it you actually see.",
    anchors: ["retirement-planning", "long-term-care"],
  },
  {
    key: "leave",
    label: "What you leave",
    line: "The last transfer is the one nobody gets to correct. Most problems here are not caused by the size of the estate, but by a form filled in decades ago and never looked at again.",
    anchors: ["zero-estate-tax-planning"],
  },
];

export const servicesPage = {
  breadcrumb: "Services",
  eyebrow: "WHAT I CONDUCT",
  h1: "Eight areas of planning",
  line: "Grouped below by where they act on your money rather than by category, because that is how they are actually used. Each area is handled personally, and each one connects to the others.",
  phaseEyebrow: "THE LIFE OF A DOLLAR",
  phaseHeading: "Four places money leaves, and eight ways to slow it down",
  phaseLine: "A dollar you earn is taxed while you make it, exposed while you hold it, taxed again when you draw it, and taxed a final time when you pass it on. The eight areas below are grouped by which of those four moments they act on.",
  keepLabel: "WHAT THIS KEEPS",
  closingHeading: "Not sure which of these you need",
  closingLine:
    "Most people arrive with one question and leave with a plan that touches three or four areas. That is normal, and it is why the first conversation is free.",
  closingCta: "Request a consultation",
  discuss: "Discuss this area",
  readFull: "Read this area in full",
};

export const watchPage = {
  breadcrumb: "Watch and Learn",
  eyebrow: "WATCH AND LEARN",
  h1: "Understand it before you decide it",
  line: "Short explanations of the concepts that decide how much you keep, how you retire, and how you leave your legacy.",
  paragraphs: [
    "Nobody should agree to a strategy they cannot explain. The material below exists so that by the time we speak, the vocabulary is already familiar and the conversation can start somewhere useful rather than at the beginning.",
    "Work through whatever is relevant to you and bring the questions it raises. The questions people think are too basic to ask are usually the ones worth an hour.",
  ],
  major: [
    {
      icon: "Layers",
      title: "Important Financial Concepts",
      body: "The ideas that come up in almost every plan, explained in short pieces you can work through at your own pace.",
      href: "https://ashoksanghavi.com/resource/Watch_Learn/Important_Financial_Concepts.aspx",
    },
    {
      icon: "BookOpen",
      title: "Standalone Financial Concepts",
      body: "Individual topics you can take one at a time, in any order, without needing anything else on this page as background.",
      href: "https://ashoksanghavi.com/resource/Watch_Learn/Standalone_Financial_Concepts.aspx",
    },
  ],
  principlesHeading: "Financial principles",
  principles: [
    { title: "Spender, saver, wealth creator", href: "https://ashoksanghavi.com/resource/Spender_saver_wealth_creator.aspx" },
    { title: "Insurance", href: "https://ashoksanghavi.com/resource/Insurance.aspx" },
    { title: "Zero financial line", href: "https://ashoksanghavi.com/resource/Zero_financial_line.aspx" },
    { title: "Avoiding the losses", href: "https://ashoksanghavi.com/resource/Avoiding_the_losses.aspx" },
  ],
  blog: {
    heading: "Written pieces",
    line: "The blog is published separately and opens in a new window.",
    cta: "Read recent blogs",
    href: "https://ashoksanghavi.com/Blog.aspx",
  },
  open: "Open in a new window",
};

export const calculators = [
  {
    icon: "BarChart3",
    title: "Investment Calculator",
    body: "See what a lump sum or regular contributions could grow into.",
    href: "https://www.calculatorsoup.com/calculators/financial/investment-calculator.php?do=pop",
  },
  {
    icon: "TrendingUp",
    title: "Investment Inflation Calculator",
    body: "Understand what that money will actually be worth by the time you use it.",
    href: "https://www.calculatorsoup.com/calculators/financial/investment-inflation-calculator.php?do=pop",
  },
  {
    icon: "Hourglass",
    title: "Retirement Savings Calculator",
    body: "Test whether your current savings rate matches the retirement you have in mind.",
    href: "https://www.calculatorsoup.com/calculators/financial/retirement-savings-calculator.php?do=pop",
  },
  {
    icon: "Home",
    title: "Mortgage Payment Calculator",
    body: "Payments with taxes and insurance included, not only principal and interest.",
    href: "https://www.calculatorsoup.com/calculators/financial/mortgage-payment-calculator.php?do=pop",
  },
  {
    icon: "Receipt",
    title: "Income Tax Calculator",
    body: "A quick federal estimate, before we look at what can be reduced.",
    href: "https://www.calculatorsoup.com/calculators/financial/tax-federal-est.php?do=pop",
  },
];

export const calcPage = {
  breadcrumb: "Calculators",
  eyebrow: "TOOLS",
  h1: "Run the numbers yourself",
  line: "Five free tools. Each one opens in a new window so you keep your place here.",
  opening:
    "Bring the result to the first conversation. Even a rough number changes the quality of that discussion, because we start from something real rather than from a range.",
  note: "These tools are provided by CalculatorSoup and open on their website. They are useful for a first estimate. They cannot account for your entity structure, your state, or the strategies that usually make the largest difference.",
  promo: {
    eyebrow: "FINANCIAL CALCULATORS",
    heading: "Plan Smarter. Make Better Financial Decisions.",
    body:
      "Our easy-to-use financial calculators help you estimate investment growth, inflation impact, retirement savings, mortgage payments, and income tax, all in one place.",
    closing:
      "Get quick insights into your finances and make more informed decisions about your financial future.",
  },
  closingHeading: "What a calculator cannot tell you",
  closingBody:
    "Every tool above assumes the structure around your money stays exactly as it is. Most of the work in this practice is changing that structure. The calculator shows you the starting point, not the ceiling.",
  closingCta: "Request a consultation",
};

export const careerPage = {
  breadcrumb: "Career",
  eyebrow: "CAREER",
  h1: "Planning, rather than selling",
  line: "If that distinction matters to you, there may be a place here.",
  paragraphs: [
    "Most people who enter this profession are trained to sell first and plan second. This practice was built the other way round, and it has taken thirty years to get here. The work is slower, the relationships last far longer, and the referrals arrive without being asked for.",
    "If you are early in your career, what is on offer is an apprenticeship in the part of this profession that nobody teaches properly, which is tax aware planning across a whole balance sheet rather than a single product.",
    "If you are already established and tired of working to somebody else's sales targets, what is on offer is the freedom to give the advice you would give your own family, in a practice where that is the entire point.",
  ],
  mattersHeading: "What matters here",
  matters: [
    {
      title: "Curiosity about the rules",
      body: "The opportunity is almost always sitting in a detail that somebody else read past. Reading the rule properly is most of the work.",
    },
    {
      title: "Patience with people",
      body: "Clients arrive worried more often than they arrive curious. The first job is listening carefully, and the advice comes after that.",
    },
    {
      title: "Willingness to be corrected",
      body: "Nobody here is expected to have every answer immediately. Pretending otherwise is the only mistake that actually costs a client something.",
    },
  ],
  closingHeading: "Interested",
  closingBody:
    "Send a short note about your background and what draws you to financial planning. Every enquiry is read personally.",
  emailCta: "Email your details",
};

export const contactPage = {
  breadcrumb: "Contact",
  eyebrow: "GET IN TOUCH",
  h1: "No cost, no obligation",
  line: "Tell me a little about your situation and what you would like to solve. The first conversation costs nothing and commits you to nothing.",
  paper: {
    eyebrow: "PREFER PAPER",
    heading: "No cost, no obligation form",
    line: "Download it, fill it in, and send it across.",
    cta: "Download the form",
    href: "https://ashoksanghavi.com/Image/No_Cost_No_Obligation_form.pdf",
  },
  note: "Send the situation as you see it, in whatever detail you are comfortable with. I will reply with what the first conversation would cover and how long it usually takes. There is no obligation on either side.",
  form: {
    name: "Your name",
    email: "Email",
    phone: "Phone",
    topic: "What would you like to discuss",
    topicOther: "Something else",
    situation: "Your situation",
    placeholder: "A few lines is plenty. For example, sold a business this year and unsure what to do next…",
    submit: "Request the consultation",
    sending: "Sending…",
    success: "Thank you. Your request has been received and Ashok will be in touch personally.",
    error: "That did not send. Please call 1-866-800-4771 or email info@ashoksanghavi.com.",
    mailOpening: "Opening your email app…",
    mailOpened:
      "Your email app should have opened with your message ready to send. If nothing happened, email info@ashoksanghavi.com or call 1-866-800-4771.",
    privacy: "Your details are used only to reply to you and are never shared.",
  },
};

export const notFoundPage = {
  h1: "This page has not been written yet",
  line: "Everything on this site lives in one of seven places. Try the services, the core beliefs, the calculators, about, or send a message.",
  cta: "Back to the beginning",
};
