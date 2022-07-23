import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguageView = () => {
    const { t, i18n } = useTranslation()

    const lngs = {
        uzb: {
            nativeName: t('uzbek_tili')
        },
        rus: {
            nativeName: t('rus_tili')
        }
    }
    return (
        <div>
            <select name="language" id="">
                {(Object.keys(lngs)).map((lng, index) => (
                    <option key={lng} onClick={(e) => i18n.changeLanguage(lng)}>{lngs[lng as keyof typeof lngs].nativeName}</option>
                ))}
            </select>
        </div>
    )
}

export default ChangeLanguageView;