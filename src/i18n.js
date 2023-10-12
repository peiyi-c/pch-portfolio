import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "./translation/English.json";
import German from "./translation/German.json";

const resources = {
  en: {
    translation: English,
  },
  de: {
    translation: German,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en", //default language
});

export default i18next;
