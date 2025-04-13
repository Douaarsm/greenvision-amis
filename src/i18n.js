import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from './assets/translations/fr.json';
import enTranslations from './assets/translations/en.json';
import arTranslations from './assets/translations/ar.json';

const resources = {
  fr: {
    translation: {
      welcome: 'Bienvenue sur Les Amis de Demain',
      mission: 'Promouvoir le bien-être et la santé pour tous',
      join_cta: 'Rejoignez-nous',
      loading: 'Chargement',
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      team: 'Équipe',
      blog: 'Blog',
      contact: 'Contact'
    }
  },
  en: { translation: enTranslations },
  ar: { translation: arTranslations }
};

// Configuration avancée avec détection automatique
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('lang') || 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

// Configuration RTL dynamique
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('lang', lng);
});

export default i18n;