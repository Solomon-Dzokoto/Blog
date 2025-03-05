"use client"


import { useRef } from "react"
import quoteIcon from "@/assets/quote.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

const businessOwnerReviews = [
  {
    name: "Kemi .O",
    businessName: "Gossip News Abuja",
    imagePath: "/images/kemi.png",
    text: "Join business owners who have improved customer engagement and streamlined outreach with our AI-powered outbound calling. Hear their success stories and see the impact.",
  },
  {
    name: "Ade. A",
    businessName: "Supermart Lagos",
    imagePath: "/images/ade.png",
    text: "Join business owners who have improved customer engagement and streamlined outreach with our AI-powered outbound calling. Hear their success stories and see the impact.",
  },
  {
    name: "Brian. L",
    businessName: "Ellen Lagos",
    imagePath: "/images/brian.png",
    text: "Join business owners who have improved customer engagement and streamlined outreach with our AI-powered outbound calling. Hear their success stories and see the impact.",
  },
  {
    name: "Kemi .O",
    businessName: "Gossip News Abuja",
    imagePath: "/images/kemi.png",
    text: "Join business owners who have improved customer engagement and streamlined outreach with our AI-powered outbound calling. Hear their success stories and see the impact.",
  },
  {
    name: "Ade. A",
    businessName: "Supermart Lagos",
    imagePath: "/images/ade.png",
    text: "Join business owners who have improved customer engagement and streamlined outreach with our AI-powered outbound calling. Hear their success stories and see the impact.",
  },
  {
    name: "Brian. L",
    businessName: "Ellen Lagos",
    imagePath: "/images/brian.png",
    text: "Join business owners who have improved customer engagement and streamlined outreach with our AI-powered outbound calling. Hear their success stories and see the impact.",
  },
]

function BusinessOwnerReviewsSection() {
  const prevButtonRef = useRef(null)
  const nextButtonRef = useRef(null)
  return (
    <section className="flex flex-col items-center justify-center gap-14 bg-[#F6F8FA] p-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h4 className="max-w-[580px] text-center text-[40px] leading-12 font-[900]">
          What Business Owners Are Saying About Us
        </h4>
        <p className="max-w-[707px] text-center text-base leading-6">
          Join business owners who have improved customer engagement and
          streamlined outreach with our AI-powered outbound calling. Hear their
          success stories and see the impact.
        </p>
      </div>
      {/* Carousel Section */}

      <article className="relative flex h-[400px] w-full justify-center">
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 15,
              centeredSlides: true,
            },
          }}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          modules={[Navigation]}
        >
          {businessOwnerReviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className={`!flex h-full !w-max items-center transition-all duration-500 lg:w-[60%]`}
            >
              <figure
                className={`relative h-full w-full max-w-[308px] shrink-0`}
              >
                <img
                  src={review.imagePath}
                  alt={review.name}
                  className="size-full object-cover object-center"
                />
              </figure>
              <div
                className={`flex max-w-[500px] flex-col gap-8 p-5 transition-all`}
              >
                <img
                  src={quoteIcon.src}
                  alt="quote icon"
                  className="h-auto w-[86px] object-cover"
                />

                <p className="text-base leading-6 break-words">{review.text}</p>
                <div className="mt-6">
                  <p className="text-[2rem] leading-6 font-bold">
                    {review.name}
                  </p>
                  <span className="mt-2 block text-base leading-6">
                    {review.businessName}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-0 left-0 z-50 flex h-full w-[100px] items-center justify-center bg-[#B2E1C8] opacity-80 lg:w-[200px]">
          <button
            type="button"
            ref={prevButtonRef}
            className="flex cursor-pointer items-center justify-center"
          >
            <LeftArrowIcon />
          </button>
        </div>
        <div className="absolute top-0 right-0 z-50 flex h-full w-[100px] items-center justify-center bg-[#B2E1C8] opacity-80 lg:w-[200px]">
          <button
            type="button"
            ref={nextButtonRef}
            className="flex cursor-pointer items-center justify-center"
          >
            <RightArrowIcon />
          </button>
        </div>
      </article>

      <button
        type="button"
        className="cursor-pointer rounded-xl border px-6 py-3 text-center align-middle"
      >
        See more
      </button>
    </section>
  )
}

const LeftArrowIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 46 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.3333 17H1.66667M1.66667 17L17.6667 33M1.66667 17L17.6667 1"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const RightArrowIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33337 19.9999H38.6667M38.6667 19.9999L20 1.33325M38.6667 19.9999L20 38.6666"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BusinessOwnerReviewsSection
