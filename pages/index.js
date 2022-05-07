import React, { useState } from 'react'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/content'
import Navbar from '../components/navbar'
import SEO from '../components/SEO'
import styles from '../styles/Home.module.css'
import Loader from '../components/loader'

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
