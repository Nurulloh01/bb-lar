import React, { FC, useState } from "react";
import styles from './index.module.css'
import { Product, Vegetables } from '../../../dyumData'
import TextView from "../../Text";

interface Props {
    name?: string;
    url?: string;
    title?: string;
    price: number;
    size?: string
    count: number;
    onCountChange: (e: number) => void;
}

const BreadView: FC<Props> = ({
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
                <div className={styles.column}>
                    <div className={styles.imageBox}>
                        <img className={styles.image} src={url} alt="" />
                    </div>
                    <div className={styles.nameBox}>
                        <span className={styles.priceName}>{title}</span>
                    </div>
                    <div className={styles.price}>
                        <span>{size}</span>
                        <span>{price}</span>
                    </div>
                    <div className={styles.buttonBox}>
                        <button className={styles.button} onClick={() => DecreaseCounter()}>-</button>
                        <div className={styles.button}>{count}</div>
                        <button onClick={() => IncreaseCounter()} className={styles.button}>+</button>
                    </div>
                    <div className={styles.schot}>
                        {count * price}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadView;
