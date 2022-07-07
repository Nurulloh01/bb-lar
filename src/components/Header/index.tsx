import React from "react";
import styles from './index.module.css'
import logo from '../../assets/images/logo.png'

const HeaderView = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logoBox}>
                    <img className={styles.logo} src={logo} alt="" />
                </div>
                <div className={styles.title}>
                    <h1>BBlar</h1>
                </div>
            </div>
        </div>
    )
}

export default HeaderView