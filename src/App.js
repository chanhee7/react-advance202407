import React from 'react';
import Layout from './redux-cart/components/Layout/Layout';
import Cart from './redux-cart/components/Cart/Cart';
import Products from './redux-cart/components/Shop/Products';
import { useSelector } from 'react-redux';

const App = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  
  return (
    <>
      <Layout>
      <Cart />
      <Products />
      </Layout>
    </>
  );
};

export default App;