import React, { CSSProperties, FC } from "react";
import styles from './index.module.css'

interface Props {
    title?: string;
    onClick?: () => void;
    style?: CSSProperties;
}

const ButtonView: FC<Props> = ({
    title,
    onClick,
    style,
}) => {
    return (
        <div className={styles.container}>
            <button
                style={{
                    ...style
                }}
                className={styles.button}
                onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default ButtonView;