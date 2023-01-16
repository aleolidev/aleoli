import { useEffect, useState, useRef } from "react"

const useVisibility = (handler, listen) => {
    const ref = useRef(null);
    const [closed, setClosed] = useState(false);
  
    const handleEscape = (event) => {
        if (listen && event.key === "Escape") {
            handler()
            setClosed(true);
        } else {
            setClosed(false);
        }
    };
  
    const handleClick = event => {
        if (listen && ref.current && !ref.current.contains(event.target)) {            
            handler()
            setClosed(true);
        } else {
            setClosed(false);
        }
    };
  
    useEffect(() => {
        document.addEventListener("keydown", handleEscape, true);
        document.addEventListener("click", handleClick, true);
        
        return () => {
            document.removeEventListener("keydown", handleEscape, true);
            document.removeEventListener("click", handleClick, true);
        };
    });
  
    return { ref, closed };
  }

  export default useVisibility;