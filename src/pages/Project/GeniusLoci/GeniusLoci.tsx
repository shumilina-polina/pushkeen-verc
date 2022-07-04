import { useTranslation } from "react-i18next";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import s from "./GeniusLoci.module.scss";
import mainscreen from "../../../assets/projects/geniusloci/mainscreen.png";
import i1 from "../../../assets/projects/geniusloci/image_1.png";
import i2 from "../../../assets/projects/geniusloci/image_2.png";
import i3 from "../../../assets/projects/geniusloci/image_3.png";
import i4 from "../../../assets/projects/geniusloci/image_4.png";

export const GeniusLoci = () => {
  const { t } = useTranslation();

  return (
    <section className={s.geniusloci}>
      <img
        className={s.geniusloci_image}
        src={mainscreen}
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
        <ButtonDownload text={t("project.list.geniusloci.buttons.1")} />
        <div className={s.game}>{t("project.list.geniusloci.buttons.2")}</div>
      </div>

      <div className={s.image_wrapper_1}>
        <img src={i1} alt="Genius Loci Memo Game" />
        <img src={i2} alt="Genius Loci Memo Game" />
      </div>
      <p className={s.description}>{t("project.list.geniusloci.desc")}</p>
      <div className={s.image_wrapper_2}>
        <img src={i3} alt="Genius Loci Memo Game" />
        <img src={i4} alt="Genius Loci Memo Game" />
      </div>
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
          </ul>
        </div>
      </div>
    </section>
  );
};
