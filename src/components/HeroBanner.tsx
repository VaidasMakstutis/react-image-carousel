import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BannerTile } from "./BannerTile";
import { BannerProps } from "./Banner";

const initialData = require("../utilities/data.json");

type Data = Pick<BannerProps, "title" | "description"> & {
  genres: string[];
  cover_url: string;
};

export const StyledSwiper = styled(Swiper)`
  & .swiper-buttton-next,
  .swiper-button-prev {
    color: white;
  }
`;

const HeroBanner = () => {
  return (
    <StyledSwiper navigation modules={[Navigation]} slidesPerView={1}>
      {initialData.data.map((item: Data, i: number) => (
        <SwiperSlide key={`key-${item.title}-${i}`}>
          <BannerTile title={item.title} tags={item.genres} image={item.cover_url} description={item.description} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default HeroBanner;
