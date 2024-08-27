import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../Context';
import Routes from '../Routes';
import Navbar from '../Components/Navbar';
import Layout from '../Components/Layout';
import CheckoutSideMenu from '../Components/CheckoutSideMenu';

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <CheckoutSideMenu />
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
