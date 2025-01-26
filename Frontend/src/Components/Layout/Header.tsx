import { Link, useParams } from "react-router-dom"
import logo from '../../assets/logo.png'
import { PiNotePencilThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import useContextValue from "../../hooks/useContextValue"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const { id } = useParams();
  const { user, search,setSearch } = useContextValue()
  const navigate = useNavigate();

  const toSignUp = () => navigate('/signup')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)



  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
  ]

  const randomColor = colors[Math.floor(Math.random() * colors.length)]


  return (
    <header id="Top" style={{ paddingInline: "clamp(1rem,5vw,6rem)" }} className='flex justify-between  items-center border-b-[.1rem] border-[#1e5d6c] '>
      <Link to='/user-home'>
        <span className='py-2 inline-block'>
          <img
            className='w-[4rem] h-[3rem]'
            src={logo}
            alt="logo" />
        </span>
      </Link>
      <div className="relative ">
        <input
          className={` outline-[#206173] border py-2 rounded-xl px-8`}
          type="search"
          value={search}
          placeholder="search.."
          onChange={onChange}
          name="search"
        />
      </div>
      <div className="flex md:gap-4 items-center gap-2">
        {
          !user && (
            <div className="space-x-1  md:items-center md:flex md:gap-4">
              <div onClick={()=>setOpenMenu(prev=>!prev)} className={` relative cursor-pointer space-y-1 z-[1000] group flex flex-col w-8  md:hidden`}>
                <span className={` transition-transform duration-300 ${openMenu?"rotate-45 translate-y-[8px]":""}w-full bg-[#032b13] h-[.1rem] `}></span>
                <span className={` transition-opacity duration-300 w-4 bg-[#032b13] self-end h-[.1rem] ${openMenu?"opacity-0":"opacity-100"}`}></span>
                <span className={` transition-transform duration-300 ${openMenu?"-rotate-45 -translate-6-[8px]":""}w-full bg-[#032b13] h-[.1rem]`}></span>
              </div>
              { 
                openMenu && (
                <div className="fixed md:relative md:right-0 md:top-0 md:flex grid text-center place-content-center top-[4.5rem] left-0 h-screen w-screen bg-black gap-4 bg-opacity-50 md:bg-opacity-100 z-50 " >
                <Link to='/signin'>
                  <button className='bg-[#346648] text-white transition pointer hover:opacity-95 w-full px-[4rem] rounded-md py-2 md:px-4 md:rounded-[2rem] '>
                    Sign in
                  </button>
                </Link>
                <Link to='/signup'>
                  <button className='bg-[#032b13] text-white transition pointer hover:opacity-95 w-full px-[4rem] rounded-md py-2 md:px-4 md:rounded-[2rem]'>
                    Sign Up
                  </button>
                </Link>
              </div>)
}

            </div>
          )
        }

        {
          user && (
            <Link to={`/create/${id}`}>
              <p className="flex items-center gap-2 text-gray-500">
                <span className="text-[1.5rem]"><PiNotePencilThin /></span>
                Write
                </p>
            </Link>
          )
        }
        <span className={` ${user ? `${randomColor} text-white font-semibold  px-4` : "bg-gray-100 "} p-2 rounded-full`}>
          {
            user ? <span>{user.Name.substring(0, 1).toUpperCase()} </span> : <span className="cursor-pointer" onClick={toSignUp}><CiUser /></span>}
        </span>
      </div>

    </header>

  )
}

export default Header
