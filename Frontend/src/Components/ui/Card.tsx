import { isNotDesc } from "../../data/blogData";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiTag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

// Helper function to safely format dates
const safeFormatDate = (date: string | Date | undefined | null): string => {
  if (!date) return "Recently";

  try {
    // If it's a string, try to parse it
    const dateObj = typeof date === "string" ? new Date(date) : date;

    // Check if the date is valid
    if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
      return "Recently";
    }

    return formatDistanceToNow(dateObj, { addSuffix: true });
  } catch (error) {
    console.warn("Error formatting date:", error);
    return "Recently";
  }
};

export const Card2 = ({
  path,
  user,
  date,
  title,
  details,
  category,
  className,
  id,
}: isNotDesc) => {
  // Use the safe formatter instead
  const formattedDate = safeFormatDate(date);

  return (
    <motion.article
      className={`md:grid md:grid-cols-2 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-64 md:h-auto overflow-hidden relative">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src={path}
          alt={title || "Article cover image"}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <FiUser className="mr-2" />
            {user}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <FiClock className="mr-2" />
            {formattedDate}
          </span>
        </div>

        <Link to={`/post/${id}`} className="group">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1e5d6c] transition-colors">
            {title.length >= 80 ? `${title.substring(0, 80)}...` : title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {details && details.length >= 100
            ? `${details.substring(0, 180)}...`
            : details || ""}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="flex items-center text-sm text-[#1e5d6c]">
            <FiTag className="mr-1" />
            {category}
          </span>
          <Link
            to={`/post/${id}`}
            className="text-sm font-medium text-[#1e5d6c] hover:text-[#0d2d35] transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const Card = ({
  path,
  user,
  date,
  title,
  details,
  category,
  className,
  id,
}: isNotDesc) => {
  // Use the safe formatter here too
  const formattedDate = safeFormatDate(date);

  return (
    <motion.article
      className={`flex flex-col bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow h-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src={path}
          alt={title || "Article cover image"}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <FiUser className="mr-2" />
            {user}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <FiClock className="mr-2" />
            {formattedDate}
          </span>
        </div>

        <Link to={`/post/${id}`} className="group">
          <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#1e5d6c] transition-colors">
            {title.length >= 60 ? `${title.substring(0, 60)}...` : title}
          </h2>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {details && details.length >= 100
            ? `${details.substring(0, 120)}...`
            : details || ""}
        </p>

        <Link
          to={`/post/${id}`}
          className="text-sm font-medium text-[#1e5d6c] hover:text-[#0d2d35] transition-colors mt-auto self-start"
        >
          Read More →
        </Link>
      </div>
    </motion.article>
  );
};

export default Card;
