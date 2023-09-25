import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const endpoint = "https://nabd-server.onrender.com/signup";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password === user.confirmPassword) {
      const res = await axios.post(endpoint, {
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("jwt", JSON.stringify(res?.data?.token));

      if (res?.data?.user) {
        navigate("/");
      }

      setUser({ email: "", password: "", confirmPassword: "" });
    } else {
      throw new Error("Passwords don't match");
    }
  };

  const handleChange = (e) => {
    setUser(() => ({ ...user, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/");
    }
  });

  return (
    <form method="POST" className="signup-form" onSubmit={handleSubmit}>
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
      <input
        minLength={8}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
        value={user.confirmPassword}
        required
      />
      <Link to="/login">Already Registered ? Go to Login Page</Link>
      <button>Sign Up</button>
    </form>
  );
};

export default Signup;
