import ServicePage from '@/app/components/ServicePage'
import { getServicePageData } from '@/lib/wordpress'

export const dynamic = 'force-dynamic'

const SERVICE_PATH = 'gmb-setup'

export async function generateMetadata() {
  const data = await getServicePageData(SERVICE_PATH)
  if (!data) return {}
  return { title: data.seo.title, description: data.seo.description, keywords: data.seo.keywords }
}

export default async function Page() {
  const data = await getServicePageData(SERVICE_PATH)
  return <ServicePage data={data} />
}
