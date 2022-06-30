import { useTranslation } from "react-i18next";
import s from "./Ladoga.module.scss";

export const Ladoga = () => {
  const { t } = useTranslation();

  return (
    <section className={s.ladoga}>
      <img className={s.ladoga_image} src="" alt="Ladoga Audio Guide" />
      <div className={s.tasks}>
        <div className={s.tasks_title}>
          <h2 className={s.tasks_title_name}>
            {t("project.list.ladoga.tasks.title.name")}
          </h2>
          <span className={s.tasks_title_label}>
            {t("project.list.ladoga.tasks.title.label")}
          </span>
        </div>
        <div className={s.tasks_content}>
          <h3 className={s.tasks_content_name}>
            {t("project.list.ladoga.tasks.content.name")}
          </h3>
          <span className={s.tasks_content_label}>
            {t("project.list.ladoga.tasks.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <button className={s.load_button}>
          {t("project.list.ladoga.buttons.1")}
        </button>
        <div className={s.app}>{t("project.list.ladoga.buttons.2")}</div>
      </div>
      <div>VIDEO</div>
      <div className={s.steps}>
        <div className={s.steps_text}>
          <span className={s.text0}>
            {t("project.list.ladoga.steps.text0")}
          </span>
          <span className={s.step}>{t("project.list.ladoga.steps.text1")}</span>
          <br />
          <span className={s.step}>{t("project.list.ladoga.steps.text2")}</span>
          <br />
          <span className={s.step}>{t("project.list.ladoga.steps.text3")}</span>
          <br />
          <span className={s.step}>{t("project.list.ladoga.steps.text4")}</span>
          <br />
          <span className={s.step}>{t("project.list.ladoga.steps.text5")}</span>
        </div>
        <div className={s.steps_date}>
          <span className={s.number}>6</span>
          <span className={s.month}>
            {t("project.list.ladoga.steps.month")}
          </span>
          <span className={s.label}>
            {t("project.list.ladoga.steps.label")}
          </span>
        </div>
      </div>
      <div>VIDEO</div>
      <div className={s.results}>
        <h3 className={s.results_title}>
          {t("project.list.ladoga.results.title")}
        </h3>
        <p className={s.results_text}>
          {t("project.list.ladoga.results.text")}
        </p>
      </div>
    </section>
  );
};
