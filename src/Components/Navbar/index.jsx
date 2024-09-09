import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { HiShoppingBag } from 'react-icons/hi';
import { ShoppingCartContext } from '../../Context';

function Navbar() {
  const { cartProducts, openCheckoutSideMenu } =
    useContext(ShoppingCartContext);

  const stateClassName = isActive =>
    isActive ? 'underline underline-offset-8' : undefined;

  return (
    <nav className='w-full flex justify-between items-center fixed top-0 z-10 px-8 min-h-16 text-sm bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
            className={({ isActive }) => stateClassName(isActive)}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/all'
            className={({ isActive }) => stateClassName(isActive)}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/mens-clothing'
            className={({ isActive }) => stateClassName(isActive)}>
            Men{`'`}s Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/womens-clothing'
            className={({ isActive }) => stateClassName(isActive)}>
            Women{`'`}s Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => stateClassName(isActive)}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelery'
            className={({ isActive }) => stateClassName(isActive)}>
            Jewelry
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>example@mail.com</li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => stateClassName(isActive)}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => stateClassName(isActive)}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => stateClassName(isActive)}>
            Sign In
          </NavLink>
        </li>
        <li
          onClick={() => openCheckoutSideMenu()}
          className='flex items-center cursor-pointer'>
          <span>
            <HiShoppingBag className='h-6 w-6 text-black' />
          </span>
          {cartProducts.length}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
