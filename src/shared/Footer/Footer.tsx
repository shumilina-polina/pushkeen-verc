import { useTranslation } from "react-i18next";
import s from "./Footer.module.scss";
import vk from "assets/svg/social/vk.svg";
import telegram from "assets/svg/social/telegram.svg";
import twitter from "assets/svg/social/twitter.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.social}>
            <div className={s.contacts}>
              <span className={s.email}>
                <a href="mailto:hey@pushkeen.ru">hey@pushkeen.ru</a>
              </span>
              <span className={s.phone}>
                <a href="tel:+78126794847">+7(812)679-48-47</a>
              </span>
            </div>
            <ul className={s.links}>
              <li className={s.vk}>
                <a
                  href="https://vk.com/pushkeenru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={vk} alt="vkontakte" />
                </a>
              </li>
              <li className={s.telegram}>
                <a
                  href="https://t.me/pushkeenTG"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
              <li className={s.twitter}>
                <a
                  href="https://twitter.com/pushkeen_nft?s=21&t=Xm7fVl18n8q-EBGiO1GX1g"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
            </ul>
          </div>
          <div className={s.info}>
            <span className={s.address}>
              <a
                href="https://yandex.ru/maps/-/CCUNE-uU2B"
                target="_blank"
                rel="noreferrer"
              >
                {t("footer.address_1")}
                <br />
                {t("footer.address_2")}
              </a>
            </span>
            <span className={s.label}>
              PushKeen © 2021-{new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
