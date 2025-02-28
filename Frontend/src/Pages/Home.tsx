import image from '../assets/home-removebg-preview.png';
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { categoryPage } from '../data/blogData'
import { useUserStore } from '../store/useUserStore';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate()

 const user = useUserStore((state)=>state.user)

  const read = () => {
    if (!user) {
      navigate('/signup')
    } else {
      navigate('/user-home')
    }
  }

  return (
    <div className='min-h-screen'>
      <header className='flex items-center justify-between border-b border-[#1e5d6c] p-4'>
        <Link to='/'>
          <img className='w-[4rem] h-[3rem]' src={logo} alt="logo" />
        </Link>
        <nav className='flex items-center gap-4'>
          <Link to='/about' className='text-[#1e5d6c] hover:underline'>Our Story</Link>
          <Link to='/signin'>
            <button className='bg-[#206173] text-white py-2 px-4 rounded-[2rem] hover:bg-[#032b13] transition'>Sign in</button>
          </Link>
     
            <button onClick={read} className='bg-[#206173] text-white py-2 px-4 rounded-[2rem] hover:bg-[#032b13] transition'>Get started</button>
      
        </nav>
      </header>
      <main className='grid grid-cols-1 md:grid-cols-2 min-h-[80vh] py-4'>
        <div className='flex flex-col justify-center items-start p-4'>
          <motion.h1 className='text-[4rem] font-extrabold' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            Human <br /> experiences & concepts
          </motion.h1>
          <motion.p className='text-lg' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            A platform to study, create and deepen your knowledge
          </motion.p>
          <motion.button onClick={read} className='bg-[#206173] text-white py-2 px-4 rounded-[2rem] hover:bg-[#032b13] transition mt-4'>
            Start reading
          </motion.button>
        </div>
        <motion.img src={image} alt="hero" className='object-cover hidden md:block' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} />
      </main>
      <footer className='bg-[#1e5d6c] text-white py-4'>
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
          {Object.keys(categoryPage).map((key) => (
            <li key={key}>
              <Link to={`/category/${key}`}>
                <h2 className="text-[.9rem]">{key}</h2>
              </Link>
            </li>
          ))}
          <Link to='/contact'>
            <li><h2 className="text-[.9rem]">Contact Us</h2></li>
          </Link>
          <Link to='/about'>
            <li><h2 className="text-[.9rem]">About Us</h2></li>
          </Link>
        </ul>
      </footer>
    </div>
  )
}

export default Home
