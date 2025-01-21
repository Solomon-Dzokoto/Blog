import { Link,useParams } from "react-router-dom"
import logo from '../../assets/logo.png'
import { FaSearch } from "react-icons/fa"
import { PiNotePencilThin } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {id}=useParams()


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
        <span className=" absolute cursor-pointer w-fit -right-[6rem]  z-10 md:left-2 md:top-[.9rem] text-gray-400 -top-2" onClick={() => setIsOpen(!isOpen)}><FaSearch /></span>
        <input
          className={`absolute ${isOpen ? "inline-block" : "hidden"} md:inline-block md:w-[20rem] md:relative md:top-0 md:left-0 md:right-0 top-[5rem] border py-2 rounded-xl px-8 -left-[13rem] -right-[13rem]`}
          type="search"
          placeholder="search.."
          name="search"
        />
      </div>
      <div className="flex md:gap-4 items-center gap-2">
        <Link to={`create/${id}`}>
          <p className="hidden md:flex items-center gap-2 text-gray-500"><span className="text-[1.5rem]"><PiNotePencilThin /></span>Write</p>
        </Link>

        <span className="text-[1.5rem] text-gray-500"><IoIosNotificationsOutline /></span>
        <span className="p-2 bg-gray-100 rounded-full"><CiUser /></span>
      </div>

    </header>

  )
}

export default Header
