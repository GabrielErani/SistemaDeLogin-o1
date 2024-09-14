// components/Auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const [message, setMessage] = useState('');

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const API_URL = 'https://backend-sistema-de-login-gpt-o1-production.up.railway.app';
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, formData);
      setMessage('Registrado com sucesso!');
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Erro ao registrar');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Registrar</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Nome"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="E-mail"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Senha"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Registrar
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      
      <div className="mt-6 text-center">
        <p>Já tem uma conta?</p>
        <Link to="/login" className="text-blue-500 hover:underline">
          Faça login aqui
        </Link>
      </div>
    </div>
  );
}

export default Register;
