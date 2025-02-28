import { createContext, useEffect } from "react"
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
  filteredSearch: (Props | PostProps)[] | null;
  filteredPost: (Props | PostProps)[];
}



const initialValue: ContextProps = {
  isOpen: false,
  setIsOpen: () => null,
  data: data,
  setSearch: () => null,
  search: "",
  filteredSearch: defaultPosts,
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
  const [filteredSearch,setFilteredSearch] = useState<(Props | PostProps)[] | null>(null)

  const additionalPosts: Props[] = posts ? [...posts.map(post => ({ ...post, date: post.date?.toString() })) as Props[], ...defaultPosts] : defaultPosts

  useEffect(()=>{
    if(search){
      const filtered = additionalPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
      setFilteredSearch(filtered)
    }else{
      setFilteredSearch(additionalPosts)
    }
 
  },[search])

  return (
    <context.Provider value={{ isOpen, setIsOpen, data, search, setSearch, filteredPost: additionalPosts, filteredSearch: filteredSearch || additionalPosts }}>
      {children}
    </context.Provider>
  )
}

export default UseProvider
