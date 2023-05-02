import { useTranslation } from "react-i18next";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { ButtonDownload } from "shared/components/ButtonDownload/ButtonDownload";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import Video from "shared/components/Video/Video";
import s from "./NewNames.module.scss";
import { Helmet } from "react-helmet";

export const NewNames = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>PushKeen - NEW NAMES IN FASHION BY SOBAKA.RU</title>
        <meta
          name="description"
          content="Наша компания стала партнёром ежегодной премии «Новые имена в моде — 2022» одного из самых узнаваемых глянцевых журналов страны Собака.ru."
        />
      </Helmet>
      <section className={s.newnames}>
        <Mainscreen path="nft/newnames/mainscreen.jpeg" />
        <div className="container">
          <div className={s.about}>
            <div className={s.about_title}>
              <h2 className={s.about_title_name}>
                {t("project.list.nft_list.newnames.about.title.name")}
              </h2>
            </div>
            <div className={s.about_content}>
              <h3 className={s.about_content_name}>
                {t("project.list.nft_list.newnames.about.content.name")}
              </h3>
              <span className={s.about_content_label}>
                {t("project.list.nft_list.newnames.about.content.label")}
              </span>
            </div>
          </div>
          <div className={s.buttons}>
            <a
              href="https://www.sobaka.ru/fashion/heroes/149984"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonDownload
                text={t("project.list.nft_list.newnames.buttons.1")}
              />
            </a>
            <div className={s.button_2}>
              {t("project.list.nft_list.newnames.buttons.2")}
            </div>
          </div>
          <div className={s.video_wrapper}>
            <LazyLoadComponent>
              <Video videoSrc={"nft/newnames/video.mp4"} />
            </LazyLoadComponent>
          </div>
        </div>
      </section>
    </>
  );
};
