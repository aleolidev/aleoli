import {useState} from 'react'
import useScrollDirection from "../hooks/useScrollDirection";
import styles from '../styles/Navbar.module.css'
import { BsGithub, BsLinkedin } from "react-icons/bs"

const Links = () => {
    return (<>
        <li className={styles["nav-item"]}>About</li>
        <li className={styles["nav-item"]}>History</li>
        <li className={styles["nav-item"]}>Works</li>
        <li className={styles["nav-item"]}>Contact</li>
    </>)
}

const Icons = () => {
    return (<>
        <li className={styles["nav-icon"]}><BsGithub /></li>
        <li className={styles["nav-icon"]}><BsLinkedin /></li>
    </>)
}

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const isSticky = useScrollDirection() <= 0

    return (
        <>
            <nav className={`
                ${styles.container}
                ${isSticky ? styles["visible-container"] : styles["hide-container"]}
            `}>
                <div className={styles["logo-container"]}>
                    {/* Logo */}
                </div>
                <div className={styles["links-container"]}>
                    <button className={styles["button-wrapper"]} onClick={() => { setOpen(current => !current) }}>
                        <span className={styles["links-button"]} />
                        <span className={styles["links-button"]} />
                        <span className={styles["links-button"]} />
                    </button>
                    <ul className={styles["nav-desktop-items"]}>
                        <Links />
                        <Icons />
                    </ul>
                    <ul className={`${styles["nav-mobile-wrapper"]} ${ open ? styles["wrapper-open"] : ""}`}>
                        <div className={`${styles["nav-mobile-items"]} ${ open ? styles["menu-open"] : "" }`}>
                            <button className={styles["close-nav"]} onClick={() => { setOpen(current => !current) }}/>
                            <Links />
                            <div className={styles["mobile-icons-container"]}>
                                <Icons />
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar