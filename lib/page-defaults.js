import { HOME_DEFAULTS } from './home-defaults'

export const MY_STORY_DEFAULTS = {
  seo: {
    title: 'My Story — Freelance WordPress Developer & SEO Expert | Mostafij Emon',
    description:
      "Meet Mostafij Emon, a freelance WordPress developer and SEO expert with 6+ years' experience helping small businesses build fast, rankable websites.",
    keywords: 'freelance wordpress developer, seo expert, professional web developer, about mostafij emon, hire web developer',
  },
  hero: {
    title: 'A passionate WordPress developer & SEO specialist',
    lead: 'Six years turning small-business websites into their best salesperson — fast, found, and built to convert.',
  },
  story: {
    eyebrow: 'My story',
    heading: 'From first line of code to 3600+ projects',
    paragraphs: [
      "I'm <b>Mostafij Emon</b>, a WordPress Web Developer and SEO Specialist with over six years of hands-on experience. I started my professional journey in 2020, earned my bachelor's degree in 2021, and have spent every year since sharpening two skills that matter most for small businesses: building websites people enjoy using, and making sure search engines can find them.",
      "Along the way I've worked as a Web Developer with agencies serving clients in the United States, and as a Lead Web Developer on remote teams. That mix of agency discipline and freelance flexibility means you get professional standards without the agency price tag.",
      'My philosophy is simple: a website should pay for itself. Every project is built mobile-first, optimized for speed, and structured for SEO from day one — so you rank better and attract more customers without expensive add-ons down the road.',
    ],
    image: {
      url: 'https://mostafijemon.studio/wp-content/uploads/2025/05/mostafij-emon-website-designer-near-me.png',
      alt: 'Mostafij Emon, freelance WordPress developer and SEO expert',
    },
  },
  skills: {
    eyebrow: 'My expertise & skills',
    heading: 'What I bring to every project',
    items: [
      { idx: '01', title: 'Web Design & Development', description: 'WordPress, Divi Builder, Elementor, and clean custom HTML/CSS/JavaScript.' },
      { idx: '02', title: 'SEO', description: 'On-page, off-page, and technical SEO with keyword-focused content structure.' },
      { idx: '03', title: 'UX / UI Design', description: 'Interfaces that feel effortless and guide visitors toward taking action.' },
      { idx: '04', title: 'Performance & Bug Fixing', description: 'Speed optimization and reliable fixes that keep sites fast and stable.' },
      { idx: '05', title: 'Logo & Graphic Design', description: 'Distinctive brand visuals and logos that make a strong first impression.' },
      { idx: '06', title: 'Local & GMB', description: 'Google Business Profile setup so local customers find you first.' },
    ],
  },
  process: {
    eyebrow: 'How I work',
    heading: 'Client satisfaction is my priority',
    steps: [
      { title: 'Listen', description: 'I learn your business, goals, and the customers you want to reach.' },
      { title: 'Plan', description: 'Keyword research and a clear sitemap so every page has a purpose.' },
      { title: 'Build', description: 'A fast, responsive, SEO-ready website crafted to your brand.' },
      { title: 'Grow', description: 'Ongoing SEO, maintenance, and support to keep results climbing.' },
    ],
    stats: [
      { num: '3600+', lbl: 'Clients' },
      { num: '6+', lbl: 'Years' },
      { num: '90+', lbl: 'PageSpeed' },
      { num: '24/7', lbl: 'Support' },
    ],
  },
  cta: {
    eyebrow: "Let's work together",
    heading: "Let's tell your story online — and get it found.",
    lead: "Let's build a fast, SEO-friendly website that turns visitors into customers. Get a free, no-pressure quote today.",
  },
}

