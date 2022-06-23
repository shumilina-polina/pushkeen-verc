import s from "./Home.module.scss";
import { Projects } from "./components/Projects/Projects";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { linkValue } from "../../types/types";
import i1 from "../../assets/svg/pairs/arrow_1.svg";
import i2 from "../../assets/svg/pairs/square_2.svg";
import i3 from "../../assets/svg/pairs/star_3.svg";
import i4 from "../../assets/svg/pairs/triangle_4.svg";
import i5 from "../../assets/svg/pairs/figure_5.svg";
import i6 from "../../assets/svg/pairs/half_6.svg";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={s.main}>
        <div className={s.title_container}>
          <h1 className={s.title}>pushkeen</h1>
        </div>
        <div className="container">
          <div className={s.wrapper_slogan}>
            <div className={s.slogan}>
              <p className={s.slogan_text}>
                <span className={s.arrow}>Pushing culture</span>
                <br />
                <span className={s.star}>keen on techology</span>
              </p>
              <span className={s.slogan_desc}>
                *продвигаем культуру, внедряем инновации
              </span>
            </div>
            <img
              className={s.rings}
              src={require("../../assets/animate/rings50fps.gif")}
              alt="rings"
            />
          </div>
        </div>
      </section>
      <div className="container">
        <Projects />
        <section className={s.activity}>
          <h2 className={s.activity_title}>{t("main.activity.title")}</h2>
          <p className={s.activity_desc}>{t("main.activity.description")}</p>
          <div className={s.activity_wrapper}>
            <div className={s.create}>
              <h3 className={s.create_title}>
                {t("main.activity.content.create.title")}
              </h3>
              <ul className={s.create_list}>
                <li>{t("main.activity.content.create.list.1")}</li>
                <li>
                  {t("main.activity.content.create.list.2_1")}
                  <br />
                  {t("main.activity.content.create.list.2_2")}
                </li>
                <li>{t("main.activity.content.create.list.3")}</li>
                <li>{t("main.activity.content.create.list.4")}</li>
                <li>{t("main.activity.content.create.list.5")}</li>
                <li>{t("main.activity.content.create.list.6")}</li>
              </ul>
            </div>
            <div className={s.buttons_wrapper}>
              <div className={s.develop}>
                <h3 className={s.develop_title}>
                  {t("main.activity.content.develop")}
                </h3>
                <Link
                  className="link"
                  to="/publicart"
                  onClick={() => {
                    localStorage.setItem("currentLink", linkValue.NFT);
                  }}
                >
                  <button className={s.develop_button}>
                    <span className={s.top}>push</span>
                    <br />
                    <span className={s.bottom}>
                      {t("main.activity.content.in")} public art
                    </span>
                  </button>
                </Link>
              </div>
              <div className={s.reality}>
                <h3 className={s.reality_title}>
                  {t("main.activity.content.reality")}
                </h3>
                <Link className="link" to="/nft">
                  <button className={s.reality_button}>
                    <span className={s.top}>push</span>
                    <br />
                    <span className={s.bottom}>
                      {t("main.activity.content.in")} nft
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className={s.pairs}>
          <h2 className={s.pairs_title}>{t("main.pairs.title")}</h2>
          <p className={s.pairs_content}>
            {t("main.pairs.list.1")}
            <img src={i1} alt="1" />
            {t("main.pairs.list.2")}
            <img src={i2} alt="1" />
            {t("main.pairs.list.3")}
            <img src={i3} alt="1" />
            {t("main.pairs.list.4")}
            <br />
            <img src={i4} alt="1" />
            {t("main.pairs.list.5")}
            <img src={i5} alt="1" />
            {t("main.pairs.list.6")}
            <img src={i6} alt="1" />
            {t("main.pairs.list.7")}
          </p>
        </section>
      </div>
    </>
  );
};