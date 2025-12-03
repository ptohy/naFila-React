import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchContents } from "../api/fakeApi";
import SearchBar from "../components/SearchBar";
import ContentCard from "../components/ContentCard";
import Loader from "../components/Loader";
import FeedbackMessage from "../components/FeedbackMessage";

export default function Library() {
  const [all, setAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const loc = useLocation();

  useEffect(() => {
    const s = loc.state;
    if (s?.initialSearch) setSearch(s.initialSearch);
  }, [loc.state]);

  useEffect(() => {
    fetchContents().then((d) => {
      setAll(d);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let list = all;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (i) =>
          i.titulo.toLowerCase().includes(q) ||
          i.tipo.toLowerCase().includes(q) ||
          i.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    setFiltered(list);
  }, [search, all]);

  return (
    <section className="page">
      <header className="page-header">
        <h1 className="page-title">Biblioteca</h1>
        <p className="page-subtitle">Seus conteúdos organizados.</p>
      </header>

      <SearchBar
        value={search}
        onChange={setSearch}
        onSubmit={() => {}}
      />

      {loading && <Loader />}

      {!loading && filtered.length === 0 && (
        <FeedbackMessage type="info">
          Nenhum conteúdo encontrado.
        </FeedbackMessage>
      )}

      {!loading && filtered.length > 0 && (
        <div className="cards-grid">
          {filtered.map((c) => (
            <ContentCard key={c.id} content={c} />
          ))}
        </div>
      )}
    </section>
  );
}
