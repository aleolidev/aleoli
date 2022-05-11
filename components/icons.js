import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Navbar.module.css'
import { BsGithub, BsLinkedin } from "react-icons/bs"

const Icons = ({ isOpen, isDesktop, showDelay }) => {
    const variants = {
        desktop: {
            hidden: { y: "-50%", opacity: 0, transition: { duration: .25 }},
            show: { y: "0%", opacity: 1, transition: { delay: 2.9 + (showDelay * 4), duration: .5 }}
        },
        mobile: {
            hidden: { x: "5%", opacity: 0, transition: { duration: .25 }},
            show: { x: "0%", opacity: 1, transition: { delay: 0.1 + (showDelay * 5), duration: .25 }}
        }
    }

    return (<li className={ styles.flex }>
        <motion.ul className={ styles.flex } initial={ "hidden" } variants={isDesktop ? variants.desktop : variants.mobile} animate={ isOpen ? "show" : "hidden" }>
            <li className={`${styles["nav-icon"]} ${isDesktop && styles["desktop-icon"]}`}><a href='https://github.com/inmortalkaktus' target='_blank' rel='nofollow noreferrer'><BsGithub /></a></li>
            <li className={`${styles["nav-icon"]} ${isDesktop && styles["desktop-icon"]}`}><a href='https://www.linkedin.com/in/alejandro-olivares-mompo/' target='_blank' rel='nofollow noreferrer'><BsLinkedin /></a></li>
        </motion.ul>
    </li>)
}

export default Icons