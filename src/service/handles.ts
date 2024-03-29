
import {translate} from './service.ts'
import React, { ChangeEvent, useState } from 'react'

export function useHandles() {
    const [languaje, setLanguaje] = useState<string>("")
    const [languajeRes, setLanguajeRes] = useState<string>("")
    const [text, setText] = useState<string>("")
    const [response, setResponse] = useState<string>("")
    const [length, setLength] = useState<number>(0)
    const [copyClicked, setCopyClicked] = useState<boolean>(false)

    const handleLength = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
        setLength(e.target.value.length)
      }
      const handleLenguajeSent = (e:React.MouseEvent<HTMLElement, MouseEvent>) =>{
        const code = e.currentTarget.id
        setLanguaje(code)
      }
    
      const handleLenguajeRes = (e:React.MouseEvent<HTMLElement, MouseEvent>)=>{
        const code = e.currentTarget.id
        setLanguajeRes(code)
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
        setCopyClicked(true)
        setTimeout(() => {
          setCopyClicked(false)
        }, 1000)
      }
    
      const handleTranslate = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        const data = await translate({text, code1 : languaje, code2 : languajeRes})
        if (data) {
          setResponse(data)
        }
      }
      const handleChange =   () => {
        const firstlan = languaje 
        const secondlan = languajeRes
        setLanguaje(secondlan)
        setLanguajeRes(firstlan)
      }
      const disable = languaje.length > 0 && languajeRes.length > 0 && text.length > 0 ? false : true

      return {handleLength, handleLenguajeSent, handleLenguajeRes, handleCopy, handleCopyResponse, handleTranslate,handleChange, languaje, languajeRes, response, length, copyClicked, disable}
}

