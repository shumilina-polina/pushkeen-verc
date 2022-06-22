import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Header from "./shared/Header/Header";

function App() {
  return (
    <div className="global_container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/nft" element={<NFT />} /> */}
        {/* <Route path="/publicart" element={<PublicArt />} /> */}
      </Routes>
    </div>
  );
}

export default App;
