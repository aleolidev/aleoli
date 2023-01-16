import React, { useState, useEffect } from 'react'
import styles from '../../../styles/Contact.module.css'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { TiHeartFullOutline } from "react-icons/ti"

const Contact = () => {
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [ref, inView] = useInView({ "threshold": 0.3 });
    const [show, setShow] = useState(false)

    const itemVariant = (item, yVariation) => {
        return {
            show: { opacity: 1, y: "0%", transition: { duration: .75, delay: item * 0.075 } },
            hide: { opacity: 0, y: yVariation },
        }
    }

    useEffect(() => {
        if (inView && !show) {
            setShow(true)
        }
    }, [inView]);

    const getHref = () => {
        return `mailto:alejandroolivaresmompo@hotmail.com?subject=${subject ?? ''}&body=${message ?? ''}`
    }

    return (
        <motion.section ref={ref} className={styles["container"]}>
            <motion.span 
                className={styles["contact-me"]}
                variants={ itemVariant(1, "40%") }
                initial={ "hide" }
                animate={ show ? "show" : "hide" }
            >
                <h1>CONTACT ME</h1><TiHeartFullOutline/>
            </motion.span>
            <form className={styles.form}>
                <motion.input
                    onChange={ e => setSubject(e.target.value)}
                    value={ subject }
                    type="text"
                    name="subject"
                    placeholder='Subject'
                    className={styles.subject}
                    tabIndex={1}
                    variants={ itemVariant(2, "40%") }
                    initial={ "hide" }
                    animate={ show ? "show" : "hide" }
                />

                <motion.textarea
                    onChange={ e => setMessage(e.target.value)}
                    value={ message }
                    placeholder="Type here your message..."
                    className={ styles.message }
                    name="message"
                    rows={7}
                    tabIndex={2}
                    variants={ itemVariant(3, "15%") }
                    initial={ "hide" }
                    animate={ show ? "show" : "hide" }
                />

                <motion.a target="_blank" rel="noreferrer" href={ getHref() } tabIndex={3} className={ styles.send }
                    variants={ itemVariant(4, "40%") }
                    initial={ "hide" }
                    animate={ show ? "show" : "hide" }
                >
                    Send
                </motion.a>
            </form>
        </motion.section>
    )
}

export default Contact