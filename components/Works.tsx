import React from 'react'
import styles from '../styles/Works.module.css'
import Work from './work'

const Works = () => {
    return (
        <section className={styles["container"]}>
            <Work
                name='Mindsteroid' 
                description='A project whose purpose is to facilitate and optimize the study process, achieving better results with less time spent'
                technologies={['MongoDB', 'Express', 'React', 'Node.js']} 
                img='/static/images/mindsteroid.png' imgWidth={960} imgHeight={447}
                github='https://github.com/inmortalkaktus/mindsteroid' 
                link='https://mindsteroid.com' 
                isLeft={ true } 
            />
            <hr />
            <Work
                name='Gatsby Blog Theme' 
                description='A simple yet complete Gatsby blog theme focused on maximum SEO optimization. It features i18n, article creation from Markdown, and a set of components such as article tables.'
                technologies={['Gatsby', 'React', 'Node.js', 'Styled Components']} 
                img='/static/images/blog-theme.png' imgWidth={761} imgHeight={619}
                github='https://github.com/inmortalkaktus/blog-theme/' 
                link='https://starter-blog-ik.netlify.app/en-US/' 
                isLeft={ false } 
            />
            <hr />
            <Work
                name='SafeSnipe' 
                description='This was my first project with React. It collects data from a website through web scraping, filters it and inserts it into a database, to later display it visually in the application with React. There are many things that could be improved in this project.'
                technologies={['MongoDB', 'React', 'Node.js', 'Puppeteer']} 
                img='/static/images/safesnipe.png' imgWidth={1332} imgHeight={882}
                github='https://github.com/inmortalkaktus/SafeSnipe' 
                isLeft={ true } 
            />
        </section>
    )
}

export default Works