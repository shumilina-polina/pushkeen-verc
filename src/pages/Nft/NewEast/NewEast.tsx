import { useTranslation } from "react-i18next";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { ButtonDownload } from "shared/components/ButtonDownload/ButtonDownload";
import { Mainscreen } from "shared/components/Mainscreen/Mainscreen";
import Video from "shared/components/Video/Video";
import s from "./NewEast.module.scss";
import { Helmet } from "react-helmet";

export const NewEast = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>PushKeen - NEW EAST TECH AWARDS 2021</title>
        <meta
          name="description"
          content="22 декабря 2021 года при поддержке the Untitled прошла торжественная церемония вручения диджитал-премии «New East Tech Awards». Лауреаты в номинациях с собственными стартапами получили от нас специальную награду в виде NFT-статуэтки, выполненной в 3D."
        />
      </Helmet>
      <section className={s.neweast}>
        <Mainscreen path="nft/neweast/mainscreen.jpeg" />
        <div className="container">
          <div className={s.about}>
            <div className={s.about_title}>
              <h2 className={s.about_title_name}>
                {t("project.list.nft_list.neweast.about.title.name")}
              </h2>
            </div>
            <div className={s.about_content}>
              <h3 className={s.about_content_name}>
                {t("project.list.nft_list.neweast.about.content.name")}
              </h3>
              <span className={s.about_content_label}>
                {t("project.list.nft_list.neweast.about.content.label")}
              </span>
            </div>
          </div>
          <div className={s.buttons}>
            <a
              href="https://opensea.io/collection/neweasttechawards"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonDownload
                text={t("project.list.nft_list.neweast.buttons.1")}
              />
            </a>
            <div className={s.button_2}>
              {t("project.list.nft_list.neweast.buttons.2")}
            </div>
          </div>
          <div className={s.video_wrapper}>
            <LazyLoadComponent>
              <Video videoSrc={"nft/neweast/video.mp4"} />
            </LazyLoadComponent>
          </div>
          <p className={s.desc}>{t("project.list.nft_list.neweast.desc")}</p>
        </div>
      </section>
    </>
  );
};
