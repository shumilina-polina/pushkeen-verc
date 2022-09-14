import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUp } from "shared/components/ArrowUp/ArrowUp";
import { CustomLink } from "shared/components/CustomLink";
import s from "./Collab.module.scss";
import { Slider } from "./Slider/Slider";

export const Collab = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [color, setColor] = useState(localStorage.getItem("tshirt") || "white");

  return (
    <div className="container">
      <section className={s.collab}>
        <ul className={s.breadcrumb}>
          <CustomLink className="link" to="/">
            <li className={s.pushkeen}>{t("merch.collab.breadcrumb.main")}</li>
          </CustomLink>
          &nbsp;&nbsp;/&nbsp;&nbsp;
          <CustomLink className="link" to="/merch">
            <li className={s.merch}>{t("merch.collab.breadcrumb.merch")}</li>
          </CustomLink>
          &nbsp;&nbsp;/&nbsp;&nbsp;
          <li className={s.title}>{t("merch.collab.breadcrumb.nca")}</li>
        </ul>
        <div className={s.main}>
          <Slider color={color} setColor={setColor} />
          <div className={s.main_wrapper}>
            <div className={s.main_text}>
              <span className={s.charity}>
                {t("merch.collab.main.charity")}
              </span>
              <span className={s.title}>{t("merch.collab.main.title")}</span>
              <span className={s.label}>{t("merch.collab.main.label")}</span>
              <span className={s.price}>255O₽</span>
              <div className={s.size_wrapper}>
                <span className={s.size}>{t("merch.collab.main.size")}</span>
                <span className={s.size_grid}>
                  {t("merch.collab.main.size_grid")}
                </span>
              </div>
              <div className={s.size_buttons}>
                <button className={s.size_buttons_m}>m</button>
                <button className={s.size_buttons_l}>l</button>
                <button className={s.size_buttons_xl}>xl</button>
                <button className={s.size_buttons_2xl}>2xl</button>
              </div>
              <span className={s.color}>{t("merch.collab.main.color")}</span>
              <div className={s.color_buttons}>
                <button
                  className={s.color_buttons_black}
                  onClick={() => {
                    localStorage.setItem("tshirt", "black");
                    setColor("black");
                  }}
                  style={
                    color === "black"
                      ? { boxShadow: "0 0 0 1px #fff, 0 0 0 4px #1858fb" }
                      : {}
                  }
                ></button>
                <button
                  onClick={() => {
                    setColor("white");
                    localStorage.setItem("tshirt", "white");
                  }}
                  className={s.color_buttons_white}
                  style={
                    color === "white"
                      ? { boxShadow: "0 0 0 1px #fff, 0 0 0 4px #1858fb" }
                      : {}
                  }
                ></button>
              </div>
              <span className={s.material}>
                {t("merch.collab.main.material")}
              </span>
              <span className={s.cotton}>{t("merch.collab.main.cotton")}</span>
            </div>
            <div className={s.main_button}>
              <a
                href="https://t.me/pushkeen_merch_bot"
                target="_blank"
                rel="noreferrer"
              >
                <button className={s.button}>
                  {t("merch.collab.main.button")}
                </button>
              </a>
              <span className={s.delivery}>
                {t("merch.collab.main.delivery")}
              </span>
            </div>
          </div>
        </div>
        <div className={s.collection}>
          <h3 className={s.collection_title}>
            {t("merch.collab.collection.title")}
          </h3>
          <p className={s.collection_text}>
            {t("merch.collab.collection.text_1")}
          </p>
          <br />
          <br />
          <p className={s.collection_text}>
            {t("merch.collab.collection.text_2")}
          </p>
          <br />
          <br />
          <p className={s.collection_text}>
            {t("merch.collab.collection.text_4")}
          </p>
          <br />
          <br />
          <p className={s.collection_text}>
            {t("merch.collab.collection.text_5")}
          </p>
        </div>
        <div className={s.grid}>
          <div className={s.item_1}>
            <img
              src={require("assets/merch/item_1.jpeg")}
              alt="Photo"
            />
          </div>
          <div className={s.item_2}>
            <img
              src={require("assets/merch/item_2.jpeg")}
              alt="Photo"
            />
          </div>
          <div className={s.item_3}>
            <img
              src={require("assets/merch/item_3.jpeg")}
              alt="Photo"
            />
          </div>
          <div className={s.item_4}>
            <img
              src={require("assets/merch/item_4.jpeg")}
              alt="Photo"
            />
          </div>
          <div className={s.item_5}>
            <img
              src={
                color === "white"
                  ? require("assets/merch/item_5.jpeg")
                  : require("assets/merch/item_5_black.jpeg")
              }
              alt="Photo"
            />
          </div>
          <div className={s.item_6}>
            <span>{t("merch.collab.desc")}</span>
          </div>
          <div className={s.item_7}>
            <img
              src={require("assets/merch/item_7.jpeg")}
              alt="Photo"
            />
          </div>
        </div>
      </section>
      <ArrowUp />
    </div>
  );
};
