import { Link, useParams } from "react-router-dom"
import Card from "../Components/ui/Card";
import { Card2 } from "../Components/ui/Card";
import { data, data4 } from "../data/blogData";
import video from '../assets/iPhone 16 and iPhone 16 Plus - Apple-01.mp4'
import useContextValue from "../hooks/useContextValue"

const Category = () => {
    const { id } = useParams();
    const { filteredPost } = useContextValue()

    const category = filteredPost.filter(post => post.category === id);
    const { title, details, user } = data4

    if (id === "top-products") {
        return (
            <div className="py-[4rem] w-[90%] md:w-[80%]  lg:w-[80%] mx-auto">
                <h2 className="text-[2rem] font-extrabold text-center mb-8 ">Top Products📕</h2>
                <div>
                    <div className="relative  mb-12 rounded-3xl overflow-hidden p-8 w-full h-[60vh]">
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
                            <small className="text-red-500">{data4?.category}</small>
                        </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-8 ">
                        {
                            data.slice(0,4).map((post) => {
                                const { id } = post
                                return (
                                    <Link to={`/post/${id}`}>
                                        <li key={id}>
                                            <Card  {...post} className="border-separate transition-transform hover:-translate-y-4 border group shadow-lg hover:shadow-none bg-slate-50 rounded-[1rem] p-4 " />
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>

                </div>

            </div>
        )
    }
    if (id === "latest-news") {
        return (
            <div className="py-[4rem] w-[90%] md:w-[80%]  lg:w-[70%] mx-auto">
                <h2 className="text-[2rem] font-extrabold text-center ">Latest News 📕</h2>
                <ul>
                    {
                        data.map((post) => {
                            const { id } = post
                            return (
                                <Link to={`/post/${id}`}>
                                    <li key={id}>
                                        <Card2  {...post} className="border-separate border group shadow-lg hover:shadow-none bg-slate-50 rounded-[1rem] p-4 " />
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }


    if (category === undefined || category.length === 0) {
        return (
            <div className="grid place-content-center text-center min-h-screen">
                <h1 className="text-red-500 text-[2rem] mb-4 font-extrabold" >Sorry No category found</h1>
                <Link to='/user-home'>
                    <span className="bg-blue-700 p-2 rounded-md text-white ">Home</span>
                </Link>
            </div>

        )
    }

    return (
        <main className="min-h-screen py-[4rem] w-[90%] md:w-[80%]  lg:w-[70%] mx-auto" >
            <h2 className="text-[2rem] font-extrabold text-center mb-8 text-green-800 ">{category[0].category}</h2>
            <ul className="grid gap-4 grid-cols-2">

                {
                    category.map((post) => {
                        const { id } = post
                        return (
                            <Link to={`/post/${id}`}>
                                <li key={id}>
                                    <Card  {...post} />
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default Category
