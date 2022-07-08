import { useTranslation } from "react-i18next";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import s from "./DirtyDrops.module.scss";

export const DirtyDrops = () => {
  const { t } = useTranslation();

  return (
    <section className={s.dirtydrops}>
      <img
        className={s.dirtydrops_image}
        src={require("../../../assets/nft/dirtydrops/mainscreen.png")}
        alt="Dirty Drops"
      />
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
          href="https://www.binance.com/ru/nft/profile/pushkeen-nft-19ed89b1d934c88c25769ca0173a8886"
          target="_blank"
          rel="noreferrer"
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
        <LazyLoadComponent>
          <video autoPlay loop preload="metadata" muted>
            <source
              src={require("../../../assets/nft/dirtydrops/video1.mp4")}
              type="video/mp4"
            />
          </video>
        </LazyLoadComponent>
      </div>
      <img
        className={s.dirtydrops_image_bottom}
        src={require("../../../assets/nft/dirtydrops/image1.png")}
        alt="Dirty Drops"
      />
      <img
        className={s.dirtydrops_image_bottom}
        src={require("../../../assets/nft/dirtydrops/image2.png")}
        alt="Dirty Drops"
      />
      <p className={s.desc}>
        {t("project.list.nft_list.dirtydrops.desc_1")}
        <br/>
        <br/>
        {t("project.list.nft_list.dirtydrops.desc_2")}
      </p>
      <div className={s.video_wrapper}>
        <LazyLoadComponent>
          <video autoPlay loop preload="metadata" muted>
            <source
              src={require("../../../assets/nft/dirtydrops/video2.mp4")}
              type="video/mp4"
            />
          </video>
        </LazyLoadComponent>
      </div>
      <img
        className={s.dirtydrops_image_bottom}
        src={require("../../../assets/nft/dirtydrops/image3.png")}
        alt="Dirty Drops"
      />
      <img
        className={s.dirtydrops_image_bottom}
        src={require("../../../assets/nft/dirtydrops/image4.png")}
        alt="Dirty Drops"
      />
    </section>
  );
};
