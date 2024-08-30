import { useContext } from 'react';
import AsideMenu from '../AsideMenu';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

function CheckoutSideMenu() {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
    useContext(ShoppingCartContext);

  return (
    <AsideMenu
      isOpen={isCheckoutSideMenuOpen}
      closeMenu={closeCheckoutSideMenu}
      title={'My Order'}>
      <div className='px-6 overflow-y-scroll'>
        {cartProducts.map(product => (
          <OrderCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </AsideMenu>
  );
}

export default CheckoutSideMenu;
