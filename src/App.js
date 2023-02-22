
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './componets/Navbar';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import {ShopContextProvider} from './Context/ShopContext';
import Payment from './pages/Payment';
//import Context from '@mui/base/TabsUnstyled/TabsContext';

function App() {
  return (
    <div className="App">
     <ShopContextProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/payment' element={<Payment/>} />
      </Routes>
      </Router>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
