import React, { useState } from "react";
import { Product } from "../../dyumData";
import FooterView from "../Footer";
import BreadView from "../Product/bread";
import TextView from "../Text";
import styles from './index.module.css'

const AllProducts = () => {
    const [counts, setCounts] = useState<{ [key: string]: typeof Product[0] & { count: number } }>({})
    console.log(counts);

    return (
        <div>
            <div className={styles.title}>
                <TextView title="Non" />
            </div>
            {Product?.map((e, index) => {
                return (
                    <BreadView
                        count={counts[e.id]?.count}
                        url={e.img}
                        title={e.title}
                        size={e.size}
                        onCountChange={(count) => setCounts({ ...counts, [e.id]: { ...e, count } })}
                        price={e.price} />
                )
            })}
            <div>{}</div>
            <FooterView />

        </div>
    )
}

export default AllProducts