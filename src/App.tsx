import Nav from './components/organisms/nav/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import { ShopContext } from './context/Context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FavouriteProducts from './pages/favouriteProducts/FavouriteProducts'

function App() {
  const [products, setProducts] = useState<[]>([]);
  const [favouriteProducts, setFavouriteProducts] = useState<[]>([]);
  const [cart, setCart] = useState<[]>([]);
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
      favouriteProducts, setFavouriteProducts,
      cart, setCart
    }}>
      <Router>
        <Nav />
        <main>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favourites' element={<FavouriteProducts />} />
          </Routes>
        </main>
      </Router>
    </ShopContext.Provider>
  );
}

export default App;
