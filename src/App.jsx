import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import TuesdayVisit from "./pages/TuesdayVisit";
import Questions from "./pages/Questions";
import Biomarkers from "./pages/Biomarkers";
import InsuranceKit from "./pages/InsuranceKit";
import "./styles.css";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tuesday" element={<TuesdayVisit />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/biomarkers" element={<Biomarkers />} />
          <Route path="/insurance" element={<InsuranceKit />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
