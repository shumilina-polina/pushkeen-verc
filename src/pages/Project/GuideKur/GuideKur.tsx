import { useTranslation } from "react-i18next";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import s from "./GuideKur.module.scss";

export const GuideKur = () => {
  const { t } = useTranslation();

  return (
    <section className={s.guide}>
      <img
        className={s.guide_image}
        src={require("../../../assets/projects/guidekur/mainscreen.png")}
        alt="Guide Kurortnyy"
      />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.guidekur.about.title.name")}
          </h2>
          <span className={s.about_title_label}>
            {t("project.list.guidekur.about.title.label")}
          </span>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.guidekur.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.guidekur.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <a
          href="https://apps.apple.com/ru/app/id1503899925"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonDownload text={t("project.list.guidekur.buttons.1")} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.pushkeen.kurortny"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonDownload text={t("project.list.guidekur.buttons.2")} />
        </a>
        <div className={s.app}>{t("project.list.guidekur.buttons.3")}</div>
      </div>
      <div className={s.task}>
        <div className={s.task_wrapper}>
          <h3 className={s.task_title}>
            {t("project.list.guidekur.steps.task.title")}
          </h3>
          <p className={s.task_text}>
            {t("project.list.guidekur.steps.task.text")}
          </p>
          <h3 className={s.point_title}>
            {t("project.list.guidekur.steps.point.title")}
          </h3>
          <ul className={s.point_text}>
            <li>{t("project.list.guidekur.steps.point.1")}</li>
            <li>{t("project.list.guidekur.steps.point.2")}</li>
            <li>{t("project.list.guidekur.steps.point.3")}</li>
            <li>{t("project.list.guidekur.steps.point.4")}</li>
          </ul>
        </div>
        <div className={s.task_date}>
          <span className={s.number}>2</span>
          <span className={s.month}>
            {t("project.list.guidekur.steps.date.month")}
          </span>
          <span className={s.label}>
            {t("project.list.guidekur.steps.date.label")}
          </span>
        </div>
      </div>
      <div className={s.video_wrapper}>
        <LazyLoadComponent>
          <video autoPlay loop preload="metadata" muted>
            <source
              src={require("../../../assets/projects/guidekur/video.mp4")}
              type="video/mp4"
            />
          </video>
        </LazyLoadComponent>
      </div>
      <div className={s.result_content}>
        <h3 className={s.result_content_name}>
          {t("project.list.guidekur.result.title")}
        </h3>
        <span className={s.result_content_label}>
          {t("project.list.guidekur.result.text")}
        </span>
      </div>
    </section>
  );
};
