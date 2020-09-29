import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import it from "./it.json";
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en,
  it,
};

i18n.use(I18nextBrowserLanguageDetector).init({
  resources,
  fallbackLng: "en",
  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
