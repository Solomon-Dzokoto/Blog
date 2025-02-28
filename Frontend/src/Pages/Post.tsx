import { useParams } from "react-router-dom"
import useContextValue from "../hooks/useContextValue.tsx"
import { motion } from "framer-motion"


const Post = () => {
  const {id} = useParams()
  const { filteredPost } = useContextValue();
  console.dir(id)
  const post = filteredPost.find(post=>post.id == id?.toString())
  if (!post) {
    return <h1 className="min-h-screen">Post not found</h1>;
  }
  const {title,path,details,date,user,category} = post;

  
  return (
    <main className="min-h-screen py-[4rem] w-[90%] md:w-[80%] lg:w-[60%] mx-auto">

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <img className="w-full min-w-[16rem] h-[16rem] rounded-3xl" src={path || "No_image_3x4.svg.png"} alt={title.substring(0, 10) || 'Default name'} />
        <span className="flex text-gray-500 items-center gap-2">
          <p>{user}</p>
          <small>{date as string}</small>
        </span>
        <h2 className="text-3xl font-bold text-[#1e5d6c] mb-4">{title.length >= 70 ? `${title.substring(0, 60)}...` : title}</h2>
        <small className="text-red-500">{category}</small>
        <p className="text-gray-700 mb-4">{details}</p>
      </motion.article>
    </main>
  )
}

export default Post
