import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'
import { PiNotePencilThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import useContextValue from "../../hooks/useContextValue"
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import { IoMdLogOut } from "react-icons/io";
import userLogo from "../../assets/default.jpeg"

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const {  search,setSearch } = useContextValue()
  const user = useUserStore((state)=>state.user)
  const removeUser = useUserStore((state)=>state.removeUser)
  const navigate = useNavigate();

  const toSignUp = () => navigate('/signup')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)
   
  const read = () => {
    if (!user) {
      navigate('/signup')
    } else {
      navigate('/user-home')
    }
  }

  // const colors = [
  //   "bg-red-500",
  //   "bg-green-500",
  //   "bg-blue-500",
  //   "bg-yellow-500",
  //   "bg-indigo-500",
  //   "bg-purple-500",
  //   "bg-pink-500",
  // ]

  // const randomColor = colors[Math.floor(Math.random() * colors.length)]


  return (
    <header className="bg-[#1e5d6c] shadow-lg p-4 flex justify-between items-center">
      <span onClick={read} className='cursor-pointer'>
        <img
          className='w-[4rem] h-[3rem]'
          src={logo}
          alt="logo" />
      </span>
      <div className="relative">
        <input
          className={`outline-none border py-2 rounded-xl px-4`}
          type="search"
          value={search}
          placeholder="Search..."
          onChange={onChange}
          name="search"
        />
      </div>
      <div className="flex items-center gap-4">
        {!user && (
          <div className="relative">
            <div onClick={() => setOpenMenu(prev => !prev)} className={`cursor-pointer flex flex-col space-y-1`}>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${openMenu ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${openMenu ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${openMenu ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </div>
            {openMenu && (
              <div className="absolute right-0 top-full bg-white shadow-lg rounded-md mt-2">
                <Link to='/signin'>
                  <button className='bg-[#346648] text-white transition pointer hover:opacity-95 w-full px-4 rounded-md py-2'>
                    Sign in
                  </button>
                </Link>
                <Link to='/signup'>
                  <button className='bg-[#032b13] text-white transition pointer hover:opacity-95 w-full px-4 rounded-md py-2'>
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
        {user && (
          <Link to={`/create/${user?.id}`}>
            <p className="flex items-center gap-2 text-gray-500">
              <span className="text-[1.5rem]"><PiNotePencilThin /></span>
              Write
            </p>
          </Link>
        )}
        <span className={`p-4 width-10 h-10 rounded-full flex justify-center items-center`}>
          {user ? <img src={userLogo} className="w-full h-full rounded-full object-fit" alt="your logo" /> : <span className="cursor-pointer" onClick={toSignUp}><CiUser /></span>}
        </span>
        {user && (
          <button className="flex items-center gap-1.5 bg-[#032b13] cursor-pointer text-white transition pointer hover:opacity-95 w-full px-4 rounded-md py-2" onClick={removeUser}>
            <IoMdLogOut /> Logout
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
