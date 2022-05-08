import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/About.module.css'
import { motion } from 'framer-motion'
import { Cursor } from 'react-simple-typewriter'

import Skill from './skill'
import useTypewritter from '../hooks/useTypewriter'
import { useMeasuredSize } from '../hooks/useMeasuredSize'

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
    const [finishedLogo, setFinishedLogo] = useState(false);
    
    const toWrite = [    
        { words: ['aleoli'], writeDelay: 70, eraseDelay: 150 },
        { words: ['.div', '.dev'] , writeDelay: 70, eraseDelay: 350 },
    ]

    const handleDescription = (i, setTo) => {
        const arr = new Array(isOpen.length).fill(false);
        arr[i] = setTo;

        setIsOpen(arr)
    }

    const { final: typewritter, finishedWriting } = useTypewritter(toWrite)

    const textRef = useRef();
    
    useEffect(() => {
        if (finishedWriting !== finishedLogo) setFinishedLogo(current => !current)
    })

    useEffect(() => {
        
    }, [finishedLogo])

    const size = useMeasuredSize(textRef ?? null)
    const textHeight = size?.height ? size.height : "100%"
    
    return (
        <section className={styles["container"]}>
            <div className={styles["column-one"]}>
                <h1 className={styles["page-name"]}>
                    {
                        typewritter.map((text, i) => {
                            if (i === 0) {
                                return (<span key={i}>{ text }</span>)
                            } else {
                                return (<span key={i} className={styles["main-color"]}>{ text }</span>)
                            }
                        })
                    }
                    { !finishedWriting && <Cursor cursorStyle='_'/> }
                </h1>
                { finishedWriting && 
                    <motion.div ref={ textRef }
                        animate={{ y: ["-20%", "0%"], opacity: ["0", "1"], maxHeight: ["0%", textHeight] }}
                        transition={{ 
                            y: { duration: 1, times: [0, .9], ease: [0.33, 1, 0.68, 1] },
                            opacity: { duration: 1, times: [0, .9], ease: [0.33, 1, 0.68, 1] },
                            maxHeight: { duration: 1, times: [0, 1], ease: [0.33, 1, 0.68, 1] }
                        }}
                    >
                        <h2 className={styles["my-name"]}>Alejandro Olivares</h2>
                        <p className={styles["short-description"]}>Sed commodo diam nonumy nonumy ut aliquam dolores feugiat. Vel molestie suscipit stet gubergren gubergren kasd invidunt vulputate nonumy sea duis et et eirmod amet.</p>
                    </motion.div>
                }
            </div>
            <div className={styles["column-two"]}>
                { finishedWriting &&
                    <motion.div
                        style={{ width: "100%" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .4, duration: 1, ease: [0.33, 1, 0.68, 1] }}
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
                        <button className={ styles["my-history"] }>My history</button>
                    </motion.div>
                }
            </div>
        </section>
    )
}

export default About