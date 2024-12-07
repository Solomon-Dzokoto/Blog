import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [credentials, setCredentials] = useState({ Email: '', Password: '' });
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { Email, Password } = credentials
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email:Email, Password:Password}),
      });

      const json = await response.json();
      console.log("Response from server:", json);
      if (json.success) {
        localStorage.setItem('token', json.token)
        navigate('/user-home');
        setTimeout(() => {

        }, 500);

      } else {
        setErrorMessage(json.message || 'Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred, please try again later.');
    } finally {

      setLoading(false);

    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 mt-[25px] animate__animated animate__fadeInTopLeft overflow-hidden">
      <div className="bg-white p-6 shadow-lg shadow-top border-2 border-blue-600 rounded-xl w-96 dark:bg-slate-100">
        <form onSubmit={handleSubmit}>
          <div className="text-2xl text-blue-600 font-bold capitalize text-center mb-4">
            <h3>welcome back!</h3>
          </div>

          {errorMessage && (
            <div className="text-red-600 text-center mb-4">
              <p>{errorMessage}</p>
            </div>
          )}

          <div>
            <div>
              <div className="capitalize text-xl mb-2">
                <label htmlFor="email">Email</label>
              </div>
              <div className="border-2 relative">
                <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8.25V21a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V8.25m-18 0L12 13l6-4.75M3 8.25h18"
                    />
                  </svg>
                </span>
                <input
                  className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-600"
                  type="email"
                  name="Email"
                  id="Email"
                  autoComplete="off"
                  value={credentials.Email}
                  placeholder="example@company.com"
                  onChange={onChange}
                  required
                  minLength={5}
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="capitalize text-xl mb-2">
                <label htmlFor="password">Password</label>
              </div>
              <div className="border-2 relative">
                <span className="absolute px-2 inset-y-0 left-0 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </span>
                <input
                  className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-800"
                  type="password"
                  name="Password"
                  id="Password"
                  value={credentials.Password}
                  placeholder="enter Password"
                  onChange={onChange}
                  required
                  autoComplete="off"

                  minLength={5}
                />
              </div>
            </div>
            <br />
            <div>
              <button className="bg-blue-600 text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100" disabled={loading}>
                {loading ? 'Loading...' : 'Login'}
              </button>
            </div>
            <div className="text-[18px] text-center mt-4">
              <p>
                Don't have an account?{' '}
                <Link
                  className="capitalize text-blue-600 hover:underline cursor-pointer"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
