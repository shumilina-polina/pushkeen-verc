import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Nft } from "./pages/Nft/Nft";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
import { PublicArt } from "./pages/PublicArt/PublicArt";
import { Contact } from "./shared/Contact/Contact";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

function App() {
  return (
    <div className="global_container">
      <Header />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
