import Button from "./Button";

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        className="search-input"
        type="text"
        placeholder="Buscar por título, tipo ou tag..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button type="submit">Buscar</Button>
    </form>
  );
}
