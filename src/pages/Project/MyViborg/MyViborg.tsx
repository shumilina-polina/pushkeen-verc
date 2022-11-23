import { useTranslation } from "react-i18next";
import { ButtonDownload } from "shared/components/ButtonDownload/ButtonDownload";
import s from "./MyViborg.module.scss";
import phones from "assets/projects/myviborg/phones.png";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import Video from "shared/components/Video/Video";

export const MyViborg = () => {
  const { t } = useTranslation();

  return (
    <section className={s.viborg}>
      <Mainscreen path="projects/myviborg/mainscreen.jpeg" />
      <div className="container">
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
          <a
            href="https://apps.apple.com/app/id1591885753"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonDownload text={t("project.list.myviborg.buttons.1")} />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.pushkeen.myviborg"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonDownload text={t("project.list.myviborg.buttons.2")} />
          </a>
          <div className={s.app}>{t("project.list.myviborg.buttons.3")}</div>
          <div className={s.game}>{t("project.list.myviborg.buttons.4")}</div>
          <div className={s.game}>{t("project.list.myviborg.buttons.5")}</div>
        </div>
        <div className={s.phones_wrapper}>
          <LazyLoadImage
            alt="My Viborg App Screens"
            effect="blur"
            src={phones}
          />
        </div>
        <div className={s.task}>
          <div className={s.task_wrapper}>
            <h3 className={s.task_title}>
              {t("project.list.myviborg.steps.task.title")}
            </h3>
            <p className={s.task_text}>
              {t("project.list.myviborg.steps.task.text")}
            </p>
            <h3 className={s.point_title}>
              {t("project.list.myviborg.steps.point.title")}
            </h3>
            <ul className={s.point_text}>
              <li>{t("project.list.myviborg.steps.point.1")}</li>
              <li>{t("project.list.myviborg.steps.point.2")}</li>
              <li>{t("project.list.myviborg.steps.point.3")}</li>
              <li>{t("project.list.myviborg.steps.point.4")}</li>
              <li>{t("project.list.myviborg.steps.point.5")}</li>
            </ul>
          </div>
          <div className={s.task_date}>
            <span className={s.number}>4</span>
            <span className={s.month}>
              {t("project.list.myviborg.steps.date.month")}
            </span>
            <span className={s.label}>
              {t("project.list.myviborg.steps.date.label")}
            </span>
          </div>
        </div>
        <div className={s.video_wrapper}>
          <LazyLoadComponent>
            <Video videoSrc={"projects/myviborg/appvideo.mp4"} />
          </LazyLoadComponent>
        </div>
        <div className={s.results}>
          <h3 className={s.results_title}>
            {t("project.list.myviborg.results.title")}
          </h3>
          <p className={s.results_text}>
            {t("project.list.myviborg.results.text")}
          </p>
        </div>
      </div>
    </section>
  );
};
