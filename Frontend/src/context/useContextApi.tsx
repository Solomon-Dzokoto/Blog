import { createContext } from "react"
import { useState } from "react"
import { data, Props } from "../data/blogData";
import posts from "../data/blogData";
import { useUserStore } from "../store/useUserStore";
import { PostProps } from "../server/AuthCheck";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void
  data: Props[];
  search: string;
  setSearch: (search: string) => void
  filteredSearch: Props[] | null;
  filteredPost: Props[];
}



const initialValue: ContextProps = {
  isOpen: false,
  setIsOpen: () => null,
  data: data,
  setSearch: () => null,
  search: "",
  filteredSearch: data,
  filteredPost: posts,
}
export const context = createContext<ContextProps>(initialValue)

interface ProviderProps {
  children: React.ReactNode
}

const UseProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const posts = useUserStore((state) => state.posts)
  const dataValue = [ ...posts as PostProps[],...data ]

  


  return (
    <context.Provider value={{ isOpen, setIsOpen, data, search, setSearch, filteredPost : dataValue, filteredSearch: data }}>
      {children}
    </context.Provider>
  )
}

export default UseProvider
