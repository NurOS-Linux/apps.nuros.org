import { Application } from '@/types/app';
import fs from 'fs';
import path from 'path';

const APPS_DIR = path.join(process.cwd(), 'data', 'apps');

export async function getAllApps(): Promise<Application[]> {
  const files = fs.readdirSync(APPS_DIR);
  const apps: Application[] = [];

  for (const file of files) {
    if (file.endsWith('.json')) {
      const content = fs.readFileSync(path.join(APPS_DIR, file), 'utf-8');
      apps.push(JSON.parse(content));
    }
  }

  return apps.sort((a, b) => a.name.en.localeCompare(b.name.en));
}

export async function getAppBySlug(slug: string): Promise<Application | null> {
  const apps = await getAllApps();
  return apps.find(app => app.slug === slug) || null;
}

export async function getAppsByCategory(category: string): Promise<Application[]> {
  const apps = await getAllApps();
  return apps.filter(app => app.category === category);
}

export async function getAllAppSlugs(): Promise<string[]> {
  const apps = await getAllApps();
  return apps.map(app => app.slug);
}
