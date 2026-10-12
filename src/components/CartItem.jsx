import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 rounded-lg border p-4">
      <img src={item.thumbnail} alt={item.title} className="h-20 w-20 object-contain" />

      <div className="flex-1">
        <p className="font-semibold">{item.title}</p>
        <p className="text-muted-foreground">${item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          -
        </Button>
        <span className="w-6 text-center">{item.quantity}</span>
        <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          +
        </Button>
      </div>

      <p className="w-24 text-right font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </p>

      <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>
        Remove
      </Button>
    </div>
  );
}