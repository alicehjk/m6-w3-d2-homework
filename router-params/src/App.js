import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const MEDIA_APPS = [
  {
    id: "netflix",
    name: "Netflix",
    img: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
  },
  {
    id: "hbo",
    name: "HBO Max",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
  },
  {
    id: "hulu",
    name: "Hulu",
    img: "/img/hulu_icon.jpeg",
  },
  {
    id: "prime",
    name: "Prime Video",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
  },
];

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Streaming Hub</h1>
          <p>Select your favorite platform below</p>
        </header>

        <main className="content">
          <nav className="media-grid">
            {MEDIA_APPS.map(({ id, img, name }) => (
              <Link key={id} to={`/app/${id}`} className="media-card">
                <img src={img} alt={name} />
                <span>{name}</span>
              </Link>
            ))}
          </nav>

          <section className="selection-area">
            <Routes>
              <Route path="/app/:id" element={<AppSelection />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

function AppSelection() {
  const { id } = useParams();
  const app = MEDIA_APPS.find((item) => item.id === id);

  return (
    <div className="selected-app">
      {app ? (
        <>
          <h2>You selected:</h2>
          <img src={app.img} alt={app.name} className="selected-logo" />
          <p>{app.name}</p>
        </>
      ) : (
        <p>Please select a streaming service above.</p>
      )}
    </div>
  );
}