# Claude AI - Project Context

## Project Overview
**apps.nuros.org** - A GNOME-like application catalog for NurOS Linux distribution. Bilingual (English/Russian) web application showcasing applications that run via `npx`.

## Key Information
- **Author**: AnmiTaliDev (Ildar)
- **License**: AGPL-3.0
- **Repository**: https://github.com/NurOS-Linux/apps.nuros.org
- **Languages**: English (en), Russian (ru)
- **Port**: localhost:3001

## Technology Stack
- **Framework**: Next.js 16.1.1 (App Router)
- **TypeScript**: Strict mode enabled
- **Styling**: Custom CSS with CSS variables (NO Tailwind!)
- **i18n**: next-intl with requestLocale API
- **Theme**: next-themes (dark/light mode)
- **Fonts**: Inter (Latin + Cyrillic)

## Critical Constraints
1. **NO TAILWIND**: User explicitly doesn't want Tailwind. Use custom CSS only.
2. **Applications run via npx ONLY**: No direct binary execution allowed
3. **Async params pattern**: Next.js 16 requires params to be awaited
4. **Custom CSS classes**: All styling must be in CSS files, not inline styles

## Project Structure
```
apps.nuros.org/
├── app/
│   ├── globals.css           # Main CSS with variables
│   └── [locale]/
│       ├── layout.tsx         # Root layout with i18n
│       ├── page.tsx           # Homepage
│       └── apps/[id]/
│           └── page.tsx       # App detail page
├── components/
│   ├── apps/
│   │   ├── AppCard.tsx        # App card component
│   │   └── AppGrid.tsx        # Grid layout for apps
│   ├── layout/
│   │   ├── Header.tsx         # Minimalistic navbar
│   │   ├── Footer.tsx         # Footer with links
│   │   ├── ThemeToggle.tsx    # Dark/light theme button
│   │   └── LanguageSwitcher.tsx # EN/RU switcher
│   ├── ui/
│   │   └── Badge.tsx          # Badge component
│   └── ThemeProvider.tsx      # Theme context provider
├── data/
│   └── apps/
│       └── *.json             # Application data files
├── lib/
│   ├── apps.ts                # App data utilities
│   └── utils.ts               # Helper functions
├── messages/
│   ├── en.json                # English translations
│   └── ru.json                # Russian translations
├── types/
│   └── app.ts                 # TypeScript types
└── public/
    └── images/
        └── apps/              # App screenshots
```

## Key Components

### Application Data Structure
```typescript
interface Application {
  id: string;
  slug: string;
  name: LocalizedString;      // { en: string, ru: string }
  tagline: LocalizedString;
  description: LocalizedString;
  license: string;
  category: string;
  languages: string[];
  features: LocalizedString[];
  installation: {
    command: string;           // npx command only!
    requirements: LocalizedString[];
  };
  repository: {
    url: string;
    type: string;
  };
  screenshots: Screenshot[];
}
```

### CSS Variables (globals.css)
- Colors: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`
- Text: `--text-primary`, `--text-secondary`, `--text-tertiary`
- Brand: `--brand-500`, `--brand-600` (blue accent)
- Spacing: `--spacing-1` to `--spacing-16`
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`
- Transitions: `--transition`

### Design Decisions Made
1. **Navbar**: Minimalistic - only logo, theme toggle, and language switcher
2. **No letter icons**: Removed pseudo-logos (first letter) from app cards
3. **Screenshot placement**: Small (400x300) in right sidebar, not full-width
4. **Badge colors**: All badges (license + categories) use gray/neutral colors
5. **No inline styles**: All styles must be in CSS classes

## Common Patterns

### Next.js 16 Async Params
```typescript
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // ...
}
```

### i18n Translation
```typescript
import { useTranslations } from 'next-intl';

const t = useTranslations('namespace');
t('key'); // Translated string
```

### Localized Content
```typescript
const name = locale === 'en' ? app.name.en : app.name.ru;
```

## Development Commands
```bash
npm run dev          # Start dev server on :3001
npm run build        # Build for production
npm run start        # Start production server
npx tsc --noEmit     # TypeScript check
```

## Recent Changes (Session History)
1. ✅ Removed full name from copyright (only AnmiTaliDev)
2. ✅ Changed GPL-3.0 badge from blue to gray
3. ✅ Simplified navbar (removed nav links and icon)
4. ✅ Redesigned theme toggle and language switcher buttons
5. ✅ Moved screenshots to right sidebar (smaller size)
6. ✅ Removed letter-based pseudo-logos from app cards
7. ✅ Fixed hydration warnings (Dark Reader extension issue)
8. ✅ Code cleanup: removed unused files and inline styles

## Code Quality Rules
1. **NO emojis** unless user explicitly requests them
2. **NO inline styles** - use CSS classes
3. **NO Tailwind** - custom CSS only
4. **NO unnecessary files** - keep it clean
5. **Server Components by default** - use 'use client' only when needed
6. **Proper TypeScript** - no any, proper types
7. **Bilingual** - all user-facing text must have EN and RU versions

## Known Issues
- Hydration warnings with Dark Reader browser extension (not critical, works fine)
- This is expected behavior and doesn't affect functionality

## Next Steps (Potential)
- Add more applications to the catalog
- Implement search/filter functionality
- Add categories page
- Add RSS feed
- SEO optimization
- Add more screenshots per app

## Important Notes
- User prefers Russian communication but code/comments should be in English
- User is meticulous about design - always ask before making visual changes
- Keep solutions simple - no over-engineering
- Test TypeScript compilation before completing tasks
- The project is actively developed - always check latest file states
