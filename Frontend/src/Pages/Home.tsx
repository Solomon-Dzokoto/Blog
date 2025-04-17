import image from "../assets/home-removebg-preview.png";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { categoryPage } from "../data/blogData";
import { useUserStore } from "../store/useUserStore";
import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiUsers,
  FiBookOpen,
  FiGlobe,
  FiMenu,
  FiX,
  FiSearch,
} from "react-icons/fi";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getStarted = () => {
    if (!user) {
      navigate("/signup");
    } else {
      navigate("/user-home");
    }
  };

  // Statistics data
  const statistics = [
    { icon: <FiUsers />, value: "10K+", label: "Active Users" },
    { icon: <FiBookOpen />, value: "25K+", label: "Articles Published" },
    { icon: <FiGlobe />, value: "120+", label: "Countries Reached" },
    { icon: <FiBarChart2 />, value: "98%", label: "User Satisfaction" },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Insights Hub has completely transformed how our team shares knowledge across departments.",
      author: "Sarah Johnson",
      position: "CTO, TechForward Inc.",
    },
    {
      quote:
        "The platform's intuitive design and powerful features make it my go-to resource for industry insights.",
      author: "Michael Chen",
      position: "Product Manager, Innovate Solutions",
    },
    {
      quote:
        "As a content creator, I've found no better platform to reach my professional audience.",
      author: "Priya Sharma",
      position: "Digital Strategist, Global Reach",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header with enhanced navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#1e5d6c]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img
                  className="w-[4rem] h-[3rem]"
                  src={logo}
                  alt="Mood Hub Logo"
                />
              </Link>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-8">
                  <Link
                    to="/about"
                    className="text-[#1e5d6c] hover:text-[#0d2d35] font-medium transition"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/category/Technology"
                    className="text-[#1e5d6c] hover:text-[#0d2d35] font-medium transition"
                  >
                    Technology
                  </Link>
                  <Link
                    to="/category/Business"
                    className="text-[#1e5d6c] hover:text-[#0d2d35] font-medium transition"
                  >
                    Business
                  </Link>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e5d6c]/50 focus:border-transparent text-sm w-48"
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/signin">
                <button className="bg-white text-[#1e5d6c] border border-[#1e5d6c] py-2 px-4 rounded-md hover:bg-gray-50 transition duration-300 font-medium">
                  Sign in
                </button>
              </Link>
              <button
                onClick={getStarted}
                className="bg-gradient-to-r from-[#206173] to-[#164a57] text-white py-2 px-6 rounded-md hover:from-[#032b13] hover:to-[#032b13] transition duration-300 font-medium shadow-md"
              >
                Get started
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-[#1e5d6c] hover:text-[#0d2d35] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1e5d6c]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <FiX className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <FiMenu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, toggle classes based on menu state */}
        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              to="/about"
              className="text-[#1e5d6c] hover:bg-gray-100 block px-3 py-2 rounded-md font-medium"
            >
              About Us
            </Link>
            <Link
              to="/category/Technology"
              className="text-[#1e5d6c] hover:bg-gray-100 block px-3 py-2 rounded-md font-medium"
            >
              Technology
            </Link>
            <Link
              to="/category/Business"
              className="text-[#1e5d6c] hover:bg-gray-100 block px-3 py-2 rounded-md font-medium"
            >
              Business
            </Link>
            <div className="relative mt-3 px-3">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e5d6c]/50 focus:border-transparent text-sm w-full"
              />
              <FiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <Link to="/signin">
                <button className="w-full bg-white text-[#1e5d6c] border border-[#1e5d6c] py-2 px-4 rounded-md hover:bg-gray-50 transition duration-300 font-medium">
                  Sign in
                </button>
              </Link>
              <button
                onClick={getStarted}
                className="w-full bg-gradient-to-r from-[#206173] to-[#164a57] text-white py-2 px-6 rounded-md hover:from-[#032b13] hover:to-[#032b13] transition duration-300 font-medium shadow-md"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh] py-8 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-start p-8">
          <motion.div
            className="inline-block px-4 py-1 bg-blue-50 text-[#1e5d6c] rounded-full mb-6 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Enterprise Knowledge Management Platform
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#032b13] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mood:
            <br />
            Knowledge Simplified
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 mt-6 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A professional platform for creating, sharing, and discovering
            valuable insights across industries. Elevate your knowledge with
            expert perspectives and in-depth analysis.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={getStarted}
              className="bg-gradient-to-r from-[#206173] to-[#164a57] text-white py-3 px-8 rounded-md hover:from-[#032b13] hover:to-[#032b13] transition duration-300 font-medium shadow-md"
            >
              Start exploring
            </button>
            <Link to="/about">
              <button className="bg-white text-[#206173] border border-[#206173] py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 font-medium">
                Learn more
              </button>
            </Link>
          </motion.div>

          {/* Trusted by section */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <p className="text-sm font-medium text-gray-500 mb-4">
              TRUSTED BY LEADING COMPANIES
            </p>
            <div className="flex flex-wrap gap-6 items-center opacity-70">
              <div className="text-gray-500 font-semibold">Microsoft</div>
              <div className="text-gray-500 font-semibold">IBM</div>
              <div className="text-gray-500 font-semibold">Adobe</div>
              <div className="text-gray-500 font-semibold">Deloitte</div>
              <div className="text-gray-500 font-semibold">Oracle</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={image}
            alt="Professional knowledge sharing"
            className="object-cover max-h-[500px] rounded-lg shadow-xl"
          />
        </motion.div>
      </main>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#032b13]">
              Trusted by Professionals Worldwide
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our platform powers knowledge sharing for businesses and
              professionals across the globe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="text-[#1e5d6c] text-3xl mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#032b13]">
                  {stat.value}
                </div>
                <div className="text-gray-500 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#032b13]">
                Explore Categories
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl">
                Discover insights organized by industry-specific categories to
                find exactly what you need.
              </p>
            </div>
            <Link
              to="/categories"
              className="mt-4 md:mt-0 text-[#1e5d6c] font-medium hover:text-[#0d2d35] transition-colors duration-300"
            >
              View all categories →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.keys(categoryPage).map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <Link to={`/category/${key}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center h-full">
                    <h3 className="text-lg font-semibold text-[#1e5d6c]">
                      {key}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">Explore {key}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#1e5d6c] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our Users Say</h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Mood is trusted by professionals and companies worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-[#164a57] p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="text-4xl text-[#24A0B5] mb-4">"</div>
                <p className="italic mb-6">
                  {testimonial.quote.replace("Insights Hub", "Mood")}
                </p>
                <div className="mt-auto">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-blue-200 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-[#032b13] mb-6">
            Ready to Elevate Your Knowledge Sharing?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who use Mood to share expertise,
            discover insights, and grow their professional network.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={getStarted}
              className="bg-gradient-to-r from-[#206173] to-[#164a57] text-white py-3 px-8 rounded-md hover:from-[#032b13] hover:to-[#032b13] transition duration-300 font-medium shadow-md"
            >
              Get started for free
            </button>
            <Link to="/contact">
              <button className="bg-white text-[#206173] border border-[#206173] py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300 font-medium">
                Contact sales
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-[#0d2d35] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mood</h3>
              <p className="text-gray-300">
                Enterprise knowledge sharing platform for industry
                professionals.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row md:items-center md:justify-between text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Mood. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/about" className="hover:text-white transition">
                Privacy
              </Link>
              <Link to="/about" className="hover:text-white transition">
                Terms
              </Link>
              <Link to="/about" className="hover:text-white transition">
                Sitemap
              </Link>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                System Status: Operational
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
