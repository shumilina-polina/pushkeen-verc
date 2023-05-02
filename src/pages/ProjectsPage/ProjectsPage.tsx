import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { Cards } from "shared/components/Cards/Cards";
import { Project } from "pages/Project/Project";
import { PublicArt } from "pages/PublicArt/PublicArt";
import s from "./ProjectsPage.module.scss";
import { projectsList } from "shared/constants/lists";
import { Helmet } from "react-helmet";
import { projectRoutes } from "shared/constants/routes";

export const ProjectsPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Helmet>
              <title>PushKeen - Проекты</title>
              <meta name="description" content="Проекты компании PushKeen" />
            </Helmet>
            <div className="container">
              <section className={s.projects_page}>
                <h2 className={s.title}>{t("projects")}</h2>
                <Cards list={projectsList} />
              </section>
            </div>
          </>
        }
      />
      {projectRoutes.map(({ path, locales, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Project locales_page="projects" locales_title={locales}>
              <Component />
            </Project>
          }
        />
      ))}
      <Route path="/publicart" element={<PublicArt />} />
    </Routes>
  );
};
