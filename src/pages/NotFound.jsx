import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const n = useNavigate();

  return (
    <section className="page not-found">
      <div className="not-found-code">404</div>
      <p style={{ marginBottom: "1rem" }}>Página não encontrada.</p>
      <Button variant="outline" onClick={() => n("/")}>
        Voltar para o início
      </Button>
    </section>
  );
}
