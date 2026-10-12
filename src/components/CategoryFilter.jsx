import { useEffect, useState } from "react";
import { useFilters } from "@/context/FilterContext";

export default function CategoryFilter() {
  const { category, setCategory } = useFilters();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        if (!res.ok) throw new Error("Failed to load categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchCategories();
  }, []);

  if (error) return <p className="text-sm text-red-600">{error}</p>;

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="h-9 rounded-md border bg-background px-3 text-sm sm:max-w-xs"
    >
      <option value="all">All categories</option>
      {categories.map((cat) => (
        <option key={cat.slug} value={cat.slug}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}