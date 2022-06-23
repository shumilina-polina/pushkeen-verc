import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Contact } from "./shared/Contact/Contact";
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
        {/* <Route path="/nft" element={<><NFT /><Contact /></>} /> */}
        {/* <Route path="/publicart" element={<PublicArt />} /> */}
      </Routes>
    </div>
  );
}

export default App;
