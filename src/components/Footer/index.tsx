import React, { FC, useState } from "react";
import ButtonView from "../Button";
import SendMessage from "../SendMessage";
import styles from './index.module.css'


interface Props {
    counts: {
        [key: string]: {

        }
    }
    title?: string;
    name?: any;
    size?: string;
    map?: () => void;
    price?: number;
}

const FooterView: FC<Props> = ({
    title,
    name,
    size,
    price,
    counts,
}) => {
    let total = Object.entries(counts).reduce((p, c) => {
        //@ts-ignore
        return p + (c[1].count * c[1].price);
    }, 0)

    const [show, setShow] = useState(false)
    const [showM, setShowM] = useState(false)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}
                    style={{ display: show ? "flex" : "none" }}>
                    <div className={styles.itemContent}>
                        {
                            (Object.values(counts) ?? []).map((item: any, index) => {
                                return (
                                    <div style={{ display: show ? "flex" : "none" }} className={styles.itemBox} key={index}>
                                        <span style={{ flex: '1' }}>{item?.title}</span>
                                        <div style={{ display: 'flex', flex: '1', justifyContent: 'space-between' }}>
                                            <span>{item?.count} </span>
                                            <span>{item?.count * item?.price}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.bottomBox}>
                        <div className={styles.TextBox}>
                            {/* <span>Jami</span> */}
                            <span>Summa</span>
                            {total}
                        </div>
                        <div className={styles.TextBox}>
                            <span>Yetkazib berish</span>
                            <span>10000</span>
                        </div>
                        <div className={styles.TextBox}
                            style={{ display: show ? 'flex' : 'none' }}>
                            <span>Jami summa</span>
                            <span>{total + 10000}</span>
                        </div>
                        <div className={styles.ButtonBox}>
                            <ButtonView title="Sotib olaman" style={{ width: '100%', display: show ? 'none' : 'block' }} onClick={() => setShow((s) => !s)} />
                            <ButtonView title="Orqaga" style={{ width: '100%', display: show ? 'block' : 'none' }} onClick={() => setShow((s) => !s)} />
                        </div>
                    </div>
                    <div className={styles.sendBox} style={{ display: show ? 'flex' : 'none' }}>
                        <SendMessage counts={counts} name="Ismingizni kiriting" number="telefon raqamingiz" coment="izoh qoldiring" />
                    </div>
                </div>
                <div className={styles.bottomBoxMobile}
                    style={{
                        display: show ? 'none' : 'flex'
                    }}>
                    <div className={styles.TextBoxMobile}>
                        <span>Summa</span>
                        {total}
                    </div>
                    <div className={styles.TextBoxMobile}>
                        <span>Yetkazib berish</span>
                        <span>10000</span>
                    </div>
                    <div className={styles.TextBoxMobile}
                        style={{ display: show ? 'flex' : 'none' }}>
                        <span>Jami summa</span>
                        <span>{total + 10000}</span>
                    </div>
                    <div className={styles.ButtonBoxMobile}>
                        <ButtonView title="Sotib olaman" style={{ width: '100%', display: show ? 'none' : 'block' }} onClick={() => setShow((s) => !s)} />
                        <ButtonView title="Orqaga" style={{ width: '100%', display: show ? 'block' : 'none' }} onClick={() => setShow((s) => !s)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterView;