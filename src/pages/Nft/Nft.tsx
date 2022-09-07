import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { Cards } from "shared/components/Cards/Cards";
import { CustomLink } from "shared/components/CustomLink";
import { Contact } from "shared/Contact/Contact";
import { Project } from "pages/Project/Project";
import s from "./Nft.module.scss";
import { nftList } from "shared/constants/lists";
import { Helmet } from "react-helmet";
import { nftRoutes } from "shared/constants/routes";

export const Nft = () => {
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
              <title>PushKeen - NFT</title>
              <meta name="description" content="NFT" />
            </Helmet>
            <div className="container">
              <section className={s.desc}>
                <CustomLink className="link" to="/">
                  <button className={s.button}>{t("nft.title.button")}</button>
                </CustomLink>
                <h2 className={s.title}>nft</h2>
                <p className={s.text}>{t("nft.title.description")}</p>
              </section>
              <section className={s.collections}>
                <h2 className={s.title}>{t("nft.collections.title")}</h2>
                <Cards list={nftList} />
              </section>
            </div>
            <Contact />
          </>
        }
      />
      {nftRoutes.map(({ path, locales, Component }) => (
        <Route
          path={path}
          element={
            <Project locales_page="nft" locales_title={`nft_list.${locales}`}>
              <Component />
            </Project>
          }
        />
      ))}
    </Routes>
  );
};
