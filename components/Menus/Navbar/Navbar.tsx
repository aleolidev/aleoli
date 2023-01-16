import {useState} from 'react'
import { motion } from 'framer-motion';
import useScrollDirection from "../../../hooks/useScrollDirection";
import styles from '../../../styles/Navbar.module.css'
import Logo from '../../Logo/Logo';
import Burger from '../../Buttons/Burger';
import Links from './Links';
import Icons from '../../Icons/Icons';

const showDelay = 0.05

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const isSticky = useScrollDirection() <= 0

    const variants = {
        open: { transform: "translateX(0%)", opacity: 1, transition: { duration: .25 } },
        closed: { transform: "translateX(100%)", opacity: 0, transition: { duration: .25 } }
    }

    const alphaVariants = {
        hide: { opacity: 0, transition: { duration: .25 } },
        visible: { opacity: .4, transition: { duration: .25 } }
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
                        <Links isOpen={ true } isDesktop={ true } setIsOpen={ setOpen } showDelay={ showDelay }/>
                        <Icons isOpen={ true } isDesktop={ true } showDelay={ showDelay }/>
                    </ul>
                    <motion.div
                        initial={ "closed" }
                        variants={ variants }
                        animate={ open ? "open" : "closed" }
                        className={ styles["nav-mobile-wrapper"] }
                    >
                        <ul className={ styles["nav-mobile-items"] }>
                            <Links isOpen={ open } setIsOpen={ setOpen } isDesktop={ false } showDelay={ showDelay }/>
                            <div className={styles["mobile-icons-container"]}>
                                <Icons isOpen={ open } isDesktop={ false } showDelay={ showDelay }/>
                            </div>
                        </ul>
                    </motion.div>
                    { open && 
                        <motion.div className={ styles["alpha-container"] } 
                            initial={ "hide" }
                            variants={ alphaVariants }
                            animate={ open ? "visible" : "hide"}
                            onClick={ () => setOpen(current => !current) }
                        />
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar