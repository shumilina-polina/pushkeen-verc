import { useTranslation } from "react-i18next";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import s from "./Koporye.module.scss";

export const Koporye = () => {
  const { t } = useTranslation();

  return (
    <section className={s.koporye}>
      <Mainscreen path="projects/koporye/mainscreen.jpeg" />
      <div className="container">
        <div className={s.about}>
          <div className={s.about_title}>
            <h2 className={s.about_title_name}>
              {t("project.list.koporye.about.title.name")}
            </h2>
            <span className={s.about_title_label}>
              {t("project.list.koporye.about.title.label")}
            </span>
          </div>
          <div className={s.about_content}>
            <h3 className={s.about_content_name}>
              {t("project.list.koporye.about.content.name")}
            </h3>
            <span className={s.about_content_label}>
              {t("project.list.koporye.about.content.label")}
            </span>
          </div>
        </div>
        <div className={s.buttons}>
          <div className={s.game}>{t("project.list.koporye.buttons.1")}</div>
          <div className={s.game}>{t("project.list.koporye.buttons.2")}</div>
        </div>
        <div className={s.image_1}>
          <img
            src={require("assets/projects/koporye/image1.jpeg")}
            alt="koporye"
          />
        </div>
        <div className={s.task}>
          <div className={s.task_wrapper}>
            <h3 className={s.task_title}>
              {t("project.list.koporye.steps.task.title")}
            </h3>
            <p className={s.task_text}>
              {t("project.list.koporye.steps.task.text")}
              <br />
              {t("project.list.koporye.steps.task.text_1")}
            </p>
            <h3 className={s.point_title}>
              {t("project.list.koporye.steps.point.title")}
            </h3>
            <ul className={s.point_text}>
              <li>{t("project.list.koporye.steps.point.1")}</li>
              <li>{t("project.list.koporye.steps.point.2")}</li>
              <li>{t("project.list.koporye.steps.point.3")}</li>
              <li>{t("project.list.koporye.steps.point.4")}</li>
              <li>{t("project.list.koporye.steps.point.5")}</li>
              <li>{t("project.list.koporye.steps.point.6")}</li>
            </ul>
          </div>
          <div className={s.task_date}>
            <span className={s.number}>4</span>
            <span className={s.month}>
              {t("project.list.koporye.steps.date.month")}
            </span>
            <span className={s.label}>
              {t("project.list.koporye.steps.date.label")}
            </span>
          </div>
        </div>
        <div className={s.image_2}>
          <img
            src={require("assets/projects/koporye/image2.jpeg")}
            alt="koporye"
          />
        </div>
        <div className={s.result_content}>
          <h3 className={s.result_content_name}>
            {t("project.list.koporye.result.title")}
          </h3>
          <span className={s.result_content_label}>
            {t("project.list.koporye.result.text")}
          </span>
        </div>
      </div>
    </section>
  );
};
