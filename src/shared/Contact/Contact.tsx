import { useTranslation } from "react-i18next";
import s from "./Contact.module.scss";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className={s.contact}>
      <div className="container">
        <div className={s.contact_wrapper}>
          <div className={s.content}>
            <div className={s.title_wrapper}>
              <h2 className={s.title}>{t("main.contact.title")}</h2>
              <p className={s.desc}>{t("main.contact.description")}</p>
            </div>
            <div className={s.button_wrapper}>
              <button type="submit" className={s.button}>
                {t("main.contact.button")}
              </button>
              <span className={s.label}>{t("main.contact.button_label")}</span>
            </div>
          </div>
          <form
            className={s.form}
            // onSubmit={handleSubmit}
          >
            <div className={s.input_wrapper}>
              <div className={s.bracket}>
                <input
                  type="text"
                  placeholder={t("main.contact.placeholders.name")}
                  pattern="^[A-Za-zА-Яа-яЁё\s]+$"
                  maxLength={100}
                  // onChange={handleInputName}
                />
              </div>
              <div className={s.bracket}>
                <input
                  type="tel"
                  placeholder={t("main.contact.placeholders.phone")}
                  pattern="[1-9][0-9]{10}"
                  required
                  // onChange={handleInputEmail}
                />
              </div>
              <div className={s.bracket}>
                <input
                  type="email"
                  placeholder={t("main.contact.placeholders.email")}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  maxLength={50}
                  required
                  // onChange={handleInputEmail}
                />
              </div>
            </div>
            <textarea
              placeholder={t("main.contact.placeholders.form")}
              minLength={1}
              maxLength={800}
              required
              // onChange={handleText}
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};
