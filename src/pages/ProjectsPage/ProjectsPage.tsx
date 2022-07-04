import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Cards } from "../../shared/components/Cards/Cards";
import { projectsList } from "../Home/ProjectsList";
import s from "./ProjectsPage.module.scss";

export const ProjectsPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
