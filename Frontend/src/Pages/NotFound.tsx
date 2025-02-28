import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="text-center p-6 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="mt-4 inline-block bg-[#1e5d6c] text-white py-2 px-4 rounded-md hover:bg-[#032b13] transition">
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound; 