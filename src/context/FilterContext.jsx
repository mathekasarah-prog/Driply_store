import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("all");
  };

  return (
    <FilterContext.Provider
      value={{ searchTerm, setSearchTerm, category, setCategory, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) throw new Error("useFilters must be used inside a FilterProvider");
  return context;
}
