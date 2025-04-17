import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-blue-100 p-3">
                <FiSearch className="h-12 w-12 text-[#1e5d6c]" />
              </div>
            </div>

            <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
              <span className="text-[#1e5d6c]">404</span>
            </h1>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>

            <p className="text-lg text-gray-600 max-w-sm mx-auto mb-8">
              We couldn't find the page you're looking for. It might have been
              moved or doesn't exist.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#1e5d6c] hover:bg-[#164a57] transition"
                >
                  <FiHome className="mr-2" />
                  Back to Home
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition"
                >
                  <FiArrowLeft className="mr-2" />
                  Contact Support
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-500">
              Looking for something specific? Try searching or checking these
              popular pages:
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <Link
                to="/about"
                className="text-[#1e5d6c] hover:text-[#0d2d35] transition"
              >
                About Us
              </Link>
              <Link
                to="/category/Technology"
                className="text-[#1e5d6c] hover:text-[#0d2d35] transition"
              >
                Technology
              </Link>
              <Link
                to="/category/Business"
                className="text-[#1e5d6c] hover:text-[#0d2d35] transition"
              >
                Business
              </Link>
              <Link
                to="/category/Science"
                className="text-[#1e5d6c] hover:text-[#0d2d35] transition"
              >
                Science
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Insights Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
