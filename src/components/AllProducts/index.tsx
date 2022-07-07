import React from "react";
import { Product } from "../../dyumData";
import FooterView from "../Footer";
import BreadView from "../Product/bread";
import TextView from "../Text";
import styles from './index.module.css'

const AllProducts = () => {
    return (
        <div>
            <div className={styles.title}>
                <TextView title="Non" />
            </div>
            {Product?.map((e, index) => {
                return (
                    <BreadView
                        url={e.img}
                        title={e.title}
                        size={e.size}
                        price={e.price} />
                )
            })}
            <FooterView/>
        </div>
    )
}

export default AllProducts