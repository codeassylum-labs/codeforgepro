import React, { useState } from 'react';
import { register } from './AuthAPI';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    await register(email, password);
    alert('Registration successful');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Register</h3>
      <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn-primary mt-4" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
