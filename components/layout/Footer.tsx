'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="flex flex-col md:flex items-center justify-between gap-4 text-sm footer-text">
          <div className="text-center">
            <p>{t('description')}</p>
            <p className="mt-1">{t('copyright')}</p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/NurOS-Linux/apps.nuros.org"
              className="font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('sourceCode')}
            </Link>
            <span className="footer-separator">•</span>
            <Link
              href="https://www.gnu.org/licenses/agpl-3.0.html"
              className="font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('license')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
