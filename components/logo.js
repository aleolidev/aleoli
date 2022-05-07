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
        viewBox="0 0 444.9 445.5"
        xmlns="http://www.w3.org/2000/svg"
    >
        <motion.path
            d="M221.1,223.8C220.7,223.5,1.2,444.9,0,444.9l444.2.6L444.9,0C444.9-1.1,220.7,223.5,221.1,223.8Z"
            variants={ icon }
            initial="visible"
        />
    </motion.svg>
  )
}

export default Logo