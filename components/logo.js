import React from 'react'
import { motion } from 'framer-motion'

const icon = {
    visible: {
        display: "block",
        pathLength: 1,
        fill: "rgba(50, 196, 146, 1)"
    }
}

const Logo = () => {
  return (
    <motion.svg
        width="50"
        height="50"
        viewBox="0 0 947.1 1049.3"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            d="M537.4,15,326,226.3,498.1,398.4V903.7L269,674.6h61.3V590.7H66.5L540,1064.3l473.5-473.6H749.7v83.9H811L581.9,903.7V393.1L748.7,226.3ZM444.6,226.3l92.8-92.7,92.7,92.7-92.7,92.8Z"
            variants={ icon }
            initial="visible"
        />
    </motion.svg>
  )
}

export default Logo