import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { linkValue } from "../../types/types";
import s from "./Header.module.scss";

const Header = () => {
  const [currentLink, setCurrentLink] = useState(
    localStorage.getItem("currentLink") || linkValue.Pushkeen
  );

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
              <Link
                className="link"
                to="/"
                onClick={() => {
                  setCurrentLink(linkValue.Pushkeen);
                  localStorage.setItem("currentLink", linkValue.Pushkeen);
                }}
              >
                <li
                  className={
                    s.pushkeen +
                    (currentLink === linkValue.Pushkeen
                      ? " " + s.link_active
                      : "")
                  }
                >
                  {linkValue.Pushkeen}
                </li>
              </Link>
              <Link
                className="link"
                to="/nft"
                onClick={() => {
                  setCurrentLink(linkValue.NFT);
                  localStorage.setItem("currentLink", linkValue.NFT);
                }}
              >
                <li
                  className={
                    s.nft +
                    (currentLink === linkValue.NFT ? " " + s.link_active : "")
                  }
                >
                  {linkValue.NFT}
                </li>
              </Link>
              <Link
                className="link"
                to="/publicart"
                onClick={() => {
                  setCurrentLink(linkValue.PublicArt);
                  localStorage.setItem("currentLink", linkValue.PublicArt);
                }}
              >
                <li
                  className={
                    s.publicart +
                    (currentLink === linkValue.PublicArt
                      ? " " + s.link_active
                      : "")
                  }
                >
                  {linkValue.PublicArt}
                </li>
              </Link>
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
