import { useTranslation } from "react-i18next";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import s from "./BackToTheRoots.module.scss";

export const BackToTheRoots = () => {
  const { t } = useTranslation();

  return (
    <section className={s.backtotheroots}>
      <img
        className={s.backtotheroots_image}
        src={require("../../../assets/projects/backtotheroots/mainscreen.png")}
        alt="Back To The Roots"
      />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.backtotheroots.about.title.name")}
          </h2>
          <span className={s.about_title_label}>
            {t("project.list.backtotheroots.about.title.label")}
          </span>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.backtotheroots.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.backtotheroots.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <a href="http://btr.pushkeen.ru/" target="_blank" rel="noreferrer">
          <ButtonDownload text={t("project.list.backtotheroots.buttons.1")} />
        </a>
      </div>
      <div className={s.steps}>
        <div className={s.steps_text}>
          <h3 className={s.title}>
            {t("project.list.backtotheroots.steps.task.title")}
          </h3>
          <p className={s.text}>
            {t("project.list.backtotheroots.steps.task.text")}
          </p>
          <h3 className={s.result}>
            {t("project.list.backtotheroots.steps.point.title")}
          </h3>
          <p className={s.result_text}>
            {t("project.list.backtotheroots.steps.point.text")}
          </p>
        </div>
        <div className={s.steps_date}>
          <span className={s.number}>7</span>
          <span className={s.month}>
            {t("project.list.backtotheroots.steps.date.month")}
          </span>
          <span className={s.label}>
            {t("project.list.backtotheroots.steps.date.label")}
          </span>
        </div>
      </div>
      <div className={s.img_wrapper}>
        <img
          className={s.landing_image}
          src={require("../../../assets/projects/backtotheroots/landing.png")}
          alt="Back To The Roots Landing"
        />
        <div className={s.img_label}>
          <span>{t("project.list.backtotheroots.image_labels.site")}</span>
          <div className={s.circle}></div>
        </div>
      </div>
    </section>
  );
};
