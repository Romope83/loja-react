import React from 'react';
import Header from '../components/Header/Header';
import ProductList from '../components/ProductList/ProductList';
import Footer from '../components/Footer/Footer';

const Products = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Nossos Produtos</h1>
        <ProductList />
      </main>
      <Footer />
    </>
  );
};

export default Products;