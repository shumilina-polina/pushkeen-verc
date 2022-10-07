import { useTranslation } from "react-i18next";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import s from "./AppKolpino.module.scss";

export const AppKolpino = () => {
  const { t } = useTranslation();

  return (
    <section className={s.kolpino}>
      <Mainscreen path="projects/appkolpino/mainscreen.jpeg" />
      <div className="container">
        <div className={s.about}>
          <div className={s.about_title}>
            <h2 className={s.about_title_name}>
              {t("project.list.appkolpino.about.title.name")}
            </h2>
            <span className={s.about_title_label}>
              {t("project.list.appkolpino.about.title.label")}
            </span>
          </div>
          <div className={s.about_content}>
            <h3 className={s.about_content_name}>
              {t("project.list.appkolpino.about.content.name")}
            </h3>
            <span className={s.about_content_label}>
              {t("project.list.appkolpino.about.content.label")}
            </span>
          </div>
        </div>
        <div className={s.buttons}>
          <div className={s.game}>{t("project.list.appkolpino.buttons.1")}</div>
          <div className={s.ar}>{t("project.list.appkolpino.buttons.2")}</div>
        </div>
        <div className={s.kolpino_image_1}>
          <img
            src={require("assets/projects/appkolpino/image1.png")}
            alt="Brodilka kolpino"
          />
        </div>
        <div className={s.task}>
          <div className={s.task_wrapper}>
            <h3 className={s.task_title}>
              {t("project.list.appkolpino.steps.task.title")}
            </h3>
            <p className={s.task_text}>
              {t("project.list.appkolpino.steps.task.text")}
            </p>
            <h3 className={s.point_title}>
              {t("project.list.appkolpino.steps.point.title")}
            </h3>
            <ul className={s.point_text}>
              <li>{t("project.list.appkolpino.steps.point.1")}</li>
              <li>{t("project.list.appkolpino.steps.point.2")}</li>
            </ul>
          </div>
          <div className={s.task_date}>
            <span className={s.number}>3</span>
            <span className={s.month}>
              {t("project.list.appkolpino.steps.date.month")}
            </span>
            <span className={s.label}>
              {t("project.list.appkolpino.steps.date.label")}
            </span>
          </div>
        </div>
        <div className={s.kolpino_image_2}>
          <img
            src={require("assets/projects/appkolpino/image2.png")}
            alt="Brodilka kolpino"
          />
        </div>
        <div className={s.result_content}>
          <h3 className={s.result_content_name}>
            {t("project.list.appkolpino.result.title")}
          </h3>
          <span className={s.result_content_label}>
            {t("project.list.appkolpino.result.text")}
          </span>
        </div>
        <div className={s.kolpino_image_3}>
          <img
            src={require("assets/projects/appkolpino/image3.png")}
            alt="Brodilka kolpino"
          />
        </div>
      </div>
    </section>
  );
};
