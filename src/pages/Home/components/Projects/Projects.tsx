import { useTranslation } from "react-i18next";
import { Card } from "./Card/Card";
import s from "./Projects.module.scss";
import { projectsList } from "./ProjectsList";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className={s.projects}>
        <h2 className={s.projects_title}>{t("main.projects")}</h2>
        <div className={s.cards}>
          {projectsList.map((elem) => {
            return <Card key={elem.id} {...elem} />;
          })}
        </div>
    </section>
  );
};
