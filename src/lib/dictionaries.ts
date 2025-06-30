import 'server-only';

const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  ur: () => import('@/locales/ur.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
    const loader = dictionaries[locale] || dictionaries.en;
    return loader();
};
