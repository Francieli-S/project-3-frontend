import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await fetch('http://localhost:5005/auth/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({email, password})
    })
    response.status === 200 && navigate('/profile')
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          required
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          required
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

