import React, { useEffect } from 'react'
import styles from '../styles/Loader.module.css'
import { motion } from 'framer-motion'

const iconWrapper = {
    center: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(1, 1)",
        margin: "0",
    },
    logo: {
        top: "0",
        left: "0",
        transform: "translate(-25%, -25%) scale(.5, .5)",
        margin: "0.5rem 1rem",
    }
}

const icon = {
    hidden: {
        display: "none",
        pathLength: 0,
        fill: "rgba(50, 196, 146, 0)",
    },
    visible: {
        display: "block",
        pathLength: 1,
        fill: "rgba(50, 196, 146, 1)",

    }
}

const Loader = ({ setLoading }) => {
    useEffect (() => {
        const timer = setTimeout (() => {
            setLoading(false);
        }, 500); // TODO: Change to 6000

        return () => clearTimeout(timer);
    })
    
    return (
        <div className={ styles.container }>
            <motion.div
                className={ styles["logo-wrapper"] }
                variants={ iconWrapper }
                initial="center"
                animate="logo"
                transition={{ delay: 3.5 , duration: 2, ease: [.5,0,0,1]
                }}
            >
                <motion.svg
                    width="100"
                    height="100"
                    viewBox="0 0 444.9 445.5"
                    xmlns="http://www.w3.org/2000/svg"
                    className={ styles.logo }
                >
                    <motion.path
                        d="M 0 444.9 l 444.2 0.6 L 444.9 0 L 0 444.9 Z"
                        variants={ icon }
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { delay: .5 , duration: 2, ease: [.06,.17,.37,.98]},
                            fill: { delay: 2.4 , duration: 0.25 , ease: "easeOut"}
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Loader