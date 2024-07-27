import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  // Shopping Cart | Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail | Open & Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail | Show product
  const [selectedProduct, setSelectedProduct] = useState({});

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        selectedProduct,
        setSelectedProduct,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
