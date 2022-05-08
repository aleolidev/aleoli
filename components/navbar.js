import {useState} from 'react'
import { motion } from 'framer-motion';
import useScrollDirection from "../hooks/useScrollDirection";
import styles from '../styles/Navbar.module.css'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import Logo from './logo';
import Burger from './burger';

const showDelay = 0.05

const Links = ({ isOpen, isDesktop }) => {
    const variants = (n) => {
        return {
            desktop: {
                hidden: { y: "-50%", opacity: 0, transition: { duration: .25 }},
                show: { y: "0%", opacity: 1, transition: { delay: 2.9 + showDelay * n, duration: .5 }}
            },
            mobile: {
                hidden: { x: "5%", opacity: 0, transition: { duration: .25 }},
                show: { x: "0%", opacity: 1, transition: { delay: 0.1 + showDelay * n, duration: .25 }}
            }
        }
    }

    return (<>
        <motion.li className={styles["nav-item"]} initial={ "hidden" } variants={isDesktop ? variants(0).desktop : variants(0).mobile} 
            animate={ isOpen ? "show" : "hidden" }>About</motion.li>
        <motion.li className={styles["nav-item"]} initial={ "hidden" } variants={isDesktop ? variants(1).desktop : variants(1).mobile} 
            animate={ isOpen ? "show" : "hidden" }>History</motion.li>
        <motion.li className={styles["nav-item"]} initial={ "hidden" } variants={isDesktop ? variants(2).desktop : variants(2).mobile} 
            animate={ isOpen ? "show" : "hidden" }>Works</motion.li>
        <motion.li className={styles["nav-item"]} initial={ "hidden" } variants={isDesktop ? variants(3).desktop : variants(3).mobile} 
            animate={ isOpen ? "show" : "hidden" }>Contact</motion.li>
    </>)
}

const Icons = ({ isOpen, isDesktop }) => {
    const variants = {
        desktop: {
            hidden: { y: "-50%", opacity: 0, transition: { duration: .25 }},
            show: { y: "0%", opacity: 1, transition: { delay: 2.9 + (showDelay * 4), duration: .5 }}
        },
        mobile: {
            hidden: { x: "5%", opacity: 0, transition: { duration: .25 }},
            show: { x: "0%", opacity: 1, transition: { delay: 0.1 + (showDelay * 5), duration: .25 }}
        }
    }

    return (<li className={ styles.flex }>
        <motion.ul className={ styles.flex } initial={ "hidden" } variants={isDesktop ? variants.desktop : variants.mobile} animate={ isOpen ? "show" : "hidden" }>
            <li className={styles["nav-icon"]}><BsGithub /></li>
            <li className={styles["nav-icon"]}><BsLinkedin /></li>
        </motion.ul>
    </li>)
}

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const isSticky = useScrollDirection() <= 0

    const variants = {
        open: { transform: "translateX(0%)", opacity: 1, transition: { duration: .25 } },
        closed: { transform: "translateX(100%)", opacity: 0, transition: { duration: .25 } }
    }

    return (
        <>
            <nav className={`
                ${styles.container}
                ${isSticky ? styles["visible-container"] : styles["hide-container"]}
            `}>
                <div className={styles["logo-container"]}>
                    <Logo />
                </div>
                <div className={styles["links-container"]}>
                    <Burger isOpen={ open } onClick={() => { setOpen(current => !current)}} />
                    <ul className={styles["nav-desktop-items"]}>
                        <Links isOpen={ true } isDesktop={ true } />
                        <Icons isOpen={ true } isDesktop={ true } />
                    </ul>
                    <motion.div
                        initial={ "closed" }
                        variants={ variants }
                        animate={ open ? "open" : "closed" }
                        className={ styles["nav-mobile-wrapper"] }
                    >
                        <ul className={ styles["nav-mobile-items"] }>
                            <Links isOpen={ open } isDesktop={ false }/>
                            <div className={styles["mobile-icons-container"]}>
                                <Icons isOpen={ open } isDesktop={ false }/>
                            </div>
                        </ul>
                    </motion.div>
                </div>
            </nav>
        </>
    )
}

export default Navbar