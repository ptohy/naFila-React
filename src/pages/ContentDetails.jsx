import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchContentById } from "../api/fakeApi";
import Button from "../components/Button";
import Loader from "../components/Loader";
import FeedbackMessage from "../components/FeedbackMessage";
import TagBadge from "../components/TagBadge";

export default function ContentDetails() {
  const { id } = useParams();
  const n = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetchContentById(id)
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => {
        setData(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  if (!data)
    return (
      <section className="page">
        <FeedbackMessage type="error">
          Conteúdo não encontrado.
        </FeedbackMessage>
        <Button variant="outline" onClick={() => n("/biblioteca")}>
          Voltar para a biblioteca
        </Button>
      </section>
    );

  const handleMarkDone = () => {
    setMsg("Conteúdo marcado como concluído (simulado).");
    setTimeout(() => setMsg(""), 2000);
  };

  const handleOpenUrl = () => {
    if (!data.url) return;
    window.open(data.url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">{data.titulo}</h1>
        <p className="page-subtitle">
          Visão detalhada do conteúdo selecionado, com link direto para a
          fonte original.
        </p>
      </header>

      {msg && <FeedbackMessage type="success">{msg}</FeedbackMessage>}

      <p style={{ marginBottom: "0.5rem" }}>{data.descricao}</p>

      <p>
        <strong>Categoria:</strong> {data.categoria}
      </p>
      <p>
        <strong>Duração:</strong> {data.duracaoEstimada}
      </p>
      <p>
        <strong>Formato:</strong> {data.formato}
      </p>

      {data.url && (
        <p style={{ marginTop: "0.4rem", fontSize: "0.85rem" }}>
          <strong>Link:</strong>{" "}
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "underline", color: "#38bdf8" }}
          >
            abrir conteúdo original
          </a>
        </p>
      )}

      <div className="tags-row" style={{ marginTop: "0.7rem" }}>
        {data.tags?.map((t) => (
          <TagBadge key={t}>{t}</TagBadge>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", flexWrap: "wrap" }}>
        {data.url && (
          <Button variant="outline" onClick={handleOpenUrl}>
            Abrir conteúdo
          </Button>
        )}

        <Button onClick={handleMarkDone}>Marcar como concluído</Button>

        <Button variant="outline" onClick={() => n(-1)}>
          Voltar
        </Button>
      </div>
    </section>
  );
}
