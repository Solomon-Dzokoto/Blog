"use client";
import { useEffect, useActionState, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { onSubmit } from "../../server/AuthCheck";
import { useUserStore } from "../../store/useUserStore";
import type { Output } from "../../server/AuthCheck";

const Signup = () => {
  const userKeeper = useUserStore((state) => state.userKeeper);
  const setUser = useUserStore((state) => state.setUser);
  const addUserKeeper = useUserStore((state) => state.addUserKeeper);



  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const handleSubmit = async (prevState: Output, formData: FormData) => {
    const email = formData.get("email") as string;
    try {
      const checkedEmail = userKeeper?.find(data => data?.email === email)
      if (checkedEmail) {
        setError("User already exists");
        await new Promise(resolve => setTimeout(resolve, 3000))
        errorTimer()
        return;
      }
    } catch (error) {
      console.log(
        "Error",
        error instanceof Error ? error.message : "Unknown user"
      );
      setError(`User exist:${error} `);
      await new Promise(resolve => setTimeout(resolve, 3000))
      return

    }

    return await onSubmit(prevState, formData);
  };
  const [data, action, isPending] = useActionState(handleSubmit, {} as Output);
  const navigate = useNavigate();

  const errorTimer = () => {
    setTimeout(() => {
      setError(null)
    }, 3000);
  }

  useEffect(() => {

    const checkOut = async () => {
      if (data?.user) {
        console.log("User created");
        setUser(data.user);
        addUserKeeper(data.user)
        setMessage("User created successfully")
        await new Promise(resolve => setTimeout(resolve, 3000))
        errorTimer()
        navigate("/user-home");
      }
      if (data?.error) {
        setError(data?.error)
        const timer = setTimeout(() => {
          setError(null)
        }, 3000);
        return () => clearTimeout(timer);
      } else {
        setError(null)
      }
      if (data?.message) {
        setMessage(data?.message)
        const timer = setTimeout(() => {
          setMessage(null)
        }, 3000);
        return () => clearTimeout(timer);
      } else {
        setMessage(null)
      }
    }

    checkOut()

  }, [data]);



  return (
    <div>
      <div className="h-screen flex items-center mt-12 justify-center p-4 animate__animated animate__fadeInDown">
        <Link className="absolute top-0 left-4 cursor-pointer" to="/">
          <FaBackward />
        </Link>

        <div className="bg-white p-6 shadow-lg shadow-top border-2 border-[#1e5d6c] rounded-xl w-96 dark:bg-slate-100">
          <form action={action}>
            <div className="text-2xl text-[#1e5d6c] font-bold capitalize text-center mb-4">
              <h3>Create an account !</h3>
            </div>
            {
              error
                ? (
                  <div className="text-red-600 text-center text-sm mb-2">
                    {error}
                  </div>)
                : message
                  ? (
                    <div className="text-green-600 text-center text-sm mb-2">
                      {error}
                    </div>
                  )
                  : null

            }

            <div>
              <div>
                <div className="capitalize text-xl mb-2 mt-2">
                  <label htmlFor="name">username</label>
                </div>
                <div className="border-2 border-[#1e5d6c] rounded-md relative">
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
                    className="w-full placeholder:capitalize px-8 py-1.5 outline-[#1e5d6c]"
                    type="text"
                    id="Name"
                    name="name"
                    placeholder="enter username"
                    autoComplete="off"
                    required
                    minLength={5}
                  />
                </div>
              </div>
              <div>
                <div className="capitalize text-xl mb-2 mt-3">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="border-2 border-[#1e5d6c] rounded-md relative">
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
                    name="email"
                    id="Email"
                    placeholder="example@company.com"
                    required
                    autoComplete="off"
                    minLength={5}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="capitalize text-xl mb-2">
                  <label htmlFor="password">password</label>
                </div>
                <div className="border-2 border-[#1e5d6c] rounded-md relative">
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
                    id="Password"
                    name="password"
                    placeholder="enter password"
                    required
                    autoComplete="off"
                    minLength={5}
                  />
                </div>
              </div>
              <br />
              <div>
                <button
                  disabled={isPending}
                  className="bg-[#1e5d6c] text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100"
                >
                  {isPending ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
              <div className="text-[18px] text-center mt-4">
                <p>
                  already have an account?{" "}
                  <Link
                    className="capitalize text-[#1e5d6c] text-sm hover:underline cursor-pointer"
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
    </div>
  );
};

export default Signup;
