import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import translationRU from "./locales/ru/ru.json";
import translationEN from "./locales/en/en.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};
i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng") || "ru",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",
//     detection: {
//       order: ["queryString", "cookie"],
//       caches: ["cookie"],
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//   });

export default i18n;
