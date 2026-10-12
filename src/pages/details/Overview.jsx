import { useOutletContext } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function Overview() {
  const product = useOutletContext();

  return (
    <div className="space-y-4">
      <p className="leading-relaxed">{product.description}</p>

      {product.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        {product.stock} in stock · {product.returnPolicy}
      </p>
    </div>
  );
}