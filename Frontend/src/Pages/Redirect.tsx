import { Link } from "react-router-dom"


const Redirect = () => {
    return (
        <div className="min-h-screen grid text-center place-content-center">
            <h1 className="text-red-500 text-[2rem] mb-4 font-extrabold">SignIn/SignUp in other to create a Post</h1>
            <Link to='/user-home'>
                <span className="bg-blue-700 p-2 rounded-md text-white ">Home</span>
            </Link>
        </div>
    )
}

export default Redirect
