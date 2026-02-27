import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import Hero from '@/components/sections/Hero';
import CTASection from '@/components/sections/CTASection';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'אודות | תריסים חשמליים חכמים – ניסיון, מקצועיות ואמינות',
  description:
    'הכירו את הצוות שלנו – מומחים בתיקון ושדרוג תריסים חשמליים חכמים באזור המרכז. ניסיון רב, אחריות מלאה ושירות אישי.',
  openGraph: {
    title: 'אודות | תריסים חשמליים חכמים',
    description: 'הכירו את הצוות שלנו – מומחים בתיקון ושדרוג תריסים חשמליים חכמים באזור המרכז.',
    type: 'website',
    locale: 'he_IL',
  },
};

const certifications = [
  'חשמלאי מוסמך – רישיון חשמל',
  'הסמכת Somfy – שותף מורשה לשירות ואינטגרציה',
  'הסמכת Nice – שותף מורשה',
  'ביטוח צד שלישי מקיף',
  'עמידה בתקני בטיחות ישראליים',
];

const stats = [
  { value: '10+', label: 'שנות ניסיון' },
  { value: '2,000+', label: 'לקוחות מרוצים' },
  { value: '5,000+', label: 'תריסים ששודרגו' },
  { value: '24/7', label: 'שירות חירום' },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="אודות – המומחים שלכם לתריסים חשמליים חכמים"
        subtitle="צוות מקצועי עם ניסיון רב, מחויבות לאיכות ושירות אישי לכל לקוח"
        showBadges={false}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">הסיפור שלנו</h2>
          <p className="mb-4 text-base leading-relaxed text-foreground-muted">
            התחלנו את הדרך שלנו לפני למעלה מעשור, כצוות קטן של טכנאים שאהבו את עולם הבית החכם
            והתריסים החשמליים. מהר מאוד הבנו שתחום השדרוג והתיקון של תריסים חשמליים בישראל זקוק לשירות אחר – יותר מקצועי,
            יותר אמין ויותר שקוף.
          </p>
          <p className="mb-4 text-base leading-relaxed text-foreground-muted">
            מאז, גדלנו והפכנו לאחת מחברות המובילות בתחום התריסים החשמליים והחכמים באזור המרכז.
            אנחנו גאים בכל תריס שאנחנו משדרגים לחכם, בכל תקלה שאנחנו מתקנים, ובכל לקוח מרוצה שממליץ
            עלינו לחברים ומשפחה.
          </p>
          <p className="mb-4 text-base leading-relaxed text-foreground-muted">
            הפילוסופיה שלנו פשוטה: לספק שירות ברמה הגבוהה ביותר, להשתמש רק בחומרים ומנועים
            איכותיים, לתת מחירים הוגנים ושקופים, ולהיות שם כשהלקוחות שלנו צריכים אותנו –
            גם בשעות הלילה וגם בסופי שבוע.
          </p>

          <h2 className="mb-6 mt-12 text-2xl font-bold text-foreground">הערכים שלנו</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="mb-2 text-lg font-bold text-foreground">מקצועיות</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                כל טכנאי בצוות שלנו הוא חשמלאי מוסמך עם הכשרה ייעודית בתריסים חשמליים. אנחנו
                משקיעים בהכשרה מתמדת ומתעדכנים בטכנולוגיות החדשות ביותר.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="mb-2 text-lg font-bold text-foreground">שקיפות</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                אנחנו מאמינים בשקיפות מלאה. הצעת המחיר שתקבלו היא המחיר הסופי – ללא הפתעות,
                ללא עלויות נסתרות, וללא לחץ.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="mb-2 text-lg font-bold text-foreground">אחריות</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                אנחנו עומדים מאחורי כל עבודה שאנחנו מבצעים. אחריות מלאה על חלקים ועבודה,
                כי אנחנו בטוחים באיכות של מה שאנחנו עושים.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h3 className="mb-2 text-lg font-bold text-foreground">זמינות</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                תריס תקוע לא מחכה ליום ראשון. לכן אנחנו זמינים 24/7, כולל ערבים, סופי שבוע
                וחגים. כשאתם צריכים אותנו, אנחנו שם.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground">הסמכות ורישיונות</h2>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-center gap-3 text-base text-foreground-muted">
                <svg className="h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {cert}
              </li>
            ))}
          </ul>

          <h2 className="mb-6 mt-12 text-2xl font-bold text-foreground">אזורי שירות</h2>
          <p className="mb-4 text-base leading-relaxed text-foreground-muted">
            אנחנו מספקים שירות מקצועי בכל אזור המרכז, כולל:
          </p>
          <div className="flex flex-wrap gap-2">
            {siteConfig.serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-foreground"
              >
                {area}
              </span>
            ))}
          </div>

          <h2 className="mb-6 mt-12 text-2xl font-bold text-foreground">השירותים שלנו</h2>
          <p className="mb-4 text-base leading-relaxed text-foreground-muted">
            אנחנו מציעים מגוון שירותים מקיפים בתחום התריסים החשמליים:
          </p>
          <ul className="space-y-2">
            {[
              { label: 'תיקון תריסים חשמליים', href: '/services/repair' },
              { label: 'אספקה והחלפת מנועים', href: '/services/motors' },
              { label: 'שדרוג לתריס חכם', href: '/services/smart-shutter' },
              { label: 'שירות חירום 24/7', href: '/services/emergency' },
            ].map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="text-base text-primary-light hover:underline">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="מוכנים להתחיל?"
        subtitle="צרו קשר עכשיו לייעוץ חינם וללא התחייבות"
      />

      <ContactForm />
    </>
  );
}
