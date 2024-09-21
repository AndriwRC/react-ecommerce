import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../utils';
import AsideMenu from '../AsideMenu';
import OrderCard from '../OrderCard';

function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    signOut,
  } = useContext(ShoppingCartContext);

  const handleDelete = id => {
    const filteredProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const newOrder = {
      date: new Date().toLocaleDateString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, newOrder]);

    setCartProducts([]);
  };

  return (
    <AsideMenu
      isOpen={isCheckoutSideMenuOpen}
      closeMenu={closeCheckoutSideMenu}
      title={'My Order'}>
      <div className='px-6 overflow-y-scroll flex-1'>
        {cartProducts.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='p-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className='bg-black py-3 text-white w-full rounded-lg'
            onClick={() => {
              if (!signOut) handleCheckout();
              closeCheckoutSideMenu();
            }}>
            Checkout
          </button>
        </Link>
      </div>
    </AsideMenu>
  );
}

export default CheckoutSideMenu;
