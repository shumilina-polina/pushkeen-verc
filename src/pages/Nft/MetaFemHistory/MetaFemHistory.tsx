import { useTranslation } from "react-i18next";
import s from "./MetaFemHistory.module.scss";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import mainscreen from "../../../assets/nft/metafemhistory/mainscreen.png";
import i1 from "../../../assets/nft/metafemhistory/i1.png";
import i2 from "../../../assets/nft/metafemhistory/i2.png";
import i3 from "../../../assets/nft/metafemhistory/i3.png";
import i4 from "../../../assets/nft/metafemhistory/i4.png";
import i5 from "../../../assets/nft/metafemhistory/i5.png";

export const MetaFemHistory = () => {
  const { t } = useTranslation();

  return (
    <section className={s.metafemhistory}>
      <img
        className={s.metafemhistory_image}
        src={mainscreen}
        alt="MetaFemHistory"
      />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.nft_list.metafemhistory.about.title.name_1")}
            <span className={s.blue}>
              {t("project.list.nft_list.metafemhistory.about.title.name_2")}
            </span>
            {t("project.list.nft_list.metafemhistory.about.title.name_3")}
          </h2>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.nft_list.metafemhistory.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.nft_list.metafemhistory.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <a
          href="https://www.binance.com/en/nft/profile/pushkeen-nft-19ed89b1d934c88c25769ca0173a8886"
          target="_blank"
          rel="noopener"
        >
          <ButtonDownload
            text={t("project.list.nft_list.metafemhistory.buttons.1")}
          />
        </a>
        <div className={s.button_2}>
          {t("project.list.nft_list.metafemhistory.buttons.2")}
        </div>
      </div>
      <div className={s.image_wrapper}>
        <img src={i1} alt="MetaFemHistory" />
        <img src={i2} alt="MetaFemHistory" />
      </div>
      <div className={s.image_wrapper}>
        <img src={i3} alt="MetaFemHistory" />
        <img src={i4} alt="MetaFemHistory" />
      </div>
      <div className={s.image_wrapper}>
        <img src={i5} alt="MetaFemHistory" />
      </div>
    </section>
  );
};
