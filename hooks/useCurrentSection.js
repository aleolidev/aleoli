import { useEffect, useState } from "react"
import useScrollDirection from "./useScrollDirection";

const useCurrentSection = (sections) => {
    const [currentSection, setCurrentSection] = useState();
    const scrollDirection = useScrollDirection();
    
    useEffect(() => {
        const updateSection = () => {
            sections.map((section, i) => {
                const rect = section.current.getBoundingClientRect()
                const offset = section.current.clientHeight / 3;
                if (scrollDirection > 0) {
                    if (rect.top <= offset && rect.bottom < (window.innerHeight + offset)) {
                        setCurrentSection(section);
                    }
                }  else if (scrollDirection < 0) {
                    if (rect.top <= (offset * 2) && rect.bottom < (window.innerHeight + (offset * 2))) {
                        setCurrentSection(section);
                    }   
                }
            })
        }
        window.addEventListener("scroll", updateSection);
        updateSection();
        return () => window.removeEventListener("scroll", updateSection);
    }, [scrollDirection]);
        
    return currentSection
};
  
export default useCurrentSection;