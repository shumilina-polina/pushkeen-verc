import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonDownload } from "../../shared/components/ButtonDownload/ButtonDownload";
import { CustomLink } from "../../shared/components/CustomLink";
import s from "./Merch.module.scss";

export const Merch = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <section className={s.project}>
        <nav className={s.nav_wrapper}>
          <div className={s.link_wrapper}>
            <CustomLink className="link" to="/">
              <button className={s.project_button}>
                {t("project.button")}
              </button>
            </CustomLink>
          </div>
          <ul className={s.breadcrumb}>
            <CustomLink className="link" to="/">
              <li className={s.pushkeen}>{t("project.breadcrumb.main")}</li>
            </CustomLink>
            &nbsp;&nbsp;/&nbsp;&nbsp;
            <li className={s.title}>{t("header.merch")}</li>
          </ul>
        </nav>
      </section>
      <section className={s.merch}>
        {/* <img className={s.merch_image} src={mainscreen} alt="Merch" /> */}
        <div className={s.about}>
          <div className={s.about_title}>
            <h2 className={s.about_title_name}>
              {t("project.list.merch.about.title.name")}
            </h2>
            <span className={s.about_title_label}>
              {t("project.list.merch.about.title.label")}
            </span>
          </div>
          <div className={s.about_content}>
            <h3 className={s.about_content_name}>
              {t("project.list.merch.about.content.name")}
            </h3>
            <span className={s.about_content_label}>
              {t("project.list.merch.about.content.label_1")}
            </span>
            <br />
            <br />
            <span className={s.about_content_label}>
              {t("project.list.merch.about.content.label_2")}
            </span>
          </div>
        </div>
        <div className={s.buttons}>
          <a
            href="https://apps.apple.com/ru/app/public-art/id1517650290"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonDownload text={t("project.list.merch.buttons.1")} />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=ru.pushkeen.merch"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonDownload text={t("project.list.merch.buttons.2")} />
          </a>
          <div className={s.app}>{t("project.list.merch.buttons.3")}</div>
          <div className={s.game}>{t("project.list.merch.buttons.4")}</div>
        </div>
        <div className={s.img_wrapper_1}>
          {/* <img className={s.image} src={image_1} alt="Public Art Screens" /> */}
          <div className={s.img_label}>
            <span>{t("project.list.merch.image_labels.app")}</span>
            <div className={s.circle}></div>
          </div>
        </div>
        <div className={s.desc}>
          <h3 className={s.desc_title}>{t("project.list.merch.desc.title")}</h3>
          <p className={s.desc_text}>{t("project.list.merch.desc.text")}</p>
        </div>
        <div className={s.img_wrapper_2}>
          {/* <img className={s.image} src={image_2} alt="Public Art" /> */}
          <div className={s.img_label}>
            <span>{t("project.list.merch.image_labels.street")}</span>
            <div className={s.circle}></div>
          </div>
        </div>
        <div className={s.content}>
          <div className={s.mission}>
            <h3 className={s.mission_title}>
              {t("project.list.merch.content.mission.title")}
            </h3>
            <p className={s.mission_text}>
              {t("project.list.merch.content.mission.text_1")}
              <br />
              <br />
              {t("project.list.merch.content.mission.text_2")}
            </p>
          </div>
          <div className={s.direction}>
            <h3 className={s.direction_title}>
              {t("project.list.merch.content.direction.title")}
            </h3>
            <ul className={s.direction_text}>
              <li>{t("project.list.merch.content.direction.text_1")}</li>
              <li>{t("project.list.merch.content.direction.text_2")}</li>
              <li>{t("project.list.merch.content.direction.text_3")}</li>
              <li>{t("project.list.merch.content.direction.text_4")}</li>
            </ul>
          </div>
        </div>
        <div className={s.img_wrapper_3}>
          {/* <img className={s.image} src={image_3} alt="Public Art" /> */}
          <div className={s.img_label}>
            <span>{t("project.list.merch.image_labels.lenfilm")}</span>
            <div className={s.circle}></div>
          </div>
        </div>
        <div className={s.img_wrapper_4}>
          {/* <img className={s.image} src={image_4} alt="Public Art" /> */}
          <div className={s.img_label}>
            <span>{t("project.list.merch.image_labels.box")}</span>
            <div className={s.circle}></div>
          </div>
        </div>
      </section>
    </div>
  );
};
