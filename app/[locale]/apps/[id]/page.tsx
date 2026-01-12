import { getAllAppSlugs, getAppBySlug } from '@/lib/apps';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';

export async function generateStaticParams() {
  const slugs = await getAllAppSlugs();
  const locales = ['en', 'ru'];

  const params = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, id: slug });
    }
  }
  return params;
}

export default async function AppPage({
  params
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params;
  const app = await getAppBySlug(id);

  if (!app) {
    notFound();
  }

  const name = app.name[locale as 'en' | 'ru'];
  const tagline = app.tagline[locale as 'en' | 'ru'];
  const description = app.description[locale as 'en' | 'ru'];
  const features = app.features[locale as 'en' | 'ru'];
  const partOf = app.partOf ? app.partOf[locale as 'en' | 'ru'] : null;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
              {name}
            </h1>
            <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
              {tagline}
            </p>

            <div className="mt-4">
              <Link
                href={app.repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-600 transition-colors font-medium text-sm"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                {locale === 'en' ? 'Source Code' : 'Исходный код'}
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              {locale === 'en' ? 'About' : 'О программе'}
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              {locale === 'en' ? 'Features' : 'Возможности'}
            </h2>
            <ul className="space-y-2">
              {features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {app.screenshots.length > 0 && (
            <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
              <Image
                src={app.screenshots[0].path}
                alt={app.screenshots[0].alt[locale as 'en' | 'ru']}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 space-y-4">
            <h3 className="font-semibold text-lg">
              {locale === 'en' ? 'Details' : 'Детали'}
            </h3>

            <div>
              <dt className="text-sm text-neutral-600 dark:text-neutral-400">
                {locale === 'en' ? 'Version' : 'Версия'}
              </dt>
              <dd className="mt-1 font-medium">{app.version || 'N/A'}</dd>
            </div>

            <div>
              <dt className="text-sm text-neutral-600 dark:text-neutral-400">
                {locale === 'en' ? 'License' : 'Лицензия'}
              </dt>
              <dd className="mt-1">
                <Badge variant="license">{app.license}</Badge>
              </dd>
            </div>

            <div>
              <dt className="text-sm text-neutral-600 dark:text-neutral-400">
                {locale === 'en' ? 'Languages' : 'Языки'}
              </dt>
              <dd className="mt-1 flex flex-wrap gap-2">
                {app.languages.map((lang) => (
                  <Badge key={lang} variant="category">{lang}</Badge>
                ))}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-neutral-600 dark:text-neutral-400">
                {locale === 'en' ? 'Maintainer' : 'Разработчик'}
              </dt>
              <dd className="mt-1 font-medium">
                {app.maintainers.map((m) => m.name).join(', ')}
              </dd>
            </div>

            {partOf && (
              <div>
                <dt className="text-sm text-neutral-600 dark:text-neutral-400">
                  {locale === 'en' ? 'Part of' : 'Часть'}
                </dt>
                <dd className="mt-1 font-medium">{partOf}</dd>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
