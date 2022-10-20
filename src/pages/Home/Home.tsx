import s from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Cards } from "shared/components/Cards/Cards";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MediaQuery from "react-responsive";
import Model from "assets/animate/glb/Test_2";
import { DropdownMenu } from "shared/components/DropdownMenu/DropdownMenu";
import PairsSlider from "shared/components/PairsSlider/PairsSlider";
import { projectsList } from "shared/constants/lists";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { titleVariants, viewPort } from "shared/constants/framer";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>PushKeen</title>
      </Helmet>
      <section className={s.main}>
        <div className={s.title_container}>
          <h1 className={s.title}>pushkeen</h1>
        </div>
        <div className="container">
          <div className={s.wrapper_slogan}>
            <div className={s.slogan}>
              <p className={s.slogan_text}>
                <span className={s.arrow}>Push in culture</span>
                <br />
                <span className={s.star}>keen on technology</span>
              </p>
              <span className={s.slogan_desc}>
                *продвигаем культуру, внедряем инновации
              </span>
            </div>
            <div className={s.rings_wrapper}>
              <MediaQuery minWidth={1400}>
                <Canvas
                  className={s.rings}
                  camera={{
                    zoom: 2.9,
                    filmOffset: -1.8,
                    position: [-0.4, -0.4, 1],
                  }}
                >
                  <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight intensity={2} position={[-5, 15, 3]} />
                    <Model />
                  </Suspense>
                </Canvas>
              </MediaQuery>
              <MediaQuery minWidth={770} maxWidth={1401}>
                <Canvas
                  className={s.rings}
                  camera={{
                    zoom: 1.5,
                    filmOffset: -3,
                    position: [-0.4, -0.4, 1],
                  }}
                >
                  <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight intensity={2} position={[-5, 15, 3]} />
                    <Model />
                  </Suspense>
                </Canvas>
              </MediaQuery>
              <MediaQuery maxWidth={770}>
                <Canvas
                  className={s.rings}
                  camera={{
                    zoom: 1.2,
                    filmOffset: 2,
                    position: [-0.4, -0.4, 1],
                  }}
                >
                  <Suspense fallback={null}>
                    <ambientLight />
                    <directionalLight intensity={2} position={[-5, 15, 3]} />
                    <Model />
                  </Suspense>
                </Canvas>
              </MediaQuery>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className={s.projects}>
          <div className={s.projects_wrapper}>
            <h2 className={s.projects_title}>{t("main.projects")}</h2>
          </div>
          <Cards list={projectsList} />
          <Link to="/projects">
            <button className={s.button_more}>{t("main.button_plus")}</button>
          </Link>
        </section>
        <section className={s.activity}>
          <motion.h2
            className={s.activity_title}
            transition={{ duration: 0.5 }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewPort}
            variants={titleVariants}
          >
            {t("main.activity.title")}
          </motion.h2>
          <motion.p
            transition={{ duration: 0.5, delay: 0.2 }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewPort}
            variants={titleVariants}
            className={s.activity_desc}
          >
            {t("main.activity.description")}
          </motion.p>
          <DropdownMenu />
        </section>
        <section className={s.pairs}>
          <motion.h2
            className={s.pairs_title}
            transition={{ duration: 0.5 }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewPort}
            variants={titleVariants}
          >
            {t("main.pairs.title")}
          </motion.h2>
          <PairsSlider />
        </section>
      </div>
    </>
  );
};
