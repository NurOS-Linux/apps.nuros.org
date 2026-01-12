import Link from 'next/link';
import Image from 'next/image';
import { Application } from '@/types/app';
import Badge from '@/components/ui/Badge';

interface AppCardProps {
  app: Application;
  locale: string;
}

export default function AppCard({ app, locale }: AppCardProps) {
  const name = app.name[locale as 'en' | 'ru'];
  const tagline = app.tagline[locale as 'en' | 'ru'];

  return (
    <Link href={`/${locale}/apps/${app.slug}`} className="app-card">
      <div className="app-info">
        <h3 className="app-title">
          {name}
        </h3>
        <p className="app-description">
          {tagline}
        </p>
        <div className="app-badges">
          <Badge variant="license">{app.license}</Badge>
          {app.languages.slice(0, 2).map((lang) => (
            <Badge key={lang} variant="category">
              {lang}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
