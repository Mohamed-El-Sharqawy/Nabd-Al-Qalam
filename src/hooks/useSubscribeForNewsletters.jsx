import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function useSubscribeForNewsletters() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const getSubscribed = ({ email }) => {
    return `
    <p>That Client Wants to Subscribe to Your Newsletter:</p>
    <div style="background-color: #555; color: #fbfbfb; padding: 12px">
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
    } else if (
      form.current.email.value &&
      !regex.test(form.current.email.value)
    ) {
      toast.error("Please Enter a Valid Email", {
        toastId: "newsletter_invalid_email",
      });
      setIsLoading(false);
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

  return { sendMail, isLoading, form };
}
