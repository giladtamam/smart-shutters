import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const heebo = Heebo({
  variable: '--font-heebo',
  subsets: ['latin', 'hebrew'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'תריס חשמלי חכם | תיקון, שדרוג וחיבור תריסים לבית חכם – שירות 24/7',
    template: '%s | תריסים חשמליים חכמים',
  },
  description:
    'שירות מקצועי לתיקון, שדרוג וחיבור תריסים חשמליים חכמים לבית חכם באזור המרכז. מנועים לתריסים, אינטגרציית בית חכם, שירות חירום 24/7. התקשרו עכשיו לייעוץ חינם!',
  keywords: [
    'תריס חשמלי',
    'תיקון תריס חשמלי',
    'מנוע לתריס חשמלי',
    'תריס חכם',
    'תריס חשמלי לבית חכם',
    'תיקון תריס חשמלי בתל אביב',
    'חיבור תריסים לבית חכם',
    'שירות חירום תריסים',
  ],
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: 'תריסים חשמליים חכמים',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://www.smart-shutters.co.il'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
