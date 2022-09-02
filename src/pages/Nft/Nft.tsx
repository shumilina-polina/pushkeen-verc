import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { Cards } from "shared/components/Cards/Cards";
import { CustomLink } from "shared/components/CustomLink";
import { Contact } from "shared/Contact/Contact";
import { Project } from "pages/Project/Project";
import { BackToTheRootsNFT } from "./BackToTheRootsNFT/BackToTheRootsNFT";
import { DirtyDrops } from "./DirtyDrops/DirtyDrops";
import { Halloween } from "./Halloween/Halloween";
import { MetaFemHistory } from "./MetaFemHistory/MetaFemHistory";
import { NewCityArtist } from "./NewCityArtist/NewCityArtist";
import { NewEast } from "./NewEast/NewEast";
import { NewNames } from "./NewNames/NewNames";
import s from "./Nft.module.scss";
import { nftList } from "shared/constants/lists";

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
      <Route
        path="/dirtyDrops"
        element={
          <Project locales_page="nft" locales_title="nft_list.dirtydrops">
            <DirtyDrops />
          </Project>
        }
      />
      <Route
        path="/halloween"
        element={
          <Project locales_page="nft" locales_title="nft_list.halloween">
            <Halloween />
          </Project>
        }
      />
      <Route
        path="/backToTheRoots"
        element={
          <Project locales_page="nft" locales_title="nft_list.btrNft">
            <BackToTheRootsNFT />
          </Project>
        }
      />
      <Route
        path="/metaFemHistory"
        element={
          <Project locales_page="nft" locales_title="nft_list.metafemhistory">
            <MetaFemHistory />
          </Project>
        }
      />
      <Route
        path="/newNamesInFashion"
        element={
          <Project locales_page="nft" locales_title="nft_list.newnames">
            <NewNames />
          </Project>
        }
      />
      <Route
        path="/newCityDriver"
        element={
          <Project locales_page="nft" locales_title="nft_list.newcity">
            <NewCityArtist />
          </Project>
        }
      />
      <Route
        path="/newEastTechAwards"
        element={
          <Project locales_page="nft" locales_title="nft_list.neweast">
            <NewEast />
          </Project>
        }
      />
    </Routes>
  );
};
