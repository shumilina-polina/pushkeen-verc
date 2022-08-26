import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Collab } from "./pages/Merch/Collab/Collab";
import { Merch } from "./pages/Merch/Merch";
import { BackToTheRootsNFT } from "./pages/Nft/BackToTheRootsNFT/BackToTheRootsNFT";
import { DirtyDrops } from "./pages/Nft/DirtyDrops/DirtyDrops";
import { Halloween } from "./pages/Nft/Halloween/Halloween";
import { MetaFemHistory } from "./pages/Nft/MetaFemHistory/MetaFemHistory";
import { NewCityArtist } from "./pages/Nft/NewCityArtist/NewCityArtist";
import { NewEast } from "./pages/Nft/NewEast/NewEast";
import { NewNames } from "./pages/Nft/NewNames/NewNames";
import { Nft } from "./pages/Nft/Nft";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { Policy } from "./pages/Policy/Policy";
import { BackToTheRoots } from "./pages/Project/BackToTheRoots/BackToTheRoots";
import { BrodilkaKurortnyy } from "./pages/Project/BrodilkaKurortnyy/BrodilkaKurortnyy";
import { BrodilkaMoscow } from "./pages/Project/BrodilkaMoscow/BrodilkaMoscow";
import { BrodilkaViborg } from "./pages/Project/BrodilkaViborg/BrodilkaViborg";
import { GeniusLoci } from "./pages/Project/GeniusLoci/GeniusLoci";
import { GuideKur } from "./pages/Project/GuideKur/GuideKur";
import { Ladoga } from "./pages/Project/Ladoga/Ladoga";
import { MyMoscow } from "./pages/Project/MyMoscow/MyMoscow";
import { MyViborg } from "./pages/Project/MyViborg/MyViborg";
import { Project } from "./pages/Project/Project";
import { StreetArt } from "./pages/Project/StreetArt/StreetArt";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
import { PublicArt } from "./pages/PublicArt/PublicArt";
import { Contact } from "./shared/Contact/Contact";
import CursorProvider from "./shared/CursorProvider/CursorProvider";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

function App() {
  return (
    <CursorProvider>
      <div className="global_container">
        <Header />
        <div className="mobile_container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Contact />
                </>
              }
            />
            <Route
              path="nft/"
              element={
                <>
                  <Nft />
                  <Contact />
                </>
              }
            />
            <Route path="publicart" element={<PublicArt />} />
            <Route path="merch" element={<Merch />} />
            <Route path="projects" element={<ProjectsPage />} />

            {/* ------MERCH------- */}

            <Route
              path="merch/nca_publicart"
              element={
                  <Collab />
              }
            />

            {/* ------PROJECTS------- */}

            <Route
              path="mymoscow"
              element={
                <Project locales_page="projects" locales_title="mymoscow">
                  <MyMoscow />
                </Project>
              }
            />
            <Route
              path="ladogaGuide"
              element={
                <Project locales_page="projects" locales_title="ladoga">
                  <Ladoga />
                </Project>
              }
            />
            <Route
              path="myViborg"
              element={
                <Project locales_page="projects" locales_title="myviborg">
                  <MyViborg />
                </Project>
              }
            />
            <Route
              path="streetArtMemo"
              element={
                <Project locales_page="projects" locales_title="streetart">
                  <StreetArt />
                </Project>
              }
            />
            <Route
              path="geniusLociMemo"
              element={
                <Project locales_page="projects" locales_title="geniusloci">
                  <GeniusLoci />
                </Project>
              }
            />
            <Route
              path="backToTheRootsLanding"
              element={
                <Project locales_page="projects" locales_title="backtotheroots">
                  <BackToTheRoots />
                </Project>
              }
            />
            <Route
              path="questViborg"
              element={
                <Project locales_page="projects" locales_title="brodilkaviborg">
                  <BrodilkaViborg />
                </Project>
              }
            />
            <Route
              path="questMoscow"
              element={
                <Project locales_page="projects" locales_title="brodilkamoscow">
                  <BrodilkaMoscow />
                </Project>
              }
            />
            <Route
              path="questKurortnyy"
              element={
                <Project
                  locales_page="projects"
                  locales_title="brodilkakurortnyy"
                >
                  <BrodilkaKurortnyy />
                </Project>
              }
            />
            <Route
              path="kurortnyyGuide"
              element={
                <Project locales_page="projects" locales_title="guidekur">
                  <GuideKur />
                </Project>
              }
            />
            {/* ------NFT------- */}
            <Route
              path="nft/dirtyDrops"
              element={
                <Project locales_page="nft" locales_title="nft_list.dirtydrops">
                  <DirtyDrops />
                </Project>
              }
            />
            <Route
              path="nft/halloween"
              element={
                <Project locales_page="nft" locales_title="nft_list.halloween">
                  <Halloween />
                </Project>
              }
            />
            <Route
              path="nft/backToTheRoots"
              element={
                <Project locales_page="nft" locales_title="nft_list.btrNft">
                  <BackToTheRootsNFT />
                </Project>
              }
            />
            <Route
              path="nft/metaFemHistory"
              element={
                <Project
                  locales_page="nft"
                  locales_title="nft_list.metafemhistory"
                >
                  <MetaFemHistory />
                </Project>
              }
            />
            <Route
              path="nft/newNamesInFashion"
              element={
                <Project locales_page="nft" locales_title="nft_list.newnames">
                  <NewNames />
                </Project>
              }
            />
            <Route
              path="nft/newCityDriver"
              element={
                <Project locales_page="nft" locales_title="nft_list.newcity">
                  <NewCityArtist />
                </Project>
              }
            />
            <Route
              path="nft/newEastTechAwards"
              element={
                <Project locales_page="nft" locales_title="nft_list.neweast">
                  <NewEast />
                </Project>
              }
            />
            {/* --------NOT FOUND--------- */}
            <Route path="*" element={<PageNotFound />} />
            {/* --------PRIVACY POLICY--------- */}
            <Route path="privacy" element={<Policy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CursorProvider>
  );
}

export default App;
