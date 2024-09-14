// src/pages/Home.js
import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

function Home() {
  return (
    <>
    <Header />
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Bem-vindo à Página Inicial</h1>
      <p className="mt-4 text-lg">Este é o seu aplicativo React.</p>
    </div>
    <Footer />
    </>
  );
}

export default Home;
