import Card from '../Components/ui/Card.tsx'
import { Card2 } from '../Components/ui/Card.tsx'
import { data3, data4, data2, isNotDesc } from '../data/blogData.tsx'
import { motion } from 'framer-motion'
import video from '../assets/iPhone 16 and iPhone 16 Plus - Apple-01.mp4'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom'
import useContextValue from '../hooks/useContextValue.tsx'
import { FaMarker } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState,useEffect } from 'react'


const Main = () => {
  const [loading, setLoading] = useState(false)
  const [Message, setMessage] = useState<string | null>("")
  const [error, setError] = useState<string | null>("")
  const { filteredPost } = useContextValue()

  const { title, user, details, category } = data4

  useEffect(()=> {
    if(error|| Message){
      const timer = setTimeout(()=>{
        setLoading(false)
        setMessage(null)
        setError(null)
      },3000)
      return ()=> clearTimeout(timer)
    }
  },[error,Message])


  const groupedCat: Record<string, isNotDesc[]> = data2.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, isNotDesc[]>)

  console.log(groupedCat)

  return (
    <main className='flex-1'>
      <section id='Home' className="py-8 px-[clamp(1rem,5vw,6rem)]" >
        <article className="bg-gray-200 text-center p-8 rounded-3xl">
          <h2 style={{ fontSize: "clamp(1rem,3vw,1.5rem)" }} className=" mb-8  text-[1.5rem] text-gray-600" >WELCOME TO MOOD</h2>
          <p style={{ fontSize: "clamp(1.5rem,4vw,3rem)" }} className="font-semibold ">
            Craft narratives ✍🏻 that ignite <span className="text-red-600">inspiration</span>💡,<span className="text-red-600">knowledge</span> 📕, and <span className="text-red-600">entertainment</span>🎬
          </p>
        </article>
      </section>
      <section className='px-[clamp(1rem,5vw,6rem)] py-8'>
        <Link to={`/post/${data3.id}`}>
          <Card2
            id={data3.id}
            path={data3.path}
            title={data3.title}
            date={data3.date}
            details={data3.details}
            category={data3.category}
            user={data3.user}
          />
        </Link>
        <div className='flex items-center justify-between'>
          <h2 className='text-[1.5rem] mb-4 font-extrabold'>Latest News</h2>
          <Link to={`/category/latest-news`}>
            <p className='flex items-center text-red-600'>See all <span><IoIosArrowRoundForward /></span></p>
          </Link>
        </div>

        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            filteredPost.slice(0, 3).map((item) => (
              <Link to={`/post/${item.id}`} className='flex flex-col justify-between' key={item.id}>
                <Card
                  id={item.id}
                  path={item.path}
                  title={item.title}
                  date={item.date as string}
                  details={item.details}
                  category={item.category}
                  user={item.user}
                />
              </Link>
            ))
          }
        </ul>
      </section>
      <section className='bg-red-600  py-8 overflow-hidden' >
        <motion.p
          initial={{ x: "100vw" }}
          animate={{ x: "-120vw" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="text-white font-extrabold  text-[3rem] whitespace-nowrap"
        >
          Welcome to our blog! Explore stories that inspire, inform, and entertain.
        </motion.p>
      </section>
      <section className='px-[clamp(1rem,5vw,6rem)] bg-sky-50 lg:min-h-[80vh] lg:py-12 grid gap-8 divide-[#1e5d6c] md:divide-y-0 divide-y-2 md:flex md:items-center md:gap-x-2'>
        {
          Object.keys(groupedCat).map((category) => (
            <div className='grid gap-4' key={category}>
              <div className='flex mt-4 md:mt-0 justify-between items-center'>
                <h2 className='text-[1.5rem] font-bold'> {category} </h2>
                <Link to={`/category/${category}`} key={category}>
                  <span className='text-red-600 text-[1.5rem] font-bold'><IoIosArrowRoundForward /></span>
                </Link>
              </div>

              <ul className='lg:flex lg:items-start md:gap-2'>
                {
                  groupedCat[category].map((item) => (
                    <Link to={`/post/${item.id}`} key={item.id}>
                      <article className="grid  min-h-[50vh] gap-2">
                        <img className="w-full min-w-[16rem] h-[16rem] rounded-3xl" src={item.path} alt={item.title || 'Default name'} />
                        <span className="flex text-gray-500 items-center gap-2">
                          <p>{user}</p>
                          <small>{item.date}</small>
                        </span>
                        <h2 className="text-[1.5rem] font-semibold">{item.title.length >= 70 ? `${item.title.substring(0, 60)}...` : item.title}</h2>
                        <small className="text-red-500">{category}</small>
                      </article>

                    </Link>

                  )
                  )
                }
              </ul>

            </div>
          ))
        }
      </section>
      <section className='py-8 px-[clamp(1rem,5vw,6rem)]'>
        <div>
          <div className='flex items-center justify-between'>
            <h2 className='text-[1.5rem] mb-4 font-extrabold'>Top Products</h2>
            <Link to={`/category/top-products`}>
              <p className='flex items-center text-red-600'>See all <span><IoIosArrowRoundForward /></span></p>
            </Link>
          </div>

        </div>

        <div className="relative rounded-3xl overflow-hidden p-8 w-full h-[60vh]">
          <video
            autoPlay
            loop
            muted
            className="absolute -z-10 inset-0 h-[80vh] md:h-fit object-cover"
          >
            <source src={video} type='video/mp4' />
          </video>
          <div className=" absolute  bottom-4">
            <span className="flex text-gray-200 items-center gap-2">
              <p>{user}</p>
            </span>
            <h2 className="text-[1.5rem] text-white font-semibold">{title.length >= 60 ? `${title.substring(0, 80)}...` : title}</h2>
            <p className="flex-grow text-gray-200 ">{details && details.length >= 100 ? `${details.substring(0, 180)}...` : details}</p>
            <small className="text-red-500">{category}</small>
          </div>
        </div>
      </section>
      <section className='bg-sky-50'>
        <div className='px-[clamp(1rem,5vw,6rem)] py-8'>
          <h2 className='text-[clamp(1rem,3vw,2.5rem)] font-bold'>Must Read</h2>
          <ul className='grid md:flex gap-2 mt-6 min-h-[60vh] '>
            <li>
              {
                filteredPost.slice(1, 2).map((item) => {
                  return (

                    <Link to={`/post/${item.id}`} key={item.id} >
                      <article className="grid md:w-[15rem] md:min-h-[10vh] gap-1">
                        <img className="md:size-[15rem] rounded-3xl" src={item.path} alt={title || 'Default name'} />
                        <span className="flex text-gray-500 items-center gap-2">
                          <p>{user}</p>
                          <small>{item.date as string}</small>
                        </span>
                        <h2 className="text-[1.5rem] font-semibold">{item.title.length >= 40 ? `${item.title.substring(0, 40)}...` : item.title}</h2>
                        <p className="flex-grow">
                          {item.details && item.details.length >= 80 ? `${item.details.substring(0, 100)}...` : details || ""}
                        </p>
                        <small className="text-red-500">{category}</small>
                      </article>
                    </Link>
                  )
                })
              }
            </li>
            <li>
              {
                filteredPost.slice(17, 18).map((item) => (
                  <Link to={`/post/${item.id}`} key={item.id} >
                    <article className="flex-grow w-full relative rounded-[2rem] overflow-hidden">
                      <img
                        src={item.path}
                        alt={item.title}
                        className="w-full h-[80vh] object-cover"
                      />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm">{item.user} </p>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <small>{item.category} · {item.date as string}</small>
                      </div>
                    </article>
                  </Link>

                ))
              }
            </li>
            <li>
              {
                filteredPost.slice(6, 8).map((item) => (
                  <Link to={`/post/${item.id}`} key={item.id} >
                    <article className="grid w-full md:w-[20rem] md:min-h-[10vh] gap-3">
                      <img className="md:w-[20rem] w-full md:h-[8rem] rounded-3xl" src={item.path} alt={title || 'Default name'} />
                      <span className="flex text-gray-500 items-center gap-2">
                        <p>{user}</p>
                        <small>{item.date as string}</small>
                      </span>
                      <h2 className="text-[1rem] font-semibold">{item.title.length >= 60 ? `${item.title.substring(0, 80)}...` : item.title}</h2>
                      <small className="text-red-500">{category}</small>
                    </article>
                  </Link>

                ))
              }No prompt was provided.
            </li>

          </ul>
        </div>

      </section>
      <section className='px-[clamp(1rem,5vw,6rem)] py-8'>
        <div className='bg-gray-100 md:p-[4rem] p-8 rounded-[1.5rem] grid md:grid-cols-2 items-center j gap-8'>
          <div className="">
            <p className='text-gray-500'>GET FIRST UPDATE</p>
            <h2 className='text-[clamp(1.5rem,3vw,2.5rem)]'>
              Get the news in front line by <span className='text-red-600'>subscribe</span>  ✍🏻 our latest updates
            </h2>
          </div>
          {
          error
          ? <p className='fixed p-8 font-semibold top-24 left-1/2 -translate-1/2 text-red-500 border-4 border-red-600 rounded-2xl bg-white flex gap-2 items-center '>{error} <AiFillCloseCircle /></p>
          :Message
          ? <p className='fixed p-8 font-semibold top-24 left-1/2 -translate-1/2 border-4 border-green-700 T rounded-2xl bg-white flex gap-2 items-center  '>{Message} <FaMarker className="animate-bounce" /></p>
          : null 
          }
          <form onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true)
            try {
              const email = e.currentTarget?.email;
              await new Promise(resolve => setTimeout(resolve, 2000))
              if (!email.value.trim()) {
                setError("Fill in your email")
                return;
              } else {
                email.value = ""
              }
              setMessage("Email sent successfully")
              setLoading(false)
            } catch (err) {
              console.log(err)
              setError(err instanceof Error ? err.message : "Error")
              setLoading(false)
            }

          }}>
            <input
              type="email"
              name="email"
              id="email"
              className='py-2 mr-4 border rounded-[.5rem]  px-4 w-1/2'
              placeholder='Your email'
              required
            />
            <button
              type="submit"
              className='border cursor-pointer hover:bg-red-500 bg-red-600 transition-all py-2 rounded-[.5rem] text-white px-8'
              value="Subscribe"
            >
              {loading ? "Submitting..." : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

    </main>
  )
}

export default Main
