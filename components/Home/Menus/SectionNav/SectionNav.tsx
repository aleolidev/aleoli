import React from 'react'
import styles from '../../../../styles/SectionNav.module.css'
import { motion } from 'framer-motion';

const SectionNav = ({elements, currentIndex}) => {
    
    let navDots = new Array(elements.length).fill(false);
    navDots[currentIndex] = true;

    const isFirst = navDots[0] === true;
    const isLast = navDots[navDots.length - 1] === true;

    const variants = {
        hide: {
            maskImage: "-webkit-linear-gradient(bottom, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 0%))",
            WebkitMaskImage: "-webkit-linear-gradient(bottom, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 0%))",
            transition: { duration: 2 }
        },
        show: {
            maskImage: "-webkit-linear-gradient(bottom, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)",
            WebkitMaskImage: "-webkit-linear-gradient(bottom, rgba(0,0,0,1) 100%, rgba(255,255,255,0) 100%)",
            transition: { delay: 2.7, duration: 1, ease: [.15,.75,1,.21] }
        }
    }

    const hrefSections = ["#about", "#works", "#contact"];

    return (
        <motion.section 
            initial={ "hide" }
            animate={ "show" }
            variants={ variants }
            className={styles["container"]}
        >
            <div className={`${styles["before-line"]} ${isFirst ? styles["first-line"] : ""}`} />
            <div className={styles["nav"]}>
                {
                    navDots.map((dot, i) => {
                        return (
                            <a href={ hrefSections[i] } key={i} className={`${styles["dot"]} ${dot ? styles["active"] : ''}`} />
                        )
                    })
                } 
            </div>
            <div className={`${styles["after-line"]} ${isLast ? styles["last-line"] : ""}`}  />
        </motion.section>
    )
}

export default SectionNav