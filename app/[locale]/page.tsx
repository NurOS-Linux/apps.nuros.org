import { getAllApps } from '@/lib/apps';
import AppGrid from '@/components/apps/AppGrid';

export const dynamic = 'force-static';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const apps = await getAllApps();

  return (
    <div>
      <div className="hero">
        <h1 className="hero-title">
          <span>NurOS</span>{' '}
          <span className="text-brand">Apps</span>
        </h1>
        <p className="hero-subtitle">
          {locale === 'en'
            ? 'Discover applications for NurOS Linux distribution'
            : 'Откройте для себя приложения для дистрибутива NurOS Linux'}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">
          {locale === 'en' ? 'All Applications' : 'Все приложения'}
        </h2>
        <AppGrid apps={apps} locale={locale} />
      </div>
    </div>
  );
}
