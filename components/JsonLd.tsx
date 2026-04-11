export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Automate My Coffee',
    url: 'https://automatemycoffee.com',
    logo: 'https://automatemycoffee.com/logos/automatemycoffeelogo_transparent_canva.svg',
    description:
      'AI automation agency for businesses that want to stop wasting time on tasks a robot could do better.',
    sameAs: ['https://www.instagram.com/automatemycoffee'],
    foundingDate: '2026',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}
