import { create } from "zustand";
import type { User } from "../server/AuthCheck";
import { persist,devtools } from "zustand/middleware";
import type { PostProps } from "../server/AuthCheck";


interface UserStoreProps {
    user: User | null;
    posts: PostProps[] | null;
    addPost : (post:PostProps) => void
    setUser : (user:User)=>void
    removeUser : () => void
}
export const useUserStore = create<UserStoreProps>()(
devtools( persist(
    (set) => ({
      user: null as User | null ,
      posts: null as PostProps[] | null,
      addPost: (post:PostProps) => set((state) =>({ posts: state.posts ? [...state.posts, post] : [post] }),false,"POST-AVAILABLE"),
      setUser: (user: User) =>
        set(() =>( { user }),false,"USER-AVAILABLE"),
      removeUser: ()=>set({user:null},false,"USER-REMOVED")  
    }),
    { name: "user_store" }
  ))
);



