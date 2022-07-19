import React from "react";
import Assets from "../../utils/requireAssats";
import styles from './index.module.css'

const HeaderView = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logoBox}>
                    <img className={styles.logo} src={Assets.logobollar} alt="" />
                </div>
                <div className={styles.contact}>
                    <span>Murojaat uchun:</span>
                     <span>+998 94 392 06 16</span>    
                </div>
            </div>
        </div>
    )
}

export default HeaderView;