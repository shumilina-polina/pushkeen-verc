import { useTranslation } from "react-i18next";
import s from "./BrodilkaKurortnyy.module.scss";

export const BrodilkaKurortnyy = () => {
  const { t } = useTranslation();

  return (
    <section className={s.kurortnyy}>
      <img
        className={s.kurortnyy_image}
        src={require("../../../assets/projects/brodilkakurortnyy/mainscreen.png")}
        alt="Brodilka Kurortnyy"
      />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.brodilkakurortnyy.about.title.name")}
          </h2>
          <span className={s.about_title_label}>
            {t("project.list.brodilkakurortnyy.about.title.label")}
          </span>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.brodilkakurortnyy.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.brodilkakurortnyy.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <div className={s.game}>
          {t("project.list.brodilkakurortnyy.buttons.1")}
        </div>
        <div className={s.ar}>
          {t("project.list.brodilkakurortnyy.buttons.2")}
        </div>
      </div>
      <img
        className={s.kurortnyy_image_1}
        src={require("../../../assets/projects/brodilkakurortnyy/image1.png")}
        alt="Brodilka Kurortnyy"
      />
      <div className={s.task}>
        <div className={s.task_wrapper}>
          <h3 className={s.task_title}>
            {t("project.list.brodilkakurortnyy.steps.task.title")}
          </h3>
          <p className={s.task_text}>
            {t("project.list.brodilkakurortnyy.steps.task.text")}
          </p>
          <h3 className={s.point_title}>
            {t("project.list.brodilkakurortnyy.steps.point.title")}
          </h3>
          <ul className={s.point_text}>
            <li>{t("project.list.brodilkakurortnyy.steps.point.1")}</li>
            <li>{t("project.list.brodilkakurortnyy.steps.point.2")}</li>
            <li>{t("project.list.brodilkakurortnyy.steps.point.3")}</li>
            <li>{t("project.list.brodilkakurortnyy.steps.point.4")}</li>
            <li>{t("project.list.brodilkakurortnyy.steps.point.5")}</li>
          </ul>
        </div>
        <div className={s.task_date}>
          <span className={s.number}>6</span>
          <span className={s.month}>
            {t("project.list.brodilkakurortnyy.steps.date.month")}
          </span>
          <span className={s.label}>
            {t("project.list.brodilkakurortnyy.steps.date.label")}
          </span>
        </div>
      </div>
      <img
        className={s.kurortnyy_image_2}
        src={require("../../../assets/projects/brodilkakurortnyy/image2.png")}
        alt="Brodilka Kurortnyy"
      />
      <p className={s.desc}>{t("project.list.brodilkakurortnyy.desc")}</p>
      <img
        className={s.kurortnyy_image_3}
        src={require("../../../assets/projects/brodilkakurortnyy/image3.png")}
        alt="Brodilka Kurortnyy"
      />
      <img
        className={s.kurortnyy_image_4}
        src={require("../../../assets/projects/brodilkakurortnyy/image4.png")}
        alt="Brodilka Kurortnyy"
      />
      <img
        className={s.kurortnyy_image_5}
        src={require("../../../assets/projects/brodilkakurortnyy/image5.png")}
        alt="Brodilka Kurortnyy"
      />
      <img
        className={s.kurortnyy_image_6}
        src={require("../../../assets/projects/brodilkakurortnyy/image6.png")}
        alt="Brodilka Kurortnyy"
      />
    </section>
  );
};
