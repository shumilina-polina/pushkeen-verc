import { useTranslation } from "react-i18next";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import Video from "shared/components/Video/Video";
import s from "./NewCityArtist.module.scss";
import { Helmet } from "react-helmet";

export const NewCityArtist = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>PushKeen - NEW CITY DRIVER</title>
        <meta
          name="description"
          content="Благотворительная коллекция в коллаборации с подопечными объединения «Новые городские художники» стремится поддержать и популяризировать художников с особой ментальностью."
        />
      </Helmet>
      <section className={s.newcity}>
        <Mainscreen path="nft/newcityartist/mainscreen.jpeg" />
        <div className="container">
          <div className={s.about}>
            <div className={s.about_title}>
              <h2 className={s.about_title_name}>
                {t("project.list.nft_list.newcity.about.title.name")}
              </h2>
            </div>
            <div className={s.about_content}>
              <h3 className={s.about_content_name}>
                {t("project.list.nft_list.newcity.about.content.name")}
              </h3>
              <p className={s.about_content_label}>
                {t("project.list.nft_list.newcity.about.content.label_1")}
                <a
                  className={s.about_content_label_link}
                  href="https://newcityartists.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("project.list.nft_list.newcity.about.content.label_2")}
                </a>
                {t("project.list.nft_list.newcity.about.content.label_3")}
              </p>
            </div>
          </div>
          <div className={s.buttons}>
            <div className={s.button_1}>
              {t("project.list.nft_list.newcity.buttons.1")}
            </div>
          </div>
          <p className={s.desc}>
            {t("project.list.nft_list.newcity.desc_1")}
            {t("project.list.nft_list.newcity.desc_2")}
            {t("project.list.nft_list.newcity.desc_3")}
          </p>
          <div className={s.video_wrapper_1}>
            <LazyLoadComponent>
              <Video videoSrc={"nft/newcityartist/video1.mp4"} />
            </LazyLoadComponent>
          </div>
          <h3 className={s.point_title}>
            {t("project.list.nft_list.newcityartist.steps.point.title")}
          </h3>
          <ul className={s.point_text}>
            <li>{t("project.list.nft_list.newcityartist.steps.point.1")}</li>
            <li>{t("project.list.nft_list.newcityartist.steps.point.2")}</li>
            <li>{t("project.list.nft_list.newcityartist.steps.point.3")}</li>
          </ul>
          <img
            className={s.car_image}
            src={require("assets/nft/newcityartist/car.jpeg")}
            alt="New City Driver"
          />
          <div className={s.video_wrapper_2}>
            <LazyLoadComponent>
              <Video videoSrc={"nft/newcityartist/video2.mp4"} />
            </LazyLoadComponent>
          </div>
          <p className={s.desc_2}>
            {t("project.list.nft_list.newcity.desc_4")}
          </p>
          <div className={s.video_wrapper_3}>
            <LazyLoadComponent>
              <Video videoSrc={"nft/newcityartist/video3.mp4"} />
            </LazyLoadComponent>
          </div>
          <div className={s.video_wrapper_4}>
            <LazyLoadComponent>
              <Video videoSrc={"nft/newcityartist/video4.mp4"} />
            </LazyLoadComponent>
          </div>
        </div>
      </section>
    </>
  );
};
