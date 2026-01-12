'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('language');

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={switchLocale}
      className="lang-button"
      aria-label={t('switch')}
      title={t('switch')}
    >
      {locale === 'en' ? 'RU' : 'EN'}
    </button>
  );
}
