import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
  <div className="app">
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;