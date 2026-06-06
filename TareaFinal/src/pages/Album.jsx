import { Link } from "react-router-dom";
import { useState } from "react";
import "./Album.css";

export default function Album({ figuritas, setFiguritas }) {
  const [nombre, setNombre] = useState("");

  const jugadores = [
    "Lionel Messi",
    "Kylian Mbappé",
    "Lamine Yamal",
    "Rodri",
    "Erling Haaland",
    "Son Heung-min",
    "Takefusa Kubo",
    "Vinícius Jr",
  ];

  const agregarFigurita = (jugador) => {
    if (!figuritas.includes(jugador)) {
      setFiguritas([...figuritas, jugador]);
    }
  };

  const agregarManual = (e) => {
    e.preventDefault();

    if (nombre.trim() !== "" && !figuritas.includes(nombre)) {
      setFiguritas([...figuritas, nombre]);

      setNombre("");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center titulo-album">Mi Álbum Mundial 2026</h1>

      <div className="row mb-4">
        {/* Formulario */}
        <div className="col-lg-9">
          <div className="card shadow formulario-card">
            <div className="card-body">
              <h4>Agregar figurita</h4>

              <form onSubmit={agregarManual}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del jugador"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />

                  <button className="btn btn-primary" type="submit">
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Destacado */}
        <div className="col-lg-3">
          <div className="card jugador-destacado shadow">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Takefusa_Kubo_2023.jpg"
              alt="Kubo"
              className="card-img-top"
            />

            <div className="card-body text-center">
              <h5>⭐ Takefusa Kubo</h5>

              <p>Figura destacada de Japón</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-3">Figuritas disponibles</h3>

      <div className="row">
        {jugadores.map((jugador) => {
          const obtenido = figuritas.includes(jugador);

          return (
            <div className="col-md-3 mb-3" key={jugador}>
              <div
                className={
                  obtenido ? "card jugador-card obtenido" : "card jugador-card"
                }
              >
                <div className="card-body text-center">
                  <h5>{jugador}</h5>

                  <button
                    className={
                      obtenido ? "btn btn-success" : "btn btn-outline-primary"
                    }
                    onClick={() => agregarFigurita(jugador)}
                    disabled={obtenido}
                  >
                    {obtenido ? "✓ Obtenida" : "Agregar"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="mt-5">Mis figuritas</h3>

      <ul className="list-group mb-4">
        {figuritas.map((f, i) => (
          <li key={i} className="list-group-item">
            ⚽ {f}
          </li>
        ))}
      </ul>

      <div className="d-flex gap-2 mb-4">
        <Link to="/" className="btn btn-secondary">
          Inicio
        </Link>

        <Link to="/estadisticas" className="btn btn-info">
          Estadísticas
        </Link>
      </div>
    </div>
  );
}
