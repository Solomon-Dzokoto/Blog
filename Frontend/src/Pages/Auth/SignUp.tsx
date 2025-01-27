import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useContextValue from '../../hooks/useContextValue'
import { FaBackward } from 'react-icons/fa';


const Signup = () => {
    const [credentials, setCredentials] = useState({ Name: '', Email: '', Password: '' });
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();
    const { setUser } = useContextValue();



    const { Name, Email, Password } = credentials
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitting login with:", credentials);
        if (!Email.trim() || !Password.trim() || !Name.trim()) {
            setErrorMessage("All fields are required.");
            return;
        }
        try {

            const response = await fetch(`https://blog-osbi-mjomvuid3-solomon-dzokotos-projects.vercel.app/api/auth/signup`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Name, Email, Password }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }

            const json = await response.json();
            if (json.success) {
                const { user, token } = json
                console.log("Response from server:", user.id);
                setUser(user);
                localStorage.setItem('token', token);
                localStorage.setItem('user', user);
                navigate('/user-home');
            } else {
                setErrorMessage(json.message || `Invalid credentials, please try again.${errorMessage}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('An error occurred, please try again later.');
        }
    };


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="h-screen flex items-center mt-12 justify-center p-4 animate__animated animate__fadeInDown">

                <Link className='absolute top-0 left-4 cursor-pointer' to='/'>
                    <FaBackward />
                </Link>

                <div className="bg-white p-6 shadow-lg shadow-top border-2 border-[#1e5d6c] rounded-xl w-96 dark:bg-slate-100">
                    <form onSubmit={handleSubmit}>
                        <div className="text-2xl text-[#1e5d6c] font-bold capitalize text-center mb-4">
                            <h3>Create an account !</h3>
                        </div>
                        {errorMessage && (
                            <div className="text-red-600 text-center text-sm mb-2">
                                {errorMessage}
                            </div>
                        )}
                        <div>

                            <div>
                                <div className="capitalize text-xl mb-2 mt-2">
                                    <label htmlFor='name'>username</label>
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
                                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                            />
                                        </svg>
                                    </span>
                                    <input
                                        className="w-full placeholder:capitalize px-8 py-1.5 outline-blue-600"
                                        type="text"
                                        id='Name'
                                        name='Name'
                                        placeholder="enter username"
                                        autoComplete="off"
                                        onChange={onChange}
                                        required
                                        value={Name}
                                        minLength={5}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="capitalize text-xl mb-2 mt-3">
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
                                        className="w-full placeholder:capitalize px-8 py-1.5 outline-[#1e5d6c]"
                                        type="email"
                                        name="Email"
                                        id="Email"
                                        placeholder="example@company.com"
                                        onChange={onChange}
                                        required
                                        autoComplete="off"

                                        value={Email}
                                        minLength={5}
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="capitalize text-xl mb-2">
                                    <label htmlFor='password'>password</label>
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
                                        className="w-full placeholder:capitalize px-8 py-1.5 outline-[#1e5d6c]"
                                        type="password"
                                        id='Password'
                                        name='Password'
                                        placeholder="enter password"
                                        onChange={onChange}
                                        required
                                        autoComplete="off"

                                        minLength={5}
                                        value={Password}
                                    />
                                </div>
                            </div>
                            <br />
                            <div>
                                <button className="bg-[#1e5d6c] text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100">
                                    Sign Up
                                </button>
                            </div>
                            <div className="text-[18px] text-center mt-4">
                                <p>
                                    already have an account?{" "}
                                    <Link
                                        className="capitalize text-[#1e5d6c] hover:underline cursor-pointer"
                                        to="/signin"
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
