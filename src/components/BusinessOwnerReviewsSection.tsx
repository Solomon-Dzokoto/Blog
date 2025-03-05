"use client"
import "swiper/css"
import "swiper/css/navigation"
import { useRef , useState, useEffect} from "react"
import quoteIcon from "@/assets/quote.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import  NavigationOptions, {Swiper as SwiperType} from "swiper"
import { Navigation } from "swiper/modules"
import Image from "next/image"

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

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {

    if (swiperInstance && prevButtonRef.current && nextButtonRef.current && swiperInstance.params.navigation) {
    const navigationParams = swiperInstance.params.navigation as any;

      if (!navigationParams) return;

    navigationParams.prevEl = prevButtonRef.current;
    navigationParams.nextEl = nextButtonRef.current;
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
     
    }
  }, [swiperInstance]); 


  return (
    <section className="flex flex-col items-center justify-center gap-14 bg-[#F6F8FA] p-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h4 className="max-w-[580px] text-center text-4xl leading-10   md:text-[40px] md:leading-12 font-[900]">
          What Business Owners Are Saying About Us
        </h4>
        <p className="max-w-[707px] text-center text-sm md:text-base leading-6">
          Join business owners who have improved customer engagement and
          streamlined outreach with our AI-powered outbound calling. Hear their
          success stories and see the impact.
        </p>
      </div>
      {/* Carousel Section */}

      <article className="relative flex h-[700px] md:h-[400px]  w-full justify-center">
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
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
        >
          {businessOwnerReviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className={`!flex h-full !w-[390px] flex-col  md:flex-row items-center  transition-all duration-500 md:!w-[80%] lg:!w-[60%]`}
            >
              <figure
                className={`relative md:h-full w-full h-[400px] md:max-w-[308px] shrink-0`}
              >
                <Image
                  src={review.imagePath}
                  alt={review.name}
                  placeholder="empty"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  fill
                  className="rounded-2xl md:rounded-none object-cover object-center"
                />
              </figure>
              <div
                className={`flex max-w-[500px] flex-col   p-2.5 gap-4 md:gap-8 md:p-5 transition-all`}
              >
                <Image
                  width={86}
                  height={72.4}
                  src={quoteIcon.src}
                  alt="quote icon"
                  className="h-auto w-10 md:w-[86px] object-cover"
                />

                <p className="md:text-base text-sm leading-6 break-words">{review.text}</p>
                <div className="md:mt-6 mt-4">
                  <p className="text-[2rem] text-base leading-6 font-bold">
                    {review.name}
                  </p>
                  <span className="mt-2 block text-sm md:text-base leading-6">
                    {review.businessName}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute hidden top-0 left-0 z-50 md:flex h-full w-[100px] items-center justify-center bg-[#B2E1C8] opacity-80 lg:w-[200px]">
          <button
            type="button"
            ref={prevButtonRef}
            className="flex cursor-pointer items-center justify-center"
          >
            <LeftArrowIcon />
          </button>
        </div>
        <div className="absolute hidden top-0 right-0 z-50 md:flex h-full w-[100px] items-center justify-center bg-[#B2E1C8] opacity-80 lg:w-[200px]">
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
