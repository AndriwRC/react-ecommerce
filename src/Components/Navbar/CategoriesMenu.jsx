import { NavLink } from 'react-router-dom';

function CategoriesMenu({ stateClassName, toggleMenu, showMenu }) {
  const display = showMenu ? 'flex' : 'hidden';

  return (
    <ul className='grow flex items-center gap-3'>
      <li className='font-semibold text-lg'>
        <NavLink className='md:hidden' onClick={() => toggleMenu()}>
          Shopi
        </NavLink>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `${stateClassName(isActive)} hidden md:block`
          }>
          Shopi
        </NavLink>
      </li>
      <div
        className={`${display} absolute top-full flex-col gap-3 bg-white p-4 rounded-lg border border-black md:flex md:items-center md:relative md:flex-row md:border-none md:p-0`}>
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
      </div>
    </ul>
  );
}

export default CategoriesMenu;
