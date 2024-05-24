import "./App.css";
import "./assets/style/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Pocetna from "./pages/Pocetna";
import Registracija from "./pages/Registracija";
import Prijava from "./pages/Prijava";
import Vozila from "./pages/Vozila";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pocetna />} />
          <Route path="registracija" element={<Registracija />} />
          <Route path="prijava" element={<Prijava />} />
          <Route path="vozila" element={<Vozila />} />
          <Route path="kontakt" element={<Kontakt />} />
          {/* <Route path="*" element={<NoPage />} />   */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
