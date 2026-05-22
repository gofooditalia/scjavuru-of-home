import type { Translations } from './types';
import { it } from './it';
import { en } from './en';

export type Lang = 'it' | 'en';
export type { Translations };

const translations: Record<Lang, Translations> = { it, en };

export function t(lang: Lang): Translations {
  return translations[lang];
}
