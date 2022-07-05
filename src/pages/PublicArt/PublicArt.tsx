import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ButtonDownload } from "../../shared/components/ButtonDownload/ButtonDownload";
import { Project } from "../Project/Project";
import s from "./PublicArt.module.scss";
import mainscreen from "../../assets/projects/publicart/mainscreen.png";

export const PublicArt = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Project locales_page="projects" locales_title="publicart">
      <section className={s.publicart}>
        <img className={s.publicart_image} src={mainscreen} alt="Public Art" />
        <div className={s.about}>
          <div className={s.about_title}>
            <h2 className={s.about_title_name}>
              {t("project.list.publicart.about.title.name")}
            </h2>
            <span className={s.about_title_label}>
              {t("project.list.publicart.about.title.label")}
            </span>
          </div>
          <div className={s.about_content}>
            <h3 className={s.about_content_name}>
              {t("project.list.publicart.about.content.name")}
            </h3>
            <span className={s.about_content_label}>
              {t("project.list.publicart.about.content.label")}
            </span>
          </div>
        </div>
        <div className={s.buttons}>
          <a
            href="https://apps.apple.com/ru/app/public-art/id1517650290"
            target="_blank"
            rel="noopener"
          >
            <ButtonDownload text={t("project.list.publicart.buttons.1")} />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=ru.pushkeen.publicart"
            target="_blank"
            rel="noopener"
          >
            <ButtonDownload text={t("project.list.publicart.buttons.2")} />
          </a>
          <div className={s.app}>{t("project.list.publicart.buttons.3")}</div>
          <div className={s.game}>{t("project.list.publicart.buttons.4")}</div>
        </div>
        {/* <img
            className={s.image_1}
            src={image_1}
            alt="Public Art Screens"
          /> */}
        <p className={s.desc}>
          Сейчас Public ARt трансформировался просто из мобильного приложения в
          полноценный бренд, который объединяет вокруг себя коммьюнити
          художников и любителей искусства.
        </p>
        {/* <img
            className={s.image_2}
            src={image_2}
            alt="Public Art"
          /> */}
        <div className={s.content}>
          <div className={s.content_mission}></div>
          <div className={s.content_direction}></div>
        </div>
      </section>
    </Project>
  );
};
