import { useTranslation } from "react-i18next";
import s from "./MetaFemHistory.module.scss";
import { ButtonDownload } from "shared/components/ButtonDownload/ButtonDownload";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import { Helmet } from "react-helmet";

export const MetaFemHistory = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>PushKeen - METAFEMHISTORY</title>
        <meta
          name="description"
          content="Выпущенная в Международный женский день коллекция стала ярким напоминанием о том, что каждая из женщин уникальна."
        />
      </Helmet>
      <section className={s.metafemhistory}>
        <Mainscreen path="nft/metafemhistory/mainscreen.jpeg" />
        <div className="container">
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
              src={require("assets/nft/metafemhistory/i1.jpeg")}
              alt="MetaFemHistory"
            />
            <img
              src={require("assets/nft/metafemhistory/i2.jpeg")}
              alt="MetaFemHistory"
            />
          </div>
          <div className={s.image_wrapper}>
            <img
              src={require("assets/nft/metafemhistory/i3.jpeg")}
              alt="MetaFemHistory"
            />
            <img
              src={require("assets/nft/metafemhistory/i4.jpeg")}
              alt="MetaFemHistory"
            />
          </div>
          <div className={s.image_wrapper}>
            <img
              src={require("assets/nft/metafemhistory/i5.jpeg")}
              alt="MetaFemHistory"
            />
          </div>
        </div>
      </section>
    </>
  );
};
