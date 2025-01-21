import {  isNotDesc } from "../../data/blogData";

export const Card2 = ({ path, user, date, title, details, category ,className }: isNotDesc) => {
    return (
        <article className={`md:grid  md:grid-cols-2 min-h-[50vh] my-8 gap-4  ${className}`}>
            <img className="w-full h-[22rem] group-hover:scale-105 transition-all rounded-3xl" src={path} alt={title || "default name"} />
            <div className="grid place-content-center ">
                <span className="flex text-gray-500  items-center gap-2">
                    <p>{user}</p>
                    <small>{date}</small>
                </span>
                <h2 className="text-[2rem] font-semibold">{title.length >= 80 ? `${title.substring(0, 80)}...` : title}</h2>
                <p className="flex-1">
                    {details && details.length >= 100 ? `${details.substring(0, 180)}...` : details || ""}
                </p>
                <small className="text-red-500">{category}</small>
            </div>

        </article>
    )
}
const Card = ({ path, user, date, title, details, category,className  }: isNotDesc) => {
    return (
        <article className={`grid lg:min-h-[85vh] h-fit gap-3 ${className}`} >
            <img className="md:w-[22rem] lg:w-full w-full h-[18rem] rounded-3xl" src={path} alt={title || 'Default name'} />
            <span className="flex text-gray-500 items-center gap-2">
                <p>{user}</p>
                <small>{date}</small>
            </span>
            <h2 className="text-[1.5rem] font-semibold">{title.length >= 60 ? `${title.substring(0, 80)}...` : title}</h2>
            <p className="flex-1">
                {details && details.length >= 100 ? `${details.substring(0, 180)}...` : details || ""}
            </p>
            <small className="text-red-500">{category}</small>
        </article>
    )
}

export default Card
