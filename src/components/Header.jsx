import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const active = (p) => (location.pathname === p ? "active" : "");

  return (
    <header className="app-header">
      <div className="app-brand">
        <div className="app-logo">nf+</div>
        <div>
          <div className="app-title">naFila+ Conteúdos</div>
          <div className="app-subtitle">
            Organize livros, vídeos, artigos e podcasts
          </div>
        </div>
      </div>

      <nav className="app-nav">
        <Link className={`nav-link ${active("/")}`} to="/">
          Início
        </Link>
        <Link className={`nav-link ${active("/biblioteca")}`} to="/biblioteca">
          Biblioteca
        </Link>
        <Link className={`nav-link ${active("/sobre")}`} to="/sobre">
          Sobre
        </Link>
      </nav>
    </header>
  );
}
