import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Campinas from "./pages/Campinas";
import Alemanha from "./pages/Alemanha";
import China from "./pages/China";
import CoreiadoSul from "./pages/CoreiadoSul";
import Franca from "./pages/Franca";
import Italia from "./pages/Italia";
import Japao from "./pages/Japao";
import MinasGerais from "./pages/MinasGerais";
import RiodeJaneiro from "./pages/RiodeJaneiro";

import "./App.css";

function App() {
  return (
  <div className="App">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/campinas" element={<Campinas/>} />
        <Route path="/alemanha" element={<Alemanha/>} />
        <Route path="/china" element={<China/>} />
        <Route path="/coreiadosul" element={<CoreiadoSul/>} />
        <Route path="/franca" element={<Franca/>} />
        <Route path="/italia" element={<Italia/>} />
        <Route path="/japao" element={<Japao/>} />
        <Route path="/minasgerais" element={<MinasGerais/>} />
        <Route path="/riodejaneiro" element={<RiodeJaneiro/>} />
      </Routes>
    </BrowserRouter>
    
    <Footer />
  </div>
  );
}

export default App;