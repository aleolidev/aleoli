import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({  }) => {
    
    return (
        <Helmet>
            <title>Alejandro Olivares — Frontend Developer</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            <link rel="shortcut icon" href="/favicon.ico" />
        </Helmet>
    )
}

export default SEO;