import { useTranslation } from "react-i18next";
import s from "./NewCityArtist.module.scss";
import mainscreen from "../../../assets/nft/newcityartist/mainscreen.png";

export const NewCityArtist = () => {
  const { t } = useTranslation();

  return (
    <section className={s.newcity}>
      <img className={s.newcity_image} src={mainscreen} alt="New City Artist" />
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
          <span className={s.about_content_label}>
            {t("project.list.nft_list.newcity.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <div className={s.button_1}>
          {t("project.list.nft_list.newcity.buttons.1")}
        </div>
      </div>
      <div className={s.video_wrapper_1}>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/newcityartist/video1.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <div className={s.video_wrapper_2}>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/newcityartist/video2.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <p className={s.desc}>{t("project.list.nft_list.newcity.desc")}</p>
      <div className={s.video_wrapper_3}>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/newcityartist/video3.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};
