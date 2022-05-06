import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <section className={styles["container"]}>
            <h1 className='text-7xl font-bold'>aleoli<span className={styles["color1"]}>.dev</span></h1>
            <h2 className={`${styles["color1"]} text-3xl`}>Alejandro Olivares</h2>
            <p className={styles["gray-color"]}>Sed commodo diam nonumy nonumy ut aliquam dolores feugiat. Vel molestie suscipit stet gubergren gubergren kasd invidunt vulputate nonumy sea duis et et eirmod amet. Et illum aliquyam aliquip voluptua quis rebum. Iusto ex lorem accusam. Duo stet dolor at sadipscing eos vero nonummy sed no autem et id takimata sanctus stet et dolore. Eirmod voluptua velit et nobis praesent tempor diam sed stet takimata gubergren dolore sed.</p>
        </section>
    )
}

export default About