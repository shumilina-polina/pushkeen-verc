import s from "./Home.module.scss";
import { Projects } from "./components/Projects/Projects";
import { useTranslation } from "react-i18next";

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
                <button className={s.develop_button}>
                  <span className={s.top}>push</span>
                  <br />
                  <span className={s.bottom}>
                    {t("main.activity.content.in")} public art
                  </span>
                </button>
              </div>
              <div className={s.reality}>
                <h3 className={s.reality_title}>
                  {t("main.activity.content.reality")}
                </h3>
                <button className={s.reality_button}>
                  <span className={s.top}>push</span>
                  <br />
                  <span className={s.bottom}>
                    {t("main.activity.content.in")} nft
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
