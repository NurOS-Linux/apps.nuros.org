# Gemini AI - Project Context

## 🎯 Project Identity
**NurOS Apps** - Bilingual application catalog for NurOS Linux distribution
**URL**: apps.nuros.org | **License**: AGPL-3.0 | **Author**: AnmiTaliDev

## 🚀 Tech Stack
```
Next.js 16.1.1 (App Router) + TypeScript + Custom CSS
├── i18n: next-intl (EN/RU)
├── Theme: next-themes (dark/light)
└── Font: Inter (Latin + Cyrillic)
```

## ⚠️ Critical Rules
| Rule | Description |
|------|-------------|
| ❌ NO Tailwind | User explicitly forbids Tailwind. Custom CSS only! |
| 🔧 npx only | All apps run via `npx`, no binary execution |
| 📝 No inline styles | All styles must be in CSS classes |
| 🌐 Bilingual | Every user-facing text needs EN + RU |
| ⚛️ Async params | Next.js 16 pattern: `const { locale } = await params;` |

## 📁 File Structure
```
app/
├── globals.css                    # All CSS here with variables
└── [locale]/
    ├── layout.tsx                 # Root layout
    ├── page.tsx                   # Homepage with app grid
    └── apps/[id]/page.tsx         # App detail page

components/
├── apps/
│   ├── AppCard.tsx               # No letter icons!
│   └── AppGrid.tsx               # 1-2-3 column responsive grid
├── layout/
│   ├── Header.tsx                # Minimal: logo + theme + lang
│   ├── Footer.tsx                # No inline styles
│   ├── ThemeToggle.tsx           # Icon button
│   └── LanguageSwitcher.tsx      # Shows "EN" or "RU"
└── ui/
    └── Badge.tsx                 # Gray badges only

data/apps/*.json                  # App data files
messages/{en,ru}.json             # Translations
types/app.ts                      # TypeScript definitions
lib/{apps,utils}.ts               # Utilities
```

## 📦 Application Data Model
```typescript
{
  id: string;
  slug: string;
  name: { en: string; ru: string };
  tagline: { en: string; ru: string };
  description: { en: string; ru: string };
  license: string;                    // "GPL-3.0", "MIT", etc.
  category: string;                   // "system", "graphics", etc.
  languages: string[];                // ["TypeScript", "Rust"]
  features: { en: string[]; ru: string[] };
  installation: {
    command: string;                  // Must be npx command!
    requirements: { en: string[]; ru: string[] };
  };
  repository: { url: string; type: "github" };
  screenshots: { path: string; alt: { en: string; ru: string } }[];
}
```

## 🎨 CSS Architecture
**CSS Variables** (defined in `app/globals.css`):
```css
/* Colors */
--bg-primary, --bg-secondary, --bg-tertiary
--text-primary, --text-secondary, --text-tertiary
--brand-500, --brand-600                /* Blue accent */
--border

/* Spacing */
--spacing-{1..16}                       /* 0.25rem to 4rem */

/* Other */
--radius-{sm,md,lg}
--transition
```

**Key CSS Classes**:
- `.header`, `.footer`, `.container`
- `.app-grid`, `.app-card`, `.app-info`
- `.badge-license`, `.badge-category`
- `.icon-button`, `.lang-button`
- `.empty-state`, `.footer-text`, `.footer-separator`

## 🔄 Common Code Patterns

### 1. Page Component (Next.js 16)
```typescript
export default async function Page({
  params
}: {
  params: Promise<{ locale: string; id?: string }>
}) {
  const { locale, id } = await params;
  const messages = await getMessages({ locale });
  // ...
}
```

### 2. Client Component with i18n
```typescript
'use client';
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('section');
  return <div>{t('key')}</div>;
}
```

### 3. Localized Content Access
```typescript
const localizedText = locale === 'en' ? content.en : content.ru;
```

## 🎯 Design System
- **Navbar**: Logo left, theme+lang buttons right (3.5rem height)
- **App Cards**: No icons, clean info, gray badges
- **App Detail**: 2/3 content left, 1/3 sidebar right (screenshot + details)
- **Screenshots**: 400x300px, in right sidebar
- **Badges**: All neutral gray (no blue for licenses!)
- **Buttons**: Icon buttons with subtle hover effects

## ✅ Recent Improvements
- [x] Removed full name from copyright
- [x] Fixed license badge color (blue → gray)
- [x] Simplified navbar (removed unnecessary links)
- [x] Redesigned theme and language buttons
- [x] Moved screenshots to sidebar
- [x] Removed letter-based app icons
- [x] Cleaned up inline styles
- [x] Removed unused files (Button, categories)
- [x] Fixed TypeScript import issues

## 🐛 Known Issues
**Hydration Warning**: Dark Reader browser extension adds attributes to SVG elements, causing hydration mismatch. This is cosmetic and doesn't affect functionality. No fix needed.

## 💡 Development Workflow
```bash
npm run dev             # Development server (:3001)
npm run build           # Production build
npx tsc --noEmit        # Type checking
```

## 📋 Checklist for New Features
- [ ] TypeScript types defined
- [ ] Bilingual support (EN + RU)
- [ ] CSS classes (no inline styles)
- [ ] Responsive design
- [ ] Dark mode compatible
- [ ] No Tailwind classes
- [ ] TypeScript compilation passes

## 🎓 Best Practices for This Project
1. **Keep it simple**: No over-engineering, no unnecessary abstractions
2. **CSS first**: Use CSS variables and custom classes
3. **Server by default**: Only add 'use client' when needed
4. **Type safety**: Proper TypeScript, no 'any' types
5. **Clean code**: Remove unused files immediately
6. **Minimal dependencies**: Only essential packages
7. **Responsive**: Mobile-first approach
8. **Accessible**: Semantic HTML, proper ARIA labels

## 🗣️ Communication Style
- User prefers Russian but expects English code/comments
- User is detail-oriented about design - confirm visual changes
- Be concise and specific in responses
- Show code diffs when making changes

## 🔮 Future Considerations
- Search and filter functionality
- Category filtering
- More applications in catalog
- RSS feed
- SEO optimization
- Application submission workflow
- Analytics (privacy-respecting)

## 📌 Quick Reference

### Add New App
1. Create `/data/apps/app-name.json` with full data structure
2. Add screenshots to `/public/images/apps/app-name/`
3. Ensure all fields have EN and RU translations
4. Test npx command works correctly

### Modify Styles
1. Find/create CSS class in `app/globals.css`
2. Use CSS variables for colors/spacing
3. Test in dark mode
4. Never use inline styles

### Add Translation
1. Add key to `messages/en.json`
2. Add same key to `messages/ru.json`
3. Use `useTranslations('section')` hook

---

**Last Updated**: 2026-01-14
**Status**: Production Ready ✅
