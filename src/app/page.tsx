import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import ContactForm from '@/components/sections/ContactForm';
import { LocalBusinessSchema, FAQSchema } from '@/components/seo/SchemaMarkup';

const homepageFAQ = [
  {
    question: 'כמה עולה תיקון תריס חשמלי?',
    answer:
      'המחיר תלוי בסוג התקלה. תיקון פשוט כמו החלפת רצועה עולה בין 150-300 ש"ח, החלפת מנוע עולה בין 800-1,500 ש"ח כולל חלקים ועבודה. אנחנו נותנים הצעת מחיר מדויקת לפני תחילת העבודה.',
  },
  {
    question: 'איך אפשר לחבר תריסים חשמליים לבית חכם?',
    answer:
      'אנחנו מתמחים בחיבור תריסים חשמליים קיימים למערכות בית חכם. ההתהליך כולל התקנת מודול WiFi או Zigbee, חיבור לאפליקציה והגדרת שליטה קולית דרך Google Home, Alexa או Apple HomeKit.',
  },
  {
    question: 'כמה זמן לוקח שדרוג תריס לחכם?',
    answer:
      'שדרוג תריס חשמלי קיים לתריס חכם לוקח בין 30-60 דקות לתריס. עבור דירה שלמה, העבודה מתבצעת בדרך כלל תוך חצי יום עבודה.',
  },
  {
    question: 'אילו אזורים אתם מכסים?',
    answer:
      'אנחנו מספקים שירות בכל אזור המרכז: תל אביב, רמת גן, גבעתיים, הרצליה, רעננה, כפר סבא, פתח תקווה, ראשון לציון, חולון, בת ים, נתניה ואשדוד.',
  },
  {
    question: 'מה האחריות שאתם נותנים?',
    answer:
      'אנחנו נותנים אחריות מלאה על כל עבודה שאנחנו מבצעים. על מנועים חדשים – אחריות של שנתיים. על תיקונים – אחריות של 6 חודשים. על שדרוגים לבית חכם – אחריות של שנה.',
  },
  {
    question: 'האם יש שירות חירום מחוץ לשעות העבודה?',
    answer:
      'כן, אנחנו מספקים שירות חירום 24/7 לתריסים תקועים או תקלות דחופות. במקרי חירום, טכנאי יגיע לביתכם תוך מספר שעות, גם בסופי שבוע וחגים.',
  },
  {
    question: 'אילו מותגי מנועים אתם עובדים איתם?',
    answer:
      'אנחנו עובדים עם המותגים המובילים בעולם: Somfy (צרפת), Nice (איטליה), Came (איטליה) ועוד. כל המנועים שאנחנו מתקינים הם מקוריים עם אחריות יצרן.',
  },
  {
    question: 'האם אפשר לחבר תריסים חשמליים לבית חכם?',
    answer:
      'בהחלט! אנחנו מתמחים בחיבור תריסים חשמליים למערכות בית חכם כמו Google Home, Alexa, Apple HomeKit ומערכות אוטומציה כמו Home Assistant. שליטה קולית, טיימרים ותרחישים אוטומטיים.',
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema items={homepageFAQ} />

      <Hero
        title="תריסים חשמליים חכמים – תיקון, שדרוג וחיבור לבית חכם באזור המרכז"
        subtitle="מומחים בתיקון, שדרוג וחיבור תריסים חשמליים למערכות בית חכם. שירות מקצועי עם אחריות מלאה, מחירים שקופים והגעה מהירה לביתכם."
      />

      <CTASection
        title="הצעת מחיר חינם תוך 5 דקות"
        subtitle="התקשרו או שלחו הודעה בוואטסאפ ונחזור אליכם מיד עם הצעת מחיר מותאמת"
        showScarcity
      />

      <ServicesOverview />

      <CTASection
        title="תריס תקוע? מנוע לא עובד?"
        subtitle="שירות חירום 24/7 – טכנאי יגיע לביתכם תוך שעות"
      />

      <WhyChooseUs />

      <Reviews />

      <CTASection
        title="מוכנים לשדרג את התריסים שלכם?"
        subtitle="צרו קשר עכשיו לייעוץ חינם וללא התחייבות"
      />

      <FAQ items={homepageFAQ} />

      <ContactForm />
    </>
  );
}
