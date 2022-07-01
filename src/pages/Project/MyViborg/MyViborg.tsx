import { useTranslation } from "react-i18next";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import s from "./MyViborg.module.scss";
import mainscreen from "../../../assets/projects/myviborg/mainscreen.png";
import phones from "../../../assets/projects/myviborg/phones.png";

export const MyViborg = () => {
  const { t } = useTranslation();

  return (
    <section className={s.viborg}>
      <img className={s.viborg_image} src={mainscreen} alt="My Viborg" />
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
        <ButtonDownload text={t("project.list.myviborg.buttons.1")} />
        <div className={s.app}>{t("project.list.myviborg.buttons.2")}</div>
        <div className={s.game}>{t("project.list.myviborg.buttons.3")}</div>
      </div>
      <div className={s.phones_wrapper}>
        <img
          className={s.phones_image}
          src={phones}
          alt="My Viborg App Screens"
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
        <video autoPlay loop preload="metadata" muted>
          <source
            src={require("../../../assets/projects/myviborg/appvideo.mp4")}
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};
