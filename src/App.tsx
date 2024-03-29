import background from './assets/hero_img.jpg'
import Copy from './assets/Copy.svg'
import Alpha from './assets/Sort_alfa.svg'
import change from './assets/Horizontal_top_left_main.svg'
import logo from './assets/logo.svg'
import {useHandles} from './service/handles.ts'

import './App.css'

function App() {
  const LENGUAJES = [
    {
      name: "Español",
      code: "es",
      emoji: "🇪🇸"
    },
    {
      name: "Inglés",
      code: "en",
      emoji: "🇬🇧"
    },
    {
      name: "Francés",
      code: "fr",
      emoji: "🇫🇷"
    }
  ]

  const {languaje, languajeRes, response, length, copyClicked, handleCopy, handleLenguajeSent, handleLenguajeRes,handleChange, handleCopyResponse, handleLength, handleTranslate, disable} = useHandles()
 
  return (
    <>
      <img src={background} className='w-full absolute -z-10' alt="" />
    <main className='flex w-full h-full items-center relative  justify-center flex-col'>
      <h1 className='text-white absolute top-0  md:top-28 '><img src={logo} /></h1>
      <section className='flex flex-col lg:flex-row md:flex-col w-full h-full justify-center gap-5 items-center dm-sans'>
        <article className='w-[90%] md:w-[90%] animate-fade-in-down bg-[#121826cc] rounded-xl backdrop-blur-sm flex flex-col gap-4 border-2 border-[#363f4dce] lg:w-1/3 h-[19rem] p-3'>
          <header className='flex gap-2 text-[#656b76] h-fit border-b border-[#363f4dce] pb-4 text-base font-semibold'>
            <ul className='flex justify-between w-full'>
              {LENGUAJES.map((leng, index) => (
                <li onClick={handleLenguajeSent} className={`hover:bg-[#4D5562] ${languaje === leng.code ? "bg-[#4D5562] text-[#F9FAFB]" : ""}  cursor-pointer px-1 py-2 rounded-lg hover:text-[#F9FAFB]`} id={leng.code} key={index}>{leng.name} {leng.emoji}</li>
              ))}
            </ul>
          </header>
          <main>
            <form className='relative'>
              <textarea onChange={handleLength} maxLength={500} placeholder='Introduce texto aquí' className='w-full bg-transparent text-[#F9FAFB] font-semibold focus:outline-none max-h-36 resize-none' rows={7}></textarea>
              <div className='flex justify-between items-center w-full'>
                <button onClick={handleCopy} className={`px-2 py-2 border-4 border-[#363f4dce] hover:border-[#4D5562] hover:scale-105 transition rounded-xl ${copyClicked ? ' hover:border-[#29cd3c] ' : ''}`}><img src={Copy} /></button>
                <span className='text-[#656b76] font-semibold text-sm'>{length}/500</span>
                <button disabled={disable} onClick={handleTranslate} className={`flex gap-1 justify-center ${disable ? "opacity-20 hover:bg-[#3662E3]" : ""} items-center px-5 py-3 rounded-2xl border border-[#F9FAFB] bg-[#3662E3] hover:bg-[#7CA9F3] transition text-[#F9FAFB] text-base font-semibold`}><img src={Alpha} />Traducir</button>
              </div>
            </form>
          </main>
        </article>
        
        <article className='w-[90%] md:w-[90%] animate-fade-in-down bg-[#121826cc] rounded-xl backdrop-blur-sm flex flex-col gap-4 border-2 border-[#363f4dce] lg:w-1/3 h-[19rem] p-3'>
          <header className='flex gap-2 text-[#656b76] h-fit border-b border-[#363f4dce] pb-4 text-base font-semibold'>
            <ul className='flex justify-between w-full'>
              {LENGUAJES.map((leng, index) => (
                <li onClick={handleLenguajeRes} id={leng.code} className={`hover:bg-[#4D5562] cursor-pointer transition px-1 py-2 ${languajeRes === leng.code ? "bg-[#4D5562] text-[#F9FAFB]" : ""}  rounded-lg hover:text-[#F9FAFB]`} key={index}>{leng.name} {leng.emoji}</li>
                ))}
            </ul>
                <button onClick={handleChange} className='px-2 py-2 border-4 border-[#363f4dce] hover:border-[#4D5562] hover:scale-105 transition rounded-xl'><img src={change} alt="" /></button>
          </header>
          <main>
            <form className='relative'>
              <textarea value={response} placeholder='Selecciona el idioma al que quieres traducir' disabled className='w-full bg-transparent text-[#F9FAFB] font-semibold focus:outline-none max-h-36 resize-none' rows={7}></textarea>
              <div className='flex justify-between items-center w-full'>
              <button onClick={handleCopyResponse} className={`px-2 py-2 border-4 border-[#363f4dce] hover:border-[#4D5562] hover:scale-105 transition rounded-xl ${copyClicked ? ' hover:border-[#29cd3c] ' : ''}`}><img src={Copy} /></button>
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
