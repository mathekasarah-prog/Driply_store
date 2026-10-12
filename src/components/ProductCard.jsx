import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col transition-shadow hover:shadow-lg">
      <CardHeader>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 w-full object-contain"
        />
        <CardTitle className="mt-2 text-lg">{product.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 space-y-2">
        <Badge variant="secondary">{product.category}</Badge>
        <p className="text-xl font-semibold">${product.price}</p>
      </CardContent>

      <CardFooter className="gap-2">
        <Link
  to={`/products/${product.id}`}
  className={`${buttonVariants({ variant: "outline" })} flex-1`}
>
  View
</Link>
        <Button
          className="flex-1"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}