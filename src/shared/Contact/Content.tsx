import { useTranslation } from "react-i18next";
import s from "./Contact.module.scss";

export const Content = ({
  sendEmail,
  setSubmitMessage,
}: {
  sendEmail: (e: any) => void;
  setSubmitMessage: (param: boolean) => void;
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.content}>
        <div className={s.title_wrapper}>
          <h2 className={s.title}>{t("main.contact.title")}</h2>
          <p className={s.desc}>{t("main.contact.description")}</p>
        </div>
        <div className={s.button_wrapper}>
          <button form="contactForm" type="submit" className={s.button}>
            {t("main.contact.button")}
          </button>
          <a
            href="https://docs.google.com/document/d/1EBRNYnK-V1LIHChnC508tPV9-8Wqj6hEZYxGK9eZ3Z4/edit"
            target="_blank"
            rel="noreferrer"
          >
            <span className={s.label_1}>{t("main.contact.button_label_1")}</span>
            <span className={s.label_2}>{t("main.contact.button_label_2")}</span>
          </a>
        </div>
      </div>
      <form onSubmit={sendEmail} className={s.form} id="contactForm">
        <div className={s.input_wrapper}>
          <div className={s.bracket}>
            <input
              type="text"
              placeholder={t("main.contact.placeholders.name")}
              pattern="^[A-Za-zА-Яа-яЁё\s]+$"
              maxLength={100}
              name="name"
            />
          </div>
          <div className={s.bracket}>
            <input
              type="tel"
              placeholder={t("main.contact.placeholders.phone")}
              pattern="[1-9][0-9]{10}"
              required
              name="phone"
            />
          </div>
          <div className={s.bracket}>
            <input
              type="email"
              placeholder={t("main.contact.placeholders.email")}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              maxLength={50}
              required
              name="email"
            />
          </div>
        </div>
        <textarea
          placeholder={t("main.contact.placeholders.form")}
          minLength={1}
          maxLength={800}
          required
          name="text"
        ></textarea>
      </form>
    </>
  );
};
