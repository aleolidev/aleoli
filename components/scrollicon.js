import React, { useState, useEffect } from 'react'
import styles from "../styles/ScrollIcon.module.css"
import { motion } from 'framer-motion'
import { BsMouse } from "react-icons/bs"

const ScrollIcon = () => {

    const [ show, setShow ] = useState(true)

    const containerVariants = {
        show: {
            opacity: 1, y: "0%",
            transition: { delay: 3.3, duration: .4 }
        },
        hide: { 
            opacity: 0, y: "1.5em",
            transition: { duration: .4, ease: "easeOut" }
        },
    }
    
    const variants = {
        scroll: {
            opacity: [1, 1, 1], marginBottom: ["1rem", "1.25rem", "1rem"],
            transition: { duration: 1.2, ease: "easeOut", times: [0, 0.7, 1], repeat: Infinity }
        },   
        hide: {
            opacity: 0, marginBottom: "1rem",
            transition: { duration: 1.2, ease: "easeOut" }
        }
    }

    const handleVisibility = () => {
        if (show) {
            if (window.scrollY > 100) {
                setShow(false)
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleVisibility)
        return () => {
            window.removeEventListener("scroll", handleVisibility)
        }
    })

    return (
        <motion.div 
            initial={ "hide" }
            variants={ containerVariants }
            animate={ show ? "show" : "hide" }
            className={ styles.container }
        >
            <motion.div
                variants={ variants }
                animate={ show ? "scroll" : "hide" }
                className={ styles["icon-wrapper"] }
            >
                <BsMouse className={ styles.icon }/>
            </motion.div>
        </motion.div>
    )
}

export default ScrollIcon