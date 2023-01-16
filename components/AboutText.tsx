import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/About.module.css'
import useMediaQuery from '../hooks/useMediaQuery'

const AboutText = () => {
    
    const isDesktop = !useMediaQuery('(max-width: 1024px)')

    const transitions = {
        desktop: {
            default: { duration: 1, delay: .2, ease: [0.33, 1, 0.68, 1] },
            height: { duration: 1.2, ease: [0.33, 1, 0.68, 1] } 
        }, 
        mobile: {
            height: { duration: 1.2, ease: [0.61, 1, 0.88, 1] },
            y: { duration: 0 },
            opacity: { duration: 1.8, ease: [0.33, 1, 0.68, 1] },
        }
    }

    return (
        <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: 0, y: "-20%", opacity: 0 }}
            animate={{ height: "auto", y: "0%", opacity: 1 }}
            transition={ isDesktop ? transitions.desktop : transitions.mobile }
        >
            <h2 className={styles["my-name"]}>Alejandro Olivares</h2>
            <p className={styles["short-description"]}>I am Alejandro Olivares. My passion for software development was born when I was ten years old, and I wanted to modify my favorite video game to create my own story.</p>
            <p className={styles["short-description"]}>Lately, I have been focused on improving my skills as a front-end developer, paying special attention to user experience, performance and search engine optimization, design, and above all, the intrinsic value of what I develop.</p>
        </motion.div>
    )
}

export default AboutText