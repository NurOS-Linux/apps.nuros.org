export interface LocalizedString {
  en: string;
  ru: string;
}

export interface Screenshot {
  path: string;
  alt: LocalizedString;
}

export interface Repository {
  type: 'github' | 'gitlab' | 'codeberg' | 'other';
  url: string;
}

export interface Maintainer {
  name: string;
  role?: string;
}

export interface Application {
  id: string;
  slug: string;
  name: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  category: string;
  icon: string;
  screenshots: Screenshot[];
  repository: Repository;
  license: string;
  languages: string[];
  version?: string;
  maintainers: Maintainer[];
  features: {
    en: string[];
    ru: string[];
  };
  partOf?: LocalizedString;
  tags: string[];
}
