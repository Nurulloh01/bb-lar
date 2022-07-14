import React, { useState } from "react";
import { data } from "../../dyumData";
import FooterView from "../Footer";
import ProductContainer from "../Product";
import ScrollTop from "../ScrolTop";

import TextView from "../Text";
import styles from './index.module.css'

const AllProducts = () => {
    const [counts, setCounts] = useState<{ [key: string]: typeof data[0] & { count: number } }>({})

    return (
        <div className={styles.container}>
            {data.map((e, index) => {
                return (
                    <div key={index} className={styles.content}>
                        <div className={styles.title}>
                            <TextView title={e.name} />
                        </div>
                        {e.data.map((e, index) => {
                            return (
                                <div key={index}>
                                    <ProductContainer
                                        count={counts[e.id]?.count}
                                        url={e.img}
                                        title={e.title}
                                        size={e.size}
                                        //@ts-ignore
                                        onCountChange={(count) => setCounts({ ...counts, [e.id]: { ...e, count } })}
                                        price={e.price} />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
                <FooterView counts={counts} />
                <ScrollTop/>
        </div>
    )
}

export default AllProducts;
