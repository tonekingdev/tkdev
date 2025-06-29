import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOProps {
  title: string
  description: string
  image?: string
  article?: boolean
}

export default function SEO({ title, description, image, article }: SEOProps) {
  const router = useRouter()
  const defaultImage = 'https://tonekingdev.com/default-og-image.jpg' // Replace with your default OG image

  const seo = {
    title: title || 'Tone King Development',
    description: description || 'Expert web and mobile app development services',
    image: `${image || defaultImage}`,
    url: `https://tonekingdev.com${router.asPath}`,
  }

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Head>
  )
}