import { Swiper, SwiperSlide } from "swiper/react";
import rosatom from "assets/pairs/rosatom.png";
import lenfilm from "assets/pairs/lenfilm.png";
import maxim from "assets/pairs/maxim.png";
import bentley_image from "assets/pairs/bentley.png";
import sobaka from "assets/pairs/sobaka.png";
import dnevnik from "assets/pairs/dnevnik.png";
import gagagames from "assets/pairs/gagagames.png";
import pravitelstvo from "assets/pairs/pravitelstvo.png";
import planetariy from "assets/pairs/planetariy.png";
import rzd from "assets/pairs/rzd.png";
import italy from "assets/pairs/italy_co.png";
import opencity from "assets/pairs/open_city.png";
import cn from "classnames";

import home from "pages/Home/Home.module.scss";
import s from "./PairsSlider.module.scss";

import "swiper/css";
import "swiper/css/grid";

import { Autoplay } from "swiper";
import MediaQuery from "react-responsive";

export default function PairsSlider() {
  let bentley = cn(home.pairs_grid_card, home.bentley);

  return (
    <>
      <MediaQuery minWidth={770}>
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className={s.pairsSlider}
        >
          <SwiperSlide>
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
              <div className={bentley}></div>
              <div className={home.pairs_grid_card}>
                <img src={sobaka} alt="Sobaka" />
              </div>
              <div className={home.pairs_grid_card}>
                <img src={dnevnik} alt="Spb Dnevnik Ru" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={home.pairs_grid}>
              <div className={home.pairs_grid_card}>
                <img src={gagagames} alt="GaGa Games" />
              </div>
              <div className={home.pairs_grid_card}>
                <img src={pravitelstvo} alt="SPB" />
              </div>
              <div className={home.pairs_grid_card}>
                <img src={planetariy} alt="Planetariy" />
              </div>
              <div className={home.pairs_grid_card}>
                <img src={rzd} alt="RZHD" />
              </div>
              <div className={home.pairs_grid_card}>
                <img src={italy} alt="italy co" />
              </div>
              <div className={home.pairs_grid_card}>
                <img src={opencity} alt="Open City" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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
              <div className={cn(s.slide, s.slide_1)}>
                <img src={rosatom} alt="Ros Atom" />
              </div>
              <div className={cn(s.slide, s.slide_2)}>
                <img src={bentley_image} alt="Bentley" />
              </div>
              <div className={cn(s.slide, s.slide_3)}>
                <img src={dnevnik} alt="Spb Dnevnik Ru" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slide_wrapper}>
              <div className={cn(s.slide, s.slide_4)}>
                <img src={lenfilm} alt="LenFilm" />
              </div>
              <div className={cn(s.slide, s.slide_5)}>
                <img src={sobaka} alt="Sobaka" />
              </div>
              <div className={cn(s.slide, s.slide_6)}>
                <img src={gagagames} alt="GaGa Games" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={s.slide_wrapper}>
              <div className={cn(s.slide, s.slide_7)}>
                <img src={pravitelstvo} alt="SPB" />
              </div>
              <div className={cn(s.slide, s.slide_8)}>
                <img src={maxim} alt="Maxim" />
              </div>
              <div className={cn(s.slide, s.slide_9)}>
                <img src={planetariy} alt="Planetariy" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </MediaQuery>
    </>
  );
}
