"use client"
import { useState } from "react"
import Image from "next/image"
import Button from "./ui/button"
import Link from "next/link"

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)

  function handleClick() {
    setOpen((prev) => !prev)
  }

  return (
    <header className="relative mx-auto flex h-20 items-center justify-around bg-[#212121]">
      <div id="Logo">
        <Image
          className="w-30"
          src="/images/Logo.png"
          width={140.5}
          height={34.5}
          alt="Picture of the author"
        />
      </div>
      <ul className="hidden gap-[40px] text-[14px] leading-[21] font-[400] text-white sm:flex">
        <li className="hover:opacity-70">About</li>
        <li className="hover:opacity-70">Features</li>
        <li className="hover:opacity-70">Pricing</li>
        <li className="hover:opacity-70">Blog</li>
      </ul>
      <ul
        className={`absolute z-50 flex w-full -translate-y-full transform flex-col gap-4 bg-[#212121] py-10 text-center text-[14px] font-[400] text-white ${open ? "translate-y-35" : ""} `}
      >
        <li className="border-b border-solid border-slate-200 hover:opacity-70">
          About
        </li>
        <li className="border-b border-solid border-slate-200 hover:opacity-70">
          Features
        </li>
        <li className="border-b border-solid border-slate-200 hover:opacity-70">
          Pricing
        </li>
        <li className="border-b border-solid border-slate-200 hover:opacity-70">
          Blog
        </li>
      </ul>
      <Button asChild className="px-6 py-3 hover:opacity-70">
        <Link href={"/signup"}>Sign up</Link>
      </Button>
      <button
        onClick={handleClick}
        className="z-50 flex h-8 w-8 flex-col justify-between focus:outline-none sm:hidden"
      >
        <span
          className={`h-1 w-full rounded bg-white transition-all duration-300 ${open ? "translate-y-4.5 rotate-45" : ""}`}
        ></span>
        <span
          className={`h-1 w-full rounded bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`h-1 w-full rounded bg-white transition-all duration-300 ${open ? "-translate-y-2.5 -rotate-45" : ""}`}
        ></span>
      </button>
    </header>
  )
}

export default Navbar
