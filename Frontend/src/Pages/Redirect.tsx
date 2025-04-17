import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-red-500 text-6xl mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Authentication Required
        </h1>
        <p className="text-gray-600 mb-6">
          Please sign in or create an account to access this content or create a
          post.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signin">
            <button className="w-full bg-[#1e5d6c] text-white py-2 px-6 rounded-md hover:bg-[#164a57] transition duration-300">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full bg-white text-[#1e5d6c] border border-[#1e5d6c] py-2 px-6 rounded-md hover:bg-gray-50 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="mt-6">
          <Link to="/" className="text-[#1e5d6c] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
