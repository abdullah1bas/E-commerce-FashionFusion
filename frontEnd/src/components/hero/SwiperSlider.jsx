import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
import SliderCard from "./SliderCard";
import { useTranslation } from "react-i18next";

const mySlider = [
  { text: "MEN", link: "./images/banner-15.jpg" },
  { text: "WOMEN", link: ".//images/banner-25.jpg" },
];
const SwiperSlider = () => {
  const {t} = useTranslation();
  return (
    <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
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
}

export default SwiperSlider;
