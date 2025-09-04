"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { JSX, useState } from "react";
import { testimonials } from "../../../data/Testimonials";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full mx-auto h-[500px] mt-30">
      <div className="flex flex-col justify-center items-center mb-10">
        <h4 className="text-[#113D48] font-montez text-[40px] sm:text-[35px] ">
          Testimonial
        </h4>
        <h2 className="text-[#113D48] text-[48px] sm:text-[35px] font-bold mb-5 font-manrope">
          What Client Say About us
        </h2>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        onSlideChange={(swiper: any) => setActiveIndex(swiper.activeIndex)}
        className="overflow-visible h-[400px]"
      >
        {testimonials.map((t, i) => {
          const groupIndex = Math.floor(activeIndex / 3);
          const middleIndex = groupIndex * 3 + 1;
          const isMiddle = i === middleIndex;

          return (
            <SwiperSlide key={i}>
              <div
                className={` h-[54%] rounded-xl py-6 px-5 flex flex-col bg-[#E9F6F9]  text-center transition-all duration-300 ${
                  isMiddle ? "translate-y-0 z-10" : "translate-y-18  "
                }`}
              >
                <div className="flex gap-x-2">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mb-4"
                  />{" "}
                  <div className="flex flex-col  items-start">
                    <h3 className="font-semibold font-manrope text-[#113D48]">
                      {t.name}
                    </h3>
                    <p className="text-sm font-inter text-[#6E7070]">
                      {t.role}
                    </p>
                  </div>
                  <div className="flex text-[#FFA944] ml-auto mr-7">
                    {FaStar({ size: 10 }) as JSX.Element}
                    {FaStar({ size: 10 }) as JSX.Element}
                    {FaStar({ size: 10 }) as JSX.Element}
                    {FaStar({ size: 10 }) as JSX.Element}
                    {FaStar({ size: 10 }) as JSX.Element}
                  </div>
                </div>

                <p className="w-[90%] text-[#0D0D0C] text-sm font-inter text-justify ">
                  {t.text}
                </p>
                <div
                  className={`absolute left-1/2 -bottom-5 transform -translate-x-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full 
                  ${
                    isMiddle
                      ? "bg-[#1CA8CB] text-[#E35734] "
                      : "bg-white  text-[#1CA8CB]"
                  }`}
                >
                  <span className=" text-xl ">99</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="w-[90%] mx-auto mt-20">
        <img src="/Container (2).png" alt="" className="w-full" />
      </div>
    </section>
  );
};

export default Testimonial;
