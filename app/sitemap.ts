import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bhaktimanagement.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/services/permanent-staffing',
    '/services/contractual-staffing',
    '/services/security-services',
    '/services/training-development',
    '/job-seekers',
    '/news-insights',
    '/contact',
    '/upload-resume',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}