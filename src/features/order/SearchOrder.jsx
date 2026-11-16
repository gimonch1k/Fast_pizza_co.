import { useState } from "react";
import { useNavigate } from "react-router";

export default function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) return;

    navigate(`order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} placeholder="Search order #" onChange={(e) => setQuery(e.target.value)} />
    </form>
  );
}
