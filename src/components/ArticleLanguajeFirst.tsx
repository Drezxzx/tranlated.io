
import Copy from '../assets/Copy.svg'
import Alpha from '../assets/Sort_alfa.svg'
import xlogo from '../assets/x.svg'
import { OHTHERLANGUAJES } from '../service/lenguaje.ts'
import down from '../assets/Expand_down.svg'
import { LENGUAJES } from '../service/lenguaje.ts'
import { useHandles } from '../service/handles.ts'
import { useEffect, useRef, useState } from 'react'
export interface translte {
    name: string;
    code: string;
    emoji: string;
  }

export default function ArticleLanguajeFirst() {
    const liref = useRef<HTMLLIElement | null>(null)
    const [hidden, setHidden] = useState<boolean>(true)
    const [languajeText, setLanguajeText] = useState<string | undefined>("de")
    const [newlanguajeSent, setLanguajeSetn] = useState<translte>()
    
    const {handleLenguajeSent, languaje, handleLength, handleCopy, copyClicked, disable, handleTranslate } = useHandles()
    console.log(disable);
    
    useEffect(() => {
        const [deucht] = OHTHERLANGUAJES.filter(leng => leng.code === languajeText)
        console.log(deucht);
        setLanguajeSetn(deucht)
      }, [languajeText])
      
    const handleClose = () => {
        setHidden(!hidden)
      }
      const handleOthersLanguaje = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        // liref.current.innerHTML = element.innerHTML
        
        const id = element.closest("li")?.id
        console.log(id);
        
          //   setLanguajeRes(element.id)
            setLanguajeText(id)
          
      
          handleClose()
      };
      const Button = () =>{
        if (hidden) {
          return (<button onClick={handleClose} className=' hover:scale-110  transition z-50  '><img className='hover:scale-125 size-6 cursor-pointer' onClick={handleClose} src={down}/></button>)
        }
        return (<button onClick={handleClose} className=' hover:scale-110 transition z-50  '><img src={xlogo} /></button>)
      }
    return(
        
    )
}