export const PORTFOLIO_PAGE_DEFAULTS = {
  seo: {
    title: 'Portfolio — WordPress Website Design Projects | Mostafij Emon',
    description:
      "Explore Mostafij Emon's portfolio of WordPress website design and SEO projects for healthcare, legal, and local service businesses.",
    keywords: 'wordpress website design portfolio, web design examples, website design projects, web designer portfolio',
  },
  hero: {
    title: 'A unique blend of expertise and creativity',
    lead: 'A selection of WordPress website design and SEO projects across healthcare, legal, local services, and more.',
  },
  items: [
    ...HOME_DEFAULTS.work.items,
    { url: 'https://www.emergencydentalcenter.com/', image: 'https://mostafijemon.studio/wp-content/uploads/2025/01/Emergency-Dentists-in-Greater-Houston.png', alt: 'Emergency Dental Center WordPress website design by Mostafij Emon', category: 'Emergency Dentistry', title: 'Emergency Dental Center' },
    { url: 'https://careplus24er.com/', image: 'https://mostafijemon.studio/wp-content/uploads/2025/01/Care-Plus-Emergency-Room.png', alt: 'Care Plus Emergency Room WordPress website design by Mostafij Emon', category: 'Emergency Care', title: 'Care Plus Emergency Room' },
    { url: 'https://www.aggiesafety.com/', image: 'https://mostafijemon.studio/wp-content/uploads/2025/01/Aggie-safety.png', alt: 'Aggie Safety WordPress website design by Mostafij Emon', category: 'Safety Training', title: 'Aggie Safety' },
    { url: 'https://divahairbraidings.com/', image: 'https://mostafijemon.studio/wp-content/uploads/2025/01/hair-braids-shop-near-me.png', alt: 'Diva Hair Braidings WordPress website design by Mostafij Emon', category: 'Beauty & Salon', title: 'Diva Hair Braidings' },
    { url: 'https://gentlepediatrics.com/', image: 'https://mostafijemon.studio/wp-content/uploads/2025/01/Gentle-Pediatrics.png', alt: 'Gentle Pediatrics WordPress website design by Mostafij Emon', category: 'Pediatric Clinic', title: 'Gentle Pediatrics' },
    { url: 'https://pediatricpod.com/', image: 'https://mostafijemon.studio/wp-content/uploads/2025/01/Pediatric-Pod-Concierge-Pediatrics.png', alt: 'Pediatric Pod WordPress website design by Mostafij Emon', category: 'Concierge Pediatrics', title: 'Pediatric Pod' },
  ],
  logos: {
    eyebrow: '3600+ happy clients',
    heading: "Brands I've worked with",
    lead: 'Some client branding is withheld out of respect for permission and privacy.',
    items: [
      ...HOME_DEFAULTS.logos.items,
      { url: 'https://mostafijemon.studio/wp-content/uploads/2025/01/care-plus-emergency-room.jpg', alt: 'CarePlus 24 ER website client logo' },
      { url: 'https://mostafijemon.studio/wp-content/uploads/2025/01/brazos-smiles.jpg', alt: 'Brazos Smiles website client logo' },
      { url: 'https://mostafijemon.studio/wp-content/uploads/2025/01/big-country-welding.jpg', alt: 'Big Country Welding website client logo' },
      { url: 'https://mostafijemon.studio/wp-content/uploads/2025/01/auspicious-lab.jpg', alt: 'Auspicious Lab website client logo' },
      { url: 'https://mostafijemon.studio/wp-content/uploads/2025/01/appna.jpg', alt: 'APPNA STC website client logo' },
      { url: 'https://mostafijemon.studio/wp-content/uploads/2025/01/aggiesafety.jpg', alt: 'Aggie Safety website client logo' },
    ],
  },
  reviews: {
    eyebrow: 'Client reviews',
    heading: 'What clients say',
    items: HOME_DEFAULTS.reviews.items,
  },
  cta: {
    eyebrow: "Let's work together",
    heading: "Like what you see? Let's build yours next.",
    lead: "Let's build a fast, SEO-friendly website that turns visitors into customers. Get a free, no-pressure quote today.",
  },
}

