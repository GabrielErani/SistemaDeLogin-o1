// components/Auth/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const API_URL = 'https://backend-sistema-de-login-gpt-o1-production.up.railway.app';
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, formData);
      console.log('Resposta da API:', res);
      localStorage.setItem('token', res.data.token);
      setMessage('Login bem-sucedido!');
      navigate('/dashboard');
    } catch (err) {
      console.error('Erro na requisição:', err);
      if (err.response && err.response.data && err.response.data.msg) {
        setMessage(err.response.data.msg);
      } else {
        setMessage('Erro ao logar');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={onSubmit}>
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
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Entrar
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      
      <div className="mt-6 text-center">
        <p>Não tem uma conta?</p>
        <Link to="/register" className="text-blue-500 hover:underline">
          Registre-se aqui
        </Link>
      </div>
    </div>
  );
}

export default Login;
