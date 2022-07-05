import { useTranslation } from "react-i18next";
import s from "./BackToTheRoots.module.scss";
import mainscreen from "../../../assets/projects/backtotheroots/mainscreen.png";
import landing from "../../../assets/projects/backtotheroots/landing.png";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";

export const BackToTheRoots = () => {
  const { t } = useTranslation();

  return (
    <section className={s.backtotheroots}>
      <img
        className={s.backtotheroots_image}
        src={mainscreen}
        alt="Back To The Roots"
      />
      <div className={s.about}>
        <div className={s.about_title}>
          <h2 className={s.about_title_name}>
            {t("project.list.backtotheroots.about.title.name")}
          </h2>
          <span className={s.about_title_label}>
            {t("project.list.backtotheroots.about.title.label")}
          </span>
        </div>
        <div className={s.about_content}>
          <h3 className={s.about_content_name}>
            {t("project.list.backtotheroots.about.content.name")}
          </h3>
          <span className={s.about_content_label}>
            {t("project.list.backtotheroots.about.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <a href="http://btr.pushkeen.ru/" target="_blank" rel="noopener">
          <ButtonDownload text={t("project.list.backtotheroots.buttons.1")} />
        </a>
      </div>
      <img
        className={s.landing_image}
        src={landing}
        alt="Back To The Roots Landing"
      />
    </section>
  );
};
