import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/content/blog-posts';

export const metadata: Metadata = {
  title: 'בלוג | מדריכים וטיפים לתריסים חשמליים חכמים',
  description:
    'מאמרים, מדריכים וטיפים מקצועיים בנושא תריסים חשמליים חכמים. תיקון, מנועים, שדרוג לבית חכם ועוד.',
  openGraph: {
    title: 'בלוג | תריסים חשמליים חכמים',
    description: 'מאמרים, מדריכים וטיפים מקצועיים בנושא תריסים חשמליים חכמים.',
    type: 'website',
    locale: 'he_IL',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <section className="bg-primary py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            בלוג – מדריכים וטיפים לתריסים חשמליים
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/85">
            מאמרים מקצועיים שיעזרו לכם להבין את עולם התריסים החשמליים והחכמים
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <time className="text-xs text-foreground-muted">
                  {new Date(post.datePublished).toLocaleDateString('he-IL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="mb-3 mt-2 text-xl font-bold text-foreground">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary-light">
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-foreground-muted">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-primary-light hover:underline"
                >
                  קראו את המאמר המלא &larr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
