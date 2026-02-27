import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light/10 text-primary-light transition-colors group-hover:bg-primary-light group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-foreground-muted">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-primary-light">
        קראו עוד &larr;
      </span>
    </Link>
  );
}
