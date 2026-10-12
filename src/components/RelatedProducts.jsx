import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ category, currentId }) {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRelated() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}?limit=5`
        );
        if (!res.ok) throw new Error("Failed to load related products");
        const data = await res.json();
        setRelated(data.products.filter((p) => p.id !== currentId).slice(0, 4));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRelated();
  }, [category, currentId]);

  if (loading || error || related.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-bold">Related products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}