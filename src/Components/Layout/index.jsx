import { element } from 'prop-types';

function Layout({ children }) {
  return <main className='flex flex-col items-center mt-16'>{children}</main>;
}

Layout.propTypes = {
  children: element,
};

export default Layout;
