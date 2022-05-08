import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Navbar.module.css'

const Links = ({ isOpen, isDesktop, setIsOpen, showDelay }) => {
    const variants = (n) => {
        return {
            desktop: {
                hidden: { y: "-50%", opacity: 0, transition: { duration: .25 }},
                show: { y: "0%", opacity: 1, transition: { delay: 2.9 + showDelay * n, duration: .5 }}
            },
            mobile: {
                hidden: { x: "5%", opacity: 0, transition: { duration: .25 }},
                show: { x: "0%", opacity: 1, transition: { delay: 0.1 + showDelay * n, duration: .25 }}
            }
        }
    }

    return (<>
        <motion.li className={styles["nav-item"]} initial={ "hidden" } variants={isDesktop ? variants(0).desktop : variants(0).mobile} 
            animate={ isOpen ? "show" : "hidden" }><a href='#about' onClick={ setIsOpen ? () => setIsOpen(current => !current) : null }>About</a></motion.li>
        <motion.li className={styles["nav-item"]} initial={ "hidden" } variants={isDesktop ? variants(1).desktop : variants(1).mobile} 
            animate={ isOpen ? "show" : "hidden" }><a href='#history' onClick={ setIsOpen ? () => setIsOpen(current => !current) : null }>History</a></motion.li>
        <motion.li className={styles["nav-item"]} initial={ "hidden" } variants={isDesktop ? variants(2).desktop : variants(2).mobile} 
            animate={ isOpen ? "show" : "hidden" }><a href='#works' onClick={ setIsOpen ? () => setIsOpen(current => !current) : null }>Works</a></motion.li>
        <motion.li className={styles["nav-item"]} initial={ "hidden" } variants={isDesktop ? variants(3).desktop : variants(3).mobile} 
            animate={ isOpen ? "show" : "hidden" }><a href='#contact' onClick={ setIsOpen ? () => setIsOpen(current => !current) : null }>Contact</a></motion.li>
    </>)
}

export default Links