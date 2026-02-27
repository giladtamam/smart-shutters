const reviews = [
  {
    name: 'יוסי כ.',
    location: 'תל אביב',
    text: 'הזמנתי תיקון לתריס חשמלי שנתקע באמצע. הטכנאי הגיע תוך שעתיים ותיקן את הבעיה במקום. שירות מעולה ומחיר הוגן!',
    rating: 5,
  },
  {
    name: 'מיכל ר.',
    location: 'רמת גן',
    text: 'שדרגנו את כל התריסים בדירה לתריסים חכמים. עכשיו אפשר לשלוט בהם מהטלפון וזה פשוט מדהים. ממליצה בחום!',
    rating: 5,
  },
  {
    name: 'אבי ד.',
    location: 'הרצליה',
    text: 'החלפנו מנוע לתריס שהפסיק לעבוד. העבודה בוצעה מהר, נקי ומקצועי. גם המחיר היה תחרותי לעומת הצעות אחרות שקיבלתי.',
    rating: 5,
  },
  {
    name: 'שרה ל.',
    location: 'פתח תקווה',
    text: 'שדרגו לנו את כל התריסים בבית לחכמים עם חיבור לאפליקציה. העבודה נמשכה יום אחד והתוצאה מושלמת. ממליצה על השירות המקצועי!',
    rating: 5,
  },
  {
    name: 'דוד מ.',
    location: 'ראשון לציון',
    text: 'שירות חירום ביום שבת! התריס נתקע למעלה ולא ירד. הגיעו מהר ופתרו את הבעיה. תודה רבה על הזמינות!',
    rating: 5,
  },
  {
    name: 'רונית ב.',
    location: 'כפר סבא',
    text: 'חיברנו את כל התריסים לגוגל הום. עכשיו אומרים "הי גוגל, סגור תריסים" והכל נסגר. שירות מעולה והדרכה מצוינת.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">מה הלקוחות שלנו אומרים</h2>
          <p className="mx-auto max-w-2xl text-foreground-muted">
            מאות לקוחות מרוצים באזור המרכז. הנה כמה מהחוויות שלהם:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-foreground-muted">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light/10 text-sm font-bold text-primary-light">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{review.name}</p>
                  <p className="text-xs text-foreground-muted">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
