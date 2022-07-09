import React, { FC } from "react";
import styles from './index.module.css'

interface Props {
    title?: string;
    name?: any;
    size?: string;
    map?: () => void;
    
}

const FooterView: FC<Props> = ({
    title,
    name,
    size
}) => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <span>{title}</span>
                <span>{name}</span>
                <span>{size}</span>
            </div>
        </div>
    )
}

export default FooterView;