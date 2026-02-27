import Link from 'next/link';
import { ServicePage } from '@/lib/content/services';
import Hero from '@/components/sections/Hero';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import ContactForm from '@/components/sections/ContactForm';
import { ServiceSchema, FAQSchema } from '@/components/seo/SchemaMarkup';

interface ServicePageContentProps {
  service: ServicePage;
}

export default function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.metaDescription}
        url={`/services/${service.slug}`}
      />
      <FAQSchema items={service.faq} />

      <Hero title={service.heroTitle} subtitle={service.heroSubtitle} showBadges={false} />

      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          {service.content.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-foreground">{section.heading}</h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="mb-4 text-base leading-relaxed text-foreground-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </article>

      <CTASection showScarcity />

      <FAQ items={service.faq} />

      <section className="bg-surface py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">שירותים נוספים</h3>
              <ul className="space-y-2">
                {service.relatedServices.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-light hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">מאמרים קשורים</h3>
              <ul className="space-y-2">
                {service.relatedBlogPosts.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-light hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
