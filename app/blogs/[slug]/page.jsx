import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogSlugs } from '@/lib/wordpress'

export const revalidate = 3600
export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} | Mostafij Emon`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug)
  if (!post) notFound()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumb">
            <Link href="/">Home</Link> / <Link href="/blogs">Blogs</Link> / {post.category}
          </p>
          <h1>{post.title}</h1>
          <p className="lead">
            {post.category} · {post.date}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="article">
            {post.image ? (
              <img className="article-hero" src={post.image} alt={post.title} />
            ) : null}
            <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          <div className="center" style={{ marginTop: '2.4rem' }}>
            <Link href="/blogs" className="btn btn--ghost">
              ← All posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
