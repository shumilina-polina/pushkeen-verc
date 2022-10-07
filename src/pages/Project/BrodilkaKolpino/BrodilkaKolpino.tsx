import { useTranslation } from "react-i18next";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import s from "./BrodilkaKolpino.module.scss";

export const BrodilkaKolpino = () => {
  const { t } = useTranslation();

  return (
    <section className={s.kolpino}>
      <Mainscreen path="projects/brodilkakolpino/mainscreen.jpeg" />
      <div className="container">
        <div className={s.about}>
          <div className={s.about_title}>
            <h2 className={s.about_title_name}>
              {t("project.list.brodilkakolpino.about.title.name")}
            </h2>
            <span className={s.about_title_label}>
              {t("project.list.brodilkakolpino.about.title.label")}
            </span>
          </div>
          <div className={s.about_content}>
            <h3 className={s.about_content_name}>
              {t("project.list.brodilkakolpino.about.content.name")}
            </h3>
            <span className={s.about_content_label}>
              {t("project.list.brodilkakolpino.about.content.label")}
            </span>
          </div>
        </div>
        <div className={s.buttons}>
          <div className={s.game}>
            {t("project.list.brodilkakolpino.buttons.1")}
          </div>
          <div className={s.ar}>
            {t("project.list.brodilkakolpino.buttons.2")}
          </div>
        </div>
        <img
          className={s.kolpino_image_1}
          src={require("assets/projects/brodilkakolpino/image1.jpeg")}
          alt="Brodilka kolpino"
        />
        <div className={s.task}>
          <div className={s.task_wrapper}>
            <h3 className={s.task_title}>
              {t("project.list.brodilkakolpino.steps.task.title")}
            </h3>
            <p className={s.task_text}>
              {t("project.list.brodilkakolpino.steps.task.text")}
            </p>
            <h3 className={s.point_title}>
              {t("project.list.brodilkakolpino.steps.point.title")}
            </h3>
            <ul className={s.point_text}>
              <li>{t("project.list.brodilkakolpino.steps.point.1")}</li>
              <li>{t("project.list.brodilkakolpino.steps.point.2")}</li>
              <li>{t("project.list.brodilkakolpino.steps.point.3")}</li>
              <li>{t("project.list.brodilkakolpino.steps.point.4")}</li>
              <li>{t("project.list.brodilkakolpino.steps.point.5")}</li>
              <li>{t("project.list.brodilkakolpino.steps.point.6")}</li>
            </ul>
          </div>
          <div className={s.task_date}>
            <span className={s.number}>6</span>
            <span className={s.month}>
              {t("project.list.brodilkakolpino.steps.date.month")}
            </span>
            <span className={s.label}>
              {t("project.list.brodilkakolpino.steps.date.label")}
            </span>
          </div>
        </div>
        <img
          className={s.kolpino_image_2}
          src={require("assets/projects/brodilkakolpino/image2.jpeg")}
          alt="Brodilka kolpino"
        />
        <img
          className={s.kolpino_image_3}
          src={require("assets/projects/brodilkakolpino/image3.jpeg")}
          alt="Brodilka kolpino"
        />
        <img
          className={s.kolpino_image_4}
          src={require("assets/projects/brodilkakolpino/image4.jpeg")}
          alt="Brodilka kolpino"
        />
        <div className={s.result_content}>
          <h3 className={s.result_content_name}>
            {t("project.list.brodilkakolpino.result.title")}
          </h3>
          <span className={s.result_content_label}>
            {t("project.list.brodilkakolpino.result.text")}
          </span>
        </div>
      </div>
    </section>
  );
};
