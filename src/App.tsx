import { Route, Routes } from "react-router-dom";
import Header from "./shared/Header/Header";

function App() {
  return (
    <div className="global_container">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/nft" element={<NFT />} /> */}
        {/* <Route path="/publicart" element={<PublicArt />} /> */}
      </Routes>
    </div>
  );
}

export default App;
