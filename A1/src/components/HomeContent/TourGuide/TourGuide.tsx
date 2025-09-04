import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { TourGuides } from "../../../data/TourGuide";

const TourGuide = () => {
  return (
    <section className="w-full h-[700px] mt-170 bg-[url('/TourGuideBackground.png')] space-y-10 ">
      <div className="flex flex-col justify-center items-center pt-20">
        <h4 className="text-[#113D48] font-montez text-[40px] sm:text-[35px] ">
          Meet with Guide
        </h4>
        <h2 className="text-[#113D48] text-[48px] sm:text-[35px] font-bold mb-5 font-manrope">
          Tour Guide
        </h2>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={4}
        slidesPerGroup={4}
        pagination={{ clickable: true }}
        centeredSlides={false}
        spaceBetween={20}
        centerInsufficientSlides
        className="w-[80%] h-[55%] !px-0 overflow-visible"
      >
        {TourGuides.map((card, id) => (
          <SwiperSlide key={id} style={{ width: "250px" }}>
            <div className="flex justify-center items-center  overflow-visible">
              <Card card={card} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TourGuide;
