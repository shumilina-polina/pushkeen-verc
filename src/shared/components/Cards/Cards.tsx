import { useLocation } from "react-router-dom";
import { linkValue, Project } from "types/types";
import { Card } from "./Card/Card";
import s from "./Cards.module.scss";

export const Cards = ({ list }: { list: Project[] }) => {
  const { pathname } = useLocation();
  return (
    <div className={s.cards}>
      {list.map((elem, index) => {
        if (pathname === "/" || pathname === `/${linkValue.NFT}`) {
          if (index < 9) return <Card key={elem.id} {...elem} />;
        } else if (pathname === `/${linkValue.Projects}`) {
          return <Card key={elem.id} {...elem} />;
        }
        return undefined;
      })}
    </div>
  );
};
