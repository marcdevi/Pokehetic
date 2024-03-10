import { Search } from "@mui/icons-material";
import React from "react";

export default function SearchBar({
  setFilterText,
  filterText,
  onFilterTextChange,
}) {
  const handleChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <form>
      <input
        style={{ padding: "3% 3%", margin: "5% 0%" }}
        type="text"
        value={filterText}
        placeholder="Recherche..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </form>
  );
}
