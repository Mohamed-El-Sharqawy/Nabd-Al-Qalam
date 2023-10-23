import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [userData, setUser] = useState({
    email: "",
    password: "",
    isError: false,
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUser((prev) => ({ ...prev, isError: false }));
      const res = await axios.post(import.meta.env.VITE_LOGIN_ENDPOINT, {
        email: userData.email,
        password: userData.password,
      });

      localStorage.setItem("jwt", JSON.stringify(res?.data?.token));

      navigate("/");
    } catch (err) {
      setUser((prev) => ({ ...prev, isError: true }));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/");
    }
  }, []);

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
      <span className="error">
        {userData?.isError && "* Incorrect Email Address or Password."}
      </span>
      <Link to="/signup">Don't Have an Account ? Go to Signup Page</Link>
      <button>Login</button>
    </form>
  );
};

export default Login;
