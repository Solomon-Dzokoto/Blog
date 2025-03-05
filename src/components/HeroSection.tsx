import Image from "next/image"
import Link from "next/link"

const brandImages = [
  "logo2.svg",
  "logo3.svg",
  "logo4.svg",
  "logo5.svg",
  "logo6.svg",
  "logo7.svg",
  "logo8.svg",
  "logo9.svg",
]
const HeroSection = () => {
  return (
    <div className="bg-blue-40 relative overflow-hidden border p-6 md:max-h-[907px] lg:py-10 xl:px-20 2xl:max-h-[1400px]">
      <div className="flex h-full flex-col justify-between gap-10 md:flex-row xl:gap-[94px]">
        {/* text */}
        <div className="flex max-w-[675px] flex-col gap-20 md:w-[50%] lg:py-[98px] xl:w-[60%] xl:gap-[168px]">
          <div className="gap-6 space-y-6 lg:space-y-8">
            <h1 className="text-4xl font-bold text-[#090F1C] xl:text-[56px] xl:leading-16">
              Reach More Customers, Follow Up With Ease
            </h1>
            <p className="text-base text-[#53686A] lg:text-2xl lg:leading-10">
              This AI-powered calling solution helps you connect with customers
              effortlessly, track conversations in real-time, and never miss an
              opportunity.
            </p>

            {/* buttons */}
            <div className="mt-20 flex items-center gap-8 md:mt-0">
              <button className="flex items-center gap-1.5 rounded-md bg-[#090F1C] py-3 pr-7 pl-5 text-lg text-white hover:bg-[#000000]">
                Get started{" "}
                <img src="/arrow-right.svg" alt="right arrow" className="" />
              </button>

              <Link href="/" className="text-base text-[#090F1C]">
                Learn more
              </Link>
            </div>
          </div>

          {/* metrics */}
          <div className="flex items-start px-1">
            <div className="w-1/2 max-w-[221px] space-y-3">
              <h2 className="text-xl font-extrabold text-[#2A2A2A] lg:text-[32px]">
                2k+
              </h2>
              <p className="text-sm text-[#888888]">Business Owners</p>
            </div>

            <div className="w-1/2 max-w-[221px] space-y-3">
              <h2 className="text-xl font-extrabold text-[#2A2A2A] lg:text-[32px]">
                20+
              </h2>
              <p className="text-sm text-[#888888]">Countries Supported</p>
            </div>
          </div>
        </div>

        {/* image */}
        <div
          className="aspect-[5/8] max-w-[700px] bg-cover md:w-[50%]"
          style={{ backgroundImage: 'url("/hero_image.png")' }}
        ></div>
      </div>

      {/* bottom banner */}
      <div className="absolute right-0 bottom-0 left-0 grid w-screen items-center bg-[#1B1B1B] py-6 md:-bottom-10 md:translate-y-2 md:bg-transparent">
        <div className="relative z-10 mx-auto flex w-full flex-wrap items-center justify-center gap-6 px-6 md:absolute md:-rotate-1 md:justify-between md:gap-10 lg:gap-14 xl:gap-[120px] xl:px-[80px]">
          {brandImages.map((brandImage, index) => (
            <img key={index} src={`/images/${brandImage}`} alt="brand image" />
          ))}
        </div>
        <Image
          src="/hero_banner_background.svg"
          alt="slanted rectangle"
          width={200}
          height={200}
          className="z-0 hidden w-full md:block"
        />
      </div>
    </div>
  )
}

export default HeroSection
