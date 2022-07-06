import { useTranslation } from "react-i18next";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import s from "./BrodilkaViborg.module.scss";
import mainscreen from "../../../assets/projects/brodilkaviborg/mainscreen.png";

export const BrodilkaViborg = () => {
  const { t } = useTranslation();

  return (
    <section className={s.viborg}>
      <img className={s.viborg_image} src={mainscreen} alt="Brodilka Viborg" />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.brodilkaviborg.about.title.name")}
          </h2>
          <span className={s.about_title_label}>
            {t("project.list.brodilkaviborg.about.title.label")}
          </span>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.brodilkaviborg.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.brodilkaviborg.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <div className={s.game}>
          {t("project.list.brodilkaviborg.buttons.1")}
        </div>
        <div className={s.ar}>{t("project.list.brodilkaviborg.buttons.2")}</div>
      </div>
      {/* <img className={s.viborg_image_1} src={i1} alt="Brodilka Viborg" /> */}
      <div className={s.task}>
        <div className={s.task_wrapper}>
          <h3 className={s.task_title}>
            {t("project.list.brodilkaviborg.steps.task.title")}
          </h3>
          <p className={s.task_text}>
            {t("project.list.brodilkaviborg.steps.task.text")}
          </p>
          <h3 className={s.point_title}>
            {t("project.list.brodilkaviborg.steps.point.title")}
          </h3>
          <ul className={s.point_text}>
            <li>{t("project.list.brodilkaviborg.steps.point.1")}</li>
            <li>{t("project.list.brodilkaviborg.steps.point.2")}</li>
            <li>{t("project.list.brodilkaviborg.steps.point.3")}</li>
            <li>{t("project.list.brodilkaviborg.steps.point.4")}</li>
            <li>{t("project.list.brodilkaviborg.steps.point.5")}</li>
          </ul>
        </div>
        <div className={s.task_date}>
          <span className={s.number}>4</span>
          <span className={s.month}>
            {t("project.list.brodilkaviborg.steps.date.month")}
          </span>
          <span className={s.label}>
            {t("project.list.brodilkaviborg.steps.date.label")}
          </span>
        </div>
      </div>
      {/* <img className={s.viborg_image_2} src={i2} alt="Brodilka Viborg" /> */}
      {/* <img className={s.viborg_image_3} src={i3} alt="Brodilka Viborg" /> */}
    </section>
  );
};
