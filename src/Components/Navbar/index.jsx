import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../Context';
import { HiShoppingBag } from 'react-icons/hi';
import CategoriesMenu from './CategoriesMenu';
import UserMenu from './UserMenu';

function Navbar() {
  const { cartProducts, openCheckoutSideMenu } =
    useContext(ShoppingCartContext);
  const [showCategories, setShowCategories] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Dynamic Styles
  const stateClassName = isActive =>
    isActive ? 'underline underline-offset-8' : 'block';

  // Navbar Interaction
  const toggleCategoriesMenu = () => {
    setShowCategories(!showCategories);
    setShowUserMenu(false);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    setShowCategories(false);
  };

  return (
    <nav className='w-full flex gap-2 items-center fixed top-0 z-10 px-8 min-h-16 text-sm bg-white'>
      <CategoriesMenu
        stateClassName={stateClassName}
        toggleMenu={toggleCategoriesMenu}
        showMenu={showCategories}
      />
      <UserMenu
        stateClassName={stateClassName}
        toggleMenu={toggleUserMenu}
        showMenu={showUserMenu}
      />
      {/* Shopping Cart */}
      <li
        onClick={() => openCheckoutSideMenu()}
        className='flex items-center cursor-pointer'>
        <span>
          <HiShoppingBag className='h-6 w-6 text-black' />
        </span>
        {cartProducts.length}
      </li>
    </nav>
  );
}

export default Navbar;
