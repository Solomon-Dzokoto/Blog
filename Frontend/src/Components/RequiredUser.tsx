import { Navigate, Outlet, } from "react-router-dom"
import useContextValue from '../hooks/useContextValue'
import Redirect from "../Pages/Redirect"


const RequiredUser = () => {
    const { user } = useContextValue();

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
