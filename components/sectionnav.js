import React from 'react'
import styles from '../styles/SectionNav.module.css'

const SectionNav = ({elements, currentIndex}) => {
    
    let navDots = new Array(elements).fill(false);
    navDots[currentIndex] = true;

    return (
        <section className={styles["container"]}>
            <div className={styles["before-line"]} />
            <div className={styles["nav"]}>
                {
                    navDots.map((dot, i) => {
                        return (
                            <div key={i} className={`${styles["dot"]} ${dot ? styles["active"] : ''}`} />
                        )
                    })
                } 
            </div>
            <div className={styles["after-line"]} />
        </section>
    )
}

export default SectionNav