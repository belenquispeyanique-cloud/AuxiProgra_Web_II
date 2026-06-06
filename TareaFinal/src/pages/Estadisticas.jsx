import { Link } from "react-router-dom";
import "./Estadisticas.css";

export default function Estadisticas({ figuritas }) {
  const totalFiguritas = 8;

  const porcentaje = ((figuritas.length / totalFiguritas) * 100).toFixed(0);

  return (
    <div className="container mt-4">
      <h1 className="titulo-estadisticas">
        <i className="fa-solid fa-chart-column me-3"></i>
        Estadísticas del Álbum
      </h1>

      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <div className="card card-estadistica">
            <div className="card-body text-center">
              <i className="fa-solid fa-futbol icono-estadistica"></i>

              <h2>{figuritas.length}</h2>

              <p>Figuritas Obtenidas</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card card-estadistica">
            <div className="card-body text-center">
              <i className="fa-solid fa-book-open icono-estadistica"></i>

              <h2>{totalFiguritas}</h2>

              <p>Total del Álbum</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card card-estadistica">
            <div className="card-body text-center">
              <i className="fa-solid fa-trophy icono-estadistica"></i>

              <h2>{porcentaje}%</h2>

              <p>Completado</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card progreso-card mt-4">
        <div className="card-body">
          <h4>
            <i className="fa-solid fa-chart-line me-2"></i>
            Progreso del Álbum
          </h4>

          <div className="progress mt-3">
            <div
              className="progress-bar barra-mundial"
              role="progressbar"
              style={{ width: `${porcentaje}%` }}
            >
              {porcentaje}%
            </div>
          </div>
        </div>
      </div>

      <div className="card lista-card mt-4">
        <div className="card-body">
          <h3>
            <i className="fa-solid fa-futbol me-2"></i>
            Figuritas Conseguidas
          </h3>

          {figuritas.length === 0 ? (
            <div className="text-center mt-4">
              <i className="fa-regular fa-folder-open fs-1 mb-3"></i>

              <p>Aún no tienes figuritas registradas.</p>
            </div>
          ) : (
            <ul className="list-group mt-3">
              {figuritas.map((jugador, index) => (
                <li key={index} className="list-group-item item-jugador">
                  <i className="fa-solid fa-star me-2"></i>

                  {jugador}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center mt-4 mb-4">
        <Link to="/album" className="btn btn-warning me-2">
          <i className="fa-solid fa-book-open me-2"></i>
          Volver al Álbum
        </Link>

        <Link to="/" className="btn btn-light">
          <i className="fa-solid fa-house me-2"></i>
          Inicio
        </Link>
      </div>
    </div>
  );
}
