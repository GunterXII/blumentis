// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      it: { translation: translations.it },
      en: { translation: translations.en },
      zh: { translation: translations.zh },
    },
    lng: "it",           // lingua di default
    fallbackLng: "it",   // fallback se una chiave manca
    interpolation: {
      escapeValue: false, // React già fa l'escape
    },
  });

export default i18n;