import React, {useRef, useState} from 'react'
import styles from "../styles/Content.module.css"
import About from "./about"
import History from "./history"
import Works from "./works"
import Contact from "./contact"
import SectionNav from '../components/sectionnav'
import useCurrentSection from '../hooks/useCurrentSection'

const Content = () => {
    let [navIndex, setNavIndex] = useState(0)

    const about = useRef()
    const history = useRef()
    const works = useRef()
    const contact = useRef()

    const sections = [about, history, works, contact]

    const currentSection = useCurrentSection(sections);
    
    sections.forEach((section, i) => {
        if (section == currentSection && navIndex != i) {
            setNavIndex(i)
        }
    })

    return (
        <>
            <SectionNav elements={ sections } currentIndex={ navIndex } />
            <main className={styles['container']}>
                <div id='about' ref={ about }><About/></div>
                <div id='history' ref={ history }><History /></div>
                <div id='works' ref={ works }><Works/></div>
                <div id='contact' ref={ contact }><Contact/></div>
            </main>
        </>
    )
}

export default Content