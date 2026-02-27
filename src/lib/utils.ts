import { siteConfig } from './site-config';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export function buildWhatsAppFormUrl(params: {
  name: string;
  phone: string;
  serviceType: string;
  message: string;
}): string {
  const text = [
    `שם: ${params.name}`,
    `טלפון: ${params.phone}`,
    `סוג שירות: ${params.serviceType}`,
    params.message ? `הודעה: ${params.message}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return buildWhatsAppUrl(text);
}

export function buildPhoneUrl(): string {
  return `tel:${siteConfig.phone}`;
}
