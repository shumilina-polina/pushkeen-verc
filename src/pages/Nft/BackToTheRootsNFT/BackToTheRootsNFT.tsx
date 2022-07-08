import { useTranslation } from "react-i18next";
import s from "./BackToTheRootsNFT.module.scss";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export const BackToTheRootsNFT = () => {
  const { t } = useTranslation();

  return (
    <section className={s.btrNft}>
      <img
        className={s.btrNft_image}
        src={require("../../../assets/nft/btrNft/mainscreen.png")}
        alt="Back To The Roots NFT"
      />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.nft_list.btrNft.about.title.name")}
          </h2>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.nft_list.btrNft.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.nft_list.btrNft.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <a
          href="https://opensea.io/collection/back-tothe-roots"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonDownload text={t("project.list.nft_list.btrNft.buttons.1")} />
        </a>
        <a href="http://btr.pushkeen.ru/" target="_blank" rel="noreferrer">
          <ButtonDownload text={t("project.list.nft_list.btrNft.buttons.2")} />
        </a>
        <a
          href="https://www.gq.ru/entertainment/posmotrite-na-masshtabnyj-strit-art-performans-v-gorah-severnoj-osetii-alanii"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonDownload text={t("project.list.nft_list.btrNft.buttons.3")} />
        </a>
        <div className={s.button_2}>
          {t("project.list.nft_list.btrNft.buttons.4")}
        </div>
      </div>
      <img
        className={s.btrNft_image1}
        src={require("../../../assets/nft/btrNft/image1.png")}
        alt="Back To The Roots NFT"
      />
      <p className={s.desc}>
        {t("project.list.nft_list.btrNft.desc_1_1")}
        <br />
        <br />
        {t("project.list.nft_list.btrNft.desc_1_2")}
      </p>
      <div className={s.video_wrapper}>
        <LazyLoadComponent>
          <video autoPlay loop preload="metadata" muted>
            <source
              src={require("../../../assets/nft/btrNft/video1.mp4")}
              type="video/mp4"
            />
          </video>
        </LazyLoadComponent>
        <div className={s.img_label}>
          <span>{t("project.list.nft_list.btrNft.image_labels.token1")}</span>
          <div className={s.circle}></div>
        </div>
      </div>
      <div className={s.video_wrapper}>
        <LazyLoadComponent>
          <video autoPlay loop preload="metadata" muted>
            <source
              src={require("../../../assets/nft/btrNft/video2.mp4")}
              type="video/mp4"
            />
          </video>
        </LazyLoadComponent>
        <div className={s.img_label}>
          <span>{t("project.list.nft_list.btrNft.image_labels.token2")}</span>
          <div className={s.circle}></div>
        </div>
      </div>
      <p className={s.desc}>{t("project.list.nft_list.btrNft.desc_2")}</p>
    </section>
  );
};
