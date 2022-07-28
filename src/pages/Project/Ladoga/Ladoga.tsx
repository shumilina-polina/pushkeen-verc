import { useTranslation } from "react-i18next";
import s from "./Ladoga.module.scss";
import mainscreen from "../../../assets/projects/ladoga/mainscreen.png";
import phones from "../../../assets/projects/ladoga/phones.png";

import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import { LazyLoadComponent } from "react-lazy-load-image-component";

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
        <a
          href="https://apps.apple.com/ru/app/%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BB%D0%B0%D0%B4%D0%BE%D0%B3%D0%B0/id1618416317"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonDownload text={t("project.list.ladoga.buttons.1")} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.pushkeen.novayaladoga&hl=ru&gl=US"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonDownload text={t("project.list.ladoga.buttons.2")} />
        </a>
        <div className={s.app}>{t("project.list.ladoga.buttons.3")}</div>
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
          <h3 className={s.text0}>{t("project.list.ladoga.steps.text0")}</h3>
          <ul className={s.steps_list}>
            <li>{t("project.list.ladoga.steps.text1")}</li>
            <li>{t("project.list.ladoga.steps.text2")}</li>
            <li>{t("project.list.ladoga.steps.text3")}</li>
            <li>{t("project.list.ladoga.steps.text4")}</li>
            <li>{t("project.list.ladoga.steps.text5")}</li>
          </ul>
        </div>
        <div className={s.steps_date}>
          <span className={s.number}>3</span>
          <span className={s.month}>
            {t("project.list.ladoga.steps.month")}
          </span>
          <span className={s.label}>
            {t("project.list.ladoga.steps.label")}
          </span>
        </div>
      </div>
      <div className={s.video_wrapper}>
        <LazyLoadComponent>
          <video autoPlay loop preload="metadata" muted>
            <source
              src={require("../../../assets/projects/ladoga/appvideo.mp4")}
              type="video/mp4"
            />
          </video>
        </LazyLoadComponent>
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
