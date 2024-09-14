// src/components/Layout/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MeuApp. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
