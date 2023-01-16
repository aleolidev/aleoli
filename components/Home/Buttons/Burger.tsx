import React, { useState } from 'react'
import styles from '../../../styles/Navbar.module.css'
import { motion } from 'framer-motion'

const Burger = ({ isOpen, onClick }) => {
    const [open, setOpen] = useState(isOpen)

    if (isOpen !== open) setOpen(isOpen)

    const variantsUp = {
        open: {
            top: "50%",
            transform: "translate(0, -50%) rotate(-45deg)",
            backgroundColor: "rgb(255, 255, 255)",
            transition: { duration: .3 }
        },
        closed: {
            top: "0",
            transform: "translate(0, 0%) rotate(0deg)",
            backgroundColor: "rgb(50, 196, 146)",
            transition: { duration: .3 }
        }
    }

    const variantsMiddle = {
        open: {
            top: "50%",
            transform: "translate(0, -50%)",
            width: "0rem",
            backgroundColor: "rgb(255, 255, 255)",
            transition: { duration: .3 }
        },
        closed: {
            top: "50%",
            transform: "translate(0, 0)",
            width: "1.75rem",
            backgroundColor: "rgb(50, 196, 146)",
            transition: { duration: .3 }
        }
    }

    const variantsBottom = {
        open: {
            top: "50%",
            transform: "translate(0, -50%) rotate(45deg)",
            backgroundColor: "rgb(255, 255, 255)",
            transition: { duration: .3 }
        },
        closed: {
            top: "100%",
            transform: "translate(0, -50%) rotate(0deg)",
            backgroundColor: "rgb(50, 196, 146)",
            transition: { duration: .3 }
        }
    }   


    return (
        <button className={styles["button-wrapper"]}  onClick={ onClick }>
            <motion.span
                animate={ isOpen ? "open" : "closed" }
                variants={ variantsUp }
                className={styles["links-button"]} 
            />
            <motion.span
                animate={ isOpen ? "open" : "closed" }
                variants={ variantsMiddle }
                className={styles["links-button"]} 
            />
            <motion.span
                animate={ isOpen ? "open" : "closed" }
                variants={ variantsBottom }
                className={styles["links-button"]} 
            />
        </button>
    )
}

export default Burger