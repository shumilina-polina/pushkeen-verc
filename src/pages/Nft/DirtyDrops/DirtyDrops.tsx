import { useTranslation } from "react-i18next";
import s from "./DirtyDrops.module.scss";
import mainscreen from "../../../assets/nft/dirtydrops/mainscreen.png";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import i1 from "../../../assets/nft/dirtydrops/image1.png";
import i2 from "../../../assets/nft/dirtydrops/image2.png";
import i3 from "../../../assets/nft/dirtydrops/image3.png";
import i4 from "../../../assets/nft/dirtydrops/image4.png";

export const DirtyDrops = () => {
  const { t } = useTranslation();

  return (
    <section className={s.dirtydrops}>
      <img className={s.dirtydrops_image} src={mainscreen} alt="Dirty Drops" />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.nft_list.dirtydrops.about.title.name")}
          </h2>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.nft_list.dirtydrops.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.nft_list.dirtydrops.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <a
          href="https://www.binance.com/en/nft/collection/proboynick-545307944658112512?orderBy=list_time&orderType=-1&isBack=1&id=545307944658112512&order=list_time%40-1"
          target="_blank"
          rel="noopener"
        >
          <ButtonDownload
            text={t("project.list.nft_list.dirtydrops.buttons.1")}
          />
        </a>
        <div className={s.button_2}>
          {t("project.list.nft_list.dirtydrops.buttons.2")}
        </div>
      </div>
      <div className={s.video_wrapper}>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/dirtydrops/video1.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <img className={s.dirtydrops_image_bottom} src={i1} alt="Dirty Drops" />
      <img className={s.dirtydrops_image_bottom} src={i2} alt="Dirty Drops" />
      <div className={s.video_wrapper}>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/nft/dirtydrops/video2.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
      <img className={s.dirtydrops_image_bottom} src={i3} alt="Dirty Drops" />
      <img className={s.dirtydrops_image_bottom} src={i4} alt="Dirty Drops" />
    </section>
  );
};
