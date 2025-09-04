import PopularDestinationCard from "./PopularDestinationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useState } from "react";
import { topDestinations } from "../../../data/Destination";

const TopDestination = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="w-[90%] mx-auto py-20 text-center px-5">
      <h4 className="text-[#113D48] text-[40px] sm:text-[30px] italic font-montez">
        Top Destination
      </h4>
      <h2 className="text-[#113D48] text-[48px] sm:text-[35px] font-bold mb-8 font-manrope">
        Popular Destination
      </h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        onSlideChange={(swiper: any) => setActiveIndex(swiper.activeIndex)}
        modules={[EffectCoverflow]}
        className="h-[500px]"
      >
        {topDestinations.map((cat, idx) => (
          <SwiperSlide key={idx} style={{ width: "260px" }}>
            <div
              className={`transition-all duration-300 ${
                activeIndex === idx ? "brightness-100" : "brightness-75"
              }`}
            >
              <PopularDestinationCard image={cat.image} title={cat.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopDestination;
