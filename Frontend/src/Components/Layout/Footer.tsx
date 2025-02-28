import { FaLinkedin } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import logo from '../../assets/logo.png'
import { FaPinterest } from "react-icons/fa"
import { FaArrowAltCircleUp } from "react-icons/fa"
import { categoryPage } from '../../data/blogData.tsx'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="px-[clamp(1rem,5vw,6rem)] py-8 border-2 border-[#1e5d6c]">
      <div className="grid gap-8 md:flex md:items-center">
        <div className="">
        <span className='py-2 inline-block'>
          <img
            className='w-[4rem] h-[3rem]'
            src={logo}
            alt="logo" />
        </span>
          <p>Craft narratives that ignites inspiration,knowledge, and entertainment</p>
          <div className="flex mt-6 gap-4">
            <span className="text-[#1e5d6c] p-2 rounded-full transition-all shadow-2xl bg-slate-100 bottom-1"><FaLinkedin /></span>
            <span className="text-[#1e5d6c] p-2 rounded-full transition-all shadow-2xl bg-slate-100 bottom-1"><FaX /></span>
            <span className="text-[#1e5d6c] p-2 rounded-full transition-all shadow-2xl bg-slate-100 bottom-1"><FaPinterest /></span>
          </div>
        </div>
        <ul className="flex flex-wrap gap-12 ">
          {
            Object.keys(categoryPage).map((key) => {
              const items = categoryPage[key as keyof typeof categoryPage]; 
              return(
              <li key={key}>
                <Link to={`/category/${key}`}>
                  <h2 className="text-[1.5rem]">{key}</h2>
                </Link>

                {
                  (items).map((item) => (
                    <div key={item} >
                      <small className="block mt-2 text-gray-500">{item}</small>
                    </div>

                  ))
                }

              </li>
            )})
          }
          <Link to="/about">
          <li className="text-[1.5rem]">About us</li>
          </Link>
          <Link to="/contact">
          <li className="text-[1.5rem]">Contact  us</li>
          </Link>
         
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <small className="inline-block mt-8 md:mt-2">Copyright &copy; {(new Date).getFullYear()} Mood.All right reserved.</small>
        <a href="#Top"><span className="bg-slate-100 text-[#1e5d6c]cursor-pointer"><FaArrowAltCircleUp /></span></a>
      </div>


    </footer>
  )
}

export default Footer
