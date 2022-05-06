import React from 'react'
import styles from '../styles/SectionNav.module.css'

const SectionNav = ({elements, currentIndex}) => {
    
    let navDots = new Array(elements).fill(false);
    navDots[currentIndex] = true;

    const isFirst = navDots[0] === true;
    const isLast = navDots[navDots.length - 1] === true;

    return (
        <section className={styles["container"]}>
            <div className={`${styles["before-line"]} ${isFirst ? styles["first-line"] : ""}`} />
            <div className={styles["nav"]}>
                {
                    navDots.map((dot, i) => {
                        return (
                            <div key={i} className={`${styles["dot"]} ${dot ? styles["active"] : ''}`} />
                        )
                    })
                } 
            </div>
            <div className={`${styles["after-line"]} ${isLast ? styles["last-line"] : ""}`}  />
        </section>
    )
}

export default SectionNav