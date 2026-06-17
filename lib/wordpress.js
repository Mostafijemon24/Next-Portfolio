import { HOME_DEFAULTS } from './home-defaults'
import { CONTACT_DEFAULTS } from './contact-defaults'
import { SERVICE_DEFAULTS } from './service-defaults'
import {
  MY_STORY_DEFAULTS,
  PORTFOLIO_PAGE_DEFAULTS,
  BLOGS_DEFAULTS,
  SERVICES_PAGE_DEFAULTS,
} from './page-defaults'
import { getWpSlug } from './service-registry'

const WP_API =
  process.env.WORDPRESS_API_URL || 'https://next.mostafijemon.com/wp-json'

const SERVICE_SLUG_MAP = {
  'e-commerce-solutions': '/ecommerce-solutions',
}

const DEFAULT_SETTINGS = {
  availability: 'Remote · working with clients worldwide',
  brand_mark: 'ME',
  brand_name: 'Mostafij Emon',
  brand_tagline: 'Web Developer · SEO',
  contact_email: 'hello@mostafijemon.com',
  contact_website: 'https://mostafijemon.com',
  copyright_tagline: 'WordPress · SEO · Affordable web design near you',
  footer_description:
    'Affordable WordPress website design, plugin development, SEO, and digital marketing for small businesses that want to be found, trusted, and chosen online.',
  nav_cta_link: '/contact',
  nav_cta_text: 'Get a Free Quote',
  nav_items: [],
  service_nav_items: [],
  response_time: 'Usually within 24 hours',
}

export function normalizePath(url) {
  if (!url) return '/'
  if (url.startsWith('http')) {
    try {
      const path = new URL(url).pathname
      return path.replace(/\/$/, '') || '/'
    } catch {
      return '/'
    }
  }
  return url.replace(/\/$/, '') || '/'
}

function fetchOpts() {
  // Cache at the edge; purge instantly via on-demand revalidation (WP webhook → /api/revalidate)
  // 3600s = safety net if a webhook is ever missed.
  return { next: { revalidate: 3600, tags: ['wp'] } }
}

function hasValue(val) {
  return val !== undefined && val !== null && val !== '' && val !== false
}

function pick(val, fallback) {
  return hasValue(val) ? val : fallback
}

export function acfImageUrl(image, fallback = '') {
  if (!image) return fallback
  if (typeof image === 'string') return image
  if (image.url) return image.url
  return fallback
}

function decodeHtml(text = '') {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&#038;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
}

function servicePath(slug, nextSlug) {
  if (hasValue(nextSlug)) return normalizePath(nextSlug)
  return SERVICE_SLUG_MAP[slug] || `/${slug}`
}