export const BLOGS_DEFAULTS = {
  seo: {
    title: 'Blog — Web Design, SEO & Digital Marketing Tips | Mostafij Emon',
    description:
      'Actionable web design, SEO, and digital marketing tips to help small businesses grow online. Practical guides from Mostafij Emon.',
    keywords: 'web design blog, seo tips, digital marketing tips, small business website tips, wordpress tips',
  },
  hero: {
    title: 'Expert insights on web design, SEO & digital marketing',
    lead: 'Actionable tips and strategies to help your business grow online — mobile-friendly design, SEO-friendly structure, and marketing that works.',
  },
  posts: [
    { thumb: 'SEO', category: 'SEO', title: 'How to Rank a Small Business Website on the First Page of Google', excerpt: 'A practical, beginner-friendly guide to keyword research, on-page SEO, and the local signals that move you up the rankings.', url: '/blogs' },
    { thumb: 'WEB', category: 'Web Design', title: '7 Signs Your Website Needs a Redesign in 2026', excerpt: "Slow load times, poor mobile experience, high bounce rates — here's how to know it's time for a refresh, and what to fix first.", url: '/blogs' },
    { thumb: 'LOC', category: 'Local SEO', title: 'Google Business Profile: The Free Tool Most Local Businesses Underuse', excerpt: 'Step-by-step tips to optimize your GMB listing and start appearing in the local map pack for nearby searches.', url: '/blogs' },
    { thumb: 'WOR', category: 'WordPress', title: 'Divi vs Elementor: Which Page Builder Is Right for You?', excerpt: 'An honest comparison of the two most popular WordPress builders, with recommendations based on your goals and skill level.', url: '/blogs' },
    { thumb: 'PER', category: 'Performance', title: 'Why Website Speed Matters for SEO and Sales (and How to Fix It)', excerpt: 'How page speed affects rankings and conversions, plus the highest-impact tweaks to make your WordPress site faster.', url: '/blogs' },
    { thumb: 'DIG', category: 'Digital Marketing', title: 'A Simple Marketing Funnel Every Small Business Should Have', excerpt: 'From first click to repeat customer — a clear, no-fluff framework you can set up without a big budget.', url: '/blogs' },
  ],
  footerNote: "New articles are published regularly. Have a topic you'd like covered?",
  cta: {
    eyebrow: "Let's work together",
    heading: 'Prefer done-for-you over do-it-yourself?',
    lead: "Let's build a fast, SEO-friendly website that turns visitors into customers. Get a free, no-pressure quote today.",
  },
}

export const SERVICES_PAGE_DEFAULTS = {
  seo: {
    title: 'Web Design, SEO & Digital Marketing Services | Mostafij Emon',
    description:
      'Affordable web design, SEO, GMB, e-commerce, and digital marketing services for small businesses — everything you need to grow online, under one roof.',
    keywords: 'web design and seo services, affordable digital marketing services, small business web services, wordpress services',
  },
  hero: {
    title: 'Web design & SEO services for small business growth',
    lead: 'Affordable, results-driven digital services — everything you need to launch, rank, and grow, all under one roof.',
  },
  intro: {
    eyebrow: 'Everything under one roof',
    heading: 'One partner, from launch to long-term growth',
    lead: "You don't need to juggle five different freelancers. I handle design, SEO, branding, and maintenance together — which keeps your message consistent and saves you time and money.",
    checklist: [
      'Clear, fixed quotes before any work begins',
      'SEO-friendly structure on every page we build',
      'Fast turnaround — most sites in 7–14 days',
      'Support and maintenance plans to match your budget',
    ],
    steps: [
      { title: 'Discovery', description: 'We define goals, audience, and target keywords.' },
      { title: 'Design & build', description: 'Responsive, on-brand, SEO-ready development.' },
      { title: 'Launch', description: 'Testing, speed checks, and a smooth go-live.' },
      { title: 'Grow', description: 'SEO, content, and maintenance to compound results.' },
    ],
  },
  cta: {
    eyebrow: "Let's work together",
    heading: 'Ready to grow your business online?',
    lead: "Let's build a fast, SEO-friendly website that turns visitors into customers. Get a free, no-pressure quote today.",
  },
}
