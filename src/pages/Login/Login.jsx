import { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [userData, setUser] = useState({
    email: "",
    password: "",
  });
  const endpoint = "https://nabd-server.onrender.com/login";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(endpoint, {
      email: userData.email,
      password: userData.password,
    });

    localStorage.setItem("jwt", JSON.stringify(res?.data?.token));

    location.reload();
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/");
    }
  });

  const handleChange = (e) => {
    setUser(() => ({ ...userData, [e.target.name]: e.target.value }));
  };

  return (
    <form method="POST" className="login-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={userData.email}
        required
      />
      <input
        minLength={8}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={userData.password}
        required
      />
      <Link to="/signup">Don't Have an Account ? Go to Signup Page</Link>
      <button>Login</button>
    </form>
  );
};

export default Login;