async function wpFetch(path) {
  try {
    const res = await fetch(`${WP_API}${path}`, fetchOpts())
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getPageBySlug(slug) {
  const pages = await wpFetch(`/wp/v2/pages?slug=${slug}&acf_format=standard`)
  return Array.isArray(pages) && pages[0] ? pages[0] : null
}

async function getCptItems(type, perPage = 20) {
  const items = await wpFetch(`/wp/v2/${type}?per_page=${perPage}&acf_format=standard&_embed`)
  return Array.isArray(items) ? items : []
}

function findServiceFallback(defaults, slug, nextSlug) {
  const path = servicePath(slug, nextSlug)
  return defaults.find((d) => d.url === path) || defaults.find((d) => d.url === `/${slug}`)
}

function mapServiceCard(post, index, defaults) {
  const acf = post.acf || {}
  const slug = post.slug
  const fallback = findServiceFallback(defaults, slug, acf.next_slug) || defaults[index]

  return {
    icon: pick(acf.service_icon, fallback?.icon || '◇'),
    iconImage: acfImageUrl(acf.service_icon_image, fallback?.iconImage || ''),
    iconAlt: pick(
      acf.service_icon_image?.alt,
      fallback?.iconAlt || decodeHtml(post.title?.rendered || ''),
    ),
    title: decodeHtml(pick(post.title?.rendered, fallback?.title || '')),
    description: pick(
      acf.short_description,
      fallback?.description || post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
    ),
    url: servicePath(slug, acf.next_slug) || fallback?.url || '/services',
  }
}

function mapPortfolioItem(post, index, defaults) {
  const acf = post.acf || {}
  const fallback = defaults[index]
  const thumb = post._embedded?.['wp:featuredmedia']?.[0]

  return {
    url: pick(acf.project_url, fallback?.url || '#'),
    image: acfImageUrl(acf.project_image, thumb?.source_url || fallback?.image || ''),
    alt: pick(acf.image_alt, fallback?.alt || decodeHtml(post.title?.rendered || '')),
    category: pick(acf.category_label, fallback?.category || ''),
    title: decodeHtml(pick(post.title?.rendered, fallback?.title || '')),
  }
}

function mapTestimonial(post, index, defaults) {
  const acf = post.acf || {}
  const fallback = defaults[index]
  const name = pick(acf.client_name, fallback?.name || decodeHtml(post.title?.rendered || ''))

  return {
    quote: pick(acf.quote, fallback?.quote || post.content?.rendered?.replace(/<[^>]+>/g, '') || ''),
    name,
    role: pick(acf.client_role, fallback?.role || ''),
    initial: pick(acf.avatar_initial, fallback?.initial || name.charAt(0) || '?'),
  }
}

function mapClientLogo(post, index, defaults) {
  const acf = post.acf || {}
  const fallback = defaults[index]
  const thumb = post._embedded?.['wp:featuredmedia']?.[0]

  return {
    url: acfImageUrl(acf.logo_image, thumb?.source_url || fallback?.url || ''),
    alt: pick(acf.logo_alt, fallback?.alt || decodeHtml(post.title?.rendered || 'Client logo')),
  }
}

function mapBlogPost(post, index, defaults) {
  const acf = post.acf || {}
  const fallback = defaults[index]
  const categories = post._embedded?.['wp:term']?.[0] || []
  const category = categories[0]?.name || fallback?.category || 'Blog'
  const thumbFallback = category.slice(0, 3).toUpperCase()

  return {
    thumb: pick(acf.thumb_label, fallback?.thumb || thumbFallback),
    category,
    title: decodeHtml(pick(post.title?.rendered, fallback?.title || '')),
    excerpt: pick(
      post.excerpt?.rendered?.replace(/<[^>]+>/g, '').trim(),
      fallback?.excerpt || '',
    ),
    url: pick(post.link, fallback?.url || '/contact'),
  }
}

function mapHeroCtas(rows, defaults) {
  if (!Array.isArray(rows) || rows.length === 0) return defaults
  return rows.map((row, i) => ({
    label: pick(row.label, defaults[i]?.label || 'Learn more'),
    url: normalizePath(pick(row.url, defaults[i]?.url || '/')),
    variant: pick(row.variant, defaults[i]?.variant || 'ghost'),
  }))
}

function mapHeroSpecs(rows, defaults) {
  if (!Array.isArray(rows) || rows.length === 0) return defaults
  return rows.map((row, i) => ({
    value: pick(row.value, defaults[i]?.value || ''),
    label: pick(row.label, defaults[i]?.label || ''),
  }))
}

function mapHeroCard(rows, defaults) {
  if (!Array.isArray(rows) || rows.length === 0) return defaults
  return rows.map((row, i) => ({
    key: pick(row.key, defaults[i]?.key || ''),
    value: pick(row.value, defaults[i]?.value || ''),
    highlight: Boolean(row.highlight),
  }))
}

function mapStats(rows, defaults) {
  if (!Array.isArray(rows) || rows.length === 0) return defaults
  return rows.map((row, i) => ({
    num: pick(row.num, defaults[i]?.num || ''),
    lbl: pick(row.lbl, defaults[i]?.lbl || ''),
  }))
}

function mapChecklist(rows, defaults) {
  if (!Array.isArray(rows) || rows.length === 0) return defaults
  return rows
    .map((row) => (typeof row === 'string' ? row : row.item || row.text || ''))
    .filter(Boolean)
}

async function resolveRelationship(type, relation, mapper, defaults, perPage) {
  if (Array.isArray(relation) && relation.length > 0) {
    if (typeof relation[0] === 'object' && relation[0]?.title) {
      return relation.map((post, i) => mapper(post, i, defaults))
    }
    const ids = relation.join(',')
    const items = await wpFetch(`/wp/v2/${type}?include=${ids}&acf_format=standard&_embed`)
    if (Array.isArray(items) && items.length > 0) {
      return items.map((post, i) => mapper(post, i, defaults))
    }
  }

  const items = await getCptItems(type, perPage)
  if (items.length > 0) {
    return items.map((post, i) => mapper(post, i, defaults))
  }

  return defaults
}

export async function getHomePageData() {
  const d = HOME_DEFAULTS
  const [page, services, portfolio, testimonials, logos] = await Promise.all([
    getPageBySlug('home'),
    getCptItems('service', 8),
    getCptItems('portfolio', 6),
    getCptItems('testimonial', 6),
    getCptItems('client_logo', 18),
  ])

  const acf = page?.acf || {}

  let serviceItems = await resolveRelationship(
    'service',
    acf.featured_services,
    mapServiceCard,
    d.services.items,
    8,
  )
  if (services.length > 0 && !hasValue(acf.featured_services)) {
    serviceItems = services.map((post, i) => mapServiceCard(post, i, d.services.items))
  }

  let workItems = await resolveRelationship(
    'portfolio',
    acf.featured_portfolio,
    mapPortfolioItem,
    d.work.items,
    6,
  )
  if (portfolio.length > 0 && !hasValue(acf.featured_portfolio)) {
    workItems = portfolio.map((post, i) => mapPortfolioItem(post, i, d.work.items))
  }

  let reviewItems = await resolveRelationship(
    'testimonial',
    acf.testimonials,
    mapTestimonial,
    d.reviews.items,
    6,
  )
  if (testimonials.length > 0 && !hasValue(acf.testimonials)) {
    reviewItems = testimonials.map((post, i) => mapTestimonial(post, i, d.reviews.items))
  }

  let logoItems = await resolveRelationship(
    'client_logo',
    acf.client_logos,
    mapClientLogo,
    d.logos.items,
    18,
  )
  if (logos.length > 0 && !hasValue(acf.client_logos)) {
    logoItems = logos
      .map((post, i) => mapClientLogo(post, i, d.logos.items))
      .filter((item) => item.url)
  }

  return {
    seo: {
      title: pick(acf.seo_title, d.seo.title),
      description: pick(acf.seo_description, d.seo.description),
      keywords: pick(acf.seo_keywords, d.seo.keywords),
      ogImage: acfImageUrl(acf.og_image, ''),
    },
    hero: {
      eyebrow: pick(acf.hero_eyebrow, d.hero.eyebrow),
      headingHtml: hasValue(acf.hero_heading) ? acf.hero_heading : null,
      headingBefore: d.hero.headingBefore,
      headingHighlight: d.hero.headingHighlight,
      headingAfter: d.hero.headingAfter,
      lead: pick(acf.hero_lead, d.hero.lead),
      ctas: mapHeroCtas(acf.hero_ctas, d.hero.ctas),
      specs: mapHeroSpecs(acf.hero_specs, d.hero.specs),
      card: mapHeroCard(acf.hero_card, d.hero.card),
    },
    stats: mapStats(acf.stats, d.stats),
    services: {
      eyebrow: pick(acf.services_eyebrow, d.services.eyebrow),
      heading: pick(acf.services_heading, d.services.heading),
      lead: pick(acf.services_lead, d.services.lead),
      items: serviceItems,
    },
    why: {
      eyebrow: pick(acf.why_eyebrow, d.why.eyebrow),
      heading: pick(acf.why_heading, d.why.heading),
      lead: pick(acf.why_lead, d.why.lead),
      checklist: mapChecklist(acf.why_checklist, d.why.checklist),
      image: {
        url: acfImageUrl(acf.why_image, d.why.image.url),
        alt: pick(acf.why_image?.alt, d.why.image.alt),
      },
    },
    logos: {
      eyebrow: pick(acf.logos_eyebrow, d.logos.eyebrow),
      heading: pick(acf.logos_heading, d.logos.heading),
      lead: pick(acf.logos_lead, d.logos.lead),
      items: logoItems.filter((item) => item.url),
    },
    work: {
      eyebrow: pick(acf.work_eyebrow, d.work.eyebrow),
      heading: pick(acf.work_heading, d.work.heading),
      items: workItems.filter((item) => item.image),
    },
    reviews: {
      eyebrow: pick(acf.reviews_eyebrow, d.reviews.eyebrow),
      heading: pick(acf.reviews_heading, d.reviews.heading),
      lead: pick(acf.reviews_lead, d.reviews.lead),
      items: reviewItems.filter((item) => item.quote),
    },
    cta: {
      eyebrow: pick(acf.cta_eyebrow, d.cta.eyebrow),
      heading: pick(acf.cta_heading, d.cta.heading),
      lead: pick(acf.cta_lead, d.cta.lead),
      buttons: mapHeroCtas(acf.cta_buttons, d.cta.buttons),
    },
  }
}

export async function getSiteSettings() {
  try {
    const res = await fetch(`${WP_API}/me/v1/site-settings`, fetchOpts())
    if (!res.ok) return DEFAULT_SETTINGS
    const data = await res.json()
    return { ...DEFAULT_SETTINGS, ...data }
  } catch {
    return DEFAULT_SETTINGS
  }
}

function mapRepeaterItems(rows, mapper, defaults) {
  if (!Array.isArray(rows) || rows.length === 0) return defaults
  return rows.map((row, i) => mapper(row, i, defaults))
}

export async function getContactPageData() {
  const [page, settings] = await Promise.all([
    getPageBySlug('contact'),
    getSiteSettings(),
  ])
  const acf = page?.acf || {}
  const d = CONTACT_DEFAULTS

  const websiteHost = (() => {
    try {
      return new URL(settings.contact_website || 'https://mostafijemon.com').hostname.replace(/^www\./, '')
    } catch {
      return 'mostafijemon.com'
    }
  })()

  return {
    seo: {
      title: pick(acf.seo_title, d.seo.title),
      description: pick(acf.seo_description, d.seo.description),
      keywords: pick(acf.seo_keywords, d.seo.keywords),
    },
    hero: {
      title: pick(acf.hero_title, d.hero.title),
      lead: pick(acf.hero_lead, d.hero.lead),
    },
    form: {
      eyebrow: pick(acf.form_eyebrow, d.form.eyebrow),
      heading: pick(acf.form_heading, d.form.heading),
      serviceOptions: d.form.serviceOptions,
      submitLabel: d.form.submitLabel,
      endpoint: pick(
        settings.form_endpoint,
        process.env.NEXT_PUBLIC_FORM_ENDPOINT,
        d.form.endpoint,
      ),
    },
    sidebar: {
      ...d.sidebar,
      email: settings.contact_email || 'hello@mostafijemon.com',
      website: settings.contact_website || 'https://mostafijemon.com',
      websiteHost,
      responseTime: settings.response_time || 'Usually within 24 hours',
      availability: settings.availability || 'Remote · working with clients worldwide',
    },
  }
}

export async function getServicePageData(nextPath) {
  const wpSlug = getWpSlug(nextPath)
  const defaults = SERVICE_DEFAULTS[nextPath]
  if (!defaults) return null

  const items = await wpFetch(`/wp/v2/service?slug=${wpSlug}&acf_format=standard&_embed`)
  const post = Array.isArray(items) && items[0] ? items[0] : null
  const acf = post?.acf || {}
  const title = decodeHtml(post?.title?.rendered || defaults.hero.title)

  return {
    seo: {
      title: pick(acf.seo_title, defaults.seo.title),
      description: pick(acf.seo_description, defaults.seo.description),
      keywords: pick(acf.seo_keywords, defaults.seo.keywords),
    },
    hero: {
      breadcrumb: pick(acf.breadcrumb_label, defaults.hero.breadcrumb),
      title,
      lead: pick(acf.hero_lead, defaults.hero.lead),
    },
    intro: {
      eyebrow: pick(acf.intro_eyebrow, defaults.intro.eyebrow),
      heading: pick(acf.intro_heading, defaults.intro.heading),
      lead: pick(acf.intro_lead, defaults.intro.lead),
      checklist: mapChecklist(acf.intro_checklist, defaults.intro.checklist),
      image: {
        url: acfImageUrl(acf.intro_image, defaults.intro.image.url),
        alt: pick(acf.intro_image?.alt, defaults.intro.image.alt),
      },
      ctaText: pick(acf.intro_cta_text, defaults.intro.ctaText),
      ctaUrl: normalizePath(pick(acf.intro_cta_url, defaults.intro.ctaUrl)),
    },
    features: {
      eyebrow: pick(acf.features_eyebrow, defaults.features.eyebrow),
      heading: pick(acf.features_heading, defaults.features.heading),
      items: mapRepeaterItems(
        acf.features,
        (row, i, fb) => ({
          idx: pick(row.idx, fb[i]?.idx || String(i + 1).padStart(2, '0')),
          title: pick(row.title, fb[i]?.title || ''),
          description: pick(row.description, fb[i]?.description || ''),
        }),
        defaults.features.items,
      ),
    },
    process: {
      eyebrow: pick(acf.process_eyebrow, defaults.process.eyebrow),
      heading: pick(acf.process_heading, defaults.process.heading),
      lead: pick(acf.process_lead, defaults.process.lead),
      steps: mapRepeaterItems(
        acf.process_steps,
        (row, i, fb) => ({
          title: pick(row.title, fb[i]?.title || ''),
          description: pick(row.description, fb[i]?.description || ''),
        }),
        defaults.process.steps,
      ),
    },
    faqs: {
      eyebrow: pick(acf.faq_eyebrow, defaults.faqs.eyebrow),
      heading: pick(acf.faq_heading, defaults.faqs.heading),
      items: mapRepeaterItems(
        acf.faqs,
        (row, i, fb) => ({
          question: pick(row.question, row.title || fb[i]?.question || ''),
          answer: pick(row.answer, row.description || fb[i]?.answer || ''),
        }),
        defaults.faqs.items,
      ),
    },
    cta: {
      eyebrow: pick(acf.cta_eyebrow, defaults.cta.eyebrow),
      heading: pick(acf.cta_heading, defaults.cta.heading),
      lead: pick(acf.cta_lead, defaults.cta.lead),
    },
  }
}

export async function getMyStoryPageData() {
  const page = await getPageBySlug('my-story')
  const acf = page?.acf || {}
  const d = MY_STORY_DEFAULTS

  const paragraphs =
    Array.isArray(acf.story_paragraphs) && acf.story_paragraphs.length > 0
      ? acf.story_paragraphs.map((row) => row.text || row.paragraph || '')
      : hasValue(acf.story_body)
        ? [acf.story_body]
        : d.story.paragraphs

  return {
    seo: {
      title: pick(acf.seo_title, d.seo.title),
      description: pick(acf.seo_description, d.seo.description),
      keywords: pick(acf.seo_keywords, d.seo.keywords),
    },
    hero: {
      title: pick(acf.hero_title, d.hero.title),
      lead: pick(acf.hero_lead, d.hero.lead),
    },
    story: {
      eyebrow: pick(acf.story_eyebrow, d.story.eyebrow),
      heading: pick(acf.story_heading, d.story.heading),
      paragraphs,
      image: {
        url: acfImageUrl(acf.story_image, d.story.image.url),
        alt: pick(acf.story_image?.alt, d.story.image.alt),
      },
    },
    skills: {
      eyebrow: pick(acf.skills_eyebrow, d.skills.eyebrow),
      heading: pick(acf.skills_heading, d.skills.heading),
      items: mapRepeaterItems(
        acf.skills,
        (row, i, fb) => ({
          idx: pick(row.idx, fb[i]?.idx || String(i + 1).padStart(2, '0')),
          title: pick(row.title, fb[i]?.title || ''),
          description: pick(row.description, fb[i]?.description || ''),
        }),
        d.skills.items,
      ),
    },
    process: {
      eyebrow: pick(acf.process_eyebrow, d.process.eyebrow),
      heading: pick(acf.process_heading, d.process.heading),
      steps: mapRepeaterItems(
        acf.process_steps,
        (row, i, fb) => ({
          title: pick(row.title, fb[i]?.title || ''),
          description: pick(row.description, fb[i]?.description || ''),
        }),
        d.process.steps,
      ),
      stats: mapStats(acf.process_stats, d.process.stats),
    },
    cta: {
      eyebrow: pick(acf.cta_eyebrow, d.cta.eyebrow),
      heading: pick(acf.cta_heading, d.cta.heading),
      lead: pick(acf.cta_lead, d.cta.lead),
    },
  }
}

export async function getPortfolioPageData() {
  const d = PORTFOLIO_PAGE_DEFAULTS
  const [page, portfolio, testimonials, logos] = await Promise.all([
    getPageBySlug('portfolio'),
    getCptItems('portfolio', 50),
    getCptItems('testimonial', 6),
    getCptItems('client_logo', 30),
  ])

  const acf = page?.acf || {}

  let items =
    portfolio.length > 0
      ? portfolio.map((post, i) => mapPortfolioItem(post, i, d.items))
      : d.items
  items = items.filter((item) => item.image)

  let reviewItems =
    testimonials.length > 0
      ? testimonials.map((post, i) => mapTestimonial(post, i, d.reviews.items))
      : d.reviews.items

  let logoItems =
    logos.length > 0
      ? logos.map((post, i) => mapClientLogo(post, i, d.logos.items)).filter((item) => item.url)
      : d.logos.items

  return {
    seo: {
      title: pick(acf.seo_title, d.seo.title),
      description: pick(acf.seo_description, d.seo.description),
      keywords: pick(acf.seo_keywords, d.seo.keywords),
    },
    hero: {
      title: pick(acf.hero_title, d.hero.title),
      lead: pick(acf.hero_lead, d.hero.lead),
    },
    items,
    logos: {
      eyebrow: pick(acf.logos_eyebrow, d.logos.eyebrow),
      heading: pick(acf.logos_heading, d.logos.heading),
      lead: pick(acf.logos_lead, d.logos.lead),
      items: logoItems,
    },
    reviews: {
      eyebrow: pick(acf.reviews_eyebrow, d.reviews.eyebrow),
      heading: pick(acf.reviews_heading, d.reviews.heading),
      items: reviewItems.filter((item) => item.quote),
    },
    cta: {
      eyebrow: pick(acf.cta_eyebrow, d.cta.eyebrow),
      heading: pick(acf.cta_heading, d.cta.heading),
      lead: pick(acf.cta_lead, d.cta.lead),
    },
  }
}

export async function getBlogsPageData() {
  const page = await getPageBySlug('blogs')
  const posts = await wpFetch('/wp/v2/posts?per_page=20&_embed&acf_format=standard')
  const acf = page?.acf || {}
  const d = BLOGS_DEFAULTS

  const postItems =
    Array.isArray(posts) && posts.length > 0
      ? posts.map((post, i) => mapBlogPost(post, i, d.posts))
      : d.posts

  return {
    seo: {
      title: pick(acf.seo_title, d.seo.title),
      description: pick(acf.seo_description, d.seo.description),
      keywords: pick(acf.seo_keywords, d.seo.keywords),
    },
    hero: {
      title: pick(acf.hero_title, d.hero.title),
      lead: pick(acf.hero_lead, d.hero.lead),
    },
    posts: postItems,
    footerNote: pick(acf.footer_note, d.footerNote),
    cta: {
      eyebrow: pick(acf.cta_eyebrow, d.cta.eyebrow),
      heading: pick(acf.cta_heading, d.cta.heading),
      lead: pick(acf.cta_lead, d.cta.lead),
    },
  }
}

export async function getServicesOverviewData() {
  const d = SERVICES_PAGE_DEFAULTS
  const [page, services] = await Promise.all([
    getPageBySlug('service'),
    getCptItems('service', 20),
  ])
  const acf = page?.acf || {}
  const defaultItems = HOME_DEFAULTS.services.items

  const items =
    services.length > 0
      ? services.map((post, i) => mapServiceCard(post, i, defaultItems))
      : defaultItems

  const contactCard = {
    icon: '✦',
    title: 'Not sure what you need?',
    description: "Tell me your goals and budget — I'll recommend the right starting point, free.",
    url: '/contact',
    moreLabel: 'Ask me',
  }

  return {
    seo: {
      title: pick(acf.seo_title, d.seo.title),
      description: pick(acf.seo_description, d.seo.description),
      keywords: pick(acf.seo_keywords, d.seo.keywords),
    },
    hero: {
      title: pick(acf.hero_title, d.hero.title),
      lead: pick(acf.hero_lead, d.hero.lead),
    },
    items: [...items, contactCard],
    intro: {
      eyebrow: pick(acf.intro_eyebrow, d.intro.eyebrow),
      heading: pick(acf.intro_heading, d.intro.heading),
      lead: pick(acf.intro_lead, d.intro.lead),
      checklist: mapChecklist(acf.intro_checklist, d.intro.checklist),
      steps: mapRepeaterItems(
        acf.intro_steps,
        (row, i, fb) => ({
          title: pick(row.title, fb[i]?.title || ''),
          description: pick(row.description, fb[i]?.description || ''),
        }),
        d.intro.steps,
      ),
    },
    cta: {
      eyebrow: pick(acf.cta_eyebrow, d.cta.eyebrow),
      heading: pick(acf.cta_heading, d.cta.heading),
      lead: pick(acf.cta_lead, d.cta.lead),
    },
  }
}
