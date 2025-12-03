export default function About() {
  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">Sobre o projeto</h1>
        <p className="page-subtitle">
          Descrição do MVP desenvolvido em React.
        </p>
      </header>

      <p style={{ fontSize: "0.9rem", lineHeight: "1.4rem" }}>
        O naFila+ Conteúdos foi desenvolvido para o MVP da disciplina de
        Front-end Avançado, utilizando:
      </p>

      <ul
        style={{
          marginTop: "0.5rem",
          paddingLeft: "1.2rem",
          display: "grid",
          gap: "0.3rem",
          fontSize: "0.9rem",
        }}
      >
        <li>React + Vite</li>
        <li>Componentização</li>
        <li>Hooks (useState, useEffect, useParams, useNavigate)</li>
        <li>Rotas com React Router</li>
        <li>Simulação de backend com JSON local</li>
        <li>Feedback visual e responsividade</li>
      </ul>
    </section>
  );
}
