import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
import Navbar from '../Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
