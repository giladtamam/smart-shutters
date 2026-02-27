import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content/blog-posts';
import CTASection from '@/components/sections/CTASection';
import { BlogPostSchema } from '@/components/seo/SchemaMarkup';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      locale: 'he_IL',
      publishedTime: post.datePublished,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostSchema
        title={post.title}
        description={post.metaDescription}
        slug={post.slug}
        datePublished={post.datePublished}
      />

      <section className="bg-primary py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <time className="text-sm text-white/70">
            {new Date(post.datePublished).toLocaleDateString('he-IL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          {post.content.map((section, index) => (
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

      <CTASection
        title="צריכים עזרה עם התריסים?"
        subtitle="צרו קשר לייעוץ חינם וללא התחייבות"
      />

      <section className="bg-surface py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">שירותים רלוונטיים</h3>
              <ul className="space-y-2">
                {post.relatedServices.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-primary-light hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-foreground">מאמרים נוספים</h3>
              <ul className="space-y-2">
                {post.relatedBlogPosts.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-primary-light hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <Link href="/blog" className="text-sm font-medium text-primary-light hover:underline">
              &rarr; חזרה לכל המאמרים
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
