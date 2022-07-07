import React, { FC } from "react";
import styles from './index.module.css'

interface Props {
    title?: string;
    name?: string;

}

const FooterView: FC<Props> = ({
    title,
    name
}) => {
    return(
        <div className={styles.container}>
            <div className={styles.content}></div>
        </div>
    )
}

export default FooterView;