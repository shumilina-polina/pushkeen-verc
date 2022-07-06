import { useTranslation } from "react-i18next";
import s from "./BackToTheRootsNFT.module.scss";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";

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
          rel="noopener"
        >
          <ButtonDownload text={t("project.list.nft_list.btrNft.buttons.1")} />
        </a>
        <div className={s.button_2}>
          {t("project.list.nft_list.btrNft.buttons.2")}
        </div>
      </div>
      <img
        className={s.btrNft_image1}
        src={require("../../../assets/nft/btrNft/image1.png")}
        alt="Back To The Roots NFT"
      />
      <img
        className={s.btrNft_image2}
        src={require("../../../assets/nft/btrNft/image2.png")}
        alt="Back To The Roots NFT"
      />
    </section>
  );
};
