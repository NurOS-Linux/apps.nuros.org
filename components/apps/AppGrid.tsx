import { Application } from '@/types/app';
import AppCard from './AppCard';

interface AppGridProps {
  apps: Application[];
  locale: string;
}

export default function AppGrid({ apps, locale }: AppGridProps) {
  if (apps.length === 0) {
    return (
      <div className="text-center empty-state">
        <p>{locale === 'en' ? 'No applications found' : 'Приложения не найдены'}</p>
      </div>
    );
  }

  return (
    <div className="app-grid">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} locale={locale} />
      ))}
    </div>
  );
}
