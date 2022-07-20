import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { linkValue } from "../../types/types";
import { CustomLink } from "../components/CustomLink";
import s from "./Header.module.scss";
import burger from "../../assets/svg/mobile/burger.svg";
import "../../styles/index.scss";

const Header = () => {
  const [isBurgerOpen, toggleBurder] = useState<boolean>(false);

  const toggleBurgerMode = () => {
    toggleBurder(!isBurgerOpen);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const container = document.getElementsByClassName("mobile_container")[0];
    const footer = document.getElementsByTagName("footer")[0];
    if (isBurgerOpen) {
      document.body.style.backgroundColor = "#161414";
      container.setAttribute("style", "display:none");
      footer.setAttribute("style", "border-top:1px solid #fff");
    }
    return () => {
      document.body.style.backgroundColor = "";
      container.setAttribute("style", "");
      footer.setAttribute("style", "");
    };
  }, [isBurgerOpen]);

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.burger}>
            <span className={s.burger_title}>
              <CustomLink className="link" to="/">
                Pushkeen
              </CustomLink>
            </span>
            <button
              className={
                s.burger_button + (isBurgerOpen ? " " + "burger_active" : "")
              }
              onClick={toggleBurgerMode}
            >
              <img src={burger} alt="menu" />
            </button>
          </div>

          <nav className={s.links}>
            <ul className={s.links_list}>
              <CustomLink className="link" to="/">
                <li className={s.pushkeen}>{linkValue.Pushkeen}</li>
              </CustomLink>
              <CustomLink className="link" to="/nft">
                <li className={s.nft}>{linkValue.NFT}</li>
              </CustomLink>
              <CustomLink className="link" to="/publicart">
                <li className={s.publicart}>{linkValue.PublicArt}</li>
              </CustomLink>
              <CustomLink className="link" to="/merch">
                <li className={s.merch}>{t("header.merch")}</li>
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
                // onClick={() => changeLanguage("en")}
              >
                en
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul
        className={s.burger_menu}
        style={{ display: isBurgerOpen ? "block" : "none" }}
      >
        <div className="container">
          <div className={s.wrapper}>
            <CustomLink
              className="link"
              to="/"
              onClick={() => toggleBurder(false)}
            >
              <li className={s.burger_pushkeen}>{t("header.main")}</li>
            </CustomLink>
            <CustomLink
              className="link"
              to="/nft"
              onClick={() => toggleBurder(false)}
            >
              <li className={s.burger_nft}>{linkValue.NFT}</li>
            </CustomLink>
            <CustomLink
              className="link"
              to="/publicart"
              onClick={() => toggleBurder(false)}
            >
              <li className={s.burger_publicart}>{linkValue.PublicArt}</li>
            </CustomLink>
            <CustomLink
              className="link"
              to="/merch"
              onClick={() => toggleBurder(false)}
            >
              <li className={s.burger_merch}>{t("header.merch")}</li>
            </CustomLink>
            <li>
              <button
                className={
                  s.ru +
                  (localStorage.getItem("i18nextLng") === "ru"
                    ? " " + s.lang_active
                    : "")
                }
                onClick={() => {
                  changeLanguage("ru");
                  toggleBurder(false);
                }}
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
                onClick={() => {
                  // changeLanguage("en");
                  toggleBurder(false);
                }}
              >
                en
              </button>
            </li>
          </div>
        </div>
      </ul>
    </header>
  );
};

export default Header;
