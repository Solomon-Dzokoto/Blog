import React, { createContext } from "react"
import { useState } from "react"
import { data,Props } from "../data/blogData";
import posts from "../data/blogData";

interface ContextProps{
    isOpen:boolean;
    setIsOpen:(isOpen:boolean)=>void
    posts: Props [];
    data: Props [];
    user: User | null;
    token:string | null;
    setUser : (user:User)=>void;
    clearUser : ()=>void;
}

interface User {
    id: string;
    Name: string;
    Email: string;
  }

const initialValue:ContextProps = {
    isOpen : false,
    setIsOpen : ()=>null,
    posts: posts,
    data:data,
    user:  null,
    setUser : ()=>null,
    token:null,
    clearUser : ()=>null,
}
export const context = createContext<ContextProps>(initialValue)
 
interface ProviderProps{
  children : React.ReactNode
}

const UseProvider = ({children}:ProviderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [user,setUser] = useState<User | null>(null)

   const clearUser = () => {
    setUser(null)
    localStorage.removeItem("user")
    localStorage.removeItem('token');
   }

    return (
        <context.Provider value={{isOpen,setIsOpen,posts,data,user,setUser,clearUser,token:null}}>
          {children}
        </context.Provider>
    )
}

export default UseProvider