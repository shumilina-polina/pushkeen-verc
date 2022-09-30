import { useTranslation } from "react-i18next";
import { ButtonDownload } from "shared/components/ButtonDownload/ButtonDownload";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import s from "./Halloween.module.scss";
import MediaQuery from "react-responsive";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";

export const Halloween = () => {
  const { t } = useTranslation();

  return (
    <section className={s.halloween}>
      <Mainscreen path="nft/halloween/mainscreen.jpeg" />
      <div className="container">
        <div className={s.about}>
          <div className={s.about_title}>
            <h2 className={s.about_title_name}>
              {t("project.list.nft_list.halloween.about.title.name")}
            </h2>
          </div>
          <div className={s.about_content}>
            <h3 className={s.about_content_name}>
              {t("project.list.nft_list.halloween.about.content.name")}
            </h3>
            <span className={s.about_content_label}>
              {t("project.list.nft_list.halloween.about.content.label")}
              <a
                className={s.about_content_label_link}
                href="https://twitter.com/l1fep4ckage"
                target="_blank"
                rel="noreferrer"
              >
                {t("project.list.nft_list.halloween.about.content.label_1")}
              </a>
              {t("project.list.nft_list.halloween.about.content.label_2")}
            </span>
          </div>
        </div>
        <div className={s.buttons}>
          <a
            href="https://www.binance.com/ru/nft/collection/PushKeen?orderBy=list_time&orderType=-1&isBack=1&id=522004967883681792&order=list_time%40-1"
            target="_blank"
            rel="noreferrer"
          >
            <ButtonDownload
              text={t("project.list.nft_list.halloween.buttons.1")}
            />
          </a>
          <div className={s.button_2}>
            {t("project.list.nft_list.halloween.buttons.2")}
          </div>
        </div>
        <LazyLoadComponent>
          <div className={s.video_wrapper}>
            <MediaQuery minWidth={771}>
              <video autoPlay loop preload="metadata">
                <source
                  src={require("assets/nft/halloween/video1.mp4")}
                  type="video/mp4"
                />
              </video>
            </MediaQuery>
            <MediaQuery maxWidth={770}>
              <video autoPlay loop preload="metadata" muted playsInline>
                <source
                  src={require("assets/nft/halloween/video1.mp4")}
                  type="video/mp4"
                />
              </video>
            </MediaQuery>
            <video autoPlay loop preload="metadata" muted playsInline>
              <source
                src={require("assets/nft/halloween/video2.mp4")}
                type="video/mp4"
              />
            </video>
            <p className={s.desc}>
              {t("project.list.nft_list.halloween.desc")}
            </p>
            <video autoPlay loop preload="metadata" muted playsInline>
              <source
                src={require("assets/nft/halloween/video3.mp4")}
                type="video/mp4"
              />
            </video>
            <video autoPlay loop preload="metadata" muted playsInline>
              <source
                src={require("assets/nft/halloween/video4.mp4")}
                type="video/mp4"
              />
            </video>
            <video autoPlay loop preload="metadata" muted playsInline>
              <source
                src={require("assets/nft/halloween/video5.mp4")}
                type="video/mp4"
              />
            </video>
            <video autoPlay loop preload="metadata" muted playsInline>
              <source
                src={require("assets/nft/halloween/video6.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
        </LazyLoadComponent>
      </div>
    </section>
  );
};
