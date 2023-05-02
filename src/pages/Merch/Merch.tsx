import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./Merch.module.scss";

export const Merch = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  localStorage.setItem("tshirt", "white");

  return (
    <>
      <Helmet>
        <title>PushKeen - Мерч</title>
        <meta
          name="description"
          content="Коллаборация NEW CITY ARTISTS x PUBLICART"
        />
      </Helmet>
      <section className={s.merch}>
        <div className={s.main}>
          <div className="container">
            <h2 className={s.main_title}>{t("merch.main.title")}</h2>
            <span className={s.main_label}>{t("merch.main.label")}</span>
          </div>
        </div>
        <div className="container">
          <p className={s.title}>{t("merch.main.label")}</p>
          <div className={s.grid}>
            <Link className="link" to="/merch/nca_publicart">
              <div
                className={s.card}
                onClick={() => {
                  localStorage.setItem("tshirt", "white");
                }}
              >
                <div className={s.card_wrapper}>
                  <img
                    src={require("assets/merch/obj_1.jpeg")}
                    alt="first tshirt"
                  />
                  <div className={s.card_colors}>
                    <button className={s.card_colors_black}></button>
                    <button className={s.card_colors_white_active}></button>
                  </div>
                  <h3 className={s.card_title}>{t("merch.card.1.title")}</h3>
                  <span className={s.card_label}>
                    {t("merch.card.1.label")}
                  </span>
                  <span className={s.card_size}>{t("merch.card.1.size")}</span>
                  <span className={s.card_price}>255O₽</span>
                </div>
                <button className={s.card_more}>
                  {t("merch.card.1.more")}
                </button>
              </div>
            </Link>
            <Link className="link" to="/merch/nca_publicart">
              <div
                className={s.card}
                onClick={() => {
                  localStorage.setItem("tshirt", "black");
                }}
              >
                <div className={s.card_wrapper}>
                  <img
                    src={require("assets/merch/obj_2.jpeg")}
                    alt="second tshirt"
                  />
                  <div className={s.card_colors}>
                    <button className={s.card_colors_black_active}></button>
                    <button className={s.card_colors_white}></button>
                  </div>
                  <h3 className={s.card_title}>{t("merch.card.1.title")}</h3>
                  <span className={s.card_label}>
                    {t("merch.card.1.label")}
                  </span>
                  <span className={s.card_size}>{t("merch.card.1.size")}</span>
                  <span className={s.card_price}>255O₽</span>
                </div>
                <button className={s.card_more}>
                  {t("merch.card.1.more")}
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
