import { url } from "inspector";
import { useTranslation } from "react-i18next";
import s from "./Footer.module.scss";
import vk from "../../assets/svg/social/vk.svg";
import instagram from "../../assets/svg/social/instagram.svg";
import twitter from "../../assets/svg/social/twitter.svg";

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
              <a
                href="https://yandex.ru/maps/-/CCUNE-uU2B"
                target="_blank"
                rel="noopener"
              >
                {t("footer.address_1")}
                <br />
                {t("footer.address_2")}
              </a>
            </span>
          </div>
          <div className={s.social}>
            <ul className={s.links}>
              <li className={s.vk}>
                <a
                  href="https://vk.com/pushkeenru"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={vk} alt="vkontakte" />
                </a>
              </li>
              <li className={s.instagram}>
                <a
                  href="https://instagram.com/pushkeen.ru"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li className={s.twitter}>
                <a
                  href="https://twitter.com/pushkeen_nft?s=21&t=Xm7fVl18n8q-EBGiO1GX1g"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
            </ul>
            <span className={s.label}>PushKeen © 2021-2023</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
