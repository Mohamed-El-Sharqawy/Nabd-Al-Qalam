import { useSelector } from "react-redux";
import "./newsletter.css";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const { lang } = useSelector((state) => state.lang);
  const nabdAr = `دار نبض القلم هي مؤسسة ثقافية تعنى بشؤون
  تحقيق ونشر الكتب العربية في أعلى المستويات
  المستويات العلمية والمعرفية.`;

  const nabdEn = `Dar Nabd Al-Qalam is a cultural institution concerned with the
  investigation and publication of Arabic books at the highest
  scientific and knowledge levels.`;

  const delayLoading = (delayTime) => {
    setTimeout(() => {
      setIsLoading(false);
    }, delayTime);
  };

  const getSubscribed = ({ email }) => {
    return `
    <p>That Client Wants to Subscribe to Your Newsletter:</p>
    <div style="background-color: #101010; color: #fbfbfb; padding: 12px">
    <p style="margin: 12px 0;">Email: ${email}</p>
    </div>
    `;
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const subscribed = getSubscribed({
      email: form.current.email.value,
    });

    if (!form.current.email.value) {
      toast.error("Please Enter Your Email", {
        toastId: "newsletter_no_email",
      });
      delayLoading(1000);
    } else if (
      form.current.email.value &&
      !regex.test(form.current.email.value)
    ) {
      toast.error("Please Enter a Valid Email", {
        toastId: "newsletter_invalid_email",
      });
      delayLoading(1250);
    } else {
      const res = await fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
          to: "dev.elbehery@gmail.com",
          subject: "Subscription Request",
          message: subscribed,
        }),
      });
      const data = await res.json();

      if (data?.success) {
        toast.success("Thank You for Subscribing 🎉", {
          toastId: "subscripion_success",
        });
        setIsLoading(false);
        form.current.reset();
        window.scrollTo({
          top: 0,
        });
      } else {
        toast.success("Something Went Wrong Please Retry Again !", {
          toastId: "newsletter_fail_subscription",
        });
        setIsLoading(false);
      }
    }
  };

  return (
    <div
      className="newsletter"
      style={
        lang === "en"
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
    >
      <h1 dir={lang === "en" ? "ltr" : "rtl"}>
        {lang === "en" ? "Subscribe to Our Newsletter" : "اشترك ليصلك كل جديد"}
      </h1>
      <form
        ref={form}
        style={
          lang === "en"
            ? { justifyContent: "end" }
            : { justifyContent: "start" }
        }
        onSubmit={sendMail}
      >
        <input
          name="email"
          type="email"
          placeholder={
            lang === "en"
              ? "Enter Email Address..."
              : "ادخل البريد الألكتروني..."
          }
        />
        <button>
          {isLoading ? (
            <span className="loader"></span>
          ) : lang === "en" ? (
            "Subscribe"
          ) : (
            "اشترك"
          )}
        </button>
        <p
          style={
            lang === "en"
              ? { left: "10px", right: "auto" }
              : { right: "10px", left: "auto" }
          }
        >
          {lang === "en" ? nabdEn : nabdAr}
        </p>
      </form>
    </div>
  );
};

export default Newsletter;
