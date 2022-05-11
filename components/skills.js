import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Skill from './skill'
import styles from '../styles/About.module.css'
import useMediaQuery from '../hooks/useMediaQuery'

const Skills = () => {

    const skills = [
        {name: "JavaScript", translation: "js"},
        {name: "Node.js", translation: "nodejs"},
        {name: "React", translation: "react"},
        {name: "Gatsby", translation: "gatsby"},
        {name: "Next.js", translation: "nextjs"},
        {name: "Puppeteer", translation: "puppeteer"},
    ]
    
    const [isOpen, setIsOpen] = useState(new Array(skills.length).fill(false))
    const isDesktop = !useMediaQuery('(max-width: 1024px)')

    const variants = {
        desktopInitial: { opacity: 0, x: "-20%", y: "0%", height: "auto" },
        mobileInitial: { opacity: 0, x: "0%", y: "-20%", height: 0 },
        desktop: { opacity: 1, x: "0%", y: "0%", height: "auto" },
        mobile: { opacity: 1, x: "0%", y: "0%", height: "auto" }
    }

    const transitions = {
        desktop: {
            duration: 1.2 , ease: [0.33, 1, 0.68, 1]
        }, 
        mobile: {
            duration: 1.8, ease: [0.61, 1, 0.88, 1],
        }
    }

    const handleDescription = (i, setTo) => {
        const arr = new Array(isOpen.length).fill(false);
        arr[i] = setTo;

        setIsOpen(arr)
    }

    return (
        <motion.div
            style={{ width: "100%" }}
            variants={ variants }
            initial={ isDesktop ? "desktopInitial" : "mobileInitial" }
            animate={ isDesktop ? "desktop" : "mobile" }
            transition={ isDesktop ? transitions.desktop : transitions.mobile }
        >
            <ul className={styles["programming-skills"]}>
                { skills.map((skill, i) => {
                    return (<Skill key={ i }
                        skillName={ skill.name }  
                        skillTranslation={ skill.translation } 
                        handleDescription={ () => handleDescription(i, !isOpen[i]) }
                        isOpen={ isOpen[i] } isRight={ i % 2 == 1 } 
                    />)
                })}
            </ul>
            <a href="#works"><button className={ styles["my-works"] }>My works</button></a>
        </motion.div>
    )
}

export default Skills