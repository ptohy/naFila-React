import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import FeedbackMessage from "../components/FeedbackMessage";

export default function Home() {
  const [search, setSearch] = useState("");
  const n = useNavigate();

  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">Bem-vindo ao naFila+ Conteúdos</h1>
        <p className="page-subtitle">
          Centralize livros, vídeos, artigos e podcasts.
        </p>
      </header>

      <FeedbackMessage type="info">
        Aplicação criada para o MVP de Front-end.
      </FeedbackMessage>

      <div style={{ marginBottom: "1rem" }}>
        <SearchBar
          value={search}
          onChange={setSearch}
          onSubmit={() =>
            n("/biblioteca", { state: { initialSearch: search } })
          }
        />
      </div>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        <Button variant="outline" onClick={() => n("/biblioteca")}>
          Ir para a biblioteca
        </Button>
      </div>
    </section>
  );
}
