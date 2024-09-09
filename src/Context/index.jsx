import { createContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
  // Get products
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState('');

  // Filtered Items
  const filteredItemsByTitle = items.filter(item =>
    item.title.toLowerCase().includes(searchByTitle.toLowerCase().trim())
  );

  // Shopping Cart | Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart | Order
  const [order, setOrder] = useState([]);

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

  return (
    <ShoppingCartContext.Provider
      value={{
        filteredItemsByTitle,
        searchByTitle,
        setSearchByTitle,
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
        order,
        setOrder,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider };
