import { Project } from "../../../../../types/types";
import s from "./Card.module.scss";

export const Card = (props: Project) => {
  return (
    <article>
      <div className={s.card}>
        <img
          src={require(`../../../../../assets/projects/${props.imageURL}`)}
          alt={props.title}
        />
      </div>
    </article>
  );
};
