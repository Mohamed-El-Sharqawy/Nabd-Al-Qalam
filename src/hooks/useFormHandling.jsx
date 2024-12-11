import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import axios from "axios";

const useFormHandling = (form) => {
  const navigate = useNavigate();
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const { lang } = useSelector((state) => state.lang);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  //! Login Form
  const handleLogin = async (e) => {
    e.preventDefault();

    const cookies = new Cookies(null, { path: "/" });
    setIsLoading(true);

    if (!userData.email) {
      toast.error("Please Enter Your Email", { toastId: "login_email" });
      setIsLoading(false);
    } else if (userData.email && !emailRegex.test(userData.email)) {
      toast.error("Please Enter a Valid Email", {
        toastId: "login_invalid_email",
      });
      setIsLoading(false);
    } else if (userData.password.length < 8) {
      toast.error("Minimum Password Length is 8 Characters", {
        toastId: "login_minimum_length",
      });
      setIsLoading(false);
    } else {
      try {
        const res = await axios.post("http://localhost:5000/login", {
          email: userData.email,
          password: userData.password,
        });

        cookies.set("jwt", res?.data?.token);

        navigate("/");
      } catch (err) {
        toast.error("Wrong Password or Email", {
          toastId: "login_wrong_data",
        });
        setIsLoading(false);
      }
    }
  };

  //! Signup Form
  const handleSignup = async (e) => {
    e.preventDefault();

    const cookies = new Cookies(null, { path: "/" });
    setIsLoading(true);

    if (!user.email) {
      toast.error("Please Enter Your Email", {
        toastId: "signup_email",
      });
    } else if (user.email && !emailRegex.test(user.email)) {
      toast.error("Please Enter a Valid Email", {
        toastId: "signup_invalid_email",
      });
    } else if (user.password.length < 8) {
      toast.error("Minimum Password Length is 8 Characters", {
        toastId: "signup_password",
      });
    } else if (user.confirmPassword.length < 8) {
      toast.error("Minimum Confirm Password Length is 8 Characters", {
        toastId: "signup_confirm_password",
      });
    } else if (user.password === user.confirmPassword) {
      try {
        const res = await axios.post("http://localhost:5000/signup", {
          email: user.email,
          password: user.password,
        });
        setIsLoading(false);

        cookies.set("jwt", res?.data?.token);

        if (res?.data?.user) {
          navigate("/");
        }

        setUser({
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (err) {
        if (err.response.data.errors.email == "Email already exists") {
          toast.error("This Email Already Exists !", {
            toastId: "signup_not_unique_email",
          });
        } else if (
          err.response.data.errors.password ==
          "Minimum Password Length is 8 Characters"
        ) {
          toast.error("Minimum Password Length is 8 Characters !", {
            toastId: "signup_minimum_length",
          });
        } else if (
          err.response.data.errors.password == "Please Enter a Password"
        ) {
          toast.error("Please Enter a Password", {
            toastId: "signup_please_enter_password",
          });
        }
        setIsLoading(false);
      }
    } else {
      toast.error("Passwords Don't Match !", {
        toastId: "signup_passwords_dont_match",
      });
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setUser(() => ({ ...user, [e.target.name]: e.target.value }));
    setUserData(() => ({ ...userData, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    // Create the cookies instance
    const cookies = new Cookies(null, { path: "/" });
    const url = window.location.pathname;
    const isAtAuthPage = url.includes("login") || url.includes("signup");

    // Check if the user is authenticated
    const isAuthenticated = cookies.get("jwt") && isAtAuthPage;

    // Navigate if authenticated
    if (isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);

  //! Contact Form
  const getEmailMessage = ({ from_name, email, subject, message } = {}) => {
    return `
        <p>You have received a new message from your contact form website:</p>
        <div style="background-color: #fbfbfb; color: #222; padding: 12px">
            <p style="margin: 0;">Name: ${from_name}</p>
            <p style="margin: 12px 0;">Email: ${email}</p>
            <p style="margin: 0 0 12px;">Subject: ${subject}</p>
            <p style="margin: 0;">Message: ${message}</p>
        </div>
    `;
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!form?.current?.from_name.value) {
      toast.error("Please Enter Your Name", {
        toastId: "from_name",
      });
      setIsLoading(false);
    } else if (!form?.current?.email.value) {
      toast.error("Please Enter Your Email", {
        toastId: "contact_email",
      });
      setIsLoading(false);
    } else if (
      form?.current?.email.value &&
      !emailRegex.test(form?.current?.email.value)
    ) {
      toast.error("Please Enter a Valid Email", {
        toastId: "contact_email",
      });
      setIsLoading(false);
    } else if (!form?.current?.subject.value) {
      toast.error("Please Enter a Subject", {
        toastId: "contact_subject",
      });
      setIsLoading(false);
    } else if (!form?.current?.message.value) {
      toast.error("Please Enter a Message", {
        toastId: "contact_message",
      });
      setIsLoading(false);
    } else {
      const emailMessage = getEmailMessage({
        from_name: form?.current?.from_name.value,
        email: form?.current?.email.value,
        subject: form?.current?.subject.value,
        message: form?.current?.message.value,
      });

      const res = await fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
          to: "N.alqalam.p.d@gmail.com",
          subject: form?.current?.subject.value,
          message: emailMessage,
        }),
      });
      const data = await res.json();

      if (data?.success) {
        navigate("/");
        toast.success("Thank You for Contacting Us 🎉", {
          toastId: "contact_success_message",
        });
        setIsLoading(() => false);
        form?.current?.reset();
      } else {
        toast.success("Something Went Wrong Please Retry Again !", {
          toastId: "contact_fail_message",
        });
        setIsLoading(() => false);
      }
    }
  };

  return {
    isLoading,
    user,
    userData,
    lang,
    handleSignup,
    handleLogin,
    handleChange,
    sendMail,
  };
};

export default useFormHandling;
