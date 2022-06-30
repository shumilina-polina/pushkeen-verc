import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { Cards } from "../../shared/components/Cards/Cards";
import { projectsList } from "../Home/ProjectsList";
import { MyMoscow } from "../Project/MyMoscow/MyMoscow";
import s from "./ProjectsPage.module.scss";

export const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <section className={s.projects_page}>
          <h2 className={s.title}>{t("projects")}</h2>
          <Cards list={projectsList} />
        </section>
      </div>
    </>
  );
};
