import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import SliderCard from "./SliderCard";
import { useTranslation } from "react-i18next";
import React from "react";

const mySlider = [
  { text: "MEN", link: "./images/banner-15.jpg" },
  { text: "WOMEN", link: "./images/banner-25.jpg" },
];
const SwiperSlider = () => {
  const { t } = useTranslation();
  return (
    // link: swiper demos
    <Swiper
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {mySlider.map((item) => {
        return (
          <SwiperSlide key={item.link} className="parent-slider">
            <img src={item.link} alt="" />

            <SliderCard text={t(item.text)} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default React.memo(SwiperSlider);
