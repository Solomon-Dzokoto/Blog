import image from '../assets/home-removebg-preview.png';
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { categoryPage } from '../data/blogData'
import useContextValue from '../hooks/useContextValue'

const Home = () => {
  const navigate = useNavigate()

  const { user } = useContextValue();

  const read = () => {
    if (!user) {
      navigate('/signup')
    } else {
      navigate('/user-home')
    }
  }

  return (
    <div className='min-h-screen'>
      <header style={{ paddingInline: "clamp(1rem,5vw,6rem)" }} className='flex  items-center border-b-[.1rem] border-[#1e5d6c] justify-between '>
        <Link to='/'>
          <span className='py-2 inline-block'>
            <img
              className='w-[4rem] h-[3rem]'
              src={logo}
              alt="logo" />
          </span>

        </Link>

        <nav className='flex items-center gap-4'>
          <a href="#" className='pointer'>Our Story</a>
          <Link to='/signin'>
            <button className='pointer'>
              Sign in
            </button>
          </Link>
          <Link to='/signup'>
            <button className='bg-[#032b13] text-white transition pointer hover:opacity-95 py-2 px-4 rounded-[2rem]'>
              Get started
            </button>
          </Link>
        </nav>
      </header>
      <main style={{ paddingInline: "clamp(1rem,5vw,6rem)", gridTemplateColumns: "2fr 1fr" }} className='grid min-h-[80vh]  py-4'>
        <div className=' grid place-content-center  gap-y-4'>
          <h1 className=' text-[4rem] font-extrabold'>Human <br /> experiences & concepts</h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.5rem)" }}>A platform to study,create and deepen your knowledge</p>
            <button onClick={read} className='w-fit md:bg-[#032b13] bg-[#206173] text-white transition pointer hover:opacity-95 py-2 px-4 rounded-[2rem]'>
              Start reading
            </button>
        </div>
        <span className='hidden place-content-center bg-blend-multiply md:inline-block '>
          <img
            src={image}
            alt="hero"
            className='object-cover'
          />
        </span>
      </main>
      <footer style={{ paddingInline: "clamp(1rem,5vw,6rem)" }} className='md:bg-transparent  bg-[#032b13] py-4  border-t-[.1rem] border-[#1e5d6c]'>
        <ul className='flex text-white md:text-black gap-4 justify-center'>
          {
            Object.keys(categoryPage).map((key) => {
              return (
                <li key={key}>
                  <Link to={`/category/${key}`}>
                    <h2 className=" text-[#1e5d6c] text-[1.2rem]">{key}</h2>
                  </Link>
                </li>
              )
            })
          }
          <Link to='/contact'>
          <li><h2 className=" text-[#1e5d6c] text-[1.2rem]">Contact Us</h2></li>
          </Link>
          <Link to='/about'>
          <li><h2 className=" text-[#1e5d6c] text-[1.2rem]">About Us</h2></li>
          </Link>
       
        </ul>
      </footer>
    </div>
  )
}

export default Home
