import { useNavigate } from "react-router-dom";
import TagBadge from "./TagBadge";

export default function ContentCard({ content }) {
  const n = useNavigate();

  const statusClass =
    content.status === "Concluído"
      ? "status-concluido"
      : content.status === "Em progresso"
      ? "status-progresso"
      : "status-pausado";

  return (
    <article
      className="content-card"
      onClick={() => n(`/conteudo/${content.id}`)}
    >
      <div className="content-card-type">{content.tipo}</div>
      <div className="content-card-title">{content.titulo}</div>

      <div className="content-card-meta">
        <span>{content.categoria}</span>
        <span>{content.duracaoEstimada}</span>
      </div>

      <div className="content-card-meta">
        <span>Prioridade: {content.prioridade}</span>
        <span className={`content-card-status ${statusClass}`}>
          {content.status} • {content.progresso}%
        </span>
      </div>

      <div className="tags-row">
        {content.tags?.map((t) => (
          <TagBadge key={t}>{t}</TagBadge>
        ))}
      </div>
    </article>
  );
}
