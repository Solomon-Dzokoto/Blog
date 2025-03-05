import React from "react"

function Footer() {
  return (
    <div className="space-y-[134px] px-[5.6%]">
      <div className="mx-auto max-w-[1280px] rounded-3xl bg-[#1B1B1B] text-center text-[#FFF]">
        <div className="flex flex-col items-center space-y-8 px-4 py-8 lg:pt-[89px] lg:pb-[219px]">
          <div className="space-y-3 lg:w-[627px]">
            <p className="text-3xl font-bold lg:text-5xl lg:leading-[68px]">
              Wanting to take your business to the next level?
            </p>
            <p className="text-2xl leading-[32px] text-[#ECECEC] lg:text-2xl lg:font-[450px]">
              Are you willing to take your business to the next level, register
              with us today.
            </p>
          </div>
          <button className="mt-[12px] rounded-xl border border-[#0063CC] bg-[#FFF] py-[12px] pr-[16px] pl-[24px] text-[#2A2A2A]">
            Get Started
          </button>
        </div>
      </div>
      <p className="py-4 text-center text-base text-[#84919D]">
        © 2025, Powered by HNG12
      </p>
    </div>
  )
}

export default Footer
