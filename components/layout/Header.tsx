'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <header className="header">
      <div className="header-content">
        <Link href={`/${locale}`} className="logo">
          <span className="logo-text">
            NurOS <span className="text-brand">Apps</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
