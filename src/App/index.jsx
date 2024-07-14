import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import Navbar from '../Components/Navbar';
import Layout from '../Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
