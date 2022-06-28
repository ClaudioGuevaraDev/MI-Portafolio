import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-loading"
import LoadingScreen from "./components/LoadingScreen";

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
