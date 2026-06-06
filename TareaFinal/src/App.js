import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Album from "./pages/Album";
import Estadisticas from "./pages/Estadisticas";
import Footer from "./components/Footer";

export default function App() {
  const [figuritas, setFiguritas] = useState([]);

  useEffect(() => {
    const datosGuardados = localStorage.getItem("figuritas");

    if (datosGuardados) {
      setFiguritas(JSON.parse(datosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("figuritas", JSON.stringify(figuritas));
  }, [figuritas]);

  return (
    <BrowserRouter>
      <div className="app-layout">
        <div className="contenido">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/album"
              element={
                <Album figuritas={figuritas} setFiguritas={setFiguritas} />
              }
            />

            <Route
              path="/estadisticas"
              element={<Estadisticas figuritas={figuritas} />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
