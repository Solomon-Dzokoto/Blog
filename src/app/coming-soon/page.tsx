import Image from "next/image"
import React from "react"
import img from "../../../public/comingSoonImg.svg"

const ComingSoon = () => {
  return (
    <div className="mb-44 flex flex-col items-center justify-center px-4 pt-20 md:px-8 lg:px-16">
      <h1 className="mb-6 text-center text-3xl leading-tight font-bold text-gray-800 md:text-4xl lg:text-5xl">
        Smarter Connections, Seamless Experiences
      </h1>
      <p className="mb-14 text-center text-lg leading-relaxed font-medium text-gray-800 md:text-xl lg:text-2xl">
        Automating outbound calls with AI-driven efficiency.
      </p>
      <Image src={img} alt="Coming Soon" className="mb-16 w-full max-w-md" />
      <p className="text-center text-xl leading-tight font-bold text-gray-800 md:text-2xl lg:text-3xl">
        Be the first to know!
      </p>
      <p className="mb-10 text-center text-lg leading-relaxed text-gray-800 md:text-xl lg:text-2xl">
        Signup to get exclusive access when we launch
      </p>
      <input
        type="text"
        placeholder="Enter your email"
        className="mb-6 w-full max-w-md rounded border border-gray-300 px-4 py-2"
      />
      <button className="rounded bg-black px-20 py-3 text-white">Notify</button>
    </div>
  )
}

export default ComingSoon
