import { useTranslation } from "react-i18next";
import s from "./BrodilkaMoscow.module.scss";

export const BrodilkaMoscow = () => {
  const { t } = useTranslation();

  return (
    <section className={s.moscow}>
      <img
        className={s.moscow_image}
        src={require("../../../assets/projects/brodilkamoscow/mainscreen.png")}
        alt="Brodilka Moscow"
      />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.brodilkamoscow.about.title.name")}
          </h2>
          <span className={s.about_title_label}>
            {t("project.list.brodilkamoscow.about.title.label")}
          </span>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.brodilkamoscow.about.content.name_1")}
          </h3>
          <p className={s.about_content_label}>
            {t("project.list.brodilkamoscow.about.content.label_1")}
          </p>
          <h3 className={s.task_name}>
            {t("project.list.brodilkamoscow.about.content.name_2")}
          </h3>
          <p className={s.task_label}>
            {t("project.list.brodilkamoscow.about.content.label_2")}
          </p>
        </div>
      </div>
      <div className={s.buttons}>
        <div className={s.game}>
          {t("project.list.brodilkamoscow.buttons.1")}
        </div>
        <div className={s.ar}>{t("project.list.brodilkamoscow.buttons.2")}</div>
      </div>
      <img
        className={s.moscow_image_1}
        src={require("../../../assets/projects/brodilkamoscow/image1.png")}
        alt="Brodilka Moscow"
      />
      <div className={s.task}>
        <div className={s.task_wrapper}>
          <h3 className={s.point_title}>
            {t("project.list.brodilkamoscow.steps.point.title")}
          </h3>
          <ul className={s.point_text}>
            <li>{t("project.list.brodilkamoscow.steps.point.1")}</li>
            <li>{t("project.list.brodilkamoscow.steps.point.2")}</li>
            <li>{t("project.list.brodilkamoscow.steps.point.3")}</li>
            <li>{t("project.list.brodilkamoscow.steps.point.4")}</li>
            <li>{t("project.list.brodilkamoscow.steps.point.5")}</li>
          </ul>
        </div>
        <div className={s.task_date}>
          <span className={s.number}>5</span>
          <span className={s.month}>
            {t("project.list.brodilkamoscow.steps.date.month")}
          </span>
          <span className={s.label}>
            {t("project.list.brodilkamoscow.steps.date.label")}
          </span>
        </div>
      </div>
      <img
        className={s.moscow_image_2}
        src={require("../../../assets/projects/brodilkamoscow/image2.png")}
        alt="Brodilka Moscow"
      />
      <p className={s.desc}>{t("project.list.brodilkamoscow.desc")}</p>
      <img
        className={s.moscow_image_3}
        src={require("../../../assets/projects/brodilkamoscow/image3.png")}
        alt="Brodilka Moscow"
      />
      <img
        className={s.moscow_image_4}
        src={require("../../../assets/projects/brodilkamoscow/image4.png")}
        alt="Brodilka Moscow"
      />
    </section>
  );
};
