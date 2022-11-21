import { useTranslation } from "react-i18next";
import s from "./StreetArt.module.scss";
import box from "assets/projects/streetart/box.jpeg";
import i1 from "assets/projects/streetart/image1.jpeg";
import i2 from "assets/projects/streetart/image2.jpeg";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";

export const StreetArt = () => {
  const { t } = useTranslation();

  return (
    <section className={s.streetart}>
      <Mainscreen path="projects/streetart/mainscreen.jpeg" />
      <div className="container">
        <div className={s.about}>
          <div className={s.about_title}>
            <h2 className={s.about_title_name}>
              {t("project.list.streetart.about.title.name")}
            </h2>
            <span className={s.about_title_label}>
              {t("project.list.streetart.about.title.label")}
            </span>
          </div>
          <div className={s.about_content}>
            <h3 className={s.about_content_name}>
              {t("project.list.streetart.about.content.name")}
            </h3>
            <span className={s.about_content_label}>
              {t("project.list.streetart.about.content.label")}
            </span>
          </div>
        </div>
        <div className={s.buttons}>
          <div className={s.button_1}>
            {t("project.list.streetart.buttons.1")}
          </div>
          <div className={s.button_2}>
            {t("project.list.streetart.buttons.2")}
          </div>
          <div className={s.button_2}>
            {t("project.list.streetart.buttons.3")}
          </div>
        </div>
        <div className={s.image_wrapper}>
          <img className={s.image_box} src={box} alt="Street Art Memo Box" />
        </div>
        <div className={s.task}>
          <div className={s.task_wrapper}>
            <h3 className={s.task_title}>
              {t("project.list.streetart.steps.task.title")}
            </h3>
            <p className={s.task_text}>
              {t("project.list.streetart.steps.task.text")}
            </p>
            <h3 className={s.point_title}>
              {t("project.list.streetart.steps.point.title")}
            </h3>
            <ul className={s.point_text}>
              <li>{t("project.list.streetart.steps.point.1")}</li>
              <li>{t("project.list.streetart.steps.point.2")}</li>
              <li>{t("project.list.streetart.steps.point.3")}</li>
              <li>{t("project.list.streetart.steps.point.4")}</li>
              <li>{t("project.list.streetart.steps.point.5")}</li>
              <li>{t("project.list.streetart.steps.point.6")}</li>
              <li>{t("project.list.streetart.steps.point.7")}</li>
            </ul>
          </div>
          <div className={s.task_date}>
            <span className={s.number}>2</span>
            <span className={s.month}>
              {t("project.list.streetart.steps.date.month")}
            </span>
            <span className={s.label}>
              {t("project.list.streetart.steps.date.label")}
            </span>
          </div>
        </div>
        <img className={s.streetart_image_1} src={i1} alt="Street Art Memo" />
        <img className={s.streetart_image_2} src={i2} alt="Street Art Memo" />
        <div className={s.results}>
          <h3 className={s.results_title}>
            {t("project.list.streetart.results.title")}
          </h3>
          <p className={s.results_text}>
            {t("project.list.streetart.results.text")}
          </p>
        </div>
      </div>
    </section>
  );
};
