import React, { useState } from 'react';
import { login } from './AuthAPI';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const token = await login(email, password);
    localStorage.setItem('token', token);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Login</h3>
      <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn-primary mt-4" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
