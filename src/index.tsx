import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import "./styles/sliders.scss";
import "./styles/popup.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./i18n/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
);
