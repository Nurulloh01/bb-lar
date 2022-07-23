import React from "react";
import { useTranslation } from "react-i18next";
import Assets from "../../utils/requireAssats";
import ChangeLanguageView from "../Languages";
import styles from './index.module.css'

const HeaderView = () => {
    const { t } = useTranslation()
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logoBox}>
                    <img className={styles.logo} src={Assets.logobollar} alt="" />
                </div>
                {/* <ChangeLanguageView /> */}
                <div className={styles.contact}>
                    <span>Murojat uchun:</span>
                    <a className={styles.aPhone} href="tel:+998943920616">+998 94 392 06 16</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderView;