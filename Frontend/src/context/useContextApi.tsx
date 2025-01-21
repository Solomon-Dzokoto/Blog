import React, { createContext } from "react"
import { useState } from "react"


interface ContextProps{
    isOpen:boolean;
    setIsOpen:(isOpen:boolean)=>void
}

const initialValue:ContextProps = {
    isOpen : false,
    setIsOpen : ()=>null
}
export const context = createContext<ContextProps>(initialValue)

interface ProviderProps{
  children : React.ReactNode
}

const UseProvider = ({children}:ProviderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <context.Provider value={{isOpen,setIsOpen}}>
          {children}
        </context.Provider>
    )
}

export default UseProvider