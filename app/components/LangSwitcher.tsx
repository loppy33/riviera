'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

const LANG_LABELS: Record<string, string> = {
  en: '🇬🇧 EN',
  fr: '🇫🇷 FR',
  ru: '🇷🇺 RU',
};

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    // Remove current locale prefix from pathname and add new one
    const segments = pathname.split('/');
    if (routing.locales.includes(segments[1] as any)) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }

    router.push(segments.join('/'));
  };

  return (
    <div className="lang-switcher">
      <select value={locale} onChange={handleChange}>
        {routing.locales.map((loc: any) => (
          <option key={loc} value={loc}>
            {LANG_LABELS[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}