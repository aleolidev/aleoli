import React from 'react'
import styles from '../../styles/About.module.css'
import * as skills from "../../translations/translations.json"
import { motion } from 'framer-motion'
import useVisibility from "../../hooks/useVisibility"

const Skill = ({ skillName, skillTranslation, handleDescription, isOpen, isRight }) => {
    const { ref, closed } = useVisibility(handleDescription, isOpen)

    return (
        <li className={ isOpen ? styles["open-dialog"] : styles["closed-dialog"]}><span className={ styles["dot"] }/>
            <button className={ styles["skill-button"] } onClick={ !closed ? handleDescription : null }>
                { skillName }
            </button>
            { isOpen &&
                <motion.div 
                    initial={{ y: "-20%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    ref={ ref } 
                    className={ `box ${styles["skill-note"]} ${ isOpen ? '' : styles["skill-note--closed"]}  ${ (isOpen && isRight) ? styles["skill-note--right"] : ''}`}>
                    { skills[skillTranslation]['en-US'] }
                </motion.div>
            }
        </li>
    )
}

export default Skill