import React, { FC, useState } from "react";
import emailjs from 'emailjs-com';
import styles from './index.module.css';
import { render } from "react-dom";
import Swal from "sweetalert2";
import { Button } from "antd";

interface Props {
    name?: string;
    number?: string;
    email?: string;
    coment?: string;
    counts?: any;
}

const SendMessage: FC<Props> = ({
    name,
    number,
    email,
    coment,
    counts
}) => {

    const [loading, setLoading] = useState(false)

    const OnButtonClick = () => {
        setLoading(true)
        const timeOutFunc = () => {
            setLoading(false);
          };
          setTimeout(timeOutFunc, 3000);
          clearTimeout(3000);
    }
    async function SendEmail(e: { preventDefault: () => void; }) {
        e.preventDefault()

        try {
            const data = await emailjs.sendForm('service_zprreea',
                'template_tvwkk3a',
                //@ts-ignore
                e.target,
                '32-D-AIjp53twMA29'
            )

            const status = await data.status

            if (status === 200) {
                Swal.fire("Murojatingiz qabul qilindi tez orada operatorlarimiz siz bilan bog'lanishadi ").then(r => {
                    window.location.reload()
                })
                
                
            }

        } catch (error) {
            Swal.fire("Hatolik yuz berdi internet tarmogingizni tekshiring")
        }
    }
    let result = Object.entries(counts).reduce((p, [key, value]) => {
        //@ts-ignore
        return p + `<p>${value.title}\t\t${value.count}</p>`
    }, "")



    return (
        <div>
            <form
                className={styles.box}
                onSubmit={SendEmail}
            >
                <label className={styles.label}>{name}</label>
                <input className={styles.input} type="text" name="name" />

                <input type="hidden" name="content" value={result} />

                <label className={styles.label}>{number}</label>
                <input className={styles.input} type="tel" id="phone" name="number"
                    minLength={9}
                    required />

                <label className={styles.label}>{coment}</label>
                <textarea className={styles.coment} name="message"></textarea>

                <Button 
                 className={styles.submit}
                 type='primary' 
                 htmlType="submit"
                 onClick={() => OnButtonClick()}     
                 loading={loading}
                 >Tasdiqlayman</Button>
            </form>
        </div>
    )
}

export default SendMessage;