import React, { useState, useEffect } from 'react'
import styles from '../../../styles/About.module.css'
import { Cursor } from 'react-simple-typewriter'

import useTypewritter from '../../../hooks/useTypewriter'
import AboutText from './AboutText'
import Skills from '../../Skills/Skills'

const About = () => {
    const [finishedLogo, setFinishedLogo] = useState(false);
    
    const toWrite = [    
        { words: ['aleoli'], writeDelay: 70, eraseDelay: 150 },
        { words: ['.div', '.dev'] , writeDelay: 70, eraseDelay: 350 },
    ]

    const { final: typewritter, finishedWriting } = useTypewritter(toWrite)
    
    useEffect(() => {
        if (finishedWriting !== finishedLogo) setFinishedLogo(current => !current)
    })

    useEffect(() => {
        
    }, [finishedLogo])

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
                    <AboutText />
                }
            </div>
            <div className={styles["column-two"]}>
                { finishedWriting &&
                    <Skills />
                }
            </div>
        </section>
    )
}

export default About