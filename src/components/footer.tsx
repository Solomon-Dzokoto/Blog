function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="flex flex-col items-center justify-center gap-12 p-8">
      <div className="w-full max-w-[1280px] rounded-3xl bg-[#1B1B1B] text-center text-[#FFF]">
        <div className="flex flex-col items-center space-y-8 px-4 py-8 lg:pt-[89px] lg:pb-[219px]">
          <div className="space-y-3 lg:w-[627px]">
            <h5 className="text-3xl font-bold lg:text-5xl lg:leading-[68px]">
              Wanting to take your business to the next level?
            </h5>
            <p className="text-base leading-6 text-[#ECECEC] md:text-2xl md:leading-[32px] md:font-[450px]">
              Are you willing to take your business to the next level, register
              with us today.
            </p>
          </div>
          <button className="mt-[12px] cursor-pointer rounded-xl border border-[#0063CC] bg-[#FFF] py-[12px] pr-[16px] pl-[24px] text-[#2A2A2A]">
            Get Started
          </button>
        </div>
      </div>
      <p className="py-4 text-center text-base text-[#84919D]">
        © {year}, Powered by HNG12
      </p>
    </footer>
  )
}

export default Footer
