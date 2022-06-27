import { Project } from "../../../../types/types";
import s from "./Card.module.scss";

export const Card = (props: Project) => {
  return (
    <article>
      <div className={s.card}>
        <div className={s.front}>
          <img
            src={require(`../../../../assets/${props.imageURL}`)}
            alt={props.title}
          />
        </div>
        <div className={s.back}>
          <h3 className={s.title}>GAGA AR</h3>
        </div>
      </div>
    </article>
    // <article>
    //   <div className={s.card}>
    //     <img
    //       src={require(`../../../../assets/${props.imageURL}`)}
    //       alt={props.title}
    //     />
    //   </div>
    // </article>
  );
};
