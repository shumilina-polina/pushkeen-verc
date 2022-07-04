import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Nft } from "./pages/Nft/Nft";
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
              path="/nft"
              element={
                <>
                  <Nft />
                  <Contact />
                </>
              }
            />
            <Route path="/publicart" element={<PublicArt />} />
            <Route path="/projects" element={<ProjectsPage />} />

            {/* ------PROJECTS------- */}

            <Route
              path="mymoscow"
              element={
                <Project locales_title="mymoscow">
                  <MyMoscow />
                </Project>
              }
            />
            <Route
              path="ladogaGuide"
              element={
                <Project locales_title="ladoga">
                  <Ladoga />
                </Project>
              }
            />
            <Route
              path="myViborg"
              element={
                <Project locales_title="myviborg">
                  <MyViborg />
                </Project>
              }
            />
            <Route
              path="streetArtMemo"
              element={
                <Project locales_title="streetart">
                  <StreetArt />
                </Project>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </CursorProvider>
  );
}

export default App;
