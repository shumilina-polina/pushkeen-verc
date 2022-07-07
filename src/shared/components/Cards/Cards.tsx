import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { linkValue, Project } from "../../../types/types";
import { Card } from "./Card/Card";
import s from "./Cards.module.scss";

export const Cards = ({ list }: { list: Project[] }) => {
  const { t } = useTranslation();
  let currentLink = useParams()["*"];
  return (
    <div className={s.cards}>
      {list.map((elem, index) => {
        if (currentLink === "" || currentLink === linkValue.NFT) {
          if (index < 9) return <Card key={elem.id} {...elem} />;
        } else if (currentLink === linkValue.Projects)
          return <Card key={elem.id} {...elem} />;
      })}
    </div>
  );
};
