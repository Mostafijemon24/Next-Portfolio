import Link from 'next/link'
import { getBlogsPageData } from '@/lib/wordpress'

export const revalidate = 3600

export async function generateMetadata() {
  const data = await getBlogsPageData()
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
  }
}

function PostCard({ post }) {
  const body = (
    <>
      {post.image ? (
        <img className="thumb-img" src={post.image} alt={post.title} loading="lazy" />
      ) : (
        <div className="thumb">{post.thumb}</div>
      )}
      <div className="body">
        <span className="cat">{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </>
  )

  if (post.url.startsWith('http')) {
    return (
      <a href={post.url} className="post reveal" target="_blank" rel="noopener">
        {body}
      </a>
    )
  }

  return (
    <Link href={post.url} className="post reveal">
      {body}
    </Link>
  )
}

export default async function Blogs() {
  const { hero, posts, footerNote, cta } = await getBlogsPageData()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/">Home</Link> / Blogs
          </p>
          <h1>{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="blog-masonry">
            {posts.map((post) => (
              <PostCard key={post.title} post={post} />
            ))}
          </div>
          <div className="center" style={{ marginTop: '2.4rem' }}>
            <p className="lead center" style={{ marginBottom: '1rem' }}>
              {footerNote}
            </p>
            <Link href="/contact" className="btn btn--ghost">
              Suggest a topic
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <span className="eyebrow">{cta.eyebrow}</span>
            <h2 className="h-lg" dangerouslySetInnerHTML={{ __html: cta.heading }} />
            <p className="lead">{cta.lead}</p>
            <div style={{ display: 'flex', gap: '.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Get a Free Quote
              </Link>
              <Link href="/portfolio" className="btn btn--ghost btn--lg">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
