import { create } from "zustand";
import type { User } from "../server/AuthCheck";
import { persist,devtools } from "zustand/middleware";



interface UserStoreProps {
    user: User | null;
    setUser : (user:User)=>void
    removeUser : () => void
}
export const useUserStore = create<UserStoreProps>()(
devtools( persist(
    (set) => ({
      user: null as User | null ,
      setUser: (user: User) =>
        set(() =>( { user }),false,"USER-AVAILABLE"),
      removeUser: ()=>set({user:null},false,"USER-REMOVED")  
    }),
    { name: "user_store" }
  ))
);



