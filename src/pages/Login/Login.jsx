import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [user, setUser] = useState({
    email: "", password: "", confirmPassword: "",
  });

  const endpoint = "http://localhost:3001/login"

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    setUser(() => ({...user, [e.target.name]: e.target.value}))
  };

  return (
    <form method='POST' className='login-form' onSubmit={handleSubmit}>
      <input type="email" name='email' placeholder='Email' onChange={handleChange} value={user.email} required />
      <input minLength={8} type="password" name='password' placeholder='Password' onChange={handleChange} value={user.password} required />
      <Link to="/signup">Don't Have an Account ? Go to Signup Page</Link>
      <button>Sign Up</button>  
    </form>
  )
}

export default Login