import { Swiper, SwiperSlide } from "swiper/react";
import rosatom from "../../../assets/pairs/rosatom.png";
import lenfilm from "../../../assets/pairs/lenfilm.png";
import maxim from "../../../assets/pairs/maxim.png";
import bentley from "../../../assets/pairs/bentley.png";
import sobaka from "../../../assets/pairs/sobaka.png";
import dnevnik from "../../../assets/pairs/dnevnik.png";
import gagagames from "../../../assets/pairs/gagagames.png";
import pravitelstvo from "../../../assets/pairs/pravitelstvo.png";
import planetariy from "../../../assets/pairs/planetariy.png";

import home from "../../../pages/Home/Home.module.scss";
import s from "./PairsSlider.module.scss";

import "swiper/css";
import "swiper/css/grid";

import { Autoplay, Grid } from "swiper";
import MediaQuery from "react-responsive";

export default function PairsSlider() {
  return (
    <>
      <MediaQuery minWidth={770}>
        <div className={home.pairs_grid}>
          <div className={home.pairs_grid_card}>
            <img src={rosatom} alt="Ros Atom" />
          </div>
          <div className={home.pairs_grid_card}>
            <img src={lenfilm} alt="LenFilm" />
          </div>
          <div className={home.pairs_grid_card}>
            <img src={maxim} alt="Maxim" />
          </div>
          <div className={home.pairs_grid_card}>
            <img src={bentley} alt="Bentley" />
          </div>
          <div className={home.pairs_grid_card}>
            <img src={sobaka} alt="Sobaka" />
          </div>
          <div className={home.pairs_grid_card}>
            <img src={dnevnik} alt="Spb Dnevnik Ru" />
          </div>
          <div className={home.pairs_grid_card}>
            <img src={gagagames} alt="GaGa Games" />
          </div>
          <div className={home.pairs_grid_card}>
            <img src={pravitelstvo} alt="SPB" />
          </div>
          <div className={home.pairs_grid_card}>
            <img src={planetariy} alt="Planetariy" />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={770}>
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className={s.pairsSlider}
        >
          <SwiperSlide>
            <div className={s.slide_wrapper}>
              <div className={s.slide}>
                <img src={rosatom} alt="Ros Atom" />
              </div>
              <div className={s.slide}>
                <img src={bentley} alt="Bentley" />
              </div>
              <div className={s.slide}>
                <img src={gagagames} alt="GaGa Games" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slide_wrapper}>
              <div className={s.slide}>
                <img src={lenfilm} alt="LenFilm" />
              </div>
              <div className={s.slide}>
                <img src={sobaka} alt="Sobaka" />
              </div>
              <div className={s.slide}>
                <img src={pravitelstvo} alt="SPB" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slide_wrapper}>
              <div className={s.slide}>
                <img src={maxim} alt="Maxim" />
              </div>
              <div className={s.slide}>
                <img src={dnevnik} alt="Spb Dnevnik Ru" />
              </div>
              <div className={s.slide}>
                <img src={planetariy} alt="Planetariy" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </MediaQuery>
    </>
  );
}
