
import {translate} from './service.ts'
import { OHTHERLANGUAJES } from './lenguaje.ts'
import React, { ChangeEvent, useState } from 'react'
import {useStore} from '../context/GlobalStateContext.ts'
export function useHandles() {
    const [languaje, setLanguaje] = useState<string | undefined>("")
    const [languajeText, setLanguajeText] = useState<string | undefined>("de")
    const [languajeText2, setLanguajeText2] = useState<string | undefined>("de")
    const [languajeRes, setLanguajeRes] = useState<string | undefined >("")
    const [text, setText] = useState<string>("")
    const [response, setResponse] = useState<string>("")
    const [length, setLength] = useState<number>(0)
    const {setFirst, setSecond, first, second} =useStore((state) => state)
    const [copyClicked, setCopyClicked] = useState<boolean>(false)
    const [copyClicked2, setCopyClicked2] = useState<boolean>(false)

    console.log({first, second});
    
    
    const handleLength = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
        setLength(e.target.value.length)
      }
      const handleLenguajeSent = (e:React.MouseEvent<HTMLElement, MouseEvent>) =>{
        const code = e.currentTarget.id
        setFirst(code)
      }
    
      const handleLenguajeRes = (e:React.MouseEvent<HTMLElement, MouseEvent>)=>{
        const code = e.currentTarget.id
       
        
        setSecond(code)
      }
    
    
      const handleCopy = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        navigator.clipboard.writeText(text)
        setCopyClicked(true)
        setTimeout(() => {
          setCopyClicked(false)
        }, 1000)
      }
      const handleCopyResponse = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        navigator.clipboard.writeText(response)
        setCopyClicked2(true)
        setTimeout(() => {
          setCopyClicked2(false)
        }, 1000)
      }
    
      const handleTranslate = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        const data = await translate({text, code1 : first, code2 : second})
        if (data) {
          setResponse(data)
        }
          setResponse("Traducionendo...")
        
        
      }
      const handleChange =   () => {
        const firstlan = first 
        const secondlan = second
        const lasttext = text
        if (response.length > 0) {
          const lastresponse = response
          setText(lastresponse)
        }
        setResponse(lasttext)
        setFirst(secondlan)
        setSecond(firstlan)
        const isin = OHTHERLANGUAJES.find(leng => leng.code === first )
        const seconds = OHTHERLANGUAJES.find(leng => leng.code === second )
        if (isin) {
          setLanguajeText2(isin.code)
        }
        if (seconds) {
          setLanguajeText(seconds.code)
        } 
        console.log({isin, seconds});
        
      }
      const disable = first.length >0  && second.length>0 ? false : true

      return {first, languajeText, languajeText2,setFirst, setSecond, second,handleLength,OHTHERLANGUAJES, handleLenguajeSent, setLanguajeText, setLanguajeText2, handleLenguajeRes, handleCopy, handleCopyResponse, setLanguajeRes, copyClicked2, setCopyClicked2, setLanguaje, handleTranslate,handleChange, languaje, languajeRes, response, text, length, copyClicked, disable}
}



