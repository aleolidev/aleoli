import React, { useState, useEffect } from 'react'
import styles from '../styles/Works.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsGithub } from "react-icons/bs"
import { AiOutlineLink } from "react-icons/ai"
import useMediaQuery from '../hooks/useMediaQuery';

const Work = ({ name, description, technologies, img, imgWidth, imgHeight, github, link, isLeft }) => {
    const isDesktop = !useMediaQuery('(max-width: 1024px)')
    
    const [ref, inView] = useInView({ "threshold": isDesktop ? 0.3 : 0.2 });
    const [show, setShow] = useState(false)
  
    const variants = {
        show: { y: "0%",opacity: 1, transition: { duration: .75 } },
        hide: { y: "25%",opacity: 0 }
    };

    useEffect(() => {
        if (inView && !show) {
            setShow(true)
        }
    }, [inView]);

    return (
    <motion.div 
        className={ styles["work-container"] }
        variants={ variants }
        initial={ "hide" }
        animate={ show ? "show" : "hide" }
        ref={ ref }
    >
        {/* Project name, short description, used technologies, filtered image, links */}
        
        { (isLeft || !isDesktop) &&
            <div className={`${styles["column-one"]} ${styles["img-wrapper"]} `}>
                <a className={ styles["img-link"] } href={ link } target='_blank' rel='nofollow'>
                    <Image loading='lazy' src={ img } alt={ name } width={ imgWidth } height={ imgHeight } />
                </a>
            </div> 
        }
        <div className={isLeft ? styles["column-two"] : styles["column-one"]}>    
            <h2 className={ styles.title }>{ name }</h2>
            <p className={ styles.description }>{ description }</p>
            <span>
                { technologies.map((tech) => <span className={ styles.technology }>{ tech } </span> ) }
            </span>
            <span className={ styles["icons-container"]}>
                { github && <a href={ github } target='_blank' rel='nofollow'><BsGithub /></a> }
                { link && <a href={ link } target='_blank' rel='nofollow'><AiOutlineLink /></a> }
            </span>
        </div>
        { (!isLeft && isDesktop) && 
            <div className={`${styles["column-two"]} ${styles["img-wrapper"]}`}>
                <a className={ styles["img-link"] } href={ link } target='_blank' rel='nofollow'>
                    <Image loading='lazy' src={ img } alt={ name } width={ imgWidth } height={ imgHeight } />
                </a>
            </div> 
        }
    </motion.div>
  )
}

export default Work