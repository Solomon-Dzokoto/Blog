import { useParams } from "react-router-dom"
import posts from "../data/blogData"


const Post = () => {
  console.log(posts)
  const {id} = useParams()
  console.log(typeof(id))
  const post = posts.find(post=>post.id === Number(id));
  if (!post) {
    return <h1>Post not found</h1>;
  }
  const {title,path,details,date,user,category} = post;

  console.log(post)
  
  return (
    <main className="min-h-screen py-[4rem] w-[90%] md:w-[80%] lg:w-[60%] mx-auto">

      <article className="grid  min-h-[50vh] gap-2">
        <img className="w-full min-w-[16rem] h-[16rem] rounded-3xl" src={path} alt={title || 'Default name'} />
        <span className="flex text-gray-500 items-center gap-2">
          <p>{user}</p>
          <small>{date}</small>
        </span>
        <h2 className="text-[1.5rem] font-semibold">{title.length >= 70 ? `${title.substring(0, 60)}...` : title}</h2>
        <small className="text-red-500">{category}</small>
        <p>{details}</p>
      </article>
    </main>
  )
}

export default Post
