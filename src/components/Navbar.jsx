import { NavLink, Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";


const linkClass = ({ isActive }) =>
  `transition-colors hover:text-primary ${
    isActive ? "font-semibold text-primary" : "text-muted-foreground"
  }`;

export default function Navbar() {
  const { cartItems } = useCart();
  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold">
          Cup Store
        </Link>

        <div className="flex items-center gap-6">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart ({cartItems.length})
          </NavLink>
          <NavLink to="/login" className={linkClass}>Login</NavLink>
        </div>
      </nav>
    </header>
  );
}