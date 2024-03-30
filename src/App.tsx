import background from './assets/hero_img.jpg'
import Copy from './assets/Copy.svg'
import Alpha from './assets/Sort_alfa.svg'
import {IconChevronUp, IconChevronDown} from '@tabler/icons-react'
import change from './assets/Horizontal_top_left_main.svg'
import logo from './assets/logo.svg'
import React, { useState, useRef, useEffect } from 'react'
import down from './assets/Expand_down.svg'
import { LENGUAJES } from './service/lenguaje.ts'
import { useHandles } from './service/handles.ts'

import './App.css'
export interface translte {
  name: string | undefined;
  code: string | undefined;
  emoji: string | undefined;
}
function App() {
  const [hidden, setHidden] = useState<boolean>(true)
  const [hidden2, setHidden2] = useState<boolean>(true)
  const [newlanguajeSent, setLanguajeSetn] = useState<translte>()
 
  const [newLanguaje, setNewLanguaje] = useState<translte>()
  const liref = useRef<HTMLLIElement | null>(null)
  const { response, length, copyClicked, handleCopy, handleLenguajeSent, handleLenguajeRes, handleChange, first, second, OHTHERLANGUAJES, text, languajeText, languajeText2, setFirst, setSecond,  handleCopyResponse, handleLength, handleTranslate, disable, copyClicked2, setLanguajeText, setLanguajeText2 } = useHandles()

  useEffect(() => {
 
  
    const [selectedLanguajeSent] = OHTHERLANGUAJES.filter(leng => leng.code === languajeText);
    console.log(selectedLanguajeSent);
    
    setLanguajeSetn(selectedLanguajeSent);
  }, [languajeText]);
  
  useEffect(() => {

    const [selectedLanguajeRes] = OHTHERLANGUAJES.filter(leng => leng.code === languajeText2);
    console.log(selectedLanguajeRes);
    
    setNewLanguaje(selectedLanguajeRes);
  }, [languajeText2]);
  
 
  console.log(copyClicked);
  
  const handleOthersLanguajeFirst = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const element = e.target as HTMLElement;
    // liref.current.innerHTML = element.innerHTML
    
    const id = element.closest("li")?.id

      //   setLanguajeRes(element.id)
        setLanguajeText(id)
        if (id) {
          setFirst(id)
        }
      
  
      handleClose2()
  };
  const handleOthersLanguajeSecond = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const element = e.target as HTMLElement;
    // liref.current.innerHTML = element.innerHTML
    const id = element.closest("li")?.id
    console.log(id);
      //   setLanguajeRes(element.id)
        setLanguajeText2(id)
        if (id) {
          setSecond(id)
        }
  
      handleClose()
  };

  // console.log({ languajeRes, newLanguaje });

  const handleClose = () => {
    setHidden(!hidden)
  }
  const handleClose2 = () => {
    setHidden2(!hidden2)
  }

  const Button = () =>{
    if (hidden) {
      return (<button onClick={handleClose} className=' hover:scale-110  transition z-50  '><IconChevronDown></IconChevronDown></button>)
    }
    return (<button onClick={handleClose} className=' hover:scale-110 transition z-50  '><IconChevronUp></IconChevronUp></button>)
  }
  const Button2 = () =>{
    if (hidden2) {
      return (<button onClick={handleClose2} className=' hover:scale-110  transition z-50  '><IconChevronDown></IconChevronDown></button>)
    }
    return (<button onClick={handleClose2} className=' hover:scale-110 transition z-50  '><IconChevronUp></IconChevronUp></button>)
  }

  return (
    <>
      <img src={background} className='w-full absolute -z-10' alt="" />
      <main className='flex w-full h-full items-center relative  justify-center flex-col'>
        <h1 className='text-white absolute top-0  md:top-28 '><img src={logo} /></h1>
        <section className='flex flex-col lg:flex-row md:flex-col w-full h-full justify-center gap-5 items-center dm-sans'>
        <article className='w-[95%] md:w-[90%] z-10 animate-fade-in-down relative bg-[#121826cc] rounded-xl backdrop-blur-sm flex flex-col gap-4 border-2 border-[#363f4dce] lg:w-1/3 h-[20rem] md:h-[19rem]  p-3'>
        <header className='flex gap-2 text-[#656b76] h-fit border-b border-[#363f4dce] pb-4 text-base font-semibold'>
          <ul className='flex justify-between w-full'>
            {LENGUAJES.map((leng, index) => (
              <li onClick={handleLenguajeSent} className={`hover:bg-[#4D5562] ${first === leng.code ? "bg-[#4D5562] text-[#F9FAFB]" : ""}  cursor-pointer px-1 py-2 rounded-lg hover:text-[#F9FAFB]`} id={leng.code} key={index}> <span>{leng.name}</span>{leng.emoji}</li>
            ))}

            {
            newlanguajeSent && <><li ref={liref} onClick={handleLenguajeSent} id={newlanguajeSent.code} className={`hover:bg-[#4D5562] ${first === newlanguajeSent.code ? "bg-[#4D5562] text-[#F9FAFB]" : ""}  cursor-pointer px-1 py-2 rounded-lg hover:text-[#F9FAFB]`}><span>{newlanguajeSent.name}</span>{newlanguajeSent.emoji}</li> <Button2></Button2></>}
          </ul>
        </header>
        <ul className={`lg:bg-[#121826c4] bg-[#121826] animate-fade-in-down animate-duration-300 transition ${hidden2 ? "hidden" : "grid"}   backdrop-blur-xl inset-0 top-14 z-40 justify-center  w-full h-fit text-[#F9FAFB] grid grid-cols-3 md:grid-cols-4 gap-4 absolute  rounded-xl p-3`}>
              
              {
                OHTHERLANGUAJES.map((leng, index) => (
                  <li className={`hover:bg-[#4D5562]  flex items-center gap-1 z-40 ${first === leng.code ? "bg-[#4D5562] text-[#F9FAFB]" : ""}  cursor-pointer px-1 py-1 w-28 rounded-lg hover:text-[#F9FAFB]`} onClick={handleOthersLanguajeFirst} key={index} id={leng.code}>
                    <span>{leng.name}</span> {leng.emoji}
                  </li>
                ))
              }
            </ul>
        <main>
          <form className='relative'>
            <textarea value={text} onChange={handleLength} maxLength={500} placeholder='Introduce texto aquí' className='w-full bg-transparent text-[#F9FAFB] font-semibold focus:outline-none max-h-36 resize-none' rows={7}></textarea>
            <div className='flex justify-between items-center w-full'>
              <button onClick={handleCopy} className={`px-2 py-2 border-4 border-[#363f4dce]  hover:scale-105 transition rounded-xl ${copyClicked ? ' hover:border-[#29cd3c]  border-[#29cd3c]  ' : ''}`}><img src={Copy} /></button>
              <span className='text-[#656b76] font-semibold text-sm'>{length}/500</span>
              <button  onClick={handleTranslate} className={`flex gap-1 justify-center ${disable ? "opacity-20 hover:bg-[#3662E3]" : ""} items-center px-5 py-3 rounded-2xl border border-[#F9FAFB] bg-[#3662E3] hover:bg-[#7CA9F3] transition text-[#F9FAFB] text-base font-semibold`}><img src={Alpha} />Traducir</button>
            </div>
          </form>
        </main>
      </article>

          <article className={`w-[95%] ${hidden2 ? "" : "md:blur-3xl lg:blur-0 blur-3xl"} md:w-[90%] animate-fade-in-down bg-[#121826cc] rounded-xl backdrop-blur-sm flex flex-col gap-4 border-2 border-[#363f4dce] lg:w-1/3 transition  h-[20rem] md:h-[19rem] p-3`}>
            <header className='flex  gap-2 text-[#656b76] h-fit border-b border-[#363f4dce] pb-4 text-base font-semibold'>
              <ul className='flex justify-between w-full items-center'>
                {LENGUAJES.map((leng, index) => (
                  <li onClick={handleLenguajeRes} id={leng.code} className={`hover:bg-[#4D5562] cursor-pointer transition px-1 py-2 ${second === leng.code ? "bg-[#4D5562] text-[#F9FAFB]" : ""}  rounded-lg hover:text-[#F9FAFB]`} key={index}><span>{leng.name}</span> {leng.emoji}</li>
                ))}

                {newLanguaje && <><li ref={liref} onClick={handleLenguajeRes} id={newLanguaje.code} className={`hover:bg-[#4D5562] ${second === newLanguaje.code ? "bg-[#4D5562] text-[#F9FAFB]" : ""}  cursor-pointer px-1 py-2 rounded-lg hover:text-[#F9FAFB]`}><span>{newLanguaje.name}</span> {newLanguaje.emoji}</li> <Button></Button></>}


              </ul>
             
            </header>
            <ul className={`bg-[#121826c4] animate-fade-in-down animate-duration-300 transition ${hidden ? "hidden" : "grid"}   backdrop-blur-xl inset-0 top-14 z-40 justify-center  w-full h-fit text-[#F9FAFB]  grid-cols-3 md:grid-cols-4 gap-4 absolute  rounded-xl p-3`}>
              
              {
                OHTHERLANGUAJES.map((leng, index) => (
                  <li className={`hover:bg-[#4D5562] flex items-center gap-1 z-40 ${second === leng.code ? "bg-[#4D5562] text-[#F9FAFB]" : ""}  cursor-pointer px-1 py-1 w-28 rounded-lg hover:text-[#F9FAFB]`} onClick={handleOthersLanguajeSecond} key={index} id={leng.code}>
                    <span>{leng.name}</span> {leng.emoji}
                  </li>
                ))
              }
            </ul>
            <main>

              <form className='relative'>
                <textarea value={response} placeholder='Selecciona el idioma al que quieres traducir' disabled className='w-full bg-transparent  text-[#F9FAFB] font-semibold focus:outline-none max-h-36 resize-none' rows={7}></textarea>
                <div className='flex justify-between items-center w-full'>
                  <button onClick={handleCopyResponse} className={`px-2 py-2 border-4 border-[#363f4dce]  hover:scale-105 transition rounded-xl ${copyClicked2 ? ' hover:border-[#29cd3c] border-[#29cd3c] ' : ''}`}><img src={Copy} /></button>
                  <button onClick={handleChange} className='px-2 py-2  z-50   border-4 border-[#363f4dce] hover:border-[#4D5562] hover:scale-105 transition rounded-xl'><img className='' src={change} alt="" /></button>
                </div>
              </form>
            </main>
          </article>
        </section>
      </main>

    </>
  )
}

export default App
