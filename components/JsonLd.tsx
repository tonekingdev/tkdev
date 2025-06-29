import { Organization, WithContext } from 'schema-dts'

export default function JsonLd() {
  const orgSchema: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tone King Development',
    url: 'https://tonekingdev.com',
    logo: 'https://tonekingdev.com/img/tonekingdevLogo.png',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61560943522036',
      'https://www.instagram.com/tonekingdevelopment/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@tonekingdev.com',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  )
}