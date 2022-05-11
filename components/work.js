import React from 'react'
import styles from '../styles/Works.module.css'

const Work = ({ name, description, technologies, img, github, link, isLeft }) => {
  return (
    <section className={ styles["work-container"] }>
        {/* Project name, short description, used technologies, filtered image, links */}
        
        { isLeft && 
            <div className={`${styles["column-one"]} ${styles["img-wrapper"]}`}>
                <img loading='lazy' src={ img } alt={ name } />
            </div> 
        }
        <div className={isLeft ? styles["column-two"] : styles["column-one"]}>    
            <h2>{ name }</h2>
            <p>{ description }</p>
            <span>
                { technologies.map((tech) => tech ) }
            </span>
            <a href={ github } target='_blank' rel='nofollow'></a>
            <a href={ link } target='_blank' rel='nofollow'></a> 
        </div>
        { !isLeft && 
            <div className={`${styles["column-two"]} ${styles["img-wrapper"]}`}>
                <img loading='lazy' src={ img } alt={ name } />
            </div> 
        }
    </section>
  )
}

export default Work