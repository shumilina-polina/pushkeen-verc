import { useTranslation } from "react-i18next";
import s from "./MetaFemHistory.module.scss";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";

export const MetaFemHistory = () => {
  const { t } = useTranslation();

  return (
    <section className={s.metafemhistory}>
      <img
        className={s.metafemhistory_image}
        src={require("../../../assets/nft/metafemhistory/mainscreen.png")}
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
          href="https://www.binance.com/ru/nft/collection/pushkeen-nft-537978379567890432?orderBy=list_time&orderType=-1&isBack=1&id=537978379567890432&order=list_time%40-1"
          target="_blank"
          rel="noreferrer"
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
        <img
          src={require("../../../assets/nft/metafemhistory/i1.png")}
          alt="MetaFemHistory"
        />
        <img
          src={require("../../../assets/nft/metafemhistory/i2.png")}
          alt="MetaFemHistory"
        />
      </div>
      <div className={s.image_wrapper}>
        <img
          src={require("../../../assets/nft/metafemhistory/i3.png")}
          alt="MetaFemHistory"
        />
        <img
          src={require("../../../assets/nft/metafemhistory/i4.png")}
          alt="MetaFemHistory"
        />
      </div>
      <div className={s.image_wrapper}>
        <img
          src={require("../../../assets/nft/metafemhistory/i5.png")}
          alt="MetaFemHistory"
        />
      </div>
    </section>
  );
};
