import { useTranslation } from "react-i18next";
import s from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.info}>
            <div className={s.contacts}>
              <span className={s.email}>
                <a href="mailto:hey@pushkeen.ru">hey@pushkeen.ru</a>
              </span>
              <span className={s.phone}>
                <a href="tel:+78126794847">+7(812)679-48-47</a>
              </span>
            </div>
            <span className={s.address}>
              {t("footer.address_1")}
              <br />
              {t("footer.address_2")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
