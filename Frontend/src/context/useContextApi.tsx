import { createContext } from "react"
import { useState } from "react"
import { data, Props } from "../data/blogData";
import { posts as defaultPosts } from "../data/blogData";
import { useUserStore } from "../store/useUserStore";
import { PostProps } from "../server/AuthCheck";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void
  data: Props[];
  search: string;
  setSearch: (search: string) => void
  filteredSearch: Props[] | null;
  filteredPost: Props[] | PostProps[];
}



const initialValue: ContextProps = {
  isOpen: false,
  setIsOpen: () => null,
  data: data,
  setSearch: () => null,
  search: "",
  filteredSearch: data,
  filteredPost: defaultPosts,
}
export const context = createContext<ContextProps>(initialValue)

interface ProviderProps {
  children: React.ReactNode
}

const UseProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const posts = useUserStore((state) => state.posts)

  const additionalPosts = posts ? [...posts as PostProps[], ...defaultPosts] : defaultPosts

  console.log("dataValue", additionalPosts)
  console.log("data", data)


  return (
    <context.Provider value={{ isOpen, setIsOpen, data, search, setSearch, filteredPost:additionalPosts , filteredSearch: data }}>
      {children}
    </context.Provider>
  )
}

export default UseProvider
