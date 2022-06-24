import { useTranslation } from "react-i18next";
import { Project } from "../../../types/types";
import { Card } from "./Card/Card";
import s from "./Cards.module.scss";

export const Cards = ({ list }: { list: Project[] }) => {
  const { t } = useTranslation();

  return (
    <div className={s.cards}>
      {list.map((elem) => {
        return <Card key={elem.id} {...elem} />;
      })}
    </div>
  );
};
