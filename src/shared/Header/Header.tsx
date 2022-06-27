import { useTranslation } from "react-i18next";
import { linkValue } from "../../types/types";
import { CustomLink } from "../components/CustomLink";
import s from "./Header.module.scss";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <nav className={s.links}>
            <ul className={s.links_list}>
              <CustomLink
                className="link"
                to="/"
              >
                <li className={s.pushkeen}>{linkValue.Pushkeen}</li>
              </CustomLink>
              <CustomLink
                className="link"
                to="/nft"
              >
                <li className={s.nft}>{linkValue.NFT}</li>
              </CustomLink>
              <CustomLink
                className="link"
                to="/publicart"
              >
                <li className={s.publicart}>{linkValue.PublicArt}</li>
              </CustomLink>
            </ul>
          </nav>

          <div className={s.wrapper_right}>
            <ul className={s.contacts_list}>
              <li className={s.phone}>
                <a href="tel:+78126794847">+ 7 (812) 679-48-47</a>
              </li>
              <li className={s.email}>
                <a href="mailto:hey@pushkeen.ru">hey@pushkeen.ru</a>
              </li>
            </ul>
            <div className={s.lang}>
              <button
                className={
                  s.ru +
                  (localStorage.getItem("i18nextLng") === "ru"
                    ? " " + s.lang_active
                    : "")
                }
                onClick={() => changeLanguage("ru")}
              >
                ru
              </button>
              /
              <button
                className={
                  s.en +
                  (localStorage.getItem("i18nextLng") === "en"
                    ? " " + s.lang_active
                    : "")
                }
                onClick={() => changeLanguage("en")}
              >
                en
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
