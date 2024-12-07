import image from '../assets/home-removebg-preview.png';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Home = () => {


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
      <main style={{ paddingInline: "clamp(1rem,5vw,6rem)",gridTemplateColumns:"2fr 1fr"}} className='grid min-h-[80vh]  py-4'>
        <div className=' grid place-content-center  gap-y-4'>
          <h1  className=' text-[4rem] font-extrabold'>Human <br /> experiences & concepts</h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.5rem)" }}>A platform to study,create and deepen your knowledge</p>
          <Link to='/signup'>
            <button className='w-fit md:bg-[#032b13] bg-[#206173] text-white transition pointer hover:opacity-95 py-2 px-4 rounded-[2rem]'>
              Start reading
            </button>
          </Link>
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
         <li>Blog</li>
         <li>Blog</li>
         <li>Blog</li>
        </ul>
      </footer>
    </div>
  )
}

export default Home
