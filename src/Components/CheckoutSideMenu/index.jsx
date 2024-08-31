import { useContext } from 'react';
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
  } = useContext(ShoppingCartContext);

  const handleDelete = id => {
    const filteredProducts = cartProducts.filter(product => product.id !== id);
    setCartProducts(filteredProducts);
  };

  return (
    <AsideMenu
      isOpen={isCheckoutSideMenuOpen}
      closeMenu={closeCheckoutSideMenu}
      title={'My Order'}>
      <div className='px-6 overflow-y-scroll'>
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
      <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>
            ${totalPrice(cartProducts)}
          </span>
        </p>
      </div>
    </AsideMenu>
  );
}

export default CheckoutSideMenu;
