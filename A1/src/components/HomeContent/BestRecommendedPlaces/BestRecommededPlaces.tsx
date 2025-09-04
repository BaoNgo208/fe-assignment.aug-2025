import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { recommededDestinations } from "../../../data/Destination";

const BestRecommededPlaces = () => {
  return (
    <section className="w-full h-[500px] mt-60 bg-[url('/bg-3.png')] relative">
      <div className="w-[80%] h-[450px] mx-auto space-y-15 absolute top-20 left-0 right-0">
        <div className="flex flex-col justify-center  items-center">
          <h4 className="text-[#113D48] font-montez text-[40px] sm:text-[35px] ">
            Best Recommended Places
          </h4>
          <h2 className="text-[#113D48] text-[48px] sm:text-[35px] font-bold mb-5 font-manrope">
            Popular Destination we offer for all
          </h2>
          <p className="text-[#113D48] font-inter text-[18px] w-[65%] sm:text-[14px] mx-auto text-center leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          slidesPerView={4}
          slidesPerGroup={4}
          pagination={{ clickable: true }}
          centeredSlides={false}
          spaceBetween={22}
          centerInsufficientSlides
          className="h-full !px-0"
        >
          {recommededDestinations.map((card, id) => (
            <SwiperSlide key={id} style={{ width: "250px" }}>
              <div>
                <Card card={card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestRecommededPlaces;
