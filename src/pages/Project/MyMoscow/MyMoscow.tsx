import { useTranslation } from "react-i18next";
import s from "./MyMoscow.module.scss";
import { ButtonDownload } from "../../../shared/components/ButtonDownload/ButtonDownload";
import mainscreen from "../../../assets/projects/mymoscow/mainscreen.png";
import logoimg from "../../../assets/projects/mymoscow/logoimg.png";
import gameimg from "../../../assets/projects/mymoscow/image_create.png";
import site_1 from "../../../assets/projects/mymoscow/image_site_1.png";
import site_2 from "../../../assets/projects/mymoscow/image_site_2.png";
import phone from "../../../assets/projects/mymoscow/phone.png";
import book_1 from "../../../assets/projects/mymoscow/book_1.png";
import book_2 from "../../../assets/projects/mymoscow/book_2.png";

export const MyMoscow = () => {
  const { t } = useTranslation();

  return (
    <section className={s.mymoscow}>
      <img className={s.mymoscow_image} src={mainscreen} alt="My Moscow" />
      <div className={s.tasks}>
        <div className={s.tasks_title}>
          <h2 className={s.tasks_title_name}>
            {t("project.list.mymoscow.tasks.title.name")}
          </h2>
          <span className={s.tasks_title_label}>
            {t("project.list.mymoscow.tasks.title.label")}
          </span>
        </div>
        <div className={s.tasks_content}>
          <h3 className={s.tasks_content_name}>
            {t("project.list.mymoscow.tasks.content.name")}
          </h3>
          <span className={s.tasks_content_label}>
            {t("project.list.mymoscow.tasks.content.label")}
          </span>
        </div>
      </div>
      <div className={s.buttons}>
        <a
          href="http://xn--b1ambccbkbqcb8ad.xn--p1ai/"
          target="_blank"
          rel="noreferrer"
        >
          <ButtonDownload text={t("project.list.mymoscow.buttons.1")} />
        </a>
        <div className={s.button_2}>{t("project.list.mymoscow.buttons.2")}</div>
        <div className={s.button_3}>{t("project.list.mymoscow.buttons.3")}</div>
        <div className={s.button_4}>{t("project.list.mymoscow.buttons.4")}</div>
        <div className={s.button_5}>{t("project.list.mymoscow.buttons.5")}</div>
        <div className={s.button_6}>{t("project.list.mymoscow.buttons.6")}</div>
      </div>
      <div className={s.img_wrapper_1}>
        <img className={s.image} src={logoimg} alt="My Moscow" />
        <div className={s.img_label}>
          <span>{t("project.list.mymoscow.image_labels.logo")}</span>
          <div className={s.circle}></div>
        </div>
      </div>
      <div className={s.steps}>
        <div className={s.steps_text}>
          <h3 className={s.title}>{t("project.list.mymoscow.steps.title")}</h3>
          <p className={s.text}>{t("project.list.mymoscow.steps.text")}</p>
          <h3 className={s.ecosystem}>
            {t("project.list.mymoscow.ecosystem.title")}
          </h3>
          <ul className={s.ecosystem_list}>
            <li>{t("project.list.mymoscow.ecosystem.text1")}</li>
            <li>{t("project.list.mymoscow.ecosystem.text2")}</li>
            <li>{t("project.list.mymoscow.ecosystem.text3")}</li>
            <li>{t("project.list.mymoscow.ecosystem.text4")}</li>
            <li>{t("project.list.mymoscow.ecosystem.text5")}</li>
          </ul>
        </div>
        <div className={s.steps_date}>
          <span className={s.number}>7</span>
          <span className={s.month}>
            {t("project.list.mymoscow.steps.month")}
          </span>
          <span className={s.label}>
            {t("project.list.mymoscow.steps.label")}
          </span>
        </div>
      </div>
      <div className={s.img_wrapper_2}>
        <img className={s.image} src={gameimg} alt="My Moscow Game" />
        <div className={s.img_label}>
          <span>{t("project.list.mymoscow.image_labels.game")}</span>
          <div className={s.circle}></div>
        </div>
      </div>
      <div className={s.img_wrapper_3}>
        <img className={s.image} src={site_1} alt="My Moscow Website" />
        <img className={s.image} src={site_2} alt="My Moscow Website" />
        <div className={s.img_label}>
          <span>{t("project.list.mymoscow.image_labels.site")}</span>
          <div className={s.circle}></div>
        </div>
      </div>
      <div className={s.img_wrapper_4}>
        <img className={s.image} src={phone} alt="My Moscow App" />
        <div className={s.img_label}>
          <span>{t("project.list.mymoscow.image_labels.app")}</span>
          <div className={s.circle}></div>
        </div>
      </div>
      <div className={s.img_wrapper_5}>
        <img className={s.image} src={book_1} alt="My Moscow Book" />
        <img className={s.image} src={book_2} alt="My Moscow Book" />
        <div className={s.img_label}>
          <span>{t("project.list.mymoscow.image_labels.guide")}</span>
          <div className={s.circle}></div>
        </div>
      </div>
    </section>
  );
};
