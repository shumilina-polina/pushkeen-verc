import { useTranslation } from "react-i18next";
import s from "./Interior.module.scss";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import Video from "shared/components/Video/Video";
import { Helmet } from "react-helmet";

export const Interior = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>PushKeen - NFT AS A NEW ELEMENT OF INTERIOR</title>
        <meta
          name="description"
          content="Данная коллекция выполнена в сотрудничестве с международно признанным художником, архитектором и дизайнером интерьеров Сергеем Саватеевым. Графические изображения и анимация коллекции вдохновлены состоянием транса, шаманскими ритуалами и этнической музыкой."
        />
      </Helmet>
      <section className={s.interior}>
        <Mainscreen path="nft/interior/mainscreen.jpeg" />
        <div className="container">
          <div className={s.about}>
            <h2 className={s.about_title}>
              {t("project.list.nft_list.interior.about.name")}
            </h2>
            <div className={s.about_content}>
              <h3 className={s.about_content_name}>
                {t("project.list.nft_list.interior.about.content.name")}
              </h3>
              <span className={s.about_content_label}>
                {t("project.list.nft_list.interior.about.content.label_1")}
                <a
                  className={s.link}
                  href="http://sergeisavateev.ru/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("project.list.nft_list.interior.about.content.link")}
                </a>
                {t("project.list.nft_list.interior.about.content.label_2")}
              </span>
            </div>
          </div>
          <div className={s.button_nft}>
            <span>nft</span>
          </div>
          <Swiper
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard]}
            className="interior_1"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img
                src={require("assets/nft/interior/slider_1/image_1.jpeg")}
                alt="interior 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("assets/nft/interior/slider_1/image_2.jpeg")}
                alt="interior 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("assets/nft/interior/slider_1/image_3.jpeg")}
                alt="interior 3"
              />
            </SwiperSlide>
          </Swiper>
          <p className={s.text_1}>
            {t("project.list.nft_list.interior.text_1")}
          </p>
          <Swiper
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard]}
            className="interior_2"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img
                src={require("assets/nft/interior/slider_2/image_1.jpeg")}
                alt="interior 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("assets/nft/interior/slider_2/image_2.jpeg")}
                alt="interior 2"
              />
            </SwiperSlide>
          </Swiper>
          <p className={s.text_2}>
            {t("project.list.nft_list.interior.text_2")}
          </p>
          <Swiper
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard]}
            className="interior_3"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img
                src={require("assets/nft/interior/slider_3/image_1.jpeg")}
                alt="interior 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("assets/nft/interior/slider_3/image_2.jpeg")}
                alt="interior 2"
              />
            </SwiperSlide>
          </Swiper>
          <div className={s.tokens}>
            <h3 className={s.tokens_title}>
              {t("project.list.nft_list.interior.tokens.title")}
            </h3>
            <ul className={s.tokens_text}>
              <li>{t("project.list.nft_list.interior.tokens.1")}</li>
              <li>{t("project.list.nft_list.interior.tokens.2")}</li>
            </ul>
          </div>
          <div className={s.video_wrapper}>
            <LazyLoadComponent>
              <Video videoSrc={"nft/interior/video.mp4"} />
            </LazyLoadComponent>
          </div>
        </div>
      </section>
    </>
  );
};
