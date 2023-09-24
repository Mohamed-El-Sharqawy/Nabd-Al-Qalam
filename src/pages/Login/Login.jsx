import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const endpoint = "http://localhost:3001/login";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(endpoint, {
      email: user.email,
      password: user.password,
    });

    if (res?.data?.user) {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setUser(() => ({ ...user, [e.target.name]: e.target.value }));
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={user.email}
        required
      />
      <input
        minLength={8}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={user.password}
        required
      />
      <Link to="/signup">Don't Have an Account ? Go to Signup Page</Link>
      <button>Login</button>
    </form>
  );
};

export default Login;
