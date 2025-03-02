import Hero from "../../Components/Hero/Hero";
import AgeGroups from "../../Components/AgeGroups/AgeGroups";
import Design from "../../Components/Design/Design";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MostPopular from "../../Components/MostPopular/MostPopular";
const Home = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getPaymentStatus = async () => {
      const res = await fetch(
        `https://nabdalqalam-backend.onrender.com/get-payment/${searchParams.get("payment")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Paymennt-Api-Key": "18d545c4bb995080",
            "X-Paymennt-Api-Secret":
              "mer_18d09da3ed1fa21b933cb6fee103f21f92df1a1b24fef31ea408ddabcc7283dd",
          },
        }
      );

      const data = await res.json();

      if(data.result.checkoutDetails.status === "PAID" && data.result.status) {
        window.location.href = "https://nabdalqalam.com/checkout-success";
      } 
    };

    if (searchParams.get("payment")) {
      getPaymentStatus();
    }
  }, [searchParams]);

  return (
      <div className="images-container">
        <Hero />
        <MostPopular />
        <AgeGroups />
        {/* <SliderWardan /> */}
        <Design />
      </div>
  );
};
export default Home;
