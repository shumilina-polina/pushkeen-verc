import s from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i1 from "../../assets/svg/circle.svg";
import { Cards } from "../../shared/components/Cards/Cards";
import { projectsList } from "./ProjectsList";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                <span className={s.arrow}>Push in culture</span>
                <br />
                <span className={s.star}>keen on techology</span>
              </p>
              <span className={s.slogan_desc}>
                *продвигаем культуру, внедряем инновации
              </span>
            </div>
            <div className={s.rings_wrapper}>
              {/* <video className={s.rings} autoPlay loop preload="metadata" muted>
                <source
                  src={require("../../assets/animate/rings.webm")}
                  type="video/webm"
                />
              </video> */}
              <LazyLoadImage
                className={s.rings}
                src={require("../../assets/animate/ringswhite_1.gif")}
                alt="rings"
                effect="blur"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className={s.projects}>
          <div className={s.projects_wrapper}>
            <h2 className={s.projects_title}>{t("main.projects")}</h2>
            <Link
              className="link"
              to="/projects"
              style={
                projectsList.length > 9
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <button type="button" className={s.button_more}>
                {t("main.button")}
              </button>
            </Link>
          </div>
          <Cards list={projectsList} />
        </section>

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
                <li>{t("main.activity.content.create.list.2")}</li>
                <li>{t("main.activity.content.create.list.3")}</li>
                <li>{t("main.activity.content.create.list.4")}</li>
                <li>{t("main.activity.content.create.list.5")}</li>
              </ul>
            </div>
            <div className={s.buttons_wrapper}>
              <div className={s.develop}>
                <h3 className={s.develop_title}>
                  {t("main.activity.content.develop")}
                </h3>
                <Link className="link" to="/publicart">
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
            <img src={i1} alt="1" />
            {t("main.pairs.list.1")}
            <img src={i1} alt="1" />
            {t("main.pairs.list.2")}
            <img src={i1} alt="1" />
            {t("main.pairs.list.3")}
            <img src={i1} alt="1" />
            {t("main.pairs.list.4")}
            <br />
            <img src={i1} alt="1" />
            {t("main.pairs.list.5")}
            <br />
            <img src={i1} alt="1" />
            {t("main.pairs.list.6")}
            <img src={i1} alt="1" />
            {t("main.pairs.list.7")}
            <img src={i1} alt="1" />
            {t("main.pairs.list.8")}
            <br />
            <img src={i1} alt="1" />
            {t("main.pairs.list.9")}
          </p>
        </section>
      </div>
    </>
  );
};
