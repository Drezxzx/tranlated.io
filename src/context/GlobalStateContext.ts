import { create } from 'zustand'

interface languajes {
  first : string , 
  second : string,
  setFirst :  (newlanguaje : string) => void,
  setSecond : (newlanguaje : string) => void
}
export const useStore = create<languajes>((set) => ({
  first : "", 
  second : "",
  setFirst : (newlanguaje : string ) => set({ first : newlanguaje }),
  setSecond : (newlanguaje : string ) => set({ second : newlanguaje })
}))