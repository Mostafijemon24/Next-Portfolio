/** Shared section fallbacks (used when WP ACF fields are empty) */
const SHARED = {
  intro: {
    eyebrow: 'What you get',
    heading: 'Built to be found and to convert',
    lead: 'Every project is structured for search engines and real customers — fast, clear, and easy to manage.',
    checklist: [
      '100% mobile-responsive design',
      'SEO-ready structure from day one',
      'Fast load times and clean code',
      'Clear calls-to-action that drive enquiries',
      'Easy to update after launch',
    ],
    image: {
      url: 'https://mostafijemon.studio/wp-content/uploads/2025/05/wordpress-website-design.png',
      alt: 'Service preview',
    },
    ctaText: 'Get Started',
    ctaUrl: '/contact',
  },
  features: {
    eyebrow: 'Included features',
    heading: 'Everything built in, nothing bolted on later',
    items: [
      { idx: '01', title: 'Responsive Layout', description: 'Looks and works perfectly on desktops, tablets, and smartphones.' },
      { idx: '02', title: 'SEO-Ready Build', description: 'Clean code, fast speed, and keyword structure so you rank from launch.' },
      { idx: '03', title: 'Easy to Manage', description: 'Built so you can update text and images yourself, no developer needed.' },
      { idx: '04', title: 'Conversion-Focused', description: 'Strategic layout and CTAs that guide visitors to contact or buy.' },
      { idx: '05', title: 'Brand-Matched Design', description: 'Colors, fonts, and visuals tailored to your unique identity.' },
      { idx: '06', title: 'Secure Foundation', description: 'Reliable hosting setup, SSL, and security best practices.' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    heading: 'A simple, transparent process',
    lead: 'No jargon, no surprises. You always know what stage we\'re at and what happens next.',
    steps: [
      { title: 'Discovery', description: 'We discuss your goals, audience, and the keywords you want to rank for.' },
      { title: 'Wireframe & design', description: 'I map the pages and design a layout that matches your brand.' },
      { title: 'Development', description: 'I build a fast, responsive, SEO-ready WordPress site.' },
      { title: 'Launch & handover', description: 'Testing, speed checks, go-live, and a walkthrough so you\'re in control.' },
    ],
  },
  faqs: {
    eyebrow: 'FAQ',
    heading: 'Common questions',
    items: [
      { question: 'How much does it cost?', answer: 'Pricing depends on scope, but plans are clear, fair, and flexible. You\'ll get a fixed quote before any work starts.' },
      { question: 'How long does it take?', answer: 'Most projects are delivered within 7–14 days, depending on content readiness and project size.' },
      { question: 'Will it work on mobile?', answer: 'Yes — every build is 100% responsive and tested across phones, tablets, and desktops.' },
      { question: 'Can I edit it myself later?', answer: 'Absolutely. I build on WordPress so you can update content easily, and I offer maintenance if you\'d rather hand it off.' },
    ],
  },
  cta: {
    eyebrow: "Let's work together",
    heading: 'Ready to grow your business online?',
    lead: "Let's build a fast, SEO-friendly website that turns visitors into customers. Get a free, no-pressure quote today.",
  },
}

function svc(seo, hero, imageUrl) {
  return {
    seo,
    hero,
    intro: {
      ...SHARED.intro,
      image: imageUrl
        ? { url: imageUrl, alt: hero.title }
        : SHARED.intro.image,
    },
    features: SHARED.features,
    process: SHARED.process,
    faqs: SHARED.faqs,
    cta: SHARED.cta,
  }
}

export const SERVICE_DEFAULTS = {
  'website-design': svc(
    {
      title: 'Affordable WordPress Website Design | Mostafij Emon',
      description: 'Custom, mobile-friendly WordPress websites that load fast, look professional, and turn visitors into paying customers.',
      keywords: 'affordable wordpress website design, responsive business website design, mobile friendly website designer',
    },
    {
      breadcrumb: 'Affordable WordPress Website Design',
      title: 'Affordable WordPress Website Design',
      lead: 'Custom, mobile-friendly WordPress websites that load fast, look professional, and turn visitors into paying customers.',
    },
    'https://mostafijemon.studio/wp-content/uploads/2025/05/wordpress-website-design.png',
  ),
  seo: svc(
    {
      title: 'SEO Services That Grow Your Rankings | Mostafij Emon',
      description: 'On-page, off-page, and technical SEO that helps your business climb search results and attract more qualified visitors.',
      keywords: 'affordable seo services for small business, on page off page technical seo, local seo expert',
    },
    { breadcrumb: 'SEO Services That Grow Your Rankings', title: 'SEO Services That Grow Your Rankings', lead: 'On-page, off-page, and technical SEO that helps your business climb search results and attract more qualified visitors.' },
  ),
  'gmb-setup': svc(
    {
      title: 'Google Business Profile (GMB) Setup & Optimization | Mostafij Emon',
      description: 'Show up in local search and the Google map pack. I create and optimize your Google Business Profile so nearby customers find and trust you first.',
      keywords: 'google business profile setup, gmb optimization, local seo map pack',
    },
    { breadcrumb: 'Google Business Profile (GMB) Setup & Optimization', title: 'Google Business Profile (GMB) Setup & Optimization', lead: 'Show up in local search and the Google map pack. I create and optimize your Google Business Profile so nearby customers find and trust you first.' },
  ),
  'social-marketing': svc(
    { title: 'Social Media Marketing | Mostafij Emon', description: 'Creative campaigns and consistent posting that build brand awareness, grow your audience, and turn followers into customers.', keywords: 'social media marketing small business' },
    { breadcrumb: 'Social Media Marketing', title: 'Social Media Marketing', lead: 'Creative campaigns and consistent posting that build brand awareness, grow your audience, and turn followers into customers.' },
  ),
  'website-maintenance': svc(
    { title: 'Website Maintenance & Support | Mostafij Emon', description: 'Keep your website secure, updated, and running fast with monthly maintenance and monitoring — so you can focus on your business.', keywords: 'wordpress website maintenance support' },
    { breadcrumb: 'Website Maintenance & Support', title: 'Website Maintenance & Support', lead: 'Keep your website secure, updated, and running fast with monthly maintenance and monitoring — so you can focus on your business.' },
  ),
  'digital-marketing': svc(
    { title: 'Digital Marketing Services | Mostafij Emon', description: 'Targeted email campaigns, PPC ads, and full-funnel strategies that drive real business growth and measurable returns.', keywords: 'digital marketing services small business' },
    { breadcrumb: 'Digital Marketing Services', title: 'Digital Marketing Services', lead: 'Targeted email campaigns, PPC ads, and full-funnel strategies that drive real business growth and measurable returns.' },
  ),
  'graphic-logo-design': svc(
    { title: 'Graphic & Logo Design | Mostafij Emon', description: 'Unique, professional logos and marketing visuals that represent your business and make a memorable first impression.', keywords: 'affordable logo design graphic design' },
    { breadcrumb: 'Graphic & Logo Design', title: 'Graphic & Logo Design', lead: 'Unique, professional logos and marketing visuals that represent your business and make a memorable first impression.' },
  ),
  'ecommerce-solutions': svc(
    { title: 'E-commerce Solutions | Mostafij Emon', description: 'Launch and manage a seamless online store with secure payments and a clean, user-friendly design built to sell.', keywords: 'woocommerce ecommerce website design' },
    { breadcrumb: 'E-commerce Solutions', title: 'E-commerce Solutions', lead: 'Launch and manage a seamless online store with secure payments and a clean, user-friendly design built to sell.' },
  ),
  'plugin-development': svc(
    { title: 'Custom WordPress Plugin Development | Mostafij Emon', description: 'Custom WordPress and WooCommerce plugin development. Lightweight, secure, update-safe plugins built around your exact business workflow.', keywords: 'custom wordpress plugin development' },
    { breadcrumb: 'Custom WordPress Plugin Development', title: 'Custom WordPress Plugin Development', lead: 'Custom WordPress and WooCommerce plugin development. Lightweight, secure, update-safe plugins built around your exact business workflow.' },
  ),
}
