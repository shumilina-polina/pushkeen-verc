import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { Cards } from "shared/components/Cards/Cards";
import { BackToTheRoots } from "pages/Project/BackToTheRoots/BackToTheRoots";
import { BrodilkaKurortnyy } from "pages/Project/BrodilkaKurortnyy/BrodilkaKurortnyy";
import { BrodilkaMoscow } from "pages/Project/BrodilkaMoscow/BrodilkaMoscow";
import { BrodilkaViborg } from "pages/Project/BrodilkaViborg/BrodilkaViborg";
import { GeniusLoci } from "pages/Project/GeniusLoci/GeniusLoci";
import { GuideKur } from "pages/Project/GuideKur/GuideKur";
import { Ladoga } from "pages/Project/Ladoga/Ladoga";
import { MyMoscow } from "pages/Project/MyMoscow/MyMoscow";
import { MyViborg } from "pages/Project/MyViborg/MyViborg";
import { Project } from "pages/Project/Project";
import { StreetArt } from "pages/Project/StreetArt/StreetArt";
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
              <title>PushKeen - Projects</title>
              <meta name="description" content="NFT" />
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
