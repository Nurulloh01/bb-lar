import React from "react";
import Assets from "../../utils/requireAssats";
import styles from './index.module.css'

const HeaderView = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logoBox}>
                    <img className={styles.logo} src={Assets.logobolla} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeaderView;