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
}

const BreadView: FC<Props> = ({
    name,
    url,
    title,
    price,
    size
}) => {

    const [state, setState] = useState(0)
    const [ data , setData ] = useState<number>(5000)

    const IncreaseCounter = () => {
        setState(state=>state + 1) 
            setData(data=>data * state)
            console.log(data, state);
            
    }
    const DecreaseCounter = () => {
        setState(state=>state - 1)
        if(state<=0){
            setState(0)
            setData(5000)
        }else{
                setData(data * state)
        }
        
    }

    return (
        <div className={styles.container}>
                <TextView title={name}/>
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
                                <div className={styles.button}>{state}</div>
                                <button  onClick={() => IncreaseCounter()} className={styles.button}>+</button>
                            </div>
                            <div className={styles.schot}>
                                {state*price}
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default BreadView;
