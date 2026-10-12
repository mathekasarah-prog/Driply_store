import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/CartItem";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cartItems, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-3xl p-6 text-center">
        <h1 className="mb-4 text-3xl font-bold">Your cart is empty</h1>
        <Link to="/products" className="underline">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="flex items-center justify-between border-t pt-4">
        <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={clearCart}>Clear cart</Button>
          <Button asChild>
            <Link to="/checkout">Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}