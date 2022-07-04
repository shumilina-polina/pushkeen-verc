import { useTranslation } from "react-i18next";
import s from "./Halloween.module.scss";
import mainscreen from "../../../assets/nft/halloween/mainscreen.png";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import video1 from "../../../assets/nft/halloween/video1.png";
import video2 from "../../../assets/nft/halloween/video2.png";
import video3 from "../../../assets/nft/halloween/video3.png";
import video4 from "../../../assets/nft/halloween/video4.png";

export const Halloween = () => {
  const { t } = useTranslation();

  return (
    <section className={s.halloween}>
      <img className={s.halloween_image} src={mainscreen} alt="Halloween" />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.nft_list.halloween.about.title.name")}
          </h2>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.nft_list.halloween.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.nft_list.halloween.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <ButtonDownload text={t("project.list.nft_list.halloween.buttons.1")} />
        <div className={s.button_2}>
          {t("project.list.nft_list.halloween.buttons.2")}
        </div>
      </div>
      <div className={s.video_wrapper}>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/halloween/video1.mp4")}
            type="video/mp4"
          />
        </video>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/halloween/video2.mp4")}
            type="video/mp4"
          />
        </video>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/halloween/video3.mp4")}
            type="video/mp4"
          />
        </video>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/halloween/video4.mp4")}
            type="video/mp4"
          />
        </video>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/halloween/video5.mp4")}
            type="video/mp4"
          />
        </video>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/halloween/video6.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};
