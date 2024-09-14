// components/Auth/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const API_URL = 'https://backend-sistema-de-login-gpt-o1-production.up.railway.app'; // URL completa do back-end no Railway
    try {
      const res = await axios.post(`${API_URL}/api/auth/forgot-password`, { email });
      setMessage('E-mail para redefinição de senha enviado!');
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Erro ao enviar e-mail');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Esqueci Minha Senha</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-200"
        >
          Enviar E-mail
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
}

export default ForgotPassword;
