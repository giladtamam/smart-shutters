import type { Metadata } from 'next';
import { getServiceBySlug } from '@/lib/content/services';
import ServicePageContent from '@/components/sections/ServicePageContent';

const service = getServiceBySlug('smart-shutter')!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    type: 'website',
    locale: 'he_IL',
  },
};

export default function SmartShutterPage() {
  return <ServicePageContent service={service} />;
}
