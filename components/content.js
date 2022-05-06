import React, {useRef, useState} from 'react'
import styles from "../styles/Content.module.css"
import About from "./about"
import Works from "./works"
import Contact from "./contact"
import SectionNav from '../components/sectionnav'
import useCurrentSection from '../hooks/useCurrentSection'

const Content = () => {
    let [navIndex, setNavIndex] = useState(0)

    const about = useRef()
    const works = useRef()
    const contact = useRef()

    const sections = [about, works, contact]

    const currentSection = useCurrentSection(sections);
    
    sections.forEach((section, i) => {
        if (section == currentSection && navIndex != i) {
            setNavIndex(i)
        }
    })

    return (
        <>
            <SectionNav elements={ sections.length } currentIndex={ navIndex } />
            <main className={styles['container']}>
                <div ref={ about }><About/></div>
                <div ref={ works }><Works/></div>
                <div ref={ contact }><Contact/></div>
            </main>
        </>
    )
}

export default Content