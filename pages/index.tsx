import React, { useState } from 'react'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/Home/Content/Content'
import Navbar from '../components/Home/Menus/Navbar/Navbar'
import SEO from '../components/Home/SEO/SEO'
import styles from '../styles/Home.module.css'
import Loader from '../components/Home/Loader/Loader'

export default function Home() {
    const [ loading, setLoading ] = useState(true)

    return (
        <>
            <SEO />
            <AnimatePresence>
                {
                    loading ?
                        <Loader setLoading={ setLoading } />
                    :
                    <>
                        <Navbar />
                        <div className={styles.container}>
                            <Content />
                        </div>
                    </>
                }
            </AnimatePresence>
        </>
    )
}
