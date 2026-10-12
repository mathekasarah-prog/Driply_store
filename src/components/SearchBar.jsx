import { Input } from "@/components/ui/input";
import { useFilters } from "@/context/FilterContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useFilters();

  return (
    <Input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="sm:max-w-sm"
    />
  );
}