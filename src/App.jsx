import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
  );
}

export default App;