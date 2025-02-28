import { Navigate, Outlet, useLocation, } from "react-router-dom"
import Redirect from "../Pages/Redirect"
import { useUserStore } from "../store/useUserStore"

const RequiredUser = () => {
    const user  = useUserStore(state=>state.user);
    const location = useLocation()

    if (!user) {
        console.log("user not found")
        return <Redirect />
    }
    return (
        user ?
         <Outlet /> 
         : <Navigate to="/user-home" state={{ from: location }} replace />
    )
}

export default RequiredUser
