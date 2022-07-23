import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { uzb } from "./uzb"
import { rus } from "./rus"

i18n
    .use(LanguageDetector)

    .use(initReactI18next)

    .init({
        debug: true,
        fallbackLng: 'uzb',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            uzb: {
                translation: {
                    ...uzb
                }
            },
            rus: {
                translation: {
                    ...rus
                }
            }
        }

    })


export default i18n;