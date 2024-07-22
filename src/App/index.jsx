import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../Context';
import Routes from '../Routes';
import Navbar from '../Components/Navbar';
import Layout from '../Components/Layout';

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
