import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    title: 'תיקון תריס חשמלי',
    description: 'תיקון מהיר ומקצועי של כל תקלה בתריסים חשמליים – מנוע, רצועה, לוח פיקוד ועוד.',
    href: '/services/repair',
    icon: <RepairIcon />,
  },
  {
    title: 'מנועים לתריסים',
    description: 'אספקה והתקנת מנועים איכותיים לתריסים חשמליים מהמותגים המובילים בשוק.',
    href: '/services/motors',
    icon: <MotorIcon />,
  },
  {
    title: 'תריס חכם לבית חכם',
    description: 'שדרוג תריסים קיימים לתריסים חכמים עם שליטה מהאפליקציה, טיימרים ואוטומציה.',
    href: '/services/smart-shutter',
    icon: <SmartIcon />,
  },
  {
    title: 'שירות חירום 24/7',
    description: 'תריס תקוע? מנוע לא עובד? אנחנו זמינים 24 שעות ביממה לשירות חירום מהיר.',
    href: '/services/emergency',
    icon: <EmergencyIcon />,
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">השירותים שלנו</h2>
          <p className="mx-auto max-w-2xl text-foreground-muted">
            מספקים מגוון פתרונות מקצועיים לתריסים חשמליים – תיקון, החלפת מנועים ושדרוג לבית חכם
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RepairIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  );
}

function MotorIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function SmartIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function EmergencyIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
