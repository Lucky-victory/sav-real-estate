import { blogPosts } from "@/lib/blog-data"

export default function Head({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <>
        <title>Blog Post | Sav Real Estate</title>
        <meta name="description" content="Read our latest real estate insights and guides." />
      </>
    )
  }

  return (
    <>
      <title>{`${post.title} | Sav Real Estate Blog`}</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.imageUrl} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="twitter:image" content={post.imageUrl} />
      <meta name="article:published_time" content={post.date} />
      <meta name="article:author" content={post.author} />
      <meta name="article:section" content={post.category} />
      {post.tags.map((tag) => (
        <meta key={tag} name="article:tag" content={tag} />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: post.imageUrl,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Sav Real Estate",
              logo: {
                "@type": "ImageObject",
                url: "https://savrealestate.com/logo.png",
              },
            },
            description: post.excerpt,
          }),
        }}
      />
    </>
  )
}

