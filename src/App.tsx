import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Collab } from "./pages/Merch/Collab/Collab";
import { Merch } from "./pages/Merch/Merch";
import { Nft } from "./pages/Nft/Nft";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { Policy } from "./pages/Policy/Policy";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";
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
              path="nft/*"
              element={
                <>
                  <Nft />
                </>
              }
            />
            <Route path="projects/*" element={<ProjectsPage />} />
            <Route path="merch" element={<Merch />} />
            <Route path="merch/nca_publicart" element={<Collab />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="privacy" element={<Policy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CursorProvider>
  );
}

export default App;
