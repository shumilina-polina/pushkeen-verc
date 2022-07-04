import { useTranslation } from "react-i18next";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import s from "./StreetArt.module.scss";
import mainscreen from "../../../assets/projects/streetart/mainscreen.png";
import box from "../../../assets/projects/streetart/box.png";
import i1 from "../../../assets/projects/streetart/image1.png";
import i2 from "../../../assets/projects/streetart/image2.png";

export const StreetArt = () => {
  const { t } = useTranslation();

  return (
    <section className={s.streetart}>
      <img
        className={s.streetart_image}
        src={mainscreen}
        alt="Street Art Memo"
      />
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
      </div>
      <div className={s.image_wrapper}>
        <img className={s.image_box} src={box} alt="Street Art Memo Box" />
      </div>
      <div className={s.task}>
        <div className={s.task_wrapper}>
          <h3 className={s.point_title}>
            {t("project.list.streetart.steps.point.title")}
          </h3>
          <ul className={s.point_text}>
            <li>{t("project.list.streetart.steps.point.1")}</li>
            <li>{t("project.list.streetart.steps.point.2")}</li>
            <li>{t("project.list.streetart.steps.point.3")}</li>
            <li>{t("project.list.streetart.steps.point.4")}</li>
          </ul>
        </div>
        <div className={s.task_date}>
          <span className={s.number}>6</span>
          <span className={s.month}>
            {t("project.list.streetart.steps.date.month")}
          </span>
          <span className={s.label}>
            {t("project.list.streetart.steps.date.label")}
          </span>
        </div>
      </div>
      <img
        className={s.streetart_image_1}
        src={i1}
        alt="Street Art Memo"
      />
      <img
        className={s.streetart_image_2}
        src={i2}
        alt="Street Art Memo"
      />
    </section>
  );
};