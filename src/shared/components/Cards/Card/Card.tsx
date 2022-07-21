import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Project } from "../../../../types/types";
import s from "./Card.module.scss";

export const Card = (props: Project) => {
  const { t } = useTranslation();

  // const tagArray = [];
  // for (let i = 0; i < props.tag_count; i++) {
  //   tagArray.push(i);
  // }

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
          <span>card</span>
          {/* <Link className="link" to={"/" + props.name}>
            <div className={s.link_wrapper}>
              <h3 className={s.title}>
                {t("project.list." + props.content_locales + ".card.title")}
              </h3>
              <ul className={s.content}>
                {tagArray.map((elem) => (
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
          </Link> */}
        </div>
      </div>
    </div>
  );
};
