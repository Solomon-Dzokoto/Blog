import React from "react"
import Image from "next/image"

const Navbar = () => {
  return (
    <header className="mx-auto flex h-20 items-center justify-around bg-[#212121]">
      <div id="Logo">
        <Image
          src="/images/Logo.png"
          width={140.5}
          height={34.5}
          alt="Picture of the author"
        />
      </div>
      <ul className="flex gap-[40px] text-[14px] leading-[21] font-[400] text-white">
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <button className="h-[48px] w-[124px] rounded-[12px] bg-[#ffffff] pt-[12] pr-[24] pb-[12] pl-[24] text-black">
        {" "}
        Sign up{" "}
      </button>
    </header>
  )
}

export default Navbar
