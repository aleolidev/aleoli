import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/content'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Content />
            </div>
        </>
    )
}
