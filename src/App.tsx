import Nav from './components/organisms/nav/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/organisms/home/Home';
import { ShopContext } from './context/Context';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState<[]>([]);
  const [favouriteProducts, setFavouriteProducts] = useState<[]>([]);
  useEffect(()=>{
    if(!products.length){
      axios.get('https://fakerapi.it/api/v1/products?_price_min=5&_price_max=1000', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        setProducts(res.data.data)
      })
    }
  }, [products.length])
  return (
    <ShopContext.Provider value={{
      products, 
      favouriteProducts, 
      setFavouriteProducts
    }}>
      <Router>
        <Nav />
        <main>
          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </Router>
    </ShopContext.Provider>
  );
}

export default App;
