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
        }, 5500); // TODO: Change to 4500

        return () => clearTimeout(timer);
    })
    
    return (
        <div className={ styles.container }>
            <motion.div
                className={ styles["logo-wrapper"] }
                variants={ iconWrapper }
                initial="center"
                animate="logo"
                transition={{ delay: 4 , duration: 1.5,  ease: [0.33, 1, 0.68, 1]
                }}
            >
                <motion.svg
                    width="100"
                    height="100"
                    viewBox="0 0 947.1 1049.3"
                    xmlns="http://www.w3.org/2000/svg"
                    className={ styles.logo }
                >
                    <motion.path
                        d="M537.4,15,326,226.3,498.1,398.4V903.7L269,674.6h61.3V590.7H66.5L540,1064.3l473.5-473.6H749.7v83.9H811L581.9,903.7V393.1L748.7,226.3ZM444.6,226.3l92.8-92.7,92.7,92.7-92.7,92.8Z"
                        variants={ icon }
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { delay: .5 , duration: 3.5, ease: "easeOut"},
                            fill: { delay: 3.1 , duration: .9 , ease: "easeOut"}
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Loader