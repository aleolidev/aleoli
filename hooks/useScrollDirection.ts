import { useEffect, useState } from "react"

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState(null)
    const [prevOffset, setPrevOffset] = useState(0)
    const toggleScrollDirection = () => {
       let scrollY = window.scrollY
       if (scrollY === 0) {
           setScrollDirection(null)
       }
       if (scrollY > prevOffset) {
           setScrollDirection(1)
       } else if (scrollY < prevOffset) {
           setScrollDirection(-1)
       }
       setPrevOffset(scrollY)
    }
    useEffect(() => {
        window.addEventListener("scroll", toggleScrollDirection)
        return () => {
            window.removeEventListener("scroll", toggleScrollDirection)
        }
    })
    return scrollDirection
}

export default useScrollDirection;