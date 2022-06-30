import { Link } from "react-router-dom";
import { Project } from "../../../../types/types";
import s from "./Card.module.scss";

export const Card = (props: Project) => {
  return (
    <>
      <article>
        <div className={s.card}>
          <div className={s.front}>
            <img
              src={require(`../../../../assets/${props.imageURL}`)}
              alt={props.title}
            />
          </div>
          <div className={s.back}>
            <Link className="link" to={"/" + props.name}>
              <div className={s.link_wrapper}>
                <h3 className={s.title}>GAGA AR</h3>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
