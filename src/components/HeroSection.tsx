import Image from "next/image"
// import rightArrow from '@/assets/arrow-right.svg';
// import heroImage from '@/assets/hero_image.png';
// import slantedRectangle from '@/assets/slanted_rectangle.svg';
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="bg-blue-40 relative h-screen max-h-[907px] overflow-hidden border p-6 lg:px-20 lg:py-10">
      <div className="flex h-full justify-between gap-10 lg:gap-[94px]">
        {/* text */}
        <div className="flex w-[60%] max-w-[675px] flex-col justify-between gap-10 lg:gap-[168px] lg:py-[98px]">
          <div className="gap-6 space-y-6 lg:space-y-8">
            <h1 className="text-2xl font-bold text-[#090F1C] lg:text-[56px] lg:leading-16">
              Reach More Customers, Follow Up With Ease
            </h1>
            <p className="text-base text-[#53686A] lg:text-2xl lg:leading-10">
              This AI-powered calling solution helps you connect with customers
              effortlessly, track conversations in real-time, and never miss an
              opportunity.
            </p>

            {/* buttons */}
            <div className="flex items-center gap-8">
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
          className="h-full w-[40%] bg-cover"
          style={{ backgroundImage: `url("/hero_background.png")` }}
        >
          {/* <Image src={heroImage} alt='image of customer care representative' /> */}
        </div>
      </div>

      {/* bottom banner */}
      <div className="absolute right-0 -bottom-8 left-0">
        <Image
          src="/hero_banner_background.svg"
          alt="slanted rectangle"
          width={200}
          height={200}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default HeroSection
