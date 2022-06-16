import Nav from './components/organisms/nav/Nav';
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import { IDiscount, ShopContext } from './context/Context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FavouriteProducts from './pages/favouriteProducts/FavouriteProducts'
import Cart from './pages/cart/Cart';
import ProductPage from './pages/product/Product';
import Order from './pages/order/Order';
import Finish from './pages/order/Finish';
import Loader from './components/molecules/loader/Loader';

function App() {
  const [products, setProducts] = useState<[]>([]);
  const [favouriteProducts, setFavouriteProducts] = useState<[]>([]);
  const [cart, setCart] = useState<[]>([]);
  const [discount, setDiscount] = useState<IDiscount>({
    isActive: false,
    percentOff: 0,
    totalPrice: 0
  });
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

  if(!products.length) return <Loader message='Searching new products...' />
  
  return (
    <ShopContext.Provider value={{
      products, 
      favouriteProducts, setFavouriteProducts,
      cart, setCart,
      discount, setDiscount
    }}>
      <Router>
        <Nav />
        <main>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favourites' element={<FavouriteProducts />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/order' element={<Order />} />
              <Route path='/finish-order' element={<Finish />} />
          </Routes>
        </main>
      </Router>
    </ShopContext.Provider>
  );
}

export default App;
