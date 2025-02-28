import { create } from "zustand";
import type { User } from "../server/AuthCheck";
import { persist,devtools } from "zustand/middleware";
import type { PostProps } from "../server/AuthCheck";


interface UserStoreProps {
    userKeeper: User[] | null;
    addUserKeeper: (userKeeper: User | null) => void;
    user: User | null;
    posts: PostProps[] | null;
    addPost : (post:PostProps) => void
    setUser : (user:User)=>void
    removeUser : () => void
}
export const useUserStore = create<UserStoreProps>()(
devtools( persist(
    (set) => ({
      userKeeper: null as User[] | null,
      user: null as User | null ,
      posts: null as PostProps[] | null,
      addPost: (post:PostProps) => set((state) =>({ posts: state.posts ? [...state.posts, post] : [post] }),false,"POST-AVAILABLE"),
      setUser: (user: User) =>
        set(() =>( { user }),false,"USER-AVAILABLE"),
      addUserKeeper: (userKeeper: User | null) =>
        set((state) => ({
            userKeeper: userKeeper ? [...(state.userKeeper ?? []), userKeeper] : state.userKeeper }), false, "USER-KEEPER-AVAILABLE"),
      removeUser: ()=>set({user:null},false,"USER-REMOVED")  
    }),
    { name: "user_store" }
  ))
);



