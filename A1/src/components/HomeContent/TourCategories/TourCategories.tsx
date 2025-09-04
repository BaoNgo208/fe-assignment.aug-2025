import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CategoryCard from "./CategoryCard";
import { categories } from "../../../data/Category";

const arcStyles = [
  "translate-y-9 ",
  "translate-y-3 ",
  "translate-y-0 rotate-0",
  "translate-y-3 ",
  "translate-y-9 ",
];

const arcStyles2 = [
  "-rotate-6 translate-x-3",
  "-rotate-4 translate-x-2",
  "rotate-0",
  "rotate-4 -translate-x-2",
  "rotate-6 -translate-x-3",
];

const TourCategories = () => {
  return (
    <section className="w-[90%] mx-auto h-[500px] py-20 text-center px-5 ">
      <h4 className="text-[#113D48] text-[40px] sm:text-[30px] italic font-montez">
        Wonderful Place For You
      </h4>
      <h2 className="text-[#113D48] text-[48px] sm:text-[35px] font-bold mb-8 font-manrope">
        Tour Categories
      </h2>

      <Swiper
        modules={[Pagination]}
        slidesPerView={5}
        slidesPerGroup={5}
        spaceBetween={20}
        slidesOffsetBefore={20}
        slidesOffsetAfter={10}
        pagination={{ clickable: true }}
        centeredSlides={false}
        centerInsufficientSlides
        className="h-full"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-end">
            <div className={arcStyles[idx % 5]}>
              <CategoryCard
                image={cat.image}
                title={cat.title}
                rotateClass={arcStyles2[idx]}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TourCategories;
