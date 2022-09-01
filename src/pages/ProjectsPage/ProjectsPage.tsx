import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { Cards } from "../../shared/components/Cards/Cards";
import { projectsList } from "../Home/ProjectsList";
import { BackToTheRoots } from "../Project/BackToTheRoots/BackToTheRoots";
import { BrodilkaKurortnyy } from "../Project/BrodilkaKurortnyy/BrodilkaKurortnyy";
import { BrodilkaMoscow } from "../Project/BrodilkaMoscow/BrodilkaMoscow";
import { BrodilkaViborg } from "../Project/BrodilkaViborg/BrodilkaViborg";
import { GeniusLoci } from "../Project/GeniusLoci/GeniusLoci";
import { GuideKur } from "../Project/GuideKur/GuideKur";
import { Ladoga } from "../Project/Ladoga/Ladoga";
import { MyMoscow } from "../Project/MyMoscow/MyMoscow";
import { MyViborg } from "../Project/MyViborg/MyViborg";
import { Project } from "../Project/Project";
import { StreetArt } from "../Project/StreetArt/StreetArt";
import { PublicArt } from "../PublicArt/PublicArt";
import s from "./ProjectsPage.module.scss";

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
          <div className="container">
            <section className={s.projects_page}>
              <h2 className={s.title}>{t("projects")}</h2>
              <Cards list={projectsList} />
            </section>
          </div>
        }
      />
      <Route
        path="/mymoscow"
        element={
          <Project locales_page="projects" locales_title="mymoscow">
            <MyMoscow />
          </Project>
        }
      />
      <Route
        path="/ladogaGuide"
        element={
          <Project locales_page="projects" locales_title="ladoga">
            <Ladoga />
          </Project>
        }
      />
      <Route
        path="/myViborg"
        element={
          <Project locales_page="projects" locales_title="myviborg">
            <MyViborg />
          </Project>
        }
      />
      <Route
        path="/streetArtMemo"
        element={
          <Project locales_page="projects" locales_title="streetart">
            <StreetArt />
          </Project>
        }
      />
      <Route
        path="/geniusLociMemo"
        element={
          <Project locales_page="projects" locales_title="geniusloci">
            <GeniusLoci />
          </Project>
        }
      />
      <Route
        path="/backToTheRootsLanding"
        element={
          <Project locales_page="projects" locales_title="backtotheroots">
            <BackToTheRoots />
          </Project>
        }
      />
      <Route
        path="/questViborg"
        element={
          <Project locales_page="projects" locales_title="brodilkaviborg">
            <BrodilkaViborg />
          </Project>
        }
      />
      <Route
        path="/questMoscow"
        element={
          <Project locales_page="projects" locales_title="brodilkamoscow">
            <BrodilkaMoscow />
          </Project>
        }
      />
      <Route
        path="/questKurortnyy"
        element={
          <Project locales_page="projects" locales_title="brodilkakurortnyy">
            <BrodilkaKurortnyy />
          </Project>
        }
      />
      <Route
        path="/kurortnyyGuide"
        element={
          <Project locales_page="projects" locales_title="guidekur">
            <GuideKur />
          </Project>
        }
      />
      <Route path="/publicart" element={<PublicArt />} />
    </Routes>
  );
};
