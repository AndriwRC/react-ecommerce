import { useContext } from 'react';
import AsideMenu from '../AsideMenu';
import { ShoppingCartContext } from '../../Context';

function CheckoutSideMenu() {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } =
    useContext(ShoppingCartContext);

  return (
    <AsideMenu
      isOpen={isCheckoutSideMenuOpen}
      closeMenu={closeCheckoutSideMenu}
      title={'My Order'}></AsideMenu>
  );
}

export default CheckoutSideMenu;
