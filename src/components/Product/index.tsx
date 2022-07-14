import React, { FC, useState } from "react";
import styles from './index.module.css'
import TextView from "../Text";

interface Props {
    name?: string;
    url?: string;
    title?: string;
    price: number;
    size?: string
    count: number;
    onCountChange: (e: number) => void;
}

const ProductContainer: FC<Props> = ({
    name,
    url,
    title,
    price,
    size,
    count = 0,
    onCountChange
}) => {

    const IncreaseCounter = () => {
        onCountChange(count + 1)

    }
    const DecreaseCounter = () => {
        if (count <= 0) {
            return;
        }
        onCountChange(count - 1)

    }

    return (
        <div className={styles.container}>
            <TextView title={name} />
            <div className={styles.productBox}>
                <div className={styles.rowone}>
                    <div className={styles.imageBox}>
                        <img className={styles.image} src={url} alt="" />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.nameBox}>
                        <span>{title}</span>
                    </div>
                    <div className={styles.price}>
                        <span>{size}</span>
                        <span>{price}</span>
                    </div>
                    <div className={styles.buttonBox}>
                        <button style={{border: '1px solid gray'}} className={styles.button} onClick={() => DecreaseCounter()}>-</button>
                        <div className={styles.button}>{count}</div>
                        <button style={{border: '1px solid gray'}} onClick={() => IncreaseCounter()} className={styles.button}>+</button>
                    </div>
                    <div className={styles.schotBox}>
                        <div className={styles.schot}>
                            {count * price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductContainer;
