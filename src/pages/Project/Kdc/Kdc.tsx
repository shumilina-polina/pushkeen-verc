import { useTranslation } from "react-i18next";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import s from "./Kdc.module.scss";

export const Kdc = () => {
  const { t } = useTranslation();

  return (
    <section className={s.kdc}>
      <Mainscreen path="projects/kdc/mainscreen.jpeg" />
      <div className="container">
        <div className={s.about}>
          <div className={s.about_title}>
            <h2 className={s.about_title_name}>
              {t("project.list.kdc.about.title.name")}
            </h2>
            <span className={s.about_title_label}>
              {t("project.list.kdc.about.title.label")}
            </span>
          </div>
          <div className={s.about_content}>
            <h3 className={s.about_content_name}>
              {t("project.list.kdc.about.content.name")}
            </h3>
            <span className={s.about_content_label}>
              {t("project.list.kdc.about.content.label")}
            </span>
          </div>
        </div>
        <div className={s.buttons}>
          <div className={s.game}>{t("project.list.kdc.buttons.1")}</div>
        </div>
        <div className={s.image_1}>
          <img
            src={require("assets/projects/kdc/image1.png")}
            alt="Kdc Moscowskiy"
          />
        </div>
        <div className={s.task}>
          <div className={s.task_wrapper}>
            <h3 className={s.task_title}>
              {t("project.list.kdc.steps.task.title")}
            </h3>
            <p className={s.task_text}>
              {t("project.list.kdc.steps.task.text")}
            </p>
            <h3 className={s.point_title}>
              {t("project.list.kdc.steps.point.title")}
            </h3>
            <ul className={s.point_text}>
              <li>{t("project.list.kdc.steps.point.1")}</li>
              <li>{t("project.list.kdc.steps.point.2")}</li>
              <li>{t("project.list.kdc.steps.point.3")}</li>
              <br />
              <li>{t("project.list.kdc.steps.point.3_1")}</li>
              <li>{t("project.list.kdc.steps.point.4")}</li>
              <li>{t("project.list.kdc.steps.point.5")}</li>
            </ul>
          </div>
          <div className={s.task_date}>
            <span className={s.number}>3</span>
            <span className={s.month}>
              {t("project.list.kdc.steps.date.month")}
            </span>
            <span className={s.label}>
              {t("project.list.kdc.steps.date.label")}
            </span>
          </div>
        </div>
        <div className={s.image_2}>
          <img
            src={require("assets/projects/kdc/image2.png")}
            alt="Kdc Moscowskiy"
          />
        </div>
        <div className={s.result_content}>
          <h3 className={s.result_content_name}>
            {t("project.list.kdc.result.title")}
          </h3>
          <span className={s.result_content_label}>
            {t("project.list.kdc.result.text_1")}
            <br />
            {t("project.list.kdc.result.text_2")}
          </span>
        </div>
      </div>
    </section>
  );
};
