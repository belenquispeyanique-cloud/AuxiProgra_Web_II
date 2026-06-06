import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";
export default function Home() {
  const colores = [
    "#00e5ff",
    "#ff1744",
    "#ffea00",
    "#00ff6a",
    "#ff9100",
    "#d500f9",
  ];

  const [colorSombra, setColorSombra] = useState(colores[0]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const color = colores[Math.floor(Math.random() * colores.length)];

      setColorSombra(color);
    }, 700);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container home-container">
      <h1
        className="text-center mb-4 titulo-mundial"
        style={{
          textShadow: `0 0 10px ${colorSombra},
                       0 0 20px ${colorSombra},
                       0 0 40px ${colorSombra}`,
        }}
      >
        <i className="fa-solid fa-futbol me-2"></i>
        Álbum Mundial 2026
      </h1>

      <div className="row">
        {/* Álbum */}
        <div className="col-md-4 mb-3">
          <div className="card card-album h-100 shadow-lg">
            <img
              src="https://blob.postadeportes.com/images/2026/06/03/mundial-2026-fifa-reune-a-estrellas-globales-en-su-album-oficial-5235ad74-focus-0-0-1479-828.webp"
              className="card-img-top"
              alt="album"
            />

            <div className="card-body text-center">
              <h5>
                <i className="fa-solid fa-book-open me-2"></i>
                Mi Álbum
              </h5>

              <Link to="/album" className="btn btn-primary">
                Entrar
              </Link>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="col-md-4 mb-3">
          <div className="card card-stats h-100 shadow-lg">
            <img
              src="https://www.gcis.co.uk/wp-content/uploads/2021/01/statistics-graph-illustration-2000x1000.jpg"
              className="card-img-top"
              alt="stats"
            />

            <div className="card-body text-center">
              <h5>
                <i className="fa-solid fa-chart-column me-2"></i>
                Estadísticas
              </h5>

              <Link to="/estadisticas" className="btn btn-success">
                Entrar
              </Link>
            </div>
          </div>
        </div>

        {/* Trofeo */}
        <div className="col-md-4 mb-3">
          <div className="card card-trophy h-100 shadow-lg">
            <img
              src="https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/f015/live/d2e52270-2c4a-11f1-934f-036468834728.jpg"
              className="card-img-top"
              alt="trofeo"
            />

            <div className="card-body text-center">
              <h5>
                <i className="fa-solid fa-trophy me-2"></i>
                Mundial 2026
              </h5>

              <button className="btn btn-warning">Ver Imagen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
