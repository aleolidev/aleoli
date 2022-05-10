import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'
import { TiHeartFullOutline } from "react-icons/ti"

const Contact = () => {
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const getHref = () => {
        return `mailto:alejandroolivaresmompo@hotmail.com?subject=${subject ?? ''}&body=${message ?? ''}`
    }

    return (
        <section className={styles["container"]}>
            <motion.span className={styles["contact-me"]}><h1>CONTACT ME</h1><TiHeartFullOutline/></motion.span>
            <form className={styles.form}>
                <motion.input
                    onChange={ e => setSubject(e.target.value)}
                    value={ subject }
                    type="text"
                    name="subject"
                    placeholder='Subject'
                    className={styles.subject}
                    tabIndex="1"
                />

                <motion.textarea
                    onChange={ e => setMessage(e.target.value)}
                    value={ message }
                    placeholder="Type here your message..."
                    className={ styles.message }
                    name="message"
                    rows={7}
                    tabIndex="2"
                />

                <motion.a target="_blank" href={ getHref() } tabIndex="3" className={ styles.send }>Send</motion.a>
            </form>
        </section>
    )
}

export default Contact