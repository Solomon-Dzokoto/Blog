import React from "react"

function Footer() {
  return (
    <>
      <div className="flex flex-col items-center text-center bg-[#1B1B1B] rounded-3xl text-[#FFF] lg:mx-[80px] mt-[120px] lg:mt-[240px] mb-[190px] pb-8 h-fit lg:h-[592px] max-w-[300px] md:max-w-[768px] lg:max-w-[1280px]">
        <div className=" items-center w-[300px] lg:w-[627px] pt-[89px]">
          <p className="font-bold text-5xl/[68px]">
            Wanting to take your business to the next level?
          </p>
          <p className="text-[#ECECEC] lg:font-[450px] text-2xl/[32px]">
            Are you willing to take your business to the next level, register
            with us today.
          </p>
          <button className="border border-[#0063CC] rounded-xl bg-[#FFF] text-[#2A2A2A] py-[12px] pr-[16px] pl-[24px] mt-[12px]">
            Get Started
          </button>
        </div>
      </div>
      <p className="text-center">© 2025, Powered by HNG12</p>
    </>
  );
}

export default Footer
