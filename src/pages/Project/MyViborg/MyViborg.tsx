import { useTranslation } from "react-i18next";
import s from "./MyViborg.module.scss";

export const MyViborg = () => {
  const { t } = useTranslation();

  return (
    <section className={s.viborg}>
      <img className={s.viborg_image} src="" alt="My Viborg" />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.myviborg.about.title.name")}
          </h2>
          <span className={s.about_title_label}>
            {t("project.list.myviborg.about.title.label")}
          </span>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.myviborg.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.myviborg.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <button className={s.load_button}>
          {t("project.list.myviborg.buttons.1")}
        </button>
        <div className={s.app}>{t("project.list.myviborg.buttons.2")}</div>
      </div>
      <div>VIDEO</div>
      <div className={s.viborg_app}>
        <h3 className={s.viborg_app_title}>
          {t("project.list.myviborg.app.title")}
        </h3>
        <p className={s.viborg_app_text}>
          {t("project.list.myviborg.app.text")}
        </p>
      </div>
      <div>VIDEO</div>
    </section>
  );
};
