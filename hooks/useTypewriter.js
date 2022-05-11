import { useEffect, useState, useRef } from "react"

const useTypewritter = (toWrite) => {
    const [text, setText] = useState('')
    const [index, setIndex] = useState(0)
    const [write, setWrite] = useState(toWrite)
    const [final, setFinal] = useState([''])
    const [isErasing, setIsErasing] = useState(false)
    const [finishedWriting, setFinishedWriting] = useState(false)

    const setWords = (word) => {
        setText(word)

        let finalArr = final
        finalArr[finalArr.length - 1] = word
        setFinal(finalArr)
    }
    
    useEffect(() => {
        setTimeout(() => {
            if (index < write.length) {
                if (!isErasing) {
                    if (text.length < write[index].words[0].length) {
                        setWords(text + write[index].words[0][text.length])
                    } else {
                        setIsErasing(true)
                    }
                } else {
                    let writeArr = write
                    let writeSubarr = write[index].words
                    
                    const nextString = 
                        write[index].words[1] ? write[index].words[1] :
                        write[index + 1]?.words[0] ? write[index + 1].words[0] : null
                         
                    if (text.length > 0 && writeSubarr.length > 1 && 
                        // If the string being erased is equal at some point to the next one, stop erasing
                        (nextString ? !nextString.startsWith(text) : true)   
                    ) {
                        setWords(text.slice(0, -1))
                    } else {
                        if (nextString?.startsWith(text) && text.length > 0) {
                            if (Boolean(write[index].words[1])) {
                                write[index].words[1] = nextString.slice(text.length)
                            } else if (Boolean(write[index + 1]?.words[0])) {
                                write[index + 1].words[0] = nextString.slice(text.length)
                            }
                        }

                        if (text.length > 0) {
                            let finalArr = final
                            writeSubarr.shift()
                            finalArr.push('')
                            setFinal(finalArr)
                            setText('')
                        } else {
                            writeSubarr.shift()
                        }
        
                        if (write[index].words.length == 0 && write.length > 0) {
                            setIndex(current => current + 1)
                        }

                        writeArr[index].words = writeSubarr

                        setWrite(writeArr)
                        setIsErasing(false)
                    }
                }
            } else {
                setFinishedWriting(true)
            }
        }, isErasing ? write[index]?.eraseDelay : write[index]?.writeDelay)
      
    }, [text, isErasing]);
    
    return { final, finishedWriting };
}

export default useTypewritter;