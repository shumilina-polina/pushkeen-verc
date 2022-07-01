import { useTranslation } from "react-i18next";
import s from "./Ladoga.module.scss";
import mainscreen from "../../../assets/projects/ladoga/mainscreen.png";
import phones from "../../../assets/projects/ladoga/phones.png";

import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";

export const Ladoga = () => {
  const { t } = useTranslation();

  return (
    <section className={s.ladoga}>
      <img
        className={s.ladoga_image}
        src={mainscreen}
        alt="Ladoga Audio Guide"
      />
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
        <ButtonDownload text={t("project.list.ladoga.buttons.1")} />
        <div className={s.app}>{t("project.list.ladoga.buttons.2")}</div>
      </div>
      <div className={s.phones_wrapper}>
        <img
          className={s.phones_image}
          src={phones}
          alt="Ladoga Audio Guide Screens"
        />
      </div>
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
      <div className={s.video_wrapper}>
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/projects/ladoga/appvideo.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
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
