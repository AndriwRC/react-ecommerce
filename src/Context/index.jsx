import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  // Shopping Cart | Increment quantity
  const [count, setCount] = useState(0);

  // Shopping Cart | Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Product Detail | Open & Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
    closeCheckoutSideMenu();
  };
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail | Show product
  const [selectedProduct, setSelectedProduct] = useState({});

  // Checkout Side Menu | Open & Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
    closeProductDetail();
  };
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  console.log(cartProducts);

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
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
