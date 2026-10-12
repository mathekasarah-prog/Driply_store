import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FilterProvider } from "./context/FilterContext";
import { AuthProvider } from "./context/AuthContext";
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
     <CartProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
     </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)



