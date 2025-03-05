import React from "react"

function Footer() {
  return (
    <>
      <div className="mt-[120px] mb-[190px] flex h-fit max-w-[300px] flex-col items-center rounded-3xl bg-[#1B1B1B] pb-8 text-center text-[#FFF] md:max-w-[768px] lg:mx-[80px] lg:mt-[240px] lg:h-[592px] lg:max-w-[1280px]">
        <div className="w-[300px] items-center pt-[89px] lg:w-[627px]">
          <p className="text-5xl/[68px] font-bold">
            Wanting to take your business to the next level?
          </p>
          <p className="text-2xl/[32px] text-[#ECECEC] lg:font-[450px]">
            Are you willing to take your business to the next level, register
            with us today.
          </p>
          <button className="mt-[12px] rounded-xl border border-[#0063CC] bg-[#FFF] py-[12px] pr-[16px] pl-[24px] text-[#2A2A2A]">
            Get Started
          </button>
        </div>
      </div>
      <p className="text-center">© 2025, Powered by HNG12</p>
    </>
  )
}

export default Footer
