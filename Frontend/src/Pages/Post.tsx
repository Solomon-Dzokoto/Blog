import { useParams, Link } from "react-router-dom";
import useContextValue from "../hooks/useContextValue.tsx";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiTag,
  FiShare2,
  FiBookmark,
  FiMessageSquare,
  FiHeart,
  FiArrowLeft,
  FiClock,
} from "react-icons/fi";
import { useState } from "react";
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

const Post = () => {
  const { id } = useParams();
  const { filteredPost } = useContextValue();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const post = filteredPost.find((post) => post.id == id?.toString());
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The article you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-[#1e5d6c] hover:text-[#0d2d35] font-medium"
          >
            <FiArrowLeft className="mr-2" /> Back to Home
          </button>
        </div>
      </div>
    );
  }
  const {
    title,
    path,
    details = "",
    date,
    user = "Anonymous",
    category,
  } = post;

  // Use the safe date formatter instead
  const formattedDate = safeFormatDate(date);

  // Calculate reading time (average reading speed: 200 words per minute)
  const wordsPerMinute = 200;
  const wordCount = details.trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

  // Estimate for comments
  const commentCount = Math.floor(Math.random() * 10) + 1;

  // Split details into paragraphs for better presentation
  const paragraphs = details.split("\n\n").filter(Boolean);

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero section with image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative bg-gray-900">
        <img
          src={path || "/images/default-article.jpg"}
          alt={title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/30 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <FiArrowLeft className="mr-2" /> Back to Articles
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
                {title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-10 mb-8"
        >
          {/* Article metadata */}
          <div className="flex flex-wrap items-center text-gray-500 text-sm mb-8 pb-8 border-b border-gray-100">
            <div className="flex items-center mr-6 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#1e5d6c] text-white flex items-center justify-center text-lg font-medium mr-3">
                {user.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-medium text-gray-900">{user}</p>
                <p className="text-xs">Author</p>
              </div>
            </div>

            <div className="flex items-center mr-6 mb-2">
              <FiCalendar className="mr-2 text-[#1e5d6c]" />
              <span>{formattedDate}</span>
            </div>

            <div className="flex items-center mr-6 mb-2">
              <FiTag className="mr-2 text-[#1e5d6c]" />
              <span>{category}</span>
            </div>

            <div className="flex items-center mr-6 mb-2">
              <FiClock className="mr-2 text-[#1e5d6c]" />
              <span>{readingTime} min read</span>
            </div>
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            {paragraphs.length > 0 ? (
              paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="mb-6 text-gray-700 leading-relaxed">{details}</p>
            )}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                {category}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                Knowledge
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                Insights
              </span>
            </div>

            {/* Engagement section */}
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex space-x-6">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center ${
                    liked ? "text-red-500" : "text-gray-500 hover:text-red-500"
                  } transition-colors`}
                  aria-label={liked ? "Unlike article" : "Like article"}
                >
                  <FiHeart className={`mr-2 ${liked ? "fill-current" : ""}`} />
                  <span>{liked ? 16 : 15}</span>
                </button>

                <button
                  className="flex items-center text-gray-500 hover:text-[#1e5d6c] transition-colors"
                  aria-label="View comments"
                >
                  <FiMessageSquare className="mr-2" />
                  <span>{commentCount}</span>
                </button>

                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`flex items-center ${
                    bookmarked
                      ? "text-[#1e5d6c]"
                      : "text-gray-500 hover:text-[#1e5d6c]"
                  } transition-colors`}
                  aria-label={
                    bookmarked ? "Remove bookmark" : "Bookmark article"
                  }
                >
                  <FiBookmark
                    className={`mr-2 ${bookmarked ? "fill-current" : ""}`}
                  />
                  <span>Save</span>
                </button>
              </div>

              <div className="mt-4 sm:mt-0">
                <button
                  className="flex items-center text-gray-500 hover:text-[#1e5d6c] transition-colors"
                  aria-label="Share article"
                >
                  <FiShare2 className="mr-2" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Author section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-sm p-6 md:p-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About the Author
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-[#1e5d6c] text-white flex items-center justify-center text-2xl font-medium">
              {user.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{user}</h3>
              <p className="text-gray-600 mb-4">
                Expert in {category} with over 10 years of industry experience.
                Passionate about sharing knowledge and insights to help
                professionals grow in their careers.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-[#1e5d6c] hover:text-[#0d2d35] transition-colors"
                >
                  View Profile
                </a>
                <a
                  href="#"
                  className="text-[#1e5d6c] hover:text-[#0d2d35] transition-colors"
                >
                  Follow
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Post;
