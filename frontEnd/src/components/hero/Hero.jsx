import { Box, Container } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import IconSection from "./heroC/IconSection";
import SmSliderCard from "./heroC/SmSliderCard";
import SwiperSlider from "./heroC/SwiperSlider";
import React from "react";

const Hero = () => {
  return (
    <Container>
      <Box
        sx={{ pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}
      >
        <SwiperSlider />

        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <SmSliderCard
            title={"NEW ARRIVALS"}
            Class={"SUMMER"}
            price={"SALE 20% OFF"}
            img={".//images/banner-17.jpg"}
          />
          <SmSliderCard
            title={"GAMING 4K"}
            Class={"DESKTOPS &"}
            price={"LAPTOPS"}
            img={"./images/banner-16.jpg"}
          />
        </Box>
      </Box>

      <IconSection />
    </Container>
  );
};

export default React.memo(Hero);
