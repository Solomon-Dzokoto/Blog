import { createContext, useEffect } from "react"
import { useState } from "react"
import { data, Props } from "../data/blogData";
import posts from "../data/blogData";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void
  posts: Props[];
  data: Props[];
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  search: string;
  setSearch: (search: string) => void
  filteredSearch: Props[] | null;
  filteredPost: Props[];
}

interface User {
  id: string | number;
  Name: string;
  Email: string;
}

const initialValue: ContextProps = {
  isOpen: false,
  setIsOpen: () => null,
  posts: posts,
  data: data,
  user: null,
  setUser: () => null,
  setSearch: () => null,
  clearUser: () => null,
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
  const [user, setUser] = useState<User | null>(null)

  const clearUser = () => {
    setUser(null)
    localStorage.removeItem("user")
    localStorage.removeItem('token');
  }




  const filteredPost: Props[] = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.details.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const user = localStorage.getItem("user")
    console.log(filteredPost)
    console.log(user)
  }, [search])



  return (
    <context.Provider value={{ isOpen, setIsOpen, posts, data, user, setUser, clearUser, search, setSearch, filteredPost, filteredSearch: data }}>
      {children}
    </context.Provider>
  )
}

export default UseProvider