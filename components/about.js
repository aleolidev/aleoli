import React, { useState, useRef } from 'react'
import styles from '../styles/About.module.css'
import { skills } from "../translations/translations"
import useVisibility from "../hooks/useVisibility"

const Skill = ({ skillName, skillTranslation, handleDescription, isOpen, isRight }) => {
    const { ref, closed } = useVisibility(handleDescription, isOpen)

    return (
        <li className={ isOpen ? styles["open-dialog"] : styles["closed-dialog"]}><span className={ styles["one"] }/>
            <button className={ styles["skill-button"] } onClick={ !closed ? handleDescription : null }>
                { skillName }
            </button>
            <div ref={ ref } className={ `${styles["skill-note"]} ${ isOpen ? '' : styles["skill-note--closed"]}  ${ (isOpen && isRight) ? styles["skill-note--right"] : ''}`}>
                { skills[skillTranslation]['en-US'] }
            </div>
        </li>
    )
}

const About = () => {
    const skills = [
        {name: "JavaScript", translation: "long_text"},
        {name: "Node.js", translation: "text"},
        {name: "React", translation: "text"},
        {name: "Gatsby", translation: "long_text"},
        {name: "Next.js", translation: "long_text"},
        {name: "Puppeteer", translation: "text"},
    ]

    const [isOpen, setIsOpen] = useState(new Array(skills.length).fill(false))

    const handleDescription = (i, setTo) => {
        const arr = new Array(isOpen.length).fill(false);
        arr[i] = setTo;

        setIsOpen(arr)
    }

    return (
        <section className={styles["container"]}>
            <div className={styles["column-one"]}>
                <h1 className={styles["page-name"]}>aleoli<span className={styles["main-color"]}>.dev</span></h1>
                <h2 className={styles["my-name"]}>Alejandro Olivares</h2>
                <p className={styles["short-description"]}>Sed commodo diam nonumy nonumy ut aliquam dolores feugiat. Vel molestie suscipit stet gubergren gubergren kasd invidunt vulputate nonumy sea duis et et eirmod amet.</p>
            </div>
            <div className={styles["column-two"]}>
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
                <button className={ styles["my-history"] }>My history</button>
            </div>
        </section>
    )
}

export default About