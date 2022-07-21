import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Project } from "../../../../types/types";
import s from "./Card.module.scss";
import saf from "./CardSafari.module.scss";

export const Card = (props: Project) => {
  const { t } = useTranslation();

  const is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const tagArray: any = [];
  for (let i = 0; i < props.tag_count; i++) {
    tagArray.push(i);
  }

  const renderCard = useCallback(() => {
    if (is_safari)
      return (
        <div className={saf.card}>
          <div className={saf.flipper}>
            <div className={saf.front}>
              <img
                src={require(`../../../../assets/${props.imageURL}`)}
                alt={props.name}
              />
            </div>
            <div className={saf.back}>
              <Link className="link" to={"/" + props.name}>
                <div className={saf.link_wrapper}>
                  <h3 className={saf.title}>
                    {t("project.list." + props.content_locales + ".card.title")}
                  </h3>
                  <ul className={saf.content}>
                    {tagArray.map((elem: any) => (
                      <li key={elem}>
                        {t(
                          "project.list." +
                            props.content_locales +
                            ".card.content_" +
                            elem
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div className={s.card}>
          <div className={s.flipper}>
            <div className={s.front}>
              <img
                src={require(`../../../../assets/${props.imageURL}`)}
                alt={props.name}
              />
            </div>
            <div className={s.back}>
              <Link className="link" to={"/" + props.name}>
                <div className={s.link_wrapper}>
                  <h3 className={s.title}>
                    {t("project.list." + props.content_locales + ".card.title")}
                  </h3>
                  <ul className={s.content}>
                    {tagArray.map((elem: any) => (
                      <li key={elem}>
                        {t(
                          "project.list." +
                            props.content_locales +
                            ".card.content_" +
                            elem
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
  }, [is_safari]);

  return <>{renderCard()}</>;
};
