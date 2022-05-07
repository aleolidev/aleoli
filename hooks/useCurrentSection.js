import { useEffect, useState, useRef } from "react"
import useScrollDirection from "./useScrollDirection";

const useCurrentSection = (sections) => {
    const [currentSection, setCurrentSection] = useState();
    const scrollDirection = useScrollDirection();
    
    const currentIndex = useRef(0);
    
    useEffect(() => {
        const updateSection = () => {
            let lastIndex = currentIndex.current

            sections.map((section, i) => {
                const rect = section.current.getBoundingClientRect()
                const offset = section.current.clientHeight / 3;
                if (scrollDirection > 0 && i > currentIndex.current) {
                    if (rect.top <= offset && rect.bottom < (window.innerHeight + offset)) {
                        setCurrentSection(section);
                        lastIndex = i;
                    }
                }  else if (scrollDirection < 0 && i <= currentIndex.current) {
                    if (rect.top <= (offset * 2) && rect.bottom < (window.innerHeight + (offset * 2))) {
                        setCurrentSection(section);
                        lastIndex = i;
                    }   
                }
            })

            currentIndex.current = lastIndex
        }
        window.addEventListener("scroll", updateSection);
        updateSection();
        return () => window.removeEventListener("scroll", updateSection);
    }, [scrollDirection]);
        
    return currentSection
};
  
export default useCurrentSection;