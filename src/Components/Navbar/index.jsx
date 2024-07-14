import { NavLink } from 'react-router-dom';

function Navbar() {
  const stateClassName = isActive =>
    isActive ? 'underline underline-offset-8' : undefined;

  return (
    <nav className='w-full flex justify-between items-center fixed top-0 z-10 px-8 min-h-16 text-sm'>
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
            to='/clothes'
            className={({ isActive }) => stateClassName(isActive)}>
            Clothes
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
            to='/furniture'
            className={({ isActive }) => stateClassName(isActive)}>
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => stateClassName(isActive)}>
            Others
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
        <li>Car</li>
      </ul>
    </nav>
  );
}

export default Navbar;
