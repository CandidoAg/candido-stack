import cvEs from '../data/cv.json';
import cvEn from '../data/cv-en.json';

export const getI18n = () => {
  // En el servidor (Astro build) devolvemos español por defecto
  if (typeof localStorage === 'undefined') return cvEs;
  
  const lang = localStorage.getItem('lang') || 'es';
  return lang === 'en' ? cvEn : cvEs;
};