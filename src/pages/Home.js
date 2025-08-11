import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Bem-vindo à Felipe Loja</h1>
        <p>Confira nossos produtos incríveis!</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;