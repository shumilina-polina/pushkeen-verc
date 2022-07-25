import { useTranslation } from "react-i18next";
import s from "./GeniusLoci.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const GeniusLoci = () => {
  const { t } = useTranslation();

  return (
    <section className={s.geniusloci}>
      <img
        className={s.geniusloci_image}
        src={require("../../../assets/projects/geniusloci/mainscreen.png")}
        alt="Genius Loci Memo"
      />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.geniusloci.about.title.name")}
          </h2>
          <span className={s.about_title_label}>
            {t("project.list.geniusloci.about.title.label")}
          </span>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.geniusloci.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.geniusloci.about.content.label_1")}
          </span>
          <br />
          <br />
          <span className={s.about_content_label}>
            {t("project.list.geniusloci.about.content.label_2")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <div className={s.game}>{t("project.list.geniusloci.buttons.1")}</div>
        <div className={s.design}>{t("project.list.geniusloci.buttons.2")}</div>
      </div>

      <div className={s.image_wrapper_1}>
        <LazyLoadImage
          src={require("../../../assets/projects/geniusloci/image_1.png")}
          alt="Genius Loci Memo Game"
        />
        <LazyLoadImage
          src={require("../../../assets/projects/geniusloci/image_2.png")}
          alt="Genius Loci Memo Game"
        />
      </div>
      <p className={s.description}>{t("project.list.geniusloci.desc")}</p>
      <LazyLoadImage
        className={s.image_3}
        src={require("../../../assets/projects/geniusloci/image_3.png")}
        alt="Genius Loci Memo Game"
      />
      <LazyLoadImage
        className={s.image_4}
        src={require("../../../assets/projects/geniusloci/image_4.png")}
        alt="Genius Loci Memo Game"
      />
      <div className={s.task}>
        <div className={s.task_wrapper}>
          <h3 className={s.point_title}>
            {t("project.list.geniusloci.steps.point.title")}
          </h3>
          <ul className={s.point_text}>
            <li>{t("project.list.geniusloci.steps.point.1")}</li>
            <li>{t("project.list.geniusloci.steps.point.2")}</li>
            <li>{t("project.list.geniusloci.steps.point.3")}</li>
            <li>{t("project.list.geniusloci.steps.point.4")}</li>
            <li>{t("project.list.geniusloci.steps.point.5")}</li>
          </ul>
        </div>
        <div className={s.task_date}>
          <span className={s.number}>5</span>
          <span className={s.month}>
            {t("project.list.geniusloci.steps.date.month")}
          </span>
          <span className={s.label}>
            {t("project.list.geniusloci.steps.date.label")}
          </span>
        </div>
      </div>
      <LazyLoadImage
        className={s.image_5}
        src={require("../../../assets/projects/geniusloci/image_5.png")}
        alt="Genius Loci Memo Game"
      />
      <div className={s.results}>
        <h3 className={s.results_title}>
          {t("project.list.geniusloci.results.title")}
        </h3>
        <p className={s.results_text}>
          {t("project.list.geniusloci.results.text")}
        </p>
      </div>
    </section>
  );
};
