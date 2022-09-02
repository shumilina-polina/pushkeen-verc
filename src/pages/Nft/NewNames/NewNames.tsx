import { useTranslation } from "react-i18next";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import { ButtonDownload } from "shared/components/ButtonDownload/ButtonDownload";
import s from "./NewNames.module.scss";

export const NewNames = () => {
  const { t } = useTranslation();

  return (
    <section className={s.newnames}>
      <LazyLoadImage
        effect="blur"
        className={s.newnames_image}
        src={require("assets/nft/newnames/mainscreen.png")}
        alt="New Names In Fashion"
      />
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
          <video autoPlay loop preload="metadata" muted>
            <source
              src={require("assets/nft/newnames/video.mp4")}
              type="video/mp4"
            />
          </video>
        </LazyLoadComponent>
      </div>
    </section>
  );
};
