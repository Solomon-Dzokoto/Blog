"use client";

import "swiper/css";
import "swiper/css/navigation";
import {  useRef } from "react";
import quoteIcon from "@/assets/quote.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
  
];

function BusinessOwnerReviewsSection() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <section className="flex flex-col bg-[#F6F8FA] gap-14 items-center justify-center p-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h4 className="font-[900] leading-12 text-center text-[40px] max-w-[580px]">
          What Business Owners Are Saying About Us
        </h4>
        <p className="text-base text-center leading-6 max-w-[707px]">
          Join business owners who have improved customer engagement and
          streamlined outreach with our AI-powered outbound calling. Hear their
          success stories and see the impact.
        </p>
      </div>
      {/* Carousel Section */}

      <article className="w-full  justify-center  flex  h-[400px] relative">
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
              className={`!w-max lg:w-[60%] !flex  h-full transition-all duration-500  items-center`}
            >
              <figure className={`h-full relative  shrink-0 max-w-[308px] w-full`}>
                <img
                  src={review.imagePath}
                  alt={review.name}
                  className="size-full object-cover object-center"
                />
          
                 
              </figure>
              <div
                className={` max-w-[500px] flex flex-col  transition-all  gap-8 p-5`}
              >
                <img
                  src={quoteIcon.src}
                  alt="quote icon"
                  className="w-[86px] h-auto object-cover"
                />

                <p className="text-base leading-6 break-words ">
                  {review.text}
                </p>
                <div className="mt-6">
                  <p className="font-bold text-[2rem] leading-6 ">
                    {review.name}
                  </p>
                  <span className="block mt-2 leading-6 text-base">
                    {review.businessName}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

         <div className="bg-[#B2E1C8] flex justify-center items-center opacity-80 w-[100px] lg:w-[200px] z-50 h-full absolute top-0 left-0">
          <button type="button" ref={prevButtonRef} className="flex cursor-pointer justify-center items-center">

          <LeftArrowIcon />
          </button>
         </div>
          <div className="bg-[#B2E1C8] flex justify-center items-center z-50 opacity-80 w-[100px] lg:w-[200px] h-full absolute top-0 right-0">
            <button type="button" ref={nextButtonRef} className="flex cursor-pointer justify-center items-center">

            <RightArrowIcon />
            </button>
          </div>
      </article>

      <button
        type="button"
        className="cursor-pointer py-3 px-6 text-center align-middle rounded-xl border"
      >
        See more
      </button>
    </section>
  );
}


const LeftArrowIcon = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.3333 17H1.66667M1.66667 17L17.6667 33M1.66667 17L17.6667 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )
}
const RightArrowIcon = () => {
  return (
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33337 19.9999H38.6667M38.6667 19.9999L20 1.33325M38.6667 19.9999L20 38.6666" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


  )
}

export default BusinessOwnerReviewsSection;
