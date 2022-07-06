import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { BackToTheRootsNFT } from "./pages/Nft/BackToTheRootsNFT/BackToTheRootsNFT";
import { DirtyDrops } from "./pages/Nft/DirtyDrops/DirtyDrops";
import { Halloween } from "./pages/Nft/Halloween/Halloween";
import { MetaFemHistory } from "./pages/Nft/MetaFemHistory/MetaFemHistory";
import { NewCityArtist } from "./pages/Nft/NewCityArtist/NewCityArtist";
import { NewNames } from "./pages/Nft/NewNames/NewNames";
import { Nft } from "./pages/Nft/Nft";
import { BackToTheRoots } from "./pages/Project/BackToTheRoots/BackToTheRoots";
import { BrodilkaKurortnyy } from "./pages/Project/BrodilkaKurortnyy/BrodilkaKurortnyy";
import { BrodilkaMoscow } from "./pages/Project/BrodilkaMoscow/BrodilkaMoscow";
import { BrodilkaViborg } from "./pages/Project/BrodilkaViborg/BrodilkaViborg";
import { GeniusLoci } from "./pages/Project/GeniusLoci/GeniusLoci";
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
import { PageNotFound } from "./shared/PageNotFound/PageNotFound";

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
            <Route path="projects" element={<ProjectsPage />} />

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
                <Project locales_page="projects" locales_title="brodilkakurortnyy">
                  <BrodilkaKurortnyy />
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
              path="nft/newCityArtist"
              element={
                <Project locales_page="nft" locales_title="nft_list.newcity">
                  <NewCityArtist />
                </Project>
              }
            />
            {/* --------NOT FOUND--------- */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CursorProvider>
  );
}

export default App;
