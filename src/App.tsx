import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Nft } from "./pages/Nft/Nft";
import { Ladoga } from "./pages/Project/Ladoga/Ladoga";
import { MyMoscow } from "./pages/Project/MyMoscow/MyMoscow";
import { Project } from "./pages/Project/Project";
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
          </Routes>
        </div>
        <Footer />
      </div>
    </CursorProvider>
  );
}

export default App;
