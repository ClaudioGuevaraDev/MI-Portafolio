import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-loading"
import LoadingScreen from "./components/LoadingScreen";

import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";

// Pages
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes loadingScreen={LoadingScreen}>
        <Route path="/" element={<Home />} loading/>
        <Route path="*" element={<Home />} loading/>
      </Routes>
    </BrowserRouter>
  );
}
