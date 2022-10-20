import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { linkValue, Project } from "types/types";
import { Card } from "./Card/Card";
import s from "./Cards.module.scss";

export const Cards = ({ list }: { list: Project[] }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <div className={s.cards}>
      {list.map((elem, index) => {
        if (pathname === "/" || pathname === `/${linkValue.NFT}`) {
          if (index < 8) return <Card key={elem.id} {...elem} />;
        } else if (pathname === `/${linkValue.Projects}`) {
          return <Card key={elem.id} {...elem} />;
        }
        return undefined;
      })}
      {pathname === "/" && (
        <Link className={s.card_more_link} to="/projects">
          <button className={s.card_more}>
            <svg width="135" height="105" viewBox="0 0 135 105">
              <path
                d="M135 52.7197L82.4257 0L74.9777 7.46862L113.308 45.1314H50.8203H41.2425H0V57.1221H42.7699L114.408 57.5523L74.9777 97.092L82.8639 105L135 52.7197Z"
                fill="#181818"
              />
            </svg>
            <span>{t("main.button_plus")}</span>
          </button>
        </Link>
      )}
    </div>
  );
};
