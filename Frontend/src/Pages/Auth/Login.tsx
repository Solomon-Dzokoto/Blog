import { useState, useActionState, useEffect } from "react";
import { FaBackward } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { onLogin } from "../../server/AuthCheck";
import { useUserStore } from "../../store/useUserStore";
import type { Output } from "../../server/AuthCheck";

const SignIn = () => {
  const userKeeper = useUserStore((state) => state.userKeeper);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");
  const handleLogin = async (prevState: Output, formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const checkedEmail = userKeeper?.find((data) => data?.email === email);
    const checkedPassword = userKeeper?.find(
      (data) => data?.password === password
    );

    if (!checkedEmail) {
      setError(
        "User does not exist -- You can go to the sign up page to create an account"
      );
      await new Promise((resolve) => setTimeout(resolve, 8000));
      errorTimer();
      return;
    }
    if (!checkedPassword) {
      setError("Password is incorrect");
      await new Promise((resolve) => setTimeout(resolve, 8000));
      errorTimer();
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 5000));
    setMessage("Please wait while we process your request...");
    return await onLogin(prevState, formData);
  };
  const [data, action, isPending] = useActionState(handleLogin, {} as Output);

  const errorTimer = () => {
    setTimeout(() => {
      setError(null);
      setMessage(null);
    }, 3000);
  };
  useEffect(() => {
    if (data?.user) {
      console.log("User created");
      setUser(data.user);
      navigate("/user-home");
    }
    if (data?.error) {
      setError(data?.error);
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (data?.message) {
      setMessage(data?.message);
      const timer = setTimeout(() => {
        setMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  return (
    <div className="h-screen flex items-center justify-center p-4 mt-[25px] animate__animated animate__fadeInBottomLeft overflow-hidden">
      <Link className="absolute top-0 left-4 cursor-pointer" to="/">
        <FaBackward />
      </Link>
      <div className="bg-white p-6 shadow-lg shadow-top border-2 border-[#1e5d6c] rounded-xl w-96 dark:bg-slate-100">
        <form action={action}>
          <div className="text-2xl text-[#1e5d6c] font-bold capitalize text-center mb-4">
            <h3>welcome back!</h3>
          </div>

          {error && (
            <div className="text-red-600 text-center mb-4">
              <p>{error}</p>
            </div>
          )}
          {message && (
            <div className="text-green-600 text-center mb-4">
              <p>{message}</p>
            </div>
          )}

          <div>
            <div>
              <div className="capitalize text-xl mb-2">
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
                  className="w-full  px-8 py-1.5 outline-[#1e5d6c]"
                  type="email"
                  name="email"
                  id="Email"
                  autoComplete="off"
                  placeholder="example@company.com"
                  required
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
                className="bg-[#1e5d6c] text-[.9rem] text-xl text-white font-medium uppercase p-2 rounded-lg w-full opacity-90 hover:opacity-100"
                disabled={isPending}
              >
                {isPending ? "Loading.." : "Login"}
              </button>
            </div>
            <div className="text-[18px] text-center mt-4">
              <p>
                Don't have an account?{" "}
                <Link
                  className="capitalize text-[#1e5d6c] hover:underline cursor-pointer"
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
