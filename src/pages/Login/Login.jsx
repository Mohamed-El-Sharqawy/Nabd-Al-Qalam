import { Link } from "react-router-dom";
import "./login.css";
import useFormHandling from "../../hooks/useFormHandling";

const Login = () => {
  const { isLoading, userData, lang, handleLogin, handleChange } =
    useFormHandling();

  return (
    <form method="POST" className="login-form" onSubmit={handleLogin}>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/best-childrens-kids-books-1599680383.jpg"
        alt="login_form_image"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={userData.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={userData.password}
      />
      <Link to="/signup">Don&apos;t Have an Account ? Go to Signup Page</Link>
      <button>
        {isLoading ? (
          <span className="loader"></span>
        ) : lang === "en" ? (
          "Login"
        ) : (
          "تسجيل الدخول"
        )}
      </button>
    </form>
  );
};

export default Login;
