import { useTranslation } from "react-i18next";
import s from "./Ladoga.module.scss";
import mainscreen from "assets/projects/ladoga/mainscreen.jpeg";
import phones from "assets/projects/ladoga/phones.jpeg";

import { ButtonDownload } from "shared/components/ButtonDownload/ButtonDownload";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import Video from "shared/components/Video/Video";

export const Ladoga = () => {
  const { t } = useTranslation();

  return (
    <section className={s.ladoga}>
      <Mainscreen path="projects/ladoga/mainscreen.jpeg" />
      <div className="container">
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
            <Video videoSrc={"projects/ladoga/appvideo.mp4"} />
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
      </div>
    </section>
  );
};
